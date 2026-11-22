---
format: 4L
---
Account of: I documented the repository licence policy and added the exact root licence path to Rigging in [PR #7](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/7).

## Liked
- subject: One Solution licensing policy
  keeps: The same terms, third-party attribution rules, and npm packaging requirements apply to Plays and playmaking packages. Authors can follow one policy across both directories.

## Learned
- subject: A package manifest can point to a single licence notice
  source: [npm's package.json documentation](https://docs.npmjs.com/cli/configuring-npm/package-json/#license) describes a single-file licence pointer and requires that file to be included at the package root.

## Lacked
- subject: Ownership of the root licence path
  decision-point: I was deciding how to land the full repository licence notice.
  cost: The accepted checker did not allow the new root path, so the scope change had to land in one Rigging PR before the notice could follow in another.
  findable: no
  address: script

## Longed For
None raised.

Decisions: none made, the owner decides.
