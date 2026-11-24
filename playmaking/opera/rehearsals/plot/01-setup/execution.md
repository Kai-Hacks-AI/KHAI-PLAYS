# Execution Record: TO CAST in *The Wrong Name*

This file records the tested commit, authored Company, paired `TO CAST` Plots, and isolated staging conditions used to execute [01-setup/README.md](README.md) on [KHAI PLAYS PR #21](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/21).

## Target Under Test

- **Branch & Commit Tested:** `opera-plot` at `7704e2a4164890483cd57c74725229b650aa4661` (*Add TO CAST and prepare The Wrong Name rehearsal*)
- **Skills Under Test:**
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) with [plot.md](../../../skills/khai-playwright/references/plot.md) (`TO CAST`: `Taxonomy`, `Owner`, `Cue`, `Action`, `Stage`, `Tension`), [persona.md](../../../skills/khai-playwright/references/persona.md) (`TO PAST`), [piece.md](../../../skills/khai-playwright/references/piece.md) (`TO PLAY`), [place.md](../../../skills/khai-playwright/references/place.md) (`TO SHOW`), [process.md](../../../skills/khai-playwright/references/process.md) (`TO IDLE`), and [promptbook.md](../../../skills/khai-playwright/references/promptbook.md) (`HACKS`)
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md)

---

## 1. Create (`02-company/`)

A fresh `khai-playwright` context received only [README.md](README.md) and the pinned skills above, without access to legacy `khai-arch` templates, other rehearsals, or repository history. It authored the seven-file Company, two `TO CAST` Plots, and [authoring-note.md](../02-company/authoring-note.md) (withheld from all Director and performer contexts):

- **Play & Promptbook:** [play.md](../02-company/play.md) (*The Wrong Name*), [promptbook.md](../02-company/promptbook.md) — both reference the active [plot.md](../02-company/plot.md) generically with zero mention of an alternate Plot, and define the invariant **Opening (`2:12 p.m.`)**, **Entrance Cue**, and split **Discovery Cue** (`Public Stage View` vs. Theo-only `Private Visual View`).
- **Personas (`TO PAST`):**
  - [persona-ceremony-lead.md](../02-company/persona-ceremony-lead.md) (*Marta Solis*, Events Chair at the live oak lectern keeping the twenty-minute dedication moving ahead of a `2:20 p.m.` press departure and `2:30 p.m.` room turnover after promising widower Samuel Okafor a brief, dignified tribute)
  - [persona-plaque-lead.md](../02-company/persona-plaque-lead.md) (*Theo Park*, Dedication Steward beside the veiled wall who privately approved the foundry’s `4:45 p.m.` rush PDF proof alone on his phone without the required second reviewer and assured Marta and the board he checked every letter)
- **Place (`TO SHOW`):** [place-hall.md](../02-company/place-hall.md) (*Alder Street Neighborhood Hall*, single-room hall with forty seated neighbors holding *Honoring Miriam Okafor (1948–2025)* programs, a switched-on gooseneck microphone two paces right of the wall-bolted plaque, four reserved family chairs six feet in front, rear double glass doors on a center aisle, and no backstage wings)
- **Piece (`TO PLAY`):** [piece-plaque.md](../02-company/piece-plaque.md) (*The Dedication Plaque*, veiled beneath weighted navy velvet and a braided brass draw-cord; cast across its unseen 1.5-inch top header as **`MARIAM OKAFOR`** instead of **`MIRIAM OKAFOR`**)
- **Process (`TO IDLE`):** [process-unveiling.md](../02-company/process-unveiling.md) (*The Unveiling Ceremony*, already underway at `2:12 p.m.` and advancing from Marta’s closing welcome into the cord pull, reading, and `2:20 p.m.` newspaper photograph unless halted at public cost)
- **Two Plots (`TO CAST`):**
  - [plot-before-entrance.md](../02-company/plot-before-entrance.md) (**Before the entrance**)
  - [plot-after-entrance.md](../02-company/plot-after-entrance.md) (**After the entrance**)

**Pre-staging verification & spoiler hygiene:**
- Before staging, [piece-plaque.md](../02-company/piece-plaque.md) (`## Apparent` vs. `## Yearbook`) and [process-unveiling.md](../02-company/process-unveiling.md) (`## Echo`) were aligned so public world sections stayed completely free of `MARIAM OKAFOR`, gating the foundry typo inside `## Yearbook` until the **Discovery Cue** fired.
- Verified via `git diff --no-index -U0` that [plot-before-entrance.md](../02-company/plot-before-entrance.md) and [plot-after-entrance.md](../02-company/plot-after-entrance.md) are **byte-for-byte identical across H1, `Taxonomy`, `Owner`, `Cue`, `Action`, starting placement in `Stage`, and `Tension`**, differing solely on line 23 (`## Stage`), where the exact **Discovery Cue** and **Entrance Cue** clauses swap around `After one beat,`.

---

## 2. Rehearse (`04-runs/`)

Each Plot was staged twice (`2 × 2 = 4` runs) in fresh, isolated `khai-director` contexts (`Model: inherit`), each driving two isolated `research` performer sub-contexts (`Marta Solis` and `Theo Park`) whose on-disk cast packets (`cast-marta/`, `cast-theo/`) contained zero occurrences of `MARIAM`:

| Active Plot (`plot.md` in packet) | Event Order in `## Stage` (line 23) | Runs |
| --- | --- | --- |
| **Before the entrance** ([plot-before-entrance.md](../02-company/plot-before-entrance.md)) | `Discovery Cue` → one beat (`Turns 1–2`) → `Entrance Cue` → Open Exchange → Consequence | [01-before-entrance-a.md](../04-runs/01-before-entrance-a.md) (`6` turns), [02-before-entrance-b.md](../04-runs/02-before-entrance-b.md) (`6` turns) |
| **After the entrance** ([plot-after-entrance.md](../02-company/plot-after-entrance.md)) | `Entrance Cue` → one beat (`Turns 1–2`) → `Discovery Cue` → Open Exchange → Consequence | [03-after-entrance-a.md](../04-runs/03-after-entrance-a.md) (`6` turns), [04-after-entrance-b.md](../04-runs/04-after-entrance-b.md) (`7` turns) |

**Fixed across all 4 runs:**
- Identical Director prompt and Human brief (`"Stage *The Wrong Name* from the 2:12 p.m. opening in play.md with the active Plot in plot.md while I watch."`), identical `2:12 p.m.` Opening, verbatim **Entrance Cue** (Samuel and Tomi Okafor entering to the front row six feet from the plaque), verbatim **Discovery Cue** (`Public Stage View` to the room; `Private Visual View` of **`MARIAM OKAFOR`** exclusively to Theo), unsteered volunteer decisions, and play through one immediate consequence once both events happened.
