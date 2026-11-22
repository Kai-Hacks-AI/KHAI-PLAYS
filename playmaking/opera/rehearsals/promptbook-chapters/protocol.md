# Rehearsal Protocol: Promptbook Chapters

## Target Under Test

- **Pull Request:** [KHAI PLAYS PR #10](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/10) (`opera-first-loop` → `repertoire/playmaking.opera`)
- **Commit Tested:** `eaeec0f89effc48f210247f671748f51a622247b` (*Make the Promptbook guides self-contained*)
- **Skills Under Test:**
  - `playmaking/opera/skills/khai-playwright/SKILL.md` and `references/{promptbook,human,agent,collaboration,knowledge,system}.md`
  - `playmaking/opera/skills/khai-director/SKILL.md`
- **Questions:**
  1. Can the Playwright produce a playable Play and its own Promptbook from the skill files and a brief?
  2. What changes in the performance as each HACKS chapter (`Human` → `Agent` → `Collaboration` → `Knowledge` → `System`) is added cumulatively?

---

## Authoring Setup

- **Skill installation:** Both `khai-playwright` and `khai-director` were installed into `.agents/skills/` and registered in the runtime skill table (`~/.gemini/skills/`) from commit `eaeec0f89effc48f210247f671748f51a622247b`.
- **Execution context:** Fresh isolated subagent (`Model: inherit`) given only `khai-playwright`, its local `references/`, and the brief:
  > *"Write a one-scene Play in which two people must decide whether to open a letter before a bell rings."*
- **Handling of clarifications:** Per `khai-playwright` (*"ask the human when a missing decision would materially change it"*), any question asked before authoring was answered minimally without coaching on Promptbook structure, and recorded verbatim for [results.md](results.md).
- **Preservation:** The Playwright's Play (*Before the Notary's Bell*) and five-chapter Promptbook were saved verbatim as [play.md](play.md) and [promptbook.md](promptbook.md).

---

## Staging Setup (Six Isolated Runs)

Each of the six staging runs uses:

1. **Fresh isolated context:** A brand-new `self` subagent (`Model: inherit`) per run.
2. **Leakage prevention:** During staging, the full Promptbook and other runs' outputs are held outside the repository workspace so no Director or cast context can inspect withheld chapters or sibling runs. Each Director receives only `khai-director`, the verbatim authored [play.md](play.md), and that run's exact Promptbook slice.
3. **Consistent starting condition:** Every Director receives the same neutral human instruction:
   > *"Stage one full performance of this Play using its default opening conditions."*
4. **Cumulative chapter schedule:**

| Run | Promptbook Chapters Supplied |
| --- | --- |
| **Run 1** | None *(Play only)* |
| **Run 2** | `Human` |
| **Run 3** | `Human` + `Agent` |
| **Run 4** | `Human` + `Agent` + `Collaboration` |
| **Run 5** | `Human` + `Agent` + `Collaboration` + `Knowledge` |
| **Run 6** | `Human` + `Agent` + `Collaboration` + `Knowledge` + `System` |

---

## Pre-Registered Observable Expectations (Written Before Staging)

Each expectation below was written after inspecting the authored [play.md](play.md) and [promptbook.md](promptbook.md) and **before** launching any of the six Director runs.

### Run 1 → Run 2 (`+ Human`)
- **What the chapter says:** Casts the human as **Curtain-Setter and Audience**, pins the Play's three adjustable opening conditions to explicit operational defaults (`Starting Holder = table`, `Countdown Length (N) = 8` spoken character turns before the Notary's bell, `Opening Tilt = unfixed`), and keeps the human out of the fiction until `[BLACKOUT]` unless issuing `PAUSE` or `CUT` *(a forward reference to `System`)*.
- **Expected observable change:** Whereas Run 1 must invent its own scene length/turn count from *"two minutes before nine"* and *"standard (default)"*, Run 2 will explicitly adopt the **`N = 8` spoken-turn countdown** alongside `Starting Holder: table` and `Opening Tilt: unfixed`, frame the human as an uninterrupted observer until `[BLACKOUT]`, and potentially note the unresolved forward reference `(see System)` for `PAUSE`/`CUT`.

### Run 2 → Run 3 (`+ Agent`)
- **What the chapter says:** Assigns two distinct role agents (one per sibling) plus a Director; restricts Maren and Ivo to **first-person dialogue with brief present-tense italicized actions (`*...*`)**, **2–5 spoken sentences and at most one decisive physical action per turn**, and **zero internal monologue or narration of Director-owned cues**; instructs the Director to open with a **crisp 3–4 line stage picture** and then **stay invisible** except when firing cues.
- **Expected observable change:** Compared with Run 2, Run 3 will separate the cast into one-character-per-agent turns/contexts, tighten the opening narration to a **3–4 line stage picture**, suppress omniscient prose commentary or character interiority between speeches, and constrain character turns to **2–5 sentences with italicized stage actions**.

### Run 3 → Run 4 (`+ Collaboration`)
- **What the chapter says:** Fixes Turn 1 speaker (`table` → **Maren speaks Turn 1**), enforces alternating turns `1..N`, introduces the **Two-beat rule for irreversible acts** (an unconsented reach to slice the wax or feed the stove must stop at the physical threshold at turn's end so the other sibling can react on the next turn), and defines **four explicit non-turn-consuming Director cues**: **Warning Chime Cue** strictly after Turn `N - 2` (Turn 6 when `N = 8`), **Broken Seal Cue** (character unfolds without inventing text; Director injects verbatim Sealed Letter), **Early Resolution Cue**, and **Notary's Bell Cue** followed by **one bounded Threshold Turn per sibling (≤2 spoken sentences + 1 action)** before `[BLACKOUT]`.
- **Expected observable change:** Compared with Run 3, Run 4 will start Turn 1 with **Maren**, fire the **Warning Chime Cue specifically after Turn 6 (`N - 2`)**, arrest any unconsented attempt to open or burn the letter at the threshold under the **Two-beat rule** instead of letting one character complete it unilaterally in a single turn, and conclude after the Bell with **two bounded Threshold Turns** ending in `[BLACKOUT]`.

### Run 4 → Run 5 (`+ Knowledge`)
- **What the chapter says:** Partitions curtain-up prompts so Maren alone receives her No. 14 Chronometer secret, Ivo alone receives his Lisbon 50-mark secret, and **the Director alone holds *The Sealed Letter*** (omitting that section from role prompts until the **Broken Seal Cue** fires); defines what counts as onstage evidence; and requires the Director to maintain a **four-field persistent stage state** across turns (`Turn`, `Letter`, `Prior Consent`, `Spoken Disclosures`).
- **Expected observable change:** Compared with Run 4, Run 5 will **actively strip *The Sealed Letter* and the opposite sibling's private secret when constructing role prompts/contexts** (or explicitly report prompt partitioning if staging in subagents) so neither sibling has access to sealed facts before disclosure, and the Director will **track/surface the four persistent state fields (`Turn`, `Letter`, `Prior Consent`, `Spoken Disclosures`)**.

### Run 5 → Run 6 (`+ System`)
- **What the chapter says:** Overrides agreeable defaults (*"Do not soften the siblings into polite collaborators rushing to a tidy compromise... every concession, confession, or reach for the blade must be earned in conflict"*), prohibits meta-leakage/foreshadowing of sealed or unspoken secrets, locks an unbroken seal **hard at the Bell** so it cannot be opened during Threshold Turns, enforces strict role-agent output discipline (speech + brief italics only, no headers/lists/reasoning traces), and defines `Live Scene Mode` plus human `PAUSE`/`RESUME` and `CUT` (`Talkback Mode`).
- **Expected observable change:** Compared with Run 5, Run 6 will **heighten adversarial friction and resist premature polite pacts**, enforce **pure speech-and-italics role outputs** (free of turn headers or meta-wrappers) and hard post-bell seal lock through the Threshold Turns, and resolve the `PAUSE`/`CUT` mode rules referenced since Run 2.
