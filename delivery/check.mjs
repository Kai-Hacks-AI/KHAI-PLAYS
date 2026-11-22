import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const slug = '[a-z0-9]+(?:-[a-z0-9]+)*';
const solutionPath = new RegExp(`^(plays|playmaking)/(${slug})/.+`, 's');
const commit = /^[a-f0-9]{40}$/;
const foundingBase = 'ef6e9fe384565961315c57052707cad3cad6e6ee';
const deliveryPath = /^(?:\.github|delivery)\/.+/s;
const kaalObservationPath = /^kaal\/observations\/[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
}

function reject(reason, correction) {
  throw new Error(`${reason} ${correction}`);
}

function scopeBetween(base, candidate) {
  // With rename detection off, a move contributes both the old and the new path.
  const paths = git('diff', '--no-ext-diff', '--no-renames', '--name-only', '-z', base, candidate)
    .split('\0').filter(Boolean);
  if (!paths.length) {
    reject('The proposed merge changes no files.', 'Close the empty PR or add a change for its route.');
  }

  const units = new Set();
  const delivery = [];
  for (const path of paths) {
    const unit = solutionPath.exec(path);
    if (unit) {
      units.add(`${unit[1]}/${unit[2]}`);
    } else if (path === 'README.md' || path === 'LICENSE.md' || path === 'kaal/README.md' ||
      deliveryPath.test(path) || kaalObservationPath.test(path)) {
      delivery.push(path);
    } else {
      reject(`No delivery route owns ${JSON.stringify(path)}.`,
        'Put Solution files under plays/<play>/ or playmaking/<unit>/, using lowercase hyphenated slugs. Keep workspace-wide files out of the PR.');
    }
  }
  if (delivery.length && units.size) {
    reject(`Delivery path ${JSON.stringify(delivery[0])} is combined with Solution scope (${[...units].join(', ')}).`,
      'Split delivery into a rigging/* PR and submit each Solution folder through its repertoire.');
  }
  if (units.size > 1) {
    reject(`This change touches multiple Solution folders (${[...units].join(', ')}).`, 'Split it into one PR per Solution folder.');
  }
  const [folder] = units;
  if (!folder) return null;

  const [family, name] = folder.split('/');
  const isPlay = family === 'plays';
  const collector = `repertoire/${isPlay ? name : `playmaking.${name}`}`;
  return { folder, name, isPlay, collector };
}

function checkRoute(scope, { from, to, baseSha, sameRepository, number }) {
  if (!scope) {
    if (sameRepository && to === 'main') {
      if (from.startsWith('rigging/')) return 'Rigging';
      if (number === 1 && baseSha === foundingBase && from === 'setup/ground-zero') return 'Founding';
    }
    reject('Delivery changes require a same-repository rigging/* PR into main.', 'Move the delivery changes onto a rigging/* branch and target main.');
  }

  const { folder, name, isPlay, collector } = scope;
  if (to === 'main') {
    if (sameRepository && from === collector) return 'Opening';
    reject(`Opening for ${folder} requires the same-repository ${collector} branch.`, `Rehearse the change into ${collector}, then open its PR to main.`);
  }

  if (to !== collector) {
    reject(`A change for ${folder} cannot rehearse into ${JSON.stringify(to)}.`, `Retarget the PR to ${collector}.`);
  }
  if (from === 'main' || from.startsWith('repertoire/') || from.startsWith('rigging/')) {
    reject('Rehearsal requires a Workshop or hotfix/* branch.', `Move the Solution change onto a working branch and target ${collector}.`);
  }
  if (from.startsWith('hotfix/')) {
    if (!isPlay) {
      reject('Hotfix is reserved for existing Plays.', `Use a Workshop branch and target ${collector}.`);
    }
    const directory = git('ls-tree', '-d', '--name-only', '-z', baseSha, '--', folder);
    if (!directory) {
      reject(`Hotfix requires ${name} to exist in ${collector}.`, 'Use a Workshop branch for a new Play.');
    }
    return 'Hotfix Rehearsal';
  }
  return 'Rehearsal';
}

function check(event, merge) {
  const { base, head } = event.pull_request;
  if (![base.sha, head.sha, merge].every(sha => typeof sha === 'string' && commit.test(sha))) {
    reject('The PR or test merge commit could not be identified.', 'Rerun the pull request check.');
  }

  const parents = git('show', '-s', '--format=%P', merge).trim();
  if (parents !== `${base.sha} ${head.sha}`) {
    reject('The test merge commit does not match the PR base and head.', 'Update the branch or rerun CI on the current PR.');
  }

  return checkRoute(scopeBetween(base.sha, merge), {
    from: head.ref, to: base.ref, baseSha: base.sha,
    sameRepository: Number.isInteger(base.repo?.id) && head.repo?.id === base.repo.id,
    number: event.number,
  });
}

function advise(remote, ref, head) {
  if (!commit.test(head ?? '') || !ref?.startsWith('refs/heads/') || !remote) {
    reject('The pushed branch could not be identified.', 'Supply the remote name, branch ref, and commit SHA.');
  }
  const trackingMain = `refs/remotes/${remote}/main`;
  const base = git('merge-base', trackingMain, head).trim();
  const scope = scopeBetween(base, head);
  const from = ref.slice('refs/heads/'.length);
  const to = !scope || from.startsWith('repertoire/') ? 'main' : scope.collector;
  const route = checkRoute(scope, { from, to, baseSha: base, sameRepository: true });
  console.log(`Delivery guidance: ${scope?.folder ?? 'Delivery infrastructure'} → ${to} (${route}).`);
}

try {
  if (process.argv[2] === '--advise') {
    advise(...process.argv.slice(3));
  } else {
    const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
    const route = check(event, process.env.GITHUB_SHA);
    console.log(`Delivery route passed: ${route}.`);
  }
} catch (error) {
  if (process.argv[2] === '--advise') {
    console.error(`Delivery guidance: ${error.message}`);
    if (error.code || error.status) console.error('Refresh the remote-tracking main branch and try again.');
  } else {
    console.error(`Delivery route refused: ${error.message}`);
    if (error.code || error.status) console.error('Restore the PR event or Git history and rerun the check.');
  }
  process.exitCode = 1;
}
