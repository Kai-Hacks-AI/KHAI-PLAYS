# Author Output — Slot `04` (Task `1`, Repetition `2`, Condition `A`)

- **Created rationale file (`work/`-relative):** `playmaking/opera/skills/khai-playwright/references/decisions/standard-tenors.md`
- **Modified entry-point file(s) (`work/`-relative):** `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md`

## 1. Verbatim Created Record (`playmaking/opera/skills/khai-playwright/references/decisions/standard-tenors.md`)

````markdown
# Decision: Offer the nine standard Tenors as starting registers for Pitch

- **Status:** Accepted
- **Scope:** [`pitch-defaults.md`](../pitch-defaults.md) and [`pitch.md`](../pitch.md) (`khai-playwright`)
- **Prior source:** [Legacy KHAI Pitch defaults (`packages/khai-arch/defaults/pitch.md`)](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md)

## Context

In legacy KHAI, [Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md) treated a Pitch as the single dominant key in which a production is played, structured across four facets (`Tenor`, `Undertow`, `Nerve`, `Echo`) and accompanied by nine default tenors (`grieving`, `comic`, `tender`, `furious`, `heroic`, `dread`, `abject`, `wondrous`, `still`).

In KHAI PLAYS, [`Pitch`](../pitch.md) expands from a single run-wide reading to a reusable type (`Pitch — TO TUNE`) that any KHAI PLAYS type can link—`Play`, `Plot`, `Persona`, `Position`, `Place`, `Piece`, `Process`, or `Plan`—so several objects in the same scene can carry different Pitches, and a Director can also choose another Pitch for a run. Authors needed clear guidance for populating `Tenor` across these scopes without facing a blank page, locking tone into rigid full-Pitch presets, or letting tone alter plot facts and performer agency.

## Decision

Carry forward the nine registers from legacy KHAI—`grieving`, `comic`, `tender`, `furious`, `heroic`, `dread`, `abject`, `wondrous`, and `still`—in [`pitch-defaults.md`](../pitch-defaults.md) as **Standard Tenors**: optional, adaptable starting points for the `Tenor` facet of a [`Pitch`](../pitch.md) at any scope.

Playwrights can start from these nine Tenors when authoring a Pitch (and Directors can consult the same list when tuning a run), adapt a listed Tenor to the work, or write their own Tenor from scratch, then complete the Pitch with `Undertow`, `Nerve`, and `Echo`.

## Rationale

- **Seed only `Tenor`, not pre-packaged full Pitches.** Legacy KHAI called its file "default pitches" even though the nine entries only named `Tenor`. Presenting them explicitly as **Standard Tenors** clarifies that selecting `comic` or `dread` sets only the dominant register; the author still supplies the counter-current (`Undertow`), target audience strike (`Nerve`), and lingering impression (`Echo`) for the specific work and scope.
- **Keep a shared vocabulary without closing the taxonomy.** Omitting defaults altogether makes it harder to distinguish a playable register from plot instructions or audience-effect notes, whereas a closed enum would block work-specific registers. Offering the nine Tenors as adaptable starting points ("Use the standard Tenors as starting points or choose your own") gives Playwrights and Directors a common baseline while preserving open authoring.
- **Support multi-scope composition without mutating facts or choices.** Because each of the nine Tenors describes pacing, attention, and delivery rather than story outcomes, multiple Pitches can coexist cleanly in one scene (such as the *The Giant’s Shoe* example in [`pitch-defaults.md`](../pitch-defaults.md), pairing `Play · Comic` with `Place · Dread`, `Persona · Tender`, and `Piece · Wondrous`) while keeping authored facts, events, object properties, and performer choices intact.

## Guidance for future collaborators

- **Preserve the non-interference boundary:** Any example or revision to Standard Tenors must shape delivery, attention, and pacing only—never authored facts, events, object properties, or performer choices.
- **Keep the list open and facet-specific:** Do not turn [`pitch-defaults.md`](../pitch-defaults.md) into a closed validation enum or bundle fixed `Undertow`/`Nerve`/`Echo` presets unless [`pitch.md`](../pitch.md) deliberately changes how `Pitch` is authored.
- **When to revisit:** Revisit this set if recurring multi-scope plays reveal a primary register that cannot be reached by adapting the nine, show two of the nine collapsing in practice, or show authors treating the nine as mandatory rather than starting points.
````

## 2. Verbatim Entry-Point Diff(s)

### `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md`

````diff
--- a/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md
+++ b/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md
@@ -25,4 +25,4 @@
 
 Each Pitch shapes its own scope. The square stays the same place, the shoe keeps its authored properties, and Tomas still decides how to respond.
 
-Adapted from the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md).
+Adapted from the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md). See [Decision: Offer the nine standard Tenors as starting registers for Pitch](decisions/standard-tenors.md) for the rationale behind carrying these registers forward.
````
