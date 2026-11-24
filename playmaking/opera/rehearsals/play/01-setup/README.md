# Rehearsal Setup · ENACTS Play (*Low Water at Lock Four*)

This rehearsal tests the migrated [Play · ENACTS](../../../skills/khai-playwright/references/play.md) reference and the reference-selection, object-linking, and whole-Play / focused-revision delivery instructions in [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) on [KHAI PLAYS PR #22](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/22) (`opera-play-enacts` → `repertoire/playmaking.opera`, commit `ea10c0c2bf1ca3f7865841ab1f88059d91f9faa6`).

## 1. Create — Whole Play + Focused Revision (`02-company/`)

1. **Pass 1 — Whole-Play Brief (`initial/`):** Give a fresh clean-room [Playwright](../../../skills/khai-playwright/SKILL.md) a compact plain-language brief for a new two-Plot Play without naming template acronyms or prescribing a file list:
   > *"Write a short two-part KHAI Play titled Low Water at Lock Four, set at Lock Four on an autumn canal during a drought restriction. Two people work the evening lockage: Lena, the lockkeeper on duty who must keep the upper pound at or above the red municipal intake mark until midnight, and Bram, a barge skipper hauling perishable orchard crates to the morning market on the last scheduled passage before Lock Four closes for the night. Drawing a full chamber for Bram's heavy barge will pull the upper pound right down to—or just below—the intake mark; refusing passage leaves Bram's cargo stranded overnight above the lock. Part 1 takes place on the lock wall at dusk while the upper gates are still shut and the water sits barely above the red intake mark, ending as soon as Lena and Bram commit to locking the barge through, holding the barge above the lock overnight, or trying a shallow/partial draw. Part 2 takes place inside the lock house twenty minutes later when the night water-bailiff calls on the wall phone for the dusk gauge reading and both Lena and Bram face signing the lock ledger on whatever Part 1 left in the chamber and on the gauge. Keep the register taut, spare working-waterway realism across both parts, keep each part brisk (around 4–5 cast turns per part), and leave Lena's and Bram's choices genuinely open in both parts."*
   - Check whether the Playwright delivers an `ENACTS` entry point with frontmatter (`title` and one-sentence English `description`), a separate `Promptbook`, two `Plot` files, and the linked Company files the brief calls for ([02-company/initial/](../02-company/initial/)).

2. **Pass 2 — Focused Revision Brief (`revised/`):** Copy `initial/` into a fresh workspace and give a second fresh clean-room [Playwright](../../../skills/khai-playwright/SKILL.md) one focused revision without prescribing which files to create, edit, or leave untouched:
   > *"Revise Low Water at Lock Four for one focused change: add a wire-sealed auxiliary mill-race bypass key hanging on a peg inside Lock Four House, which can feed enough reserve water from the old mill race into the upper pound to cover one lockage without dropping below the red municipal intake mark—at the cost of breaking its numbered lead-wire seal, which must be accounted for on the dusk telephone check and in the Lock Four Ledger before morning inspection. Keep the Plot order, Pitch, and cast unchanged."*
   - Check which files the second Playwright creates, revises, and reuses untouched, and which links change ([02-company/README.md](../02-company/README.md), [02-company/revised/](../02-company/revised/)).

## 2. Rehearse (`04-runs/`)

Use the [Director skill](../../../skills/khai-director/SKILL.md) to stage both Plots end-to-end (**Part 1 → 20-minute `Triggers` handoff → Part 2**) twice on `initial/` and twice on `revised/` (`2 × 2 = 4` isolated runs), holding Plot order, cast isolation (`Lena` vs. `Bram`), Pitch ([Working-Waterway Realism](../02-company/initial/pitch-working-waterway-realism.md)), and the Human staging brief fixed across all four runs:

| Version | Runs | Active Play Directory |
| --- | --- | --- |
| **Initial Play** (no auxiliary bypass key) | [01-initial-a.md](../04-runs/01-initial-a.md), [02-initial-b.md](../04-runs/02-initial-b.md) | [02-company/initial/](../02-company/initial/) (`17` files) |
| **Focused Revision** (`piece-mill-race-key.md` + `process-mill-race-bypass.md`, seal `04-19`) | [03-revised-a.md](../04-runs/03-revised-a.md), [04-revised-b.md](../04-runs/04-revised-b.md) | [02-company/revised/](../02-company/revised/) (`19` files) |

## 3. Review (`03-observations/` · `05-evolution/`)

Record the `ENACTS` + frontmatter + `Promptbook` audit, the focused-revision file and link diff, how the `Triggers` handoff operated between Plots, which `Stakes` carried into Plot 2, what changed onstage after the revision, and any proposed refinements to [references/play.md](../../../skills/khai-playwright/references/play.md), [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md), and [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md).
