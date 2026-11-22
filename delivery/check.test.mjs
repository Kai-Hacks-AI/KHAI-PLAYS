// Case delivery/T1 tests: delivery/CTL2
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const checker = fileURLToPath(new URL('./check.mjs', import.meta.url));
const alpha = 'plays/alpha/fixture.txt';
const beta = 'plays/beta/fixture.txt';
const dramaturgy = 'playmaking/dramaturgy/package.json';
const dramaturgyRef = 'repertoire/playmaking.dramaturgy';

function run(t, { from = 'work/scene', to = 'repertoire/alpha', changes = [alpha],
  existing = [], moved, fork = false, staleEvent = false, missingMerge = false,
  number = 2, advice = false }) {
  const cwd = mkdtempSync(join(tmpdir(), 'plays-delivery-'));
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
  const put = (path, text) => {
    const file = join(cwd, path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, text);
  };

  git('init', '-q', '--initial-branch=fixture');
  git('config', 'user.name', 'Delivery fixture');
  git('config', 'user.email', 'delivery@example.invalid');
  for (const path of existing) put(path, 'accepted fixture');
  git('add', '.');
  git('commit', '-qm', 'base', '--allow-empty');
  const base = git('rev-parse', 'HEAD');

  for (const path of changes) put(path, 'proposed fixture');
  if (moved) {
    const [oldPath, newPath] = moved.map(path => join(cwd, path));
    mkdirSync(dirname(newPath), { recursive: true });
    renameSync(oldPath, newPath);
  }
  git('add', '-A');
  git('commit', '-qm', 'head', '--allow-empty');
  const head = git('rev-parse', 'HEAD');
  if (advice) {
    git('update-ref', 'refs/remotes/origin/main', base);
    return spawnSync(process.execPath, [checker, '--advise', 'origin', `refs/heads/${from}`, head], {
      cwd,
      encoding: 'utf8',
    });
  }
  const merge = git('commit-tree', 'HEAD^{tree}', '-p', base, '-p', head, '-m', 'test merge');
  const event = {
    number,
    pull_request: {
      base: { ref: to, sha: base, repo: { id: 1 } },
      head: { ref: from, sha: staleEvent ? base : head, repo: { id: fork ? 2 : 1 } },
    },
  };
  const eventPath = join(cwd, 'event.json');
  writeFileSync(eventPath, JSON.stringify(event));
  return spawnSync(process.execPath, [checker], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, GITHUB_EVENT_PATH: eventPath, GITHUB_SHA: missingMerge ? '' : merge },
  });
}

const allowed = [
  ['Workshop to matching repertoire', { from: 'a-free-name' }, 'Rehearsal'],
  ['repertoire to main', { from: 'repertoire/alpha', to: 'main' }, 'Opening'],
  ['Dramaturgy including its manifest and lockfile at Rehearsal', { to: dramaturgyRef, changes: [dramaturgy, 'playmaking/dramaturgy/package-lock.json'] }, 'Rehearsal'],
  ['Dramaturgy at Opening', { from: dramaturgyRef, to: 'main', changes: [dramaturgy] }, 'Opening'],
  ['Rigging to main', { from: 'rigging/delivery', to: 'main', changes: ['delivery/check.mjs', '.github/workflows/delivery.yml', 'README.md'] }, 'Rigging'],
  ['root licence through Rigging', { from: 'rigging/licence', to: 'main', changes: ['LICENSE.md'] }, 'Rigging'],
  ['KAAL observations through Rigging', { from: 'rigging/kaal-observations', to: 'main', changes: ['kaal/README.md', 'kaal/observations/founding.md'] }, 'Rigging'],
  ['hotfix for an existing Play', { from: 'hotfix/repair', existing: [alpha] }, 'Hotfix Rehearsal'],
];

for (const [name, fixture, route] of allowed) {
  test(`allows ${name}`, t => {
    const result = run(t, fixture);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout.trim(), `Delivery route passed: ${route}.`);
  });
}

const refused = [
  ['delivery and Play at Rehearsal', { changes: ['delivery/check.mjs', alpha] }, /combined with Solution scope.*Split delivery/],
  ['delivery and Play at Opening', { from: 'repertoire/alpha', to: 'main', changes: ['README.md', alpha] }, /combined with Solution scope.*Split delivery/],
  ['KAAL observation bundled with a Play', { changes: ['kaal/observations/founding.md', alpha] }, /combined with Solution scope.*Split delivery/],
  ['unassigned KAAL path through Rigging', { from: 'rigging/kaal-observations', to: 'main', changes: ['kaal/package.json'] }, /No delivery route owns.*kaal\/package\.json/],
  ['two Plays at Rehearsal', { changes: [alpha, beta] }, /multiple Solution folders.*Split it/],
  ['two Plays at Opening', { from: 'repertoire/alpha', to: 'main', changes: [alpha, beta] }, /multiple Solution folders.*Split it/],
  ['cross-Play move', { existing: [alpha], changes: [], moved: [alpha, beta] }, /multiple Solution folders.*Split it/],
  ['delivery-to-Play move', { existing: ['delivery/fixture.txt'], changes: [], moved: ['delivery/fixture.txt', alpha] }, /combined with Solution scope.*Split delivery/],
  ['Play and playmaking with the same slug', { changes: ['plays/dramaturgy/play.md', dramaturgy] }, /multiple Solution folders.*plays\/dramaturgy.*playmaking\/dramaturgy|multiple Solution folders.*playmaking\/dramaturgy.*plays\/dramaturgy/],
  ['two playmaking units at Opening', { from: dramaturgyRef, to: 'main', changes: [dramaturgy, 'playmaking/scoring/package.json'] }, /multiple Solution folders.*Split it/],
  ['a move between Solution families', { existing: [alpha], changes: [], moved: [alpha, dramaturgy] }, /multiple Solution folders.*Split it/],
  ['delivery bundled with Dramaturgy', { to: dramaturgyRef, changes: [dramaturgy, 'delivery/check.mjs'] }, /combined with Solution scope.*Split delivery/],
  ['a root lockfile bundled with Dramaturgy', { to: dramaturgyRef, changes: [dramaturgy, 'package-lock.json'] }, /No delivery route owns.*package-lock\.json/],
  ['the root licence bundled with Dramaturgy', { to: dramaturgyRef, changes: [dramaturgy, 'LICENSE.md'] }, /combined with Solution scope.*Split delivery/],
  ['Dramaturgy into the Play repertoire with the same slug', { to: 'repertoire/dramaturgy', changes: [dramaturgy] }, /Retarget the PR to repertoire\/playmaking\.dramaturgy/],
  ['Dramaturgy from the Play repertoire with the same slug', { from: 'repertoire/dramaturgy', to: 'main', changes: [dramaturgy] }, /requires the same-repository repertoire\/playmaking\.dramaturgy/],
  ['Hotfix carrying a playmaking unit', { from: 'hotfix/repair', to: dramaturgyRef, changes: [dramaturgy], existing: [dramaturgy] }, /Hotfix is reserved for existing Plays/],
  ['shared Solution through Rigging', { from: 'rigging/workspace', to: 'main', changes: ['packages/shared/package.json'] }, /No delivery route owns.*packages\/shared\/package\.json/],
  ['root npm workspace through Rigging', { from: 'rigging/workspace', to: 'main', changes: ['package.json'] }, /No delivery route owns.*package\.json/],
  ['shared Solution bundled with a Play', { changes: [alpha, 'foundations/shared/index.mjs'] }, /No delivery route owns.*foundations\/shared/],
  ['Play moved into a shared Solution', { existing: [alpha], changes: [], moved: [alpha, 'packages/shared/fixture.txt'] }, /No delivery route owns.*packages\/shared/],
  ['unowned Play path', { changes: ['plays/shared.txt'] }, /No delivery route owns.*plays\/shared\.txt/],
  ['unowned playmaking path', { changes: ['playmaking/shared.txt'] }, /No delivery route owns.*playmaking\/shared\.txt/],
  ['wrong rehearsal target', { to: 'repertoire/beta' }, /Retarget the PR to repertoire\/alpha/],
  ['repertoire to repertoire', { from: 'repertoire/beta' }, /requires a Workshop or hotfix.*working branch/],
  ['Workshop directly to main', { to: 'main' }, /Opening.*requires.*Rehearse/],
  ['wrong Opening source', { from: 'repertoire/beta', to: 'main' }, /Opening.*requires.*Rehearse/],
  ['fork masquerading as repertoire', { from: 'repertoire/alpha', to: 'main', fork: true }, /requires the same-repository.*Rehearse/],
  ['Rigging targeting repertoire', { from: 'rigging/guard', changes: ['delivery/check.mjs'] }, /rigging\/\* PR into main.*target main/],
  ['Rigging carrying a Play to main', { from: 'rigging/scene', to: 'main' }, /Opening.*requires.*Rehearse/],
  ['Rigging carrying a Play to repertoire', { from: 'rigging/scene' }, /requires a Workshop or hotfix/],
  ['Rigging from a fork', { from: 'rigging/guard', to: 'main', fork: true, changes: ['README.md'] }, /same-repository rigging.*target main/],
  ['retired setup prefix carrying delivery', { from: 'setup/guard', to: 'main', changes: ['README.md'] }, /same-repository rigging.*target main/],
  ['Founding branch after bootstrap', { from: 'setup/ground-zero', to: 'main', changes: ['README.md'], number: 1 }, /same-repository rigging.*target main/],
  ['hotfix directly to main', { from: 'hotfix/repair', to: 'main', existing: [alpha] }, /Opening.*requires.*Rehearse/],
  ['hotfix for a new Play', { from: 'hotfix/repair' }, /Hotfix requires.*Use a Workshop branch/],
  ['hotfix carrying delivery', { from: 'hotfix/repair', changes: ['README.md'] }, /rigging\/\* PR into main.*target main/],
  ['empty merge', { changes: [] }, /changes no files.*Close the empty PR/],
  ['stale event', { staleEvent: true }, /does not match.*rerun CI/],
  ['missing merge evidence', { missingMerge: true }, /test merge commit could not be identified/],
];

for (const [name, fixture, finding] of refused) {
  test(`refuses ${name} with a correction`, t => {
    const result = run(t, fixture);
    assert.equal(result.status, 1, result.stdout);
    assert.match(result.stderr, finding);
  });
}

test('guides Dramaturgy to its repertoire from the pushed commit', t => {
  const result = run(t, { changes: [dramaturgy], advice: true });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /playmaking\/dramaturgy → repertoire\/playmaking\.dramaturgy \(Rehearsal\)/);
});

test('guides the agent to split a mixed change', t => {
  const result = run(t, { changes: [alpha, dramaturgy], advice: true });
  assert.equal(result.status, 1, result.stdout);
  assert.match(result.stderr, /Delivery guidance:.*multiple Solution folders.*Split it/);
});
