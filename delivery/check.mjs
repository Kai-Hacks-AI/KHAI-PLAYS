import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const slug = '[a-z0-9]+(?:-[a-z0-9]+)*';
const playPath = new RegExp(`^plays/(${slug})/.+`, 's');
const commit = /^[a-f0-9]{40}$/;
const deliveryPath = /^(?:\.github|delivery)\/.+/s;
const kaalObservationPath = /^kaal\/observations\/[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
}

function reject(reason, correction) {
  throw new Error(`${reason} ${correction}`);
}

function check(event, merge) {
  const { base, head } = event.pull_request;
  const sameRepository = head.repo?.id === base.repo.id;
  if (![base.sha, head.sha, merge].every(sha => typeof sha === 'string' && commit.test(sha))) {
    reject('The PR or test merge commit could not be identified.', 'Rerun the pull request check.');
  }

  const parents = git('show', '-s', '--format=%P', merge).trim();
  if (parents !== `${base.sha} ${head.sha}`) {
    reject('The test merge commit does not match the PR base and head.', 'Update the branch or rerun CI on the current PR.');
  }

  // With rename detection off, a move contributes both the old and the new path.
  const paths = git('diff', '--no-ext-diff', '--no-renames', '--name-only', '-z', base.sha, merge)
    .split('\0').filter(Boolean);
  if (!paths.length) {
    reject('The proposed merge changes no files.', 'Close the empty PR or add a change for its route.');
  }

  const plays = new Set();
  const delivery = [];
  for (const path of paths) {
    if (path === 'plays' || path.startsWith('plays/')) {
      const match = playPath.exec(path);
      if (!match) {
        reject(`Unowned Play path ${JSON.stringify(path)}.`, 'Use plays/<play>/<file> with a lowercase Play slug.');
      }
      plays.add(match[1]);
    } else if (path === 'README.md' || path === 'kaal/README.md' ||
      deliveryPath.test(path) || kaalObservationPath.test(path)) {
      delivery.push(path);
    } else {
      reject(`No delivery route owns ${JSON.stringify(path)}.`,
        'Keep it out of this PR until an ownership and promotion route is defined for the path.');
    }
  }
  if (delivery.length && plays.size) {
    reject(`Delivery path ${JSON.stringify(delivery[0])} is combined with Play scope (${[...plays].join(', ')}).`,
      'Split delivery into a setup/* PR and submit each Play through its repertoire.');
  }
  if (plays.size > 1) {
    reject(`This PR changes multiple Plays (${[...plays].join(', ')}).`, 'Split it into one PR per Play.');
  }

  const [play] = plays;
  const from = head.ref;
  const to = base.ref;
  if (!play) {
    if (sameRepository && from.startsWith('setup/') && to === 'main') return 'Setup';
    reject('Delivery changes require a same-repository setup/* PR into main.', 'Move the delivery changes onto a setup/* branch and target main.');
  }

  const collector = `repertoire/${play}`;
  if (to === 'main') {
    if (sameRepository && from === collector) return 'Opening';
    reject(`Opening for ${play} requires the same-repository ${collector} branch.`, `Rehearse the change into ${collector}, then open its PR to main.`);
  }

  if (to !== collector) {
    reject(`A change for ${play} cannot rehearse into ${JSON.stringify(to)}.`, `Retarget the PR to ${collector}.`);
  }
  if (from === 'main' || from.startsWith('repertoire/') || from.startsWith('setup/')) {
    reject('Rehearsal requires a Workshop or hotfix/* branch.', `Move the Play change onto a working branch and target ${collector}.`);
  }
  if (from.startsWith('hotfix/')) {
    const directory = git('ls-tree', '-d', '--name-only', '-z', base.sha, '--', `plays/${play}`);
    if (!directory) {
      reject(`Hotfix requires ${play} to exist in ${collector}.`, 'Use a Workshop branch for a new Play.');
    }
    return 'Hotfix Rehearsal';
  }
  return 'Rehearsal';
}

try {
  const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
  const route = check(event, process.env.GITHUB_SHA);
  console.log(`Delivery route passed: ${route}.`);
} catch (error) {
  console.error(`Delivery route refused: ${error.message}`);
  if (error.code || error.status) {
    console.error('Restore the PR event or Git history and rerun the check.');
  }
  process.exitCode = 1;
}
