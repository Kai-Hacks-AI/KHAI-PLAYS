# Author Output — Slot `05` (Task `2`, Repetition `1`, Condition `A`)

- **Created rationale file (`work/`-relative):** `playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook-pitch-handoff-decision.md`
- **Modified entry-point file(s) (`work/`-relative):** `playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md`

## 1. Verbatim Created Record (`playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook-pitch-handoff-decision.md`)

````markdown
# Decision: Explicit Promptbook Pitch Handoff Across Plot Boundaries in *The Giant’s Shoe*

- **Role:** Director (`khai-director`)
- **Entry Point:** [Shared Promptbook](promptbook.md) (`## Agent` and `## Knowledge — Separate performer contexts & active-Pitch scoping`)
- **Related Inputs:**
  - [Director skill](../../../skills/khai-director/SKILL.md)
  - [All-comic baseline run (`01-all-comic-r1-a.md`)](../04-runs/01-all-comic-r1-a.md)
  - [Mixed-Pitch run (`02-mixed-wonder-r1-b.md`)](../04-runs/02-mixed-wonder-r1-b.md)

## Context and Problem

Under the [Director skill](../../../skills/khai-director/SKILL.md), staging a multi-Plot Play at a **0% staging limit** requires two simultaneous guarantees:

1. **Continuous world-state and Stakes progression:** Physical state, grip adjustments, route geometry, sightline asymmetry, and spoken or silent stances established in one Plot must carry straight into the next without resetting the scene or editing read-only authored files.
2. **Scoped performer knowledge and active Pitch:** Performers must not receive future-scene knowledge before it enters play, and any active Pitch must tune pacing, attention, and delivery for its scope only.

In the *Giant’s Shoe* rehearsal pair, Variant A ([`variant-a/play.md`](variant-a/play.md)) inherits the Play-wide default Pitch (`Dry Comedy`) across all three Plots, whereas Variant B ([`variant-b/play.md`](variant-b/play.md)) links a scene-level override—`Quiet Wonder` ([`variant-b/pitch-quiet-wonder.md`](variant-b/pitch-quiet-wonder.md))—on middle Plot 2 ([`variant-b/plot-2-question-and-response.md`](variant-b/plot-2-question-and-response.md)) when a child asks `“Is the giant coming?”`, then returns to the Play-wide default `Dry Comedy` on Plot 3 ([`variant-b/plot-3-immediate-consequence.md`](variant-b/plot-3-immediate-consequence.md)).

Because isolated cast performers (`Tomas` at the rear heel counter and `Maren` at the front wooden toe-welt) carry continuous turn history across Plots, leaving a middle-Plot Pitch shift implicit creates two failure modes:

- **Register inertia (Pitch bleed):** Plot 1’s brisk, deadpan logistics register lingers into Plot 2 and flattens `Quiet Wonder`, or Plot 2’s hushed earnestness lingers into Plot 3 after the scene override ends.
- **Premature leakage or continuity loss:** Preloading the full Pitch schedule at `Start` leaks upcoming tonal turns before they happen in play, while resetting performer contexts from scratch at Plot boundaries risks dropping physical continuity (the softening flour-paste heel patch, grip changes, and front/rear sightline asymmetry) or distorting world facts (such as inventing an actual second float or giant under `Quiet Wonder`).

## Decision

Encode an **explicit Plot-boundary Pitch handoff** in the reusable [Shared Promptbook](promptbook.md) rather than relying on implicit stage-framing tone or separate variant-specific Promptbooks:

1. **Single-Pitch performer scoping:** Run each Persona in an isolated context seeded with **only** the currently active Pitch (`Tenor`, `Undertow`, `Nerve`, `Echo`) for the active Plot; never preload unlinked or future Plot Pitches.
2. **Explicit replacement on both edges of a Plot override:** At every Plot boundary, inspect the incoming Plot’s Pitch link. When the active Pitch changes—both entering a Plot-level override (`Plot 1 → Plot 2`: `Dry Comedy` → `Quiet Wonder`) and returning to the Play-wide default (`Plot 2 → Plot 3`: `Quiet Wonder` → `Dry Comedy`)—explicitly instruct each performer’s prompt to **discard the prior Plot’s Pitch** and replace it with the newly active Pitch, logging the active Pitch, source file, and transition. When no override is linked, explicitly re-confirm the Play default.
3. **Strict separation of register from facts and consequences:** Restrict Pitch transitions to register (pacing, sensory focus, pause weight, delivery) while preserving observable turn history, physical Piece progression, sightline filters, and world facts unchanged under the `0%` staging limit.

## Alternatives Considered

- **Implicit Director stage framing alone:** Shifting only the Director’s opening narration while leaving Plot 1’s `Dry Comedy` block in performer prompt context invites mixed or lagging register across `Plot 1 → Plot 2` and especially `Plot 2 → Plot 3`.
- **Up-front multi-Plot Pitch schedule in performer prompts:** Giving performers all three Plots’ Pitch assignments at `Start` violates [`khai-director`](../../../skills/khai-director/SKILL.md) knowledge scoping by revealing future scene turns ahead of play.
- **Fresh performer resets at each Plot or variant-specific Promptbooks:** Re-initializing performers without continuous context risks losing subtle physical consequences across the crossing, and splitting Promptbooks prevents clean side-by-side testing between uniform-Pitch and mixed-Pitch Plays.

## Evidence from Rehearsals

- **Uniform-Pitch control ([`01-all-comic-r1-a.md`](../04-runs/01-all-comic-r1-a.md)):** Under the same [Promptbook](promptbook.md), boundary checks confirmed Play-default inheritance across all three Plots, keeping `Dry Comedy` crisp and consistent (`"Parade permit only covers one left boot through the east arch"`) with zero unnecessary overhead.
- **Middle-Plot Pitch shift and return ([`02-mixed-wonder-r1-b.md`](../04-runs/02-mixed-wonder-r1-b.md)):**
  - `Plot 1 → Plot 2` (`Dry Comedy` discarded → `Quiet Wonder` activated): Both performers pivoted cleanly from clipped marshaling practicality to quiet, eye-level seriousness (`"He takes a long stride between towns, so his left boot gets into the square ahead of him"` and `"Stand right behind the white line—it takes the whole lane just to set his first foot down straight"`), lifting both ends of the boot an inch clearer without inventing an unauthored giant or dropping rear-seam strain.
  - `Plot 2 → Plot 3` (`Quiet Wonder` discarded → `Dry Comedy` restored): Both snapped back immediately to deadpan parade logistics (`"keep that toe level for twenty-five yards, because this boot's riding my forearm to the tailgate"`) while carrying forward both the added physical load from Plot 2’s one-inch lift and the spoken stance they had just committed beside the chalk line (`"if we're telling the square the rest of him is coming, the heel has to make the tailgate in one piece"`).

## Reuse Guidance for Future Collaborators

- **Treat returning to the Play default as an active handoff:** Exiting a middle-Plot Pitch override (`Plot 2 → Plot 3`) requires the same explicit discard-and-replace instruction in performer prompts as entering the override (`Plot 1 → Plot 2`).
- **Swap the Pitch block, never the stage state:** When replacing the active Pitch at a Plot boundary, keep shared crew premises, world facts, sightline asymmetry filters, Piece wear progression, and observable prior turns intact.
- **Keep boundary logs auditable:** Record the active Pitch, its source file, and whether it came from Play-default inheritance or a Plot-level link at every Plot boundary so reviewers can distinguish authored Pitch design from Director staging choices.
````

## 2. Verbatim Entry-Point Diff(s)

### `playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md`

````diff
--- a/playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md
+++ b/playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md
@@ -21,7 +21,7 @@
 
 ## Knowledge
 
-- **Separate performer contexts & active-Pitch scoping.** Run each Persona in an isolated context containing only shared crew premises, that role's own Persona, observable Place and Piece states available from that carrier's position, the observable turns played so far, and **only the currently active Pitch** (`Tenor`, `Undertow`, `Nerve`, `Echo`) for the current Plot. When a Plot boundary changes the active Pitch—either entering a Plot-level override or returning to the Play-wide default—explicitly replace the prior Pitch in each performer's prompt so no prior Plot's Pitch lingers out of scope.
+- **Separate performer contexts & active-Pitch scoping.** Run each Persona in an isolated context containing only shared crew premises, that role's own Persona, observable Place and Piece states available from that carrier's position, the observable turns played so far, and **only the currently active Pitch** (`Tenor`, `Undertow`, `Nerve`, `Echo`) for the current Plot. When a Plot boundary changes the active Pitch—either entering a Plot-level override or returning to the Play-wide default—explicitly replace the prior Pitch in each performer's prompt so no prior Plot's Pitch lingers out of scope (see [explicit Promptbook Pitch-handoff decision](promptbook-pitch-handoff-decision.md)).
 - **Physical sightline asymmetry.** Facing forward at the toe welt, the front carrier senses rear seam trouble only through rim drag, cadence changes, a backward glance, or spoken words; cradling the rear counter, the rear carrier feels and sees the softening heel patch directly beneath their hands.
 - **Public evidence.** Only observable words, silences, audible creaks, footsteps, grip or route shifts, and physical `Tells` count as stage evidence.
````
