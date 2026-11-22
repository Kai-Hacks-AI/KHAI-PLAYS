# Delivery

This directory governs how changes reach `main`. It documents the routes and houses the Delivery route checker and its tests. GitHub Actions runs the checker and GitHub rulesets require its verdict and an approval. Touring is the intended route for publishing selected packages after Opening.

The Solution lives in `plays/` and `playmaking/`. For example, Dramaturgy defines what a valid Play looks like. Delivery determines when a change to that contract can merge. [KAAL observations](../kaal/README.md) record what we learn from implementing these mechanics.

## Routes

| Move or route | PR or source | Ownership |
| --- | --- | --- |
| Workshop | Freely named working branch | One Solution folder |
| Rehearsal | Workshop branch → the folder's repertoire branch | One Solution folder, matching the target |
| Opening | This repository's repertoire branch → `main` | One Solution folder, matching the source |
| Touring | Selected packages from `main` → npmjs | Publishing follows Founding |
| Rigging | This repository's `rigging/*` → `main` | Delivery only |
| Hotfix | `hotfix/*` → matching repertoire → Opening | One Play already present on the rehearsal target. Expedite review and keep both gates. |

Choose any Workshop branch name outside the reserved refs `main`, `repertoire/*`, `rigging/*` and `hotfix/*`. The changed folder determines the route. Slugs use lowercase letters and digits separated by single hyphens.

| Solution folder | Repertoire branch |
| --- | --- |
| `plays/<play>/` | `repertoire/<play>` |
| `playmaking/<unit>/` | `repertoire/playmaking.<unit>` |

A publishable unit keeps its `package.json` and `package-lock.json` inside its folder. A change to a second folder moves through a separate PR in dependency order. Rigging owns `.github/`, `delivery/`, the root `README.md` and `LICENSE.md`, and the [KAAL observation records](../kaal/README.md).

Create the repertoire branch from the current `main` tip before the first Rehearsal. This is a working convention. Opening checks the source branch and proposed change. It does not verify the branch's starting point or require evidence of a prior Rehearsal.

GitHub is configured to delete merged PR head branches. The Workshop head should be deleted after Rehearsal and the repertoire head after Opening. Start the next repertoire from the current `main` tip.

## Workshop guidance

The [pre-push hook](hooks/pre-push) uses the committed changes and the remote-tracking `main` branch to suggest a PR target or explain what to split. To enable it, run `git config --local core.hooksPath delivery/hooks` in this checkout. If you already use a local hook manager, call `delivery/hooks/pre-push` from its pre-push hook instead. GitHub Actions checks the proposed merge against its actual target, and GitHub rulesets enforce the verdict.

## Controls

Read the [control declarations](controls/) and the [intent they serve](controls/intent.md). To list or validate them with KAAL Controls in external mode, use a separate KAAL checkout at [revision `0f92f1a`](https://github.com/Kai-Hacks-AI/KAAL/tree/0f92f1a4fb977fc13794154ddbc5d37fb26bf080). From this repository root, run:

```sh
node "$KAAL_CHECKOUT/packages/kaal-controls/skills/kaal-controls/scripts/find-controls.mjs" delivery
node "$KAAL_CHECKOUT/packages/kaal-controls/skills/kaal-controls/scripts/check-controls.mjs" delivery
```

Set `KAAL_CHECKOUT` to the path of that checkout. Discovery reads the declarations and their case references. Live GitHub results provide evidence for claims about enforcement.

Run the PR checks locally with `node --test delivery/check.test.mjs`.

The check covers changes to Git paths and the PR route. Cross-Play runtime dependencies and package contents need their own evidence when packages exist.

## Owner activation

1. Use the `opening` ruleset for `main` and the `rehearsal` ruleset for `repertoire/*`. Require PRs and the **Delivery route** status check from GitHub Actions. Require branches to be up to date each time and fresh approval when new changes are pushed. Block force pushes and keep the merge ruleset bypass lists empty. The Owner explicitly reviews Founding. Require code-owner review once `CODEOWNERS` is on the target branch.
2. Enable automatic head-branch deletion. Keep repertoire creation and deletion open. If `main` advances before Opening, retain the pending changes on a recovery ref, re-establish the repertoire at the new `main` tip, and rehearse the pending changes of that folder again.
3. Confirm that GitHub blocks a deliberately invalid PR. Verify head-branch deletion after the first successful Rehearsal and Opening. Local test results and the Founding CI run are separate evidence from these GitHub checks.
