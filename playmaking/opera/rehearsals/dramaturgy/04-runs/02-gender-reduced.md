# Director Gap Report — Staging Halted Before Curtain (`0%` Staging Limit)

**Play:** *Before the Bar Closes* (`play/play.md`)
**Opening Plot:** *The Flood-Gate Desk* (`play/plot_opening_clearance.md`)
**Disposition:** **Stopped before opening the curtain.** Zero `dram-performer` subagents were spawned, and no replacement reading was invented.

---

## 1. Unmet Authored & Pattern Requirement

**Missing condition:** `play/persona_clara_dane.md` (**Warden Clara Dane**) fails to wire a room-assigned Gender expression Position (`fixtures/ChBrain-khai/packages/engines/gender/position_female.md` or `fixtures/ChBrain-khai/packages/engines/gender/position_male.md`) in `## Projection` (or any concealed Gender reading in `## Shadow`), leaving one of the two cast Personas ungendered at curtain rise in direct contradiction to both the Play's own contract and the borrowed `Gender` Pattern.

### Specific Conflicts Identified

1. **Borrowed Pattern requirement (`fixtures/ChBrain-khai/packages/engines/gender/position_gender.md`):**
   - `## Has` establishes that gender is *"A structural read that arrives with the body, before any word. A frame the room enacts before the persona consents to it."*
   - `## Orders` requires each Persona under the anchor Position to *"Carry the read to be `female` (`position_female.md`) or `male` (`position_male.md`)."*
   - `## Loses` removes *"The option of entering the room ungendered."*

2. **Play-level contract (`play/play.md`):**
   - Frontmatter `description`: states the collision occurs *"after the room assigns each body a gendered reading before a word is spoken."*
   - `## Company — Borrowed Pattern Material`: explicitly declares, *"Each Persona card wires its own room-assigned expression (and any concealed reading) in the sections owned by that card; those reads are already in force when the curtain rises."*
   - `## Triggers — Start of The Flood-Gate Desk`: fixes at curtain rise *"the silent opening beat in which the room assigns and displays its reading of both Personas before either speaks."*

3. **Asymmetry and omission in Company & Plot files (`play/persona_clara_dane.md`, `play/persona_maren_voss.md`, `play/plot_opening_clearance.md`):**
   - `play/persona_maren_voss.md` properly wires `fixtures/ChBrain-khai/packages/engines/gender/position_male.md` in `## Projection` (the room's pre-speech read, echoed in `play/plot_opening_clearance.md` `## Stage` step 2 when the watchroom unlatches the **Masters' Chart Well** gate on sight) and `fixtures/ChBrain-khai/packages/engines/gender/position_female.md` in `## Shadow`.
   - `play/persona_clara_dane.md` links `play/piece_clearance_ledger.md` in `## Action`, uses strictly gender-neutral phrasing (`Dane` / `Dane's`) across `## Projection`, `## Action`, `## Shadow`, and `## Tell`, and **links no Gender Position file anywhere on the card**. Similarly, `play/plot_opening_clearance.md` (`## Stage` step 1) places Dane behind the counter alongside circumstantial room details (unsorted pilot chits and tea tallies on the blotter corner; propped door to the senior Harbor Master's empty chair) without an authored Gender Position wired to Dane's `## Projection`.

---

## 2. Files and Sections Checked

- **Director & Promptbook rules:**
  - `director-brief.md`
  - `promptbook.md` (`## Human`, `## Agent`, `## Collaboration`, `## Knowledge`, `## System`)
  - `skills/khai-director/SKILL.md` and `skills/khai-director/references/promptbook.md`, `skills/khai-director/references/system.md` (`#staging-limit`), `skills/khai-director/references/human.md`, `skills/khai-director/references/agent.md`, `skills/khai-director/references/collaboration.md`, `skills/khai-director/references/knowledge.md`, `skills/khai-director/references/performance.md`, and `skills/khai-playwright/references/pitch.md`
- **Play & Company files:**
  - `play/play.md` (frontmatter, `## Estate`, `## Name`, `## Arc`, `## Company`, `## Triggers`, `## Stakes`)
  - `play/plot_opening_clearance.md` (`## Taxonomy`, `## Owner`, `## Cue`, `## Action`, `## Stage`, `## Tension`)
  - `play/persona_maren_voss.md` (`## Taxonomy`, `## Owner`, `## Projection`, `## Action`, `## Shadow`, `## Tell`)
  - `play/persona_clara_dane.md` (`## Taxonomy`, `## Owner`, `## Projection`, `## Action`, `## Shadow`, `## Tell`)
  - `play/place_harbor_office.md` (`## Taxonomy`, `## Owner`, `## Shown`, `## Holds`, `## Offers`, `## Withheld`)
  - `play/piece_clearance_ledger.md` (`## Taxonomy`, `## Owner`, `## Place`, `## Load Bearing`, `## Apparent`, `## Yearbook`)
  - `play/pitch_bar_watch.md` (`## Taxonomy`, `## Owner`, `## Tenor`, `## Undertow`, `## Nerve`, `## Echo`)
- **Borrowed Pattern files (`KAI HACKS AI`):**
  - `fixtures/ChBrain-khai/packages/engines/gender/README.md`
  - `fixtures/ChBrain-khai/packages/engines/gender/position_gender.md` (`## Taxonomy`, `## Owner`, `## Has`, `## Orders`, `## Loses`, `## Drives`)
  - `fixtures/ChBrain-khai/packages/engines/gender/position_female.md` (`## Taxonomy`, `## Owner`, `## Has`, `## Orders`, `## Loses`, `## Drives`)
  - `fixtures/ChBrain-khai/packages/engines/gender/position_male.md` (`## Taxonomy`, `## Owner`, `## Has`, `## Orders`, `## Loses`, `## Drives`)

---

## 3. Why Resolution Belongs to the Playwright

1. **`0%` staging limit (`promptbook.md` `## System` & `skills/khai-director/references/system.md#staging-limit`):** The Director must keep all authored and borrowed files read-only and may introduce **zero unauthored room readings or standing-regime facts**. Inferring Dane's room-assigned Gender from a given name ("Clara") or from ambient desk props (tea tallies, pilot-bench complaints) would invent an unauthored structural read—especially in a Play where "Maren" Voss's own card explicitly separates given name, `## Shadow` (`position_female.md`), and the room's public `## Projection` (`position_male.md`).
2. **Performer scoping (`promptbook.md` `## Knowledge`):** Isolated cast contexts require giving Dane's performer Dane's own linked Position expression(s) (`Has`, `Orders`, `Loses`, `Drives`) and giving Voss's performer the room's public `Projection` of Dane. Staging Dane without a Gender Position violates `fixtures/ChBrain-khai/packages/engines/gender/position_gender.md` (`## Loses`: no option of entering the room ungendered) and `play/play.md` (`## Company` & `## Triggers`), while supplying `position_female.md` or `position_male.md` (with or without a contrasting `## Shadow`) alters the dramatic engine of the counter collision (`accommodation/duty` friction vs. `claim/abdication` penalty).
3. **Decision returned to the Playwright:** The Playwright must update `play/persona_clara_dane.md` (and, if desired for pre-speech clarity, `play/plot_opening_clearance.md` `## Stage`) to explicitly wire the room's pre-speech Gender assignment (`fixtures/ChBrain-khai/packages/engines/gender/position_female.md` or `fixtures/ChBrain-khai/packages/engines/gender/position_male.md`) in `## Projection` and specify any concealed Gender relation, if applicable, in `## Shadow` before the Director opens the curtain under `0%`.
