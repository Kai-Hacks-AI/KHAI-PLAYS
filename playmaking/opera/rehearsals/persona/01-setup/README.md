# Rehearsal Setup: TO PAST Persona

## Target Under Test

- **Pull Request:** [KHAI PLAYS PR #11](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/11) (`opera-persona` → `repertoire/playmaking.opera`)
- **Commit Tested:** `ca9737c82fd543ecd8b5c091cfe831d849394dcc` (*Add the TO PAST Persona template*)
- **Skills Under Test:**
  - `playmaking/opera/skills/khai-playwright/SKILL.md`
  - `playmaking/opera/skills/khai-playwright/references/persona.md` *(TO PAST: Taxonomy, Owner, Projection, Action, Shadow, Tell)*
  - `playmaking/opera/skills/khai-playwright/references/{promptbook,human,agent,collaboration,knowledge,system}.md`
  - `playmaking/opera/skills/khai-director/SKILL.md`

---

## Authoring Setup (`02-company/`)

- **Skill installation:** `khai-playwright` (including `references/persona.md`) and `khai-director` from `ca9737c82fd543ecd8b5c091cfe831d849394dcc` were installed in `.agents/skills/` and registered in the runtime skill table (`~/.gemini/skills/`).
- **Execution context:** Fresh isolated subagent (`Model: inherit`) given only `khai-playwright`, its local `references/`, and the brief:
  > *"Author two distinct Personas that can each occupy the same role, together with a Play and its Promptbook to test them across three short scenes and a closing bar scene:*
  > *1. Three short scenes in which one Persona is cast at a time, holding the counterpart, opening cue, and Promptbook fixed for each pair: Scene 1: someone they trust fails to show up when needed; Scene 2: they learn a loss is final; Scene 3: someone they thought they had lost returns. Give the circumstances and let the emotions emerge. Each short scene plays past the first response: after the opening cue, let the Persona act, let the counterpart respond, then give the Persona one chance to react to the consequence, and end the scene there.*
  > *2. Afterwards, a bar scene casting both Personas with separate actor contexts, where each actor carries the memory of their own day and discovers the other person's day in conversation. Opening cue: “You meet at the bar after a long day. One of you asks how it went.” Keep it to a few exchanges. Frame the shared role and the Scenes 1–3 counterparts so both Personas can meet naturally at the bar afterwards without colliding over sharing the exact same unique relative or proper-named individual."*
- **Authoring outcome:** Completed in one pass with **zero clarification questions** and **zero manual edits**, producing:
  - [persona-maren-solis.md](../02-company/persona-maren-solis.md) — **Maren Solis** (`House Lead`)
  - [persona-jude-callahan.md](../02-company/persona-jude-callahan.md) — **Jude Callahan** (`House Lead`)
  - [play.md](../02-company/play.md) — *After Handover*
  - [promptbook.md](../02-company/promptbook.md) — *Promptbook — After Handover*

---

## Staging Setup (`04-runs/`)

1. **Controlled Scene Pairs (`01`–`03`):**
   - Each short scene (`Scene 1 — After Walkthrough`, `Scene 2 — Noon Clearance`, `Scene 3 — Back Steps at Dusk`) is staged twice in separate, blind `khai-director` runs (`Model: inherit`)—once casting **Jude Callahan** and once casting **Maren Solis** as `House Lead`.
   - Across each pair (`01-jude` vs. `01-maren`, `02-jude` vs. `02-maren`, `03-jude` vs. `03-maren`), the scene definition, counterpart role, verbatim Opening Cue, and [promptbook.md](../02-company/promptbook.md) are held **identical**.
   - Every short scene runs strictly three turns after the Opening Cue (`Turn 1 House Lead → Turn 2 Counterpart → Turn 3 House Lead → Hard Cut`).
   - Within each Persona's stream (`01 → 02 → 03`), the `House Lead` carries forward the verbatim transcript of their own earlier Friday scenes while every Counterpart starts fresh with zero cross-scene or cross-Persona memory.

2. **Closing Bar Scene (`04-bar.md`):**
   - One `khai-director` run (`Model: inherit`) casting **Maren Solis** and **Jude Callahan** in two strictly isolated actor subagent contexts.
   - **Maren's actor** receives only [persona-maren-solis.md](../02-company/persona-maren-solis.md), Scene 4 of [play.md](../02-company/play.md), [promptbook.md](../02-company/promptbook.md), and Maren's own verbatim transcripts from Scenes 1–3 (`01-maren`, `02-maren`, `03-maren`).
   - **Jude's actor** receives only [persona-jude-callahan.md](../02-company/persona-jude-callahan.md), Scene 4 of [play.md](../02-company/play.md), [promptbook.md](../02-company/promptbook.md), and Jude's own verbatim transcripts from Scenes 1–3 (`01-jude`, `02-jude`, `03-jude`).
   - Opening cue held verbatim (*“You meet at the bar after a long day. One of you asks how it went.”*), left open for the Director to assign the opener per `Human`, capped at 3–4 exchanges (6–8 turns total).

---

## Pre-Staging Expectations (Written Before Staging)

- **Scene 1 (*Failed to show*):** Maren (`Action`: place one concrete condition/choice and go quiet; `Shadow`: locks people out into clean logistics before they can fail her twice) will likely separate `The Second` from keys or standing behind crisp operational terms, risking noon coverage or forcing cold compliance; Jude (`Action`: lightly name the unspoken stake; `Shadow`: avoids bolting doors for good) will likely probe what happened off-phone and negotiate a way to keep `The Second` covering noon, risking leaving the underlying debt trouble live or softening the citation boundary.
- **Scene 2 (*Final loss*):** Faced with an irreversible recorded deed, Jude's `Shadow` (*treats every dead end as still negotiable*) should collide directly with the closed door—pressing for an angle before signing or resisting the finality—triggering his `Tell` (soundless nose-laugh + two-finger tap); Maren's `Shadow` (*converts helplessness into clean logistics to bear the load alone*) should pivot rapidly to signing the release and taking tonight's workshop strip-out and notice delivery onto her own shoulders rather than letting a trust clerk enter her house, triggering her `Tell` (left thumb blanching against her ring-finger knuckle).
- **Scene 3 (*Unexpected return*):** At the dusk screen door, Maren's drive for clean rules and fear of needing/re-opening old breaches will test `The Former Resident` with direct conditions rather than warmth, while Jude's warmth and reluctance to close a door will invite them in easily—testing how `The Former Resident` responds to plain adult terms vs. disarming grace.
- **Scene 4 (*The bar*) & Skill Seams to Watch:**
  - In retrospection, Maren should report her Friday as dry operational inventory (minimizing personal sting while her thumb-knuckle `Tell` betrays load), whereas Jude should lead with dry humor or partial deflection until pressed on what couldn't be negotiated.
  - Watch two structural seams already visible in the authored Company: (1) whether single `Action` and single `Tell` fire selectively under `Shadow` pressure or repeat mechanically on every turn across four scenes, and (2) how Directors handle `play.md` placing Counterpart secrets (such as `The Second`'s debt collector and `The Former Resident`'s fallen-through room) inside `Reasons to Act` when `promptbook.md` (`Knowledge`) specifies Counterpart isolation but does not explicitly instruct redacting Counterpart `Reasons to Act` from the `House Lead` packet.
