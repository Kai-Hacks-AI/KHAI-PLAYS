# Execution Record: TO LOAN in *The Spare Projector*

This file records the tested commit, authored source and receiving Plays, captured `TO LOAN` Performance archive, and isolated two-timing staging protocol used to execute [01-setup/README.md](README.md) on [KHAI PLAYS PR #23](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/23).

## Target Under Test

- **Branch & Commit Tested:** `opera-performance` at `260de71cfb21c02dad3494b332fbef7f26b9d784` (*Add TO LOAN and prepare The Spare Projector rehearsal*)
- **Skills Under Test:**
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md) with [performance.md](../../../skills/khai-director/references/performance.md) (`TO LOAN`: `Taxonomy`, `Owner`, `Lodged`, `Occasion`, `Aftermath`, `Note`)
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) with [play.md](../../../skills/khai-playwright/references/play.md) (`ENACTS` `## Triggers` linking a recorded Performance and stating when it enters)

---

## 1. Create (`02-company/khai-plays/`)

A clean-room `khai-playwright` context received only [README.md](README.md) and the pinned skills above, authoring two independent Plays under House folder `khai-plays` (`Estate: KHAI-PLAYS`) plus [authoring-note.md](../02-company/authoring-note.md) (withheld from all Director and performer contexts):

1. **Source Play — [Rialto Spare](../02-company/khai-plays/rialto-spare/ENACTS.md) (`11` files):**
   - Single-Plot `ENACTS` Play ([ENACTS.md](../02-company/khai-plays/rialto-spare/ENACTS.md), [PROMPTBOOK.md](../02-company/khai-plays/rialto-spare/PROMPTBOOK.md), [the-cross-town-call.md](../02-company/khai-plays/rialto-spare/plots/the-cross-town-call.md)) set at `6:55 PM` in [The Rialto Projection Booth](../02-company/khai-plays/rialto-spare/places/rialto-booth.md) ahead of Rialto’s `7:30 PM` archival 35mm double-feature, where Chief Projectionist [Tomas Voss](../02-company/khai-plays/rialto-spare/personas/tomas-voss.md) and House Manager [Nadia Osei](../02-company/khai-plays/rialto-spare/personas/nadia-osei.md) decide what to do with [The Bench Spare](../02-company/khai-plays/rialto-spare/pieces/bench-spare-unit.md) while [Machine 2 Warm-Up Run](../02-company/khai-plays/rialto-spare/processes/machine-two-warmup.md) tests an oil-seal weep and grabby take-up clutch, ending on one outgoing message to the Astor Cinema’s booth line.
2. **Receiving Play — [The Spare Projector](../02-company/khai-plays/the-spare-projector/ENACTS.md) (`14` files):**
   - Two-Plot `ENACTS` Play ([ENACTS.md](../02-company/khai-plays/the-spare-projector/ENACTS.md), [PROMPTBOOK.md](../02-company/khai-plays/the-spare-projector/PROMPTBOOK.md)) at [The Astor Lobby & Booth Stairwell](../02-company/khai-plays/the-spare-projector/places/astor-threshold.md) with Booth Projectionist [Mara Chen](../02-company/khai-plays/the-spare-projector/personas/mara-chen.md) (holding [The Booth Extension Phone](../02-company/khai-plays/the-spare-projector/pieces/astor-booth-phone.md)) and Front-of-House Lead [Devon Reyes](../02-company/khai-plays/the-spare-projector/personas/devon-reyes.md) (holding [The Marquee Easel & Cash Till](../02-company/khai-plays/the-spare-projector/pieces/lobby-easel-and-till.md) with an `~18`-ticket cash float).
   - Links `[Rialto Spare · run-01](../../archives/khai-plays/rialto-spare/run-01/performance.md)` in [ENACTS.md](../02-company/khai-plays/the-spare-projector/ENACTS.md#L37-L40) and stages both timings (**Before Plot 1** vs. **Between Plots**) from the same Play and Promptbook.

---

## 2. Capture (`02-company/archives/khai-plays/rialto-spare/run-01/`)

A fresh `khai-director` context staged [Rialto Spare](../02-company/khai-plays/rialto-spare/ENACTS.md) once (`5` cast turns across two isolated performer sub-contexts, with zero access to *The Spare Projector*’s files) and lodged:
- [transcript.md](../02-company/archives/khai-plays/rialto-spare/run-01/transcript.md) — complete captured performance and `# Director’s Capture Note`.
- [performance.md](../02-company/archives/khai-plays/rialto-spare/run-01/performance.md) — `TO LOAN` card recording Tomas and Nadia’s unsteered `6:59 PM` refusal to release `The Bench Spare` tonight (`HOLD — M2 STANDBY`), Nadia’s verbatim voicemail onto the Astor booth extension (including a conditional post-show holdover invitation for tomorrow), and four explicit unresolved operational questions.

---

## 3. Rehearse (`04-runs/`)

Four fresh `khai-director` contexts staged [The Spare Projector](../02-company/khai-plays/the-spare-projector/ENACTS.md) (`2 × 2 = 4` runs, two isolated performer sub-contexts per run), holding the receiving Play, Company, Promptbook, Pitch ([Wet Marquee](../02-company/khai-plays/the-spare-projector/pitches/wet-marquee.md)), Plot order, in-world channel ([The Booth Extension Phone](../02-company/khai-plays/the-spare-projector/pieces/astor-booth-phone.md) → Mara Chen alone), and Nadia’s verbatim `6:59 PM` message fixed:

| Timing | Runs | Packet & On-Disk Isolation Enforcement |
| --- | --- | --- |
| **Before Plot 1** | [01-before-plot-1-a.md](../04-runs/01-before-plot-1-a.md), [02-before-plot-1-b.md](../04-runs/02-before-plot-1-b.md) | `performance.md` present at Plot 1 opening; `transcript.md` and `rialto-spare/` completely omitted from run workspace. |
| **Between Plots** | [03-between-plots-a.md](../04-runs/03-between-plots-a.md), [04-between-plots-b.md](../04-runs/04-between-plots-b.md) | **Two-phase disk gate:** `archives/` kept physically empty (`0` files) throughout Plot 1 until the locked Plot 1 transcript was saved (`7:21 PM` / `7:22 PM`); `performance.md` (`transcript.md` still omitted) copied into `archives/khai-plays/rialto-spare/run-01/` only at the Plot 2 handoff. |
