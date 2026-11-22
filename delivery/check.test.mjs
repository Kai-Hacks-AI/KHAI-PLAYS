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

function run(t, { from = 'work/scene', to = 'repertoire/alpha', changes = [alpha],
  existing = [], moved, fork = false, staleEvent = false }) {
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
  const merge = git('commit-tree', 'HEAD^{tree}', '-p', base, '-p', head, '-m', 'test merge');
  const event = {
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
    env: { ...process.env, GITHUB_EVENT_PATH: eventPath, GITHUB_SHA: merge },
  });
}

const allowed = [
  ['Workshop to matching repertoire', { from: 'a-free-name' }, 'Rehearsal'],
  ['repertoire to main', { from: 'repertoire/alpha', to: 'main' }, 'Opening'],
  ['delivery setup to main', { from: 'setup/founding', to: 'main', changes: ['delivery/check.mjs', '.github/workflows/delivery.yml', 'README.md'] }, 'Setup'],
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
  ['delivery and Play at Rehearsal', { changes: ['delivery/check.mjs', alpha] }, /combined with Play.*Split delivery/],
  ['delivery and Play at Opening', { from: 'repertoire/alpha', to: 'main', changes: ['README.md', alpha] }, /combined with Play.*Split delivery/],
  ['two Plays at Rehearsal', { changes: [alpha, beta] }, /multiple Plays.*Split it/],
  ['two Plays at Opening', { from: 'repertoire/alpha', to: 'main', changes: [alpha, beta] }, /multiple Plays.*Split it/],
  ['cross-Play move', { existing: [alpha], changes: [], moved: [alpha, beta] }, /multiple Plays.*Split it/],
  ['delivery-to-Play move', { existing: ['delivery/fixture.txt'], changes: [], moved: ['delivery/fixture.txt', alpha] }, /combined with Play.*Split delivery/],
  ['shared Solution through Setup', { from: 'setup/workspace', to: 'main', changes: ['packages/shared/package.json'] }, /No delivery route owns.*packages\/shared\/package\.json/],
  ['root npm workspace through Setup', { from: 'setup/workspace', to: 'main', changes: ['package.json'] }, /No delivery route owns.*package\.json/],
  ['shared Solution bundled with a Play', { changes: [alpha, 'foundations/shared/index.mjs'] }, /No delivery route owns.*foundations\/shared/],
  ['Play moved into a shared Solution', { existing: [alpha], changes: [], moved: [alpha, 'packages/shared/fixture.txt'] }, /No delivery route owns.*packages\/shared/],
  ['unowned Play path', { changes: ['plays/shared.txt'] }, /Unowned Play path.*Use plays/],
  ['wrong rehearsal target', { to: 'repertoire/beta' }, /Retarget the PR to repertoire\/alpha/],
  ['repertoire to repertoire', { from: 'repertoire/beta' }, /requires a Workshop or hotfix.*working branch/],
  ['Workshop directly to main', { to: 'main' }, /Opening.*requires.*Rehearse/],
  ['wrong Opening source', { from: 'repertoire/beta', to: 'main' }, /Opening.*requires.*Rehearse/],
  ['fork masquerading as repertoire', { from: 'repertoire/alpha', to: 'main', fork: true }, /requires the same-repository.*Rehearse/],
  ['setup targeting repertoire', { from: 'setup/guard', changes: ['delivery/check.mjs'] }, /setup\/\* PR into main.*target main/],
  ['setup carrying a Play', { from: 'setup/scene', to: 'main' }, /Opening.*requires.*Rehearse/],
  ['fork setup', { from: 'setup/guard', to: 'main', fork: true, changes: ['README.md'] }, /same-repository setup.*target main/],
  ['hotfix directly to main', { from: 'hotfix/repair', to: 'main', existing: [alpha] }, /Opening.*requires.*Rehearse/],
  ['hotfix for a new Play', { from: 'hotfix/repair' }, /Hotfix requires.*Use a Workshop branch/],
  ['hotfix carrying delivery', { from: 'hotfix/repair', changes: ['README.md'] }, /setup\/\* PR into main.*target main/],
  ['empty merge', { changes: [] }, /changes no files.*Close the empty PR/],
  ['stale event', { staleEvent: true }, /does not match.*rerun CI/],
];

for (const [name, fixture, finding] of refused) {
  test(`refuses ${name} with a correction`, t => {
    const result = run(t, fixture);
    assert.equal(result.status, 1, result.stdout);
    assert.match(result.stderr, finding);
  });
}
