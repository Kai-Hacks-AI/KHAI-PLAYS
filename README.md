# KHAI-PLAYS

Kai Hacks AI - Performing Lets Agents Yield Stories

## Delivery

| Move or route | PR or source | Ownership |
| --- | --- | --- |
| Rehearsal | Development branch → `repertoire/<play>` | One Play, matching the target |
| Opening | This repository's `repertoire/<play>` → `main` | One Play, matching the source |
| Touring | Selected packages from `main` → npmjs | Publishing is outside Ground Zero |
| Setup | This repository's `setup/*` → `main` | Delivery only |
| Hotfix | `hotfix/*` → matching repertoire → Opening | One Play already present on the rehearsal target. Expedite review and keep both gates. |

Choose any working branch name outside the reserved refs `main`, `repertoire/*`, `setup/*` and `hotfix/*`. Lowercase Play slugs use letters and digits separated by single hyphens. Each Play owns its `plays/<play>/` tree. Every tracked path outside `plays/` belongs to delivery infrastructure. Shared Play wiring has no route yet. Use Setup for repository-level delivery wiring. Establish a separate shared ownership policy when there is an actual shared Play dependency to govern.

## Controls

- **Directive.** Use the routes and ownership above. Owner review governs changes to the checker and workflow.
- **Detective.** Delivery route checks the file delta from the PR's base to GitHub's test merge commit. It validates the merge's parents and reads the checker from the accepted target. The initial Setup PR exercises its proposed checker because the initial commit has none. Tests cover allowed routes and refusals using temporary Git trees.
- **Preventive.** GitHub repository rules must require the PR and the Delivery route check on `main` and `repertoire/*`. A CI result alone reports a verdict.
- **Corrective.** If an out-of-policy change reaches `main`, revert it through the normal route for each affected scope. If a repertoire is contaminated, retain a recovery ref and re-establish the repertoire from `main`. Rehearse only the intended changes again.

Run the PR checks locally with `node --test delivery/check.test.mjs`.

The check covers changes to Git paths and the PR route. Cross-Play runtime dependencies and package contents need their own evidence when packages exist.

## Owner activation after bootstrap

1. Protect `main` and `repertoire/*` with required PRs and a required **Delivery route** status check from GitHub Actions. Require branches to be up to date each time, code owner review, and fresh approval when new changes are pushed. Block force pushes and keep the merge ruleset bypass list empty.
2. Use a separate lifecycle ruleset for creation and deletion of `repertoire/*` with an Owner exception. Establish each repertoire ref at the current `main` tip. Keep the exception out of the merge ruleset. If `main` advances before Opening, retain the pending changes on a recovery ref, re-establish the repertoire at the new `main` tip, and rehearse the pending changes of that Play again. Retire an opened repertoire before the next cycle.
3. After activation, exercise a valid PR and a deliberately invalid PR against protected branches. Confirm that GitHub blocks the invalid merge. Local test results and the bootstrap CI run are separate evidence from this enforcement check.
