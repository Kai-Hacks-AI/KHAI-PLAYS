# Author Output — Slot `08` (Task `2`, Repetition `2`, Condition `A`)

- **Created rationale file (`work/`-relative):** `playmaking/opera/rehearsals/mixed-pitch/02-company/decision-pitch-handoff.md`
- **Modified entry-point file(s) (`work/`-relative):** `playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md`

## 1. Verbatim Created Record (`playmaking/opera/rehearsals/mixed-pitch/02-company/decision-pitch-handoff.md`)

````markdown
# Decision: Explicit Promptbook Pitch Handoff Across Plot Boundaries

- **Role:** Director (`khai-director`)
- **Entry point:** [Promptbook](promptbook.md) (`## Agent`, `## Knowledge`, `## System`)
- **Governing skill:** [Director skill](../../../skills/khai-director/SKILL.md)
- **Rehearsal evidence:** [All-comic baseline run](../04-runs/01-all-comic-r1-a.md) (`variant-a`) · [Mixed-Pitch wonder run](../04-runs/02-mixed-wonder-r1-b.md) (`variant-b`)

## Decision

When staging *The Giant’s Shoe* at a **0% staging limit** with isolated Cast Performer contexts, use an explicit Director-mediated Pitch handoff in [promptbook.md](promptbook.md) at every Plot boundary (`Start → Plot 1`, `Plot 1 → Plot 2`, `Plot 2 → Plot 3`):

1. **Inspect and log every Plot boundary (`## Agent`).** Start on the Play's default Pitch, switch to a Plot-linked Pitch for the duration of any Plot that links one, return to the Play's default Pitch on the next Plot that inherits it, and log the active Pitch, source file, and transition.
2. **Scope each performer to a single active Pitch and explicitly replace it on change (`## Knowledge`).** Seed each performer's isolated context with **only** the current Plot's active Pitch (`Tenor`, `Undertow`, `Nerve`, `Echo`) alongside shared crew premises, their own Persona, position-filtered Place/Piece state, and observable turns played so far. Whenever a Plot boundary changes the active Pitch—both entering Plot 2's override and restoring the Play default in Plot 3—explicitly instruct each performer prompt to discard the prior Plot's Pitch and replace it with the incoming Pitch.
3. **Separate tonal register from world continuity (`## System`).** Keep authored files read-only and carry all physical states, sightline asymmetries, and spoken or silent consequences continuously across Plots (`Pitch tunes register, never facts`).

## Why This Choice Was Made

Under [SKILL.md](../../../skills/khai-director/SKILL.md), the Director must tune pacing, attention, and staging to any active Pitch, carry established facts and consequences from one Plot into the next, withhold knowledge from performers until it becomes available in play, and hold authored material fixed under a `0%` staging limit.

In *The Giant’s Shoe*, two isolated performers (`Tomas` at the softening rear heel counter and `Maren` facing east at the painted wooden toe-welt) carry a single eight-foot papier-mâché boot across three continuous Plots. In `variant-b`, Plot 1 inherits the Play-wide default (`Dry Comedy`), Plot 2 (*Question and Response*, opened by the child's verbatim cue `“Is the giant coming?”`) links a scene-level override (`Quiet Wonder`), and Plot 3 (*Immediate Consequence*) inherits the Play default (`Dry Comedy`) again.

Because each performer's isolated context retains the observable turns played so far, leaving the Pitch transition implicit creates two boundary hazards:

- **Out-of-scope Pitch bleed:** Without an explicit instruction to discard the prior Pitch, conversational momentum from Plot 1's deadpan parade logistics (`Dry Comedy`) can flatten Plot 2's `Quiet Wonder` override, or Plot 2's quiet earnestness can linger past Plot 2 into Plot 3 instead of snapping back to `Dry Comedy`.
- **Premature leakage vs. severed continuity:** Pre-loading the full three-Plot Pitch schedule at Plot 1 would expose future tonal shifts before performers reach those Plots in play, while resetting performer contexts from scratch at Plot boundaries would risk dropping continuous grip adjustments, heel-seam progression, and sightline-filtered cues.

## Alternatives Considered

- **Relying on Stage Voice framing alone or appending the new Pitch without removing the old one:** Leaves conflicting `Tenor`, `Undertow`, `Nerve`, and `Echo` guidance in prompt scope across `Plot 1 → Plot 2` and `Plot 2 → Plot 3`.
- **Pre-loading all Pitches into performer contexts at the start of the run:** Violates [SKILL.md](../../../skills/khai-director/SKILL.md) by giving performers ahead-of-time knowledge of Plot 2's shift before Plot 2 opens.
- **Respawning blank performer contexts at each Plot boundary:** Eliminates Pitch residue at the cost of breaking lived turn-to-turn physical and dramatic continuity across the three-Plot crossing.
- **Maintaining separate Promptbooks for uniform-Pitch and mixed-Pitch runs:** Making replacement conditional on whether a Plot boundary changes the active Pitch allowed a single reusable [promptbook.md](promptbook.md) to govern both `variant-a` and `variant-b` with zero edits to authored Play files.

## Rehearsal Evidence

- **Control run without Plot overrides ([01-all-comic-r1-a.md](../04-runs/01-all-comic-r1-a.md)):** Boundary checks confirmed default inheritance across all three Plots, keeping `Dry Comedy` active throughout; in Plot 2 both carriers answered the child in deadpan marshaling terms (`"takes two of us just walking his left boot to the wagon"`, `"Parade permit only covers one left boot through the east arch"`).
- **Mixed-Pitch override and restoration ([02-mixed-wonder-r1-b.md](../04-runs/02-mixed-wonder-r1-b.md)):**
  - **`Plot 1 → Plot 2` (`Dry Comedy` → `Quiet Wonder`):** Explicitly discarding `Dry Comedy` and seeding `Quiet Wonder` shifted both carriers from brisk cadence negotiation in Plot 1 to grave, eye-level attentiveness in Plot 2 (`"He takes a long stride between towns, so his left boot gets into the square ahead of him"`, `"Stand right behind the white line—it takes the whole lane just to set his first foot down straight"`) while raising both ends of the lone boot an inch higher and inventing zero unauthored floats or props.
  - **`Plot 2 → Plot 3` (`Quiet Wonder` → `Dry Comedy`):** Explicitly discarding `Quiet Wonder` and restoring `Dry Comedy` snapped both carriers immediately back to brisk step-off practicality while preserving Plot 2's physical and spoken consequences—the one-inch lift folded the damp paste seam deeper over Tomas's knuckles, forcing him to bridge his forearm under the wooden welt (`"this boot's riding my forearm to the tailgate"`), and Maren locked her wrists forward (`"if we're telling the square the rest of him is coming, the heel has to make the tailgate in one piece"`).

## Guidance for Future Collaborators

- **Enforce the return edge as strictly as the override entry:** Returning from a middle-Plot override to the Play default (`Plot 2 → Plot 3`) requires the exact same explicit discard-and-replace handoff in performer prompts as entering the override (`Plot 1 → Plot 2`).
- **Replace only the Pitch block, never observable history or world facts:** Keep prior observable turns, front/rear sightline filtering, and accrued physical consequences intact when swapping the active Pitch.
- **Specify layer precedence if object-level Pitches are added later:** Neither `variant-a` nor `variant-b` linked Persona-, Place-, or Piece-level Pitches. If a future Play pairs object-level Pitches with Plot-level overrides under this Promptbook, extend `## Knowledge` to define which Pitch layer is replaced at Plot boundaries and which remains scoped to its object.
````

## 2. Verbatim Entry-Point Diff(s)

### `playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md`

````diff
--- a/playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md
+++ b/playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md
@@ -21,7 +21,7 @@
 
 ## Knowledge
 
-- **Separate performer contexts & active-Pitch scoping.** Run each Persona in an isolated context containing only shared crew premises, that role's own Persona, observable Place and Piece states available from that carrier's position, the observable turns played so far, and **only the currently active Pitch** (`Tenor`, `Undertow`, `Nerve`, `Echo`) for the current Plot. When a Plot boundary changes the active Pitch—either entering a Plot-level override or returning to the Play-wide default—explicitly replace the prior Pitch in each performer's prompt so no prior Plot's Pitch lingers out of scope.
+- **Separate performer contexts & active-Pitch scoping.** Run each Persona in an isolated context containing only shared crew premises, that role's own Persona, observable Place and Piece states available from that carrier's position, the observable turns played so far, and **only the currently active Pitch** (`Tenor`, `Undertow`, `Nerve`, `Echo`) for the current Plot. When a Plot boundary changes the active Pitch—either entering a Plot-level override or returning to the Play-wide default—explicitly replace the prior Pitch in each performer's prompt so no prior Plot's Pitch lingers out of scope (see [Pitch-handoff decision](decision-pitch-handoff.md)).
 - **Physical sightline asymmetry.** Facing forward at the toe welt, the front carrier senses rear seam trouble only through rim drag, cadence changes, a backward glance, or spoken words; cradling the rear counter, the rear carrier feels and sees the softening heel patch directly beneath their hands.
 - **Public evidence.** Only observable words, silences, audible creaks, footsteps, grip or route shifts, and physical `Tells` count as stage evidence.
````
