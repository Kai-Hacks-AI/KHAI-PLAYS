# Rehearsal Setup — Director staging freedom

Does a Human-set staging limit change how the Director uses an optional external cue while preserving authored facts, performer agency, and knowledge boundaries?

Use the Director skill and guides from the [merged PR #24 baseline](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/tree/ec1d8730e14eb41501284b233fbafcd5f3690cd6/playmaking/opera/skills/khai-director). Use the [shared Director-owned Promptbook](../../director-promptbook/02-company/promptbook.md) and its two Plays. The [delayed-reveal pilot](../03-observations/delayed-reveal-pilot.md) used a different comparison. Read it after recording initial observations.

## Conditions

| Condition | Promptbook System setting | Director discretion |
| --- | --- | --- |
| A | `Staging limit: 0%` | Stage the authored roles, situation, and cues. Leave open choices with performers. |
| B | `Staging limit: 50%` | May vary staging and timing and introduce compatible external pressure. Preserve authored facts and constraints. |

Create two run copies of the shared Promptbook. Replace only the numeric limit in System for B. Use the same Director skill, authored Play and Company, opening state, performer briefs, model and settings, and turn cap within each pair. Record source refs and hashes for the Director and its guides, the Play and Company, both Promptbook copies, and the exact opening and optional cue. The Human sets the limit before the run and observes silently.

## Run the comparison

1. Prepare one independent opening for each Play, using the first Plot of [Frost Line at Glasshouse Three](../../director-promptbook/02-company/greenhouse-frost/play.md) and [Hold Three on the Ebb](../../director-promptbook/02-company/harbor-manifest/play.md). Before running either condition, select one compatible offstage cue per opening that introduces pressure without changing any authored fact or resolving the choice. Record the cue verbatim and confirm it is outside the authored cues. Give the Director the same proposal in both conditions, framed as optional if the System setting permits it. Withhold the proposal from performers unless it enters the scene.
2. Run each opening twice per condition, for eight runs. Use A then B in the first repetition and B then A in the second. Use fresh Director and separate performer contexts for every run. Keep prior runs, observations, the pilot, and the other condition out of those contexts. Release private material only when its recipient can know it.
3. Give the Director the optional cue after the same number of opening turns within each pair. Record whether it was held, introduced, or introduced later, when each performer could perceive it, and the first observable response. Allow unresolved endings. Use the same stopping rule within each pair.
4. For each Director intervention, cite the transcript turn and authored source or System rule. If a performer proposes an outcome the authored Process does not cover, record the gap. The Director may point to authored options or return the decision to the Playwright. An added Process rule counts as a boundary crossing in either condition. Record performer claims as claims until established in the scene.

## SCORE outputs

- `01-setup/` records the conditions, cue text, fixed opening points, and stopping rule before staging.
- `02-company/` records pinned input refs, hashes and both Promptbook copies.
- `03-observations/` compares cue use and timing, fidelity, knowledge handling, and performer agency by run, citing turns and sources.
- `04-runs/` contains the full transcripts and Director cue logs.
- `05-evolution/` gives the smallest evidence-backed recommendation for Owner review and identifies ambiguity or scene-specific results.

Expect A to omit the optional external cue. B may use it or hold it. Report legitimate variation separately from changes to authored facts, performer choices assigned by the Director, and unsupported rulings. If B holds the cue every time, record that the permission produced no observed cue-use difference in these openings. Keep package changes for a later proposal if the evidence supports one.
