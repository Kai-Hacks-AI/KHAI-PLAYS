# Author Output — Slot `01` (Task `1`, Repetition `1`, Condition `A`)

- **Created rationale file (`work/`-relative):** `playmaking/opera/skills/khai-playwright/references/pitch-defaults-decision.md`
- **Modified entry-point file(s) (`work/`-relative):** `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md`

## 1. Verbatim Created Record (`playmaking/opera/skills/khai-playwright/references/pitch-defaults-decision.md`)

````markdown
# Decision: Offer the nine standard Tenors as starting registers for Pitch

## Context

In Opera, a [Pitch](pitch.md) (`TO TUNE`) tunes how a linked scope is played while keeping authored facts, events, object properties, and performer choices intact. Unlike the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md), which framed Pitch around a single dominant key for an entire run, an Opera Pitch can attach to any KHAI PLAYS type (`Play`, `Plot`, `Persona`, `Position`, `Place`, `Piece`, `Process`, or `Plan`), and several objects can carry different Pitches within the same scene.

A complete Pitch requires project metadata (`Taxonomy`, `Owner`) and four tonal facets inherited from legacy KHAI: **Tenor** (dominant register), **Undertow** (counter-current), **Nerve** (feeling aimed at the audience), and **Echo** (what lingers after the run). Although the legacy file was titled *Pitch defaults* ("the khai default pitches"), its list actually defined nine **Tenors** rather than complete four-facet Pitches.

## Decision

Carry forward the nine legacy registers—`grieving`, `comic`, `tender`, `furious`, `heroic`, `dread`, `abject`, `wondrous`, and `still`—in [Standard Tenors](pitch-defaults.md) specifically as optional **starting registers** for the `Tenor` facet when authoring a Pitch (and as a shared reference list when a Director tunes a run).

## Rationale and alternatives considered

- **Starting Tenors rather than preset whole Pitches.** Legacy KHAI noted that `Undertow` is what keeps a dominant register from going flat, and in Opera the right counter-current, audience impact (`Nerve`), and aftertaste (`Echo`) depend on the specific work and scope (`Play`, `Place`, `Persona`, `Piece`, and so on). Naming the list *Standard Tenors* matches what the nine entries actually provide and prompts the author to complete `Undertow`, `Nerve`, and `Echo` deliberately rather than copying a one-size-fits-all Pitch.
- **Concrete anchors rather than a blank slate.** Leaving `Tenor` with no defaults would force Playwrights and Directors to invent tonal vocabulary from scratch on every Pitch and discard a compact, contrasting set of registers that already spans loss, comedy, intimacy, confrontation, resolve, foreboding, recoil, awe, and calm. Offering the nine registers gives Playwrights and Directors a shared starting vocabulary across authoring and run-time tuning, including multi-scope combinations in a single scene (such as the `Comic`, `Dread`, `Tender`, and `Wondrous` Tenors illustrated for [*The Giant’s Shoe*](../../../rehearsals/pitch/02-company/README.md)).
- **Open starting points rather than a closed enum.** Treating the nine Tenors as mandatory options would block registers outside the list or overly genericize scene-specific directions. Both [Pitch](pitch.md) ("Use the standard Tenors as starting points or choose your own") and [Standard Tenors](pitch-defaults.md) ("The Tenors above can be adapted to fit the work") therefore treat the nine registers as adaptable seeds, not a fixed taxonomy.

## Guidance for future collaborators

- **Do not validate `Tenor` as a closed enum.** Tooling, reviews, and templates should allow adapted descriptions and custom Tenors alongside the nine standard registers.
- **Keep `pitch-defaults.md` scoped to `Tenor` seeds.** Avoid expanding the nine entries into pre-filled `Undertow`/`Nerve`/`Echo` bundles; full Pitches belong in authored works or rehearsals where scope and context are concrete.
- **Preserve the Pitch boundary.** Whether starting from a standard Tenor or inventing a new one, a Tenor shapes pacing, attention, and delivery for its scope without altering authored facts, events, object properties, or performer agency.
````

## 2. Verbatim Entry-Point Diff(s)

### `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md`

````diff
--- a/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md
+++ b/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md
@@ -25,4 +25,4 @@
 
 Each Pitch shapes its own scope. The square stays the same place, the shoe keeps its authored properties, and Tomas still decides how to respond.
 
-Adapted from the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md).
+Adapted from the [legacy KHAI Pitch defaults](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/khai-arch/defaults/pitch.md); see [Decision: Offer the nine standard Tenors as starting registers for Pitch](pitch-defaults-decision.md).
````
