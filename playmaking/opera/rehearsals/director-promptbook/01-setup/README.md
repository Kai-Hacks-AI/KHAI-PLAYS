# Rehearsal Setup · Move Reusable Promptbooks to the Director

Test whether a single reusable, Play-agnostic [Promptbook](../02-company/promptbook.md) owned and authored by [khai-director](../../../skills/khai-director/SKILL.md) can govern two structurally and tonally distinct [khai-playwright](../../../skills/khai-playwright/SKILL.md) Plays without Play-owned Promptbooks or Play-specific staging clauses.

- **Tested commits (`opera-director-promptbook`):** `7fdcf95441c518449a02c3ca35a08c9e49687937` (*Move reusable Promptbooks to the Director*) fast-forwarded to `ba3f3c7e2a929de1d3a8f3b4d3bde48830302f16` (*Define the Director’s staging limit in the Promptbook*).
- **Skills under test:**
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md) with relocated [promptbook.md](../../../skills/khai-director/references/promptbook.md) and its five `HACKS` chapters ([human.md](../../../skills/khai-director/references/human.md), [agent.md](../../../skills/khai-director/references/agent.md), [collaboration.md](../../../skills/khai-director/references/collaboration.md), [knowledge.md](../../../skills/khai-director/references/knowledge.md), [system.md](../../../skills/khai-director/references/system.md#staging-limit)).
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) with updated [choosing-material.md](../../../skills/khai-playwright/references/choosing-material.md#L14) and [play.md](../../../skills/khai-playwright/references/play.md) (where the Director owns the Promptbook and a Play links to a suitable shared Promptbook).

## 1. Author One Reusable Promptbook (`khai-director`)

In a clean-room context with access only to [khai-director](../../../skills/khai-director/SKILL.md) and its `references/` (zero Play briefs or domain hints), have `khai-director` write one reusable [promptbook.md](../02-company/promptbook.md) for an ensemble multi-Plot chamber Play witnessed by a silent Human:

- Express every condition strictly in terms of participation, roles, cues, scene handoffs, isolated performer knowledge, observable evidence, read-only `Plan` assessment, and binding `System` overrides—with **zero** Play-specific character names, places, objects, or plot events.
- Fix a single staging limit (`Staging limit: 0%`) in `## System` across the entire rehearsal so staging-freedom variance stays orthogonal to reuse testing.

## 2. Author Two Distinct Plays Linking the Same `promptbook.md` (`khai-playwright`)

In two separate clean-room `khai-playwright` contexts, supply the read-only [promptbook.md](../02-company/promptbook.md) (`sha256: da71b581f42b814164ad45f4a934110d3fc20611053bf5c1ef7c7be8cae3a949`) and author two contrasting two-Plot Plays that both link `[Promptbook](../promptbook.md)` without creating any Play-owned Promptbook:

| Play | Folder | Cast & Setting Shape | Dramatic & Procedural Shape |
| --- | --- | --- | --- |
| **Play A:** [Frost Line at Glasshouse Three](../02-company/greenhouse-frost/play.md) | `02-company/greenhouse-frost/` (`15` files) | **2 Personas** across **2 Places** (`Basement Boiler Vault` → `Glasshouse Three Corridor`) | Quiet botanical realism (`12:10 AM` → `12:40 AM`): blind low-water steam triage downstairs followed by frost-bell thermometer and ledger reckoning upstairs. |
| **Play B:** [Hold Three on the Ebb](../02-company/harbor-manifest/play.md) | `02-company/harbor-manifest/` (`18` files) | **3 Personas** inside **1 Place** (`Tide-Gate Customs Office`) | Clipped maritime procedural realism (`6:40 PM` → `6:55 PM` before `7:00 PM` sill cutoff): three-way statutory co-signature deadlock over a replaced hatch seal tag (`#774`). |

## 3. Rehearse (`2 × 2 = 4` Fresh `khai-director` Runs)

Stage each Play twice in fresh, isolated `khai-director` contexts using the **byte-for-byte identical** [promptbook.md](../02-company/promptbook.md) (`0%` staging limit) and separate performer contexts for every cast member:

| Run | Play | Cast Size & Places | Transcript |
| --- | --- | --- | --- |
| `01` | *Frost Line at Glasshouse Three* (Run A) | `2` Personas · `2` Places | [01-greenhouse-a.md](../04-runs/01-greenhouse-a.md) |
| `02` | *Frost Line at Glasshouse Three* (Run B) | `2` Personas · `2` Places | [02-greenhouse-b.md](../04-runs/02-greenhouse-b.md) |
| `03` | *Hold Three on the Ebb* (Run A) | `3` Personas · `1` Place | [03-harbor-a.md](../04-runs/03-harbor-a.md) |
| `04` | *Hold Three on the Ebb* (Run B) | `3` Personas · `1` Place | [04-harbor-b.md](../04-runs/04-harbor-b.md) |

## 4. Review

Use SCORE to evaluate:
1. Where the shared Director-owned [promptbook.md](../02-company/promptbook.md) carried both Plays cleanly across cast sizes (`2` vs. `3`), venue topologies (`2` Places vs. `1` Place), and Pitches.
2. Where any Director had to make a micro-decision or navigate an edge at `0%`.
3. Whether either Play required any bespoke Promptbook instruction.
4. What minimal refinements, if any, the relocated `khai-director/references/` Promptbook guides need.
