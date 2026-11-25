# Author Output — Slot `02` (Task `1`, Repetition `1`, Condition `B`)

- **Created rationale file (`work/`-relative):** `playmaking/opera/sourcebooks/standard-tenors.md`
- **Modified entry-point file(s) (`work/`-relative):** `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md`

## 1. Verbatim Created Record (`playmaking/opera/sourcebooks/standard-tenors.md`)

````markdown
# Sourcebook — Standard Tenors for Authoring Pitch

## Line of Work

Opera’s `khai-playwright` Pitch reference guides authors in tuning how a Play, Plot, or individual object is played and felt without altering authored facts, events, or performer choices. This Sourcebook documents the Playwright design decision to offer the nine standard Tenors (`grieving`, `comic`, `tender`, `furious`, `heroic`, `dread`, `abject`, `wondrous`, and `still`) as starting registers for authoring a Pitch—and as a shared reference list a Director can consult when tuning a run.

## Origin

- **External — [Legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md)** (`ChBrain/khai`, `packages/khai-arch/defaults/pitch.md` at `c8c56c7`): Defines the legacy `TO TUNE` Pitch structure (`Tenor`, `Undertow`, `Nerve`, `Echo`), introduces the nine default Tenors and their tonal glosses as "the standard registers to tune from," and sets the core rule that tuning a pitch is a reading rather than a change to fixed events. This source supplies the nine register names, definitions, and non-interference principle.
- **Internal — [Opera Pitch guide](../skills/khai-playwright/references/pitch.md)**: Defines the Opera `Pitch — TO TUNE` headings (`Taxonomy`, `Owner`, `Tenor`, `Undertow`, `Nerve`, `Echo`) and generalizes Pitch from a single production-wide key to any KHAI PLAYS scope (`Play`, `Plot`, `Persona`, `Position`, `Place`, `Piece`, `Process`, `Plan`), including multiple Pitches within one scene and Director retuning for a run. This creates the need for concrete, reusable starting Tenors under `## Tenor` that work across scopes.
- **Internal — [*The Giant’s Shoe* company rehearsal](../rehearsals/pitch/02-company/README.md)** (referenced in [`pitch-defaults.md`](../skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene)): Provides the concrete scene elements—crossing the square amid parade logistics and brass warm-up, Tomas, and the fragile oversized shoe—used to illustrate how distinct standard Tenors can tune `Play`, `Place`, `Persona`, and `Piece` scopes concurrently.

## Restrictions

- **Supported by evidence:** Carrying forward the nine legacy Tenors gives Playwrights and Directors a shared, contrasting vocabulary aligned with the four-facet Pitch model (`Tenor`, `Undertow`, `Nerve`, `Echo`) so authors do not have to invent every dominant register from scratch.
- **Adaptations and open questions needing rehearsal:**
  - *Run-wide to multi-scope adaptation:* Legacy `khai-arch` defined Tenor only as the dominant key of an entire run. Applying the same nine registers to individual scoped objects and concurrent Pitches in a single scene is an Opera adaptation beyond the legacy source.
  - *Multi-Pitch interaction and structural scopes:* The multi-Pitch breakdown in [`pitch-defaults.md`](../skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene) is explicitly an imagined Tenor-only illustration ("imagine a comic Play-wide Pitch alongside three Pitches linked to individual objects"). Rehearsal still needs to stress-test how simultaneous Pitches interact once full `Undertow`, `Nerve`, and `Echo` facets are authored, and how well these nine affect-rich Tenors fit structural scopes not illustrated there (`Plot`, `Position`, `Process`, `Plan`).
  - *Register coverage:* Neither source proves the nine Tenors cover every dramatic tone; whether recurring authoring gaps warrant additional standard Tenors remains open.
- **Boundaries to carry forward:**
  - *Starting points, not a closed enum:* Keep the nine Tenors adaptable and always allow custom Tenors rather than enforcing a fixed list.
  - *Tenor is only one facet:* Choosing a Tenor sets one dominant register per Pitch; authors must still complete `Taxonomy`, `Owner`, `Undertow`, `Nerve`, and `Echo` rather than collapsing counter-currents or audience effects into Tenor alone.
  - *Explicit scope and precedence:* Each Pitch tunes only the scope that links it; when one scope links multiple Pitches, the author must state which is the default and when the others apply.
  - *Reading, never rewriting:* Authoring or retuning a Pitch may shape pacing, attention, and delivery, and a Director may choose another Pitch for a run, but authored facts, object properties, fixed events, and open performer choices must remain intact.

## Encoding

- [`pitch.md` — `# Pitch — TO TUNE` and `## Tenor`](../skills/khai-playwright/references/pitch.md#tenor): Carries the multi-scope linking rules, multi-Pitch default rule, Director retuning rule, and non-interference boundary in the opening instructions, and links `[standard Tenors](pitch-defaults.md)` under `## Tenor` as optional starting points alongside author-chosen registers.
- [`pitch-defaults.md` — `# Standard Tenors`](../skills/khai-playwright/references/pitch-defaults.md#standard-tenors): Carries the nine adapted Tenors and their concise glosses for Playwrights authoring a Pitch at any scope and Directors tuning a run, states what Pitch can shape (`pacing, attention, and delivery`) versus what it must preserve (`authored facts and events` and performer choices), and directs authors to complete the Pitch with `Undertow`, `Nerve`, and `Echo`.
- [`pitch-defaults.md` — `## Several Pitches in one scene`](../skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene): Encodes the multi-scope illustration on [*The Giant’s Shoe*](../rehearsals/pitch/02-company/README.md) (`Play · Comic`, `Place · Dread`, `Persona · Tender`, `Piece · Wondrous`), showing scope isolation without altering scene facts or performer agency, and links the legacy KHAI source alongside this Sourcebook.
````

## 2. Verbatim Entry-Point Diff(s)

### `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md`

````diff
--- a/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md
+++ b/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md
@@ -25,4 +25,4 @@
 
 Each Pitch shapes its own scope. The square stays the same place, the shoe keeps its authored properties, and Tomas still decides how to respond.
 
-Adapted from the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md).
+Adapted from the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md); see the [Standard Tenors Sourcebook](../../../sourcebooks/standard-tenors.md) for the rationale and boundaries behind this choice.
````
