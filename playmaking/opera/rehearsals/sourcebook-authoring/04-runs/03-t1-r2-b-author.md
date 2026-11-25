# Author Output — Slot `03` (Task `1`, Repetition `2`, Condition `B`)

- **Created rationale file (`work/`-relative):** `playmaking/opera/skills/khai-playwright/references/pitch-defaults-sourcebook.md`
- **Modified entry-point file(s) (`work/`-relative):** `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md`

## 1. Verbatim Created Record (`playmaking/opera/skills/khai-playwright/references/pitch-defaults-sourcebook.md`)

````markdown
# Sourcebook: Standard Tenors for Pitch

## Line of Work

Opera’s `khai-playwright` references give Playwrights and Directors a shared way to tune tone across a Play, scene, or individual object without changing what happens onstage. This Sourcebook explains the Playwright design decision to carry forward the nine legacy KHAI registers (`grieving`, `comic`, `tender`, `furious`, `heroic`, `dread`, `abject`, `wondrous`, `still`) as optional starting **Tenors** for authoring a [Pitch](pitch.md), rather than offering them as complete pre-built Pitches or a closed list.

## Origin

- **[Legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md) (external):** Defines the four-facet `TO TUNE` structure (`Tenor`, `Undertow`, `Nerve`, `Echo`), introduces the nine registers and their tonal glosses, and sets the core rule that tuning a pitch is a reading rather than a change to fixed events. Although titled "Pitch defaults," the legacy reference actually supplies values only for the `Tenor` facet—leaving `Undertow`, `Nerve`, and `Echo` to be tuned for the work—and frames Pitch strictly around tuning an entire production run.
- **[Opera Pitch guide (`pitch.md`)](pitch.md) (internal):** Establishes the full Opera `Pitch` schema (`Taxonomy`, `Owner`, `Tenor`, `Undertow`, `Nerve`, `Echo`) and extends Pitch from run-wide tuning to any `KHAI PLAYS` scope (`Play`, `Plot`, `Persona`, `Position`, `Place`, `Piece`, `Process`, or `Plan`), while preserving authored facts, events, and performer choices.
- **[Opera Standard Tenors (`pitch-defaults.md`)](pitch-defaults.md) and [*The Giant’s Shoe* (`02-company`)](../../../rehearsals/pitch/02-company/README.md) (internal):** Uses the crossing scenario from *The Giant’s Shoe* to illustrate how four distinct Tenors (`comic`, `dread`, `tender`, `wondrous`) can tune Play, Place, Persona, and Piece scopes side by side in a single scene.

## Restrictions

- **Supported claims:**
  - Framing the nine legacy registers as **Standard Tenors** rather than complete default Pitches accurately reflects what the legacy specification provides: dominant starting keys that still require a counter-current (`Undertow`), target audience effect (`Nerve`), and aftertaste (`Echo`) to keep tone from going flat.
  - Keeping the nine Tenors adaptable and optional gives Playwrights and Directors an immediate shared vocabulary without restricting bespoke tonal registers.
- **Open questions and adaptations needing rehearsal:**
  - Applying the nine legacy run-wide registers to fine-grained object scopes (`Persona`, `Position`, `Place`, `Piece`, `Process`, `Plan`) and layering multiple Pitches in one scene—sketched as an imagined four-Pitch setup over [*The Giant’s Shoe*](../../../rehearsals/pitch/02-company/README.md) in [`pitch-defaults.md`](pitch-defaults.md#several-pitches-in-one-scene)—is an Opera extension beyond legacy single-run usage. Rehearsal is still needed to test how many simultaneous object Pitches performers can sustain clearly in play, and how precedence behaves when object-level and scene-level Tenors pull sharply against one another.
  - Whether these nine dramatic registers serve procedural or non-dramatic `Process` and `Plan` objects without strain remains untested; collaborators should coin a fitting Tenor rather than force an awkward match.
- **Boundaries to carry forward:**
  - **Starting register, never a finished Pitch:** Selecting one of the nine Tenors satisfies only `Tenor`; every authored Pitch must still define `Taxonomy`, `Owner`, `Undertow`, `Nerve`, and `Echo` per [`pitch.md`](pitch.md).
  - **Open list:** Treat the nine Tenors as starting points to use, adapt, or set aside—never as a validation enum that rejects custom Tenors.
  - **Reading, never rewrite:** Across every scope, a Tenor shapes pacing, attention, and delivery only; it must leave authored facts, events, object properties, and performer choices intact, and a Director remains free to choose a different Pitch for a run.

## Encoding

- **[`pitch.md` — `## Tenor`](pitch.md#tenor):** Instructs the Playwright to name one dominant register and links to [`pitch-defaults.md`](pitch-defaults.md) as optional starting points alongside custom Tenors.
- **[`pitch.md` — Scope rules and facets](pitch.md#pitch--to-tune):** Encodes Opera’s multi-scope attachment rules, Director run-time override, non-mutation boundary, and required headings (`Taxonomy`, `Owner`, `Tenor`, `Undertow`, `Nerve`, `Echo`) so the working authoring instructions stay in `pitch.md`.
- **[`pitch-defaults.md` — `# Standard Tenors`](pitch-defaults.md#standard-tenors):** Re-titles the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md) as `Standard Tenors`, carries forward all nine registers and their glosses for both Playwrights and Directors, and directs authors to complete the remaining Pitch facets (`Undertow`, `Nerve`, `Echo`).
- **[`pitch-defaults.md` — `## Several Pitches in one scene`](pitch-defaults.md#several-pitches-in-one-scene):** Demonstrates how standard Tenors operate across Play, Place, Persona, and Piece scopes in [*The Giant’s Shoe*](../../../rehearsals/pitch/02-company/README.md) while keeping place, piece properties, and performer agency unchanged.
````

## 2. Verbatim Entry-Point Diff(s)

### `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md`

````diff
--- a/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md
+++ b/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md
@@ -25,4 +25,4 @@
 
 Each Pitch shapes its own scope. The square stays the same place, the shoe keeps its authored properties, and Tomas still decides how to respond.
 
-Adapted from the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md).
+Adapted from the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md); see the [Standard Tenors Sourcebook](pitch-defaults-sourcebook.md) for the rationale and boundaries behind this choice.
````
