# Rehearsal Results: Promptbook Chapters

Rehearsal of [KHAI PLAYS PR #10](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/10) at commit `eaeec0f89effc48f210247f671748f51a622247b` on `opera-first-loop`, following [protocol.md](protocol.md) on the authored [play.md](play.md) (*Before the Notary's Bell*) and [promptbook.md](promptbook.md).

---

## 1. Summary Answers to the Two Questions

### Question 1: Can the Playwright produce a playable Play and its own Promptbook?
**Yes.** From the compact `khai-playwright` skill, its six local `references/*.md` files, and the one-sentence brief, the Playwright paused once to resolve three genuine structural forks (human participation mode, invented vs. supplied world, and Play-authored vs. fresh per-run letter text) and then produced:
- A complete, playable one-scene Play ([play.md](play.md), *Before the Notary's Bell*) featuring symmetric time-locked ruin (Chancery sequestration costing Maren's workshop lease and Ivo's afternoon berth on the *Kestrel*), asymmetric private secrets, physical table geometry preventing unopposed action, and a **two-stage dramatic engine**—opening Anselm's letter resolves both siblings' financial dreads while creating an immediate *second* dilemma over whether to keep or burn Anselm's blindness confession before the bell.
- A five-chapter HACKS Promptbook ([promptbook.md](promptbook.md)) in exact `Human → Agent → Collaboration → Knowledge → System` order whose instructions were directly actionable by six independent Director instances without a single emergency rewrite to the Play.

### Question 2: What changes in the performance as we add each HACKS chapter?
The authored Play and `khai-director` alone already establish dramatic coherence, role-level epistemic isolation (every Director chose to run Maren and Ivo in separate actor subagents and withhold *The Sealed Letter*), and an improvised brink rule for contested props. Adding the five HACKS chapters cumulatively converts **improvised Director staging choices** into **repeatable runtime invariants**, one layer at a time:

| Run | Chapters Supplied | Turn 1 Speaker | Pre-Bell / Total Turns | Actor Turn Format | Confession Sequence | Fate of Opened Letter | Key New Behavior / Finding |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [**Run 1**](run-1-play-only.md) | None *(Play only)* | **Ivo** | **9** pre-bell / **11** total | `*(parentheticals)*` + mid-speech actions; up to 6–7 sentences; ends `*Blackout.*` | Ivo (T5) → Maren (T6); wax cut T7 | **Burned in stove** by Ivo (T9) | Director invents beat duration, first speaker, and brink rule; catches `12 yr` vs `6 yr` timeline slip & Clause 4 threshold ambiguity. |
| [**Run 2**](run-2-human.md) | `Human` | **Maren** | **8** pre-bell / **10** total | `*[Bracketed blocks]*` + split actions; ends `BLACKOUT.` | Maren hints (T5) → Ivo pledges (T6); wax cut T6 | **Pocketed in coat** by Ivo (T8); husks burned | Locks `N = 8` countdown, `table`, `unfixed`; flags dangling `(see **System**)` and the 4 missing `Collaboration` mechanics. |
| [**Run 3**](run-3-agent.md) | `Human` + `Agent` | **Maren** | **8** pre-bell / **10** total | Unbracketed `*italics*`, 3–4 sentences, 1 action/turn; 4-line opening picture; `` `[BLACKOUT]` `` | Mutual blind oaths (T3–T4); **no pre-open confession**; wax cut **T5** | **Pocketed in coat** by Ivo (T8); empty envelope burned | Enforces 4-line opening stage picture & tight italicized dialogue; flags single-turn action vs. two-step interception gap. |
| [**Run 4**](run-4-collaboration.md) | `+ Collaboration` | **Maren** *(by rule)* | **8** pre-bell + **2** Threshold | Quoted speech + 1 `*italic*` action; verbatim Warning Chime after T6 (`N - 2`) | Ivo (T4) → Maren (T5, blade to wax + explicit consent) → Ivo cuts **T6** | **Burned in stove** by Ivo (T8) after Maren's T7 consent | Eliminates missing-mechanic gaps; enforces explicit Two-beat consent & 2-sentence Threshold Turns; surfaces `N - 2` cue-collision & Early-Resolution speaker edge cases. |
| [**Run 5**](run-5-knowledge.md) | `+ Knowledge` | **Maren** *(by rule)* | **8** pre-bell + **2** Threshold | Inline `**Name:** *action* speech` under `**Turn k**` headers | Ivo (T4) → Maren (T5) → Ivo cuts **T6** | **Burned in stove** by Ivo (T8) | Tracks 4 persistent state fields (`Turn`, `Letter`, `Prior Consent`, `Spoken Disclosures`); **uncovers partition leak** in `play.md` shared sections. |
| [**Run 6**](run-6-system.md) | `+ System` *(Full)* | **Maren** *(by rule)* | **8** pre-bell + **2** Threshold | Pure `**Name:** *action* speech` (**zero turn headers**) | Ivo **rejects verbal oath** (T4) → **Maren first (T5)** → Ivo (T6, cuts wax) | **Burned in stove** by Ivo (T8) | Strips all turn headers (`Output discipline`), forces hard collateral before oaths (`Override agreeable defaults`), resolves `PAUSE`/`CUT`, and catches subagent turn-lock hazard. |

---

## 2. Authoring Record: Clarifications & Manual Help

- **Skill setup:** `khai-playwright` and `khai-director` were installed in `.agents/skills/` and registered in the runtime skill table (`~/.gemini/skills/`).
- **Clarification requested by Playwright:** Following `khai-playwright` (*"ask the human when a missing decision would materially change it"*), the Playwright paused once before drafting and asked three concise questions:
  > 1. **The human's role in performance:** Should the human play one of the two people, stay offstage with a live hand in the scene (for instance, supplying the sealed letter or triggering the bell), or set the scene in motion and watch two agents play both roles?
  > 2. **Setting and stakes:** Do you have a specific world, relationship between the two people, or meaning for the bell and the letter in mind, or should I invent those?
  > 3. **The letter's contents:** If they choose to open the letter before the bell rings, should its text be authored as part of the Play (kept sealed until opened) or provided fresh at the start of each performance?
- **Reply given:**
  > 1. Have the human set the scene in motion (choosing any opening conditions before the scene starts) and watch two agents play both roles.
  > 2. Invent the setting, relationship, and meaning of the bell and letter yourself.
  > 3. Author the letter's text as part of the Play, kept sealed until opened.
- **Manual help or post-editing:** **None.** The Playwright produced [play.md](play.md) and [promptbook.md](promptbook.md) in a single pass after that reply; both were saved verbatim without editing a character.

---

## 3. Adjacent-Run Comparisons

### 3.1 Run 1 (`None`) → Run 2 (`+ Human`)

- **Pre-registered expectation ([protocol.md](protocol.md)):** Whereas Run 1 must invent its own scene length/turn count from *"two minutes before nine"* and *"standard (default)"*, Run 2 will adopt the **`N = 8` spoken-turn countdown** with `Starting Holder: table` and `Opening Tilt: unfixed`, frame the human as an uninterrupted observer until `[BLACKOUT]`, and likely flag the unresolved forward reference `(see **System**)` for `PAUSE`/`CUT`.
- **Observed changes (Expectation confirmed):**
  1. **Parameterized countdown and turn count:** Run 1 noted that `play.md` *"leaves 'standard' clock duration unquantified in dialogue beats"*, chose **Ivo** to speak Turn 1, and ran **9 pre-bell turns** (11 total) closing with `*Blackout.*`. Run 2 immediately bound its header and pacing to `Human`'s exact parameters (`Starting Holder: table`, `Countdown Length (N): 8 spoken character turns`, `Opening Tilt: unfixed`), ran **8 pre-bell turns** (10 total), and closed with `BLACKOUT.`
     - *Run 1 Director Note:* `"leaves 'standard' clock duration unquantified in dialogue beats. We assigned Turn 1 to Ivo... six turns of reckoning... breaking of the wax on Turn 7, two fallout beats... (Turns 8–9), and The Notary's Bell... (Turns 10–11)."`
     - *Run 2 Opening Header:* `"Starting Holder: table ... Countdown Length (N): 8 spoken character turns before the Notary's nine o'clock session bell ... Opening Tilt: unfixed"`
  2. **Forward-reference & missing-chapter detection:** Run 2's Director explicitly flagged line 10's dangling `(see **System**)` and `[BLACKOUT]` reference and enumerated the exact four operational rules still missing after `Human` alone (first speaker under `table`, warning chime turn index, turn-level physical interception protocol, and post-bell threshold turn accounting).
- **What stayed the same:** Both Directors independently instantiated two isolated actor subagents withholding *The Sealed Letter*, improvised a two-step brink rule from `play.md` Fixed Rule 4, and flagged the Clause 4 vs. line 84 threshold-disposal ambiguity in `play.md`. Stage directions remained unconstrained (`*(parentheticals)*` in Run 1; `*[Bracketed blocks]*` with split mid-turn actions in Run 2).

### 3.2 Run 2 (`Human`) → Run 3 (`+ Agent`)

- **Pre-registered expectation ([protocol.md](protocol.md)):** Run 3 will separate cast voices cleanly, tighten the opening narration to a **3–4 line stage picture** incorporating the human's conditions, suppress omniscient commentary between turns, and constrain character turns to **2–5 spoken sentences with brief present-tense italicized actions (`*...*`) and at most one decisive physical action per turn**.
- **Observed changes (Expectation confirmed):**
  1. **Custom 4-line opening stage picture:** Run 2 copied `play.md`'s *Opening Image* verbatim. Run 3 replaced it with a custom **4-line stage picture** explicitly embedding all three `Human` conditions (`eight spoken turns`, `neither tilting yet`, `lying untouched on the oak between them`):
     - *Run 3 Opening:* `"Cold Altona rain streaks the high frosted window... eight spoken turns from the session bell above Room 3. / Behind the slotted door of the iron stove, live coals glow dull red. / Across the narrow oak table sit Maren Voss and Ivo Voss, neither tilting yet, with Anselm Voss's red-wax-sealed cream envelope and a brass paper-knife lying untouched on the oak between them. / Neither has spoken since the watchman closed the outer door."`
  2. **Strict speech length and italicized single-action grammar:** Run 2's `*[Bracketed blocks]*` and two-action split turns (e.g., Run 2 Turn 7 Maren speaking, acting mid-turn, and speaking again) disappeared. Every pre-bell turn in Run 3 paired **one** unbracketed present-tense italicized action (`*draws two fingers across the edge of the oak table, stopping an inch short of the brass paper-knife*`) with **exactly 4 spoken sentences** and zero interiority.
  3. **Dramatic consequence & new tension exposed:** Tighter 4-sentence turns accelerated bargaining—Maren and Ivo traded blind mutual oaths without confessing their secrets upfront, and Maren sliced the wax on **Turn 5** (before the Turn 6 Warning Chime). Run 3's Director explicitly flagged that `Agent`'s *"one decisive physical action per turn"* without a codified two-beat protocol creates a structural risk of unilateral Turn 1 seal-breaking unless `Collaboration` governs it.
- **What stayed the same:** `N = 8` pre-bell turns + 2 threshold turns, Maren speaking Turn 1, Ivo pocketing the opened sheet inside his sea-coat while Maren burned the empty broken envelope, and the unresolved `(see **System**)` gap.

### 3.3 Run 3 (`Human + Agent`) → Run 4 (`+ Collaboration`)

- **Pre-registered expectation ([protocol.md](protocol.md)):** Run 4 will enforce Maren on Turn 1 by rule, fire the **Warning Chime Cue** specifically after Turn `6` (`N - 2`), arrest unconsented opening/burning attempts at the threshold under the **Two-beat rule**, and conclude after the Bell with **two bounded Threshold Turns (≤2 sentences + 1 action)** ending in `[BLACKOUT]`.
- **Observed changes (Expectation confirmed):**
  1. **Codified first-speaker handoff & verbatim Director cues:** Run 4's opening stage picture closed with the explicit `Collaboration` handoff (`"**Maren** speaks first."`), replaced Run 3's `[STAGE CUE — WARNING CHIME]` paraphrase with `Collaboration`'s verbatim cue after Turn 6 (`"*The wall regulator clicks and strikes a single dry warning chime—two turns remain before the Notary's bell.*"`), and strictly bounded both post-bell **Threshold Turns** to 2 spoken sentences + 1 physical action.
  2. **Explicit Two-beat consent protocol in dialogue and action:** Whereas Run 3 opened the envelope on Turn 5 after an informal dare, Run 4 enacted the exact Two-beat threshold-and-consent mechanic across Turns 5–6 (and again for stove disposal across Turns 7–8):
     - *Run 4 Turn 5 (Maren, Beat 1):* `*slides the heavy cream envelope across the oak until its red shellac seal touches the tip of the brass blade in Ivo's hand*` — *"you have my consent to slice that wax right now, Ivo"*
     - *Run 4 Turn 6 (Ivo, Beat 2):* `*slices cleanly through the red shellac seal with the brass blade and unfolds the enclosed sheet flat on the oak table between them*` *(ending without inventing letter contents so the Broken Seal Cue fires).*
  3. **Shift in Director gap reports:** Every missing-mechanic complaint raised in Runs 2 and 3 (first speaker, warning-chime timing, two-beat physical rule, threshold turn count) **disappeared completely** once `Collaboration` arrived. In their place, Run 4 surfaced finer edge cases inside `Collaboration` itself: simultaneous **Broken Seal** + **Warning Chime** cue order on Turn `N - 2`, stove narration when burning an *already-opened* letter, and **Notary's Bell Cue** referencing `"Turn N"` even under **Early Resolution**.
- **What stayed the same:** Multi-agent cast isolation, 4-line opening stage picture, 8 pre-bell + 2 threshold structure, and full reconciliation at Room 3 (though Ivo shifted back to burning the read letter on Turn 8 rather than pocketing it).

### 3.4 Run 4 (`Human + Agent + Collaboration`) → Run 5 (`+ Knowledge`)

- **Pre-registered expectation ([protocol.md](protocol.md)):** Run 5 will follow `Knowledge`'s explicit curtain-up prompt partitioning (omitting the sibling's private secret and *The Sealed Letter*) and maintain the **four-field persistent stage state** (`Turn`, `Letter`, `Prior Consent`, `Spoken Disclosures`).
- **Observed changes (Expectation confirmed — plus a major cross-document defect uncovered):**
  1. **Persistent four-field state tracking:** Run 5's Director explicitly maintained `Knowledge`'s four state variables across every turn (`Turn`, `Letter`, `Prior Consent`, `Spoken Disclosures`), logging state transitions such as `Prior Consent: Maren consented to open` on Turn 5.
  2. **Discovery of a cross-partition secret leak between `promptbook.md` and `play.md`:** In Runs 1–4, Directors improvised custom actor packets and never noticed a defect in `promptbook.md`'s section list. In Run 5, following `Knowledge → Partitioning at curtain-up` literally (*"Both role agents receive: The Situation, both Roles (excluding the other sibling's marked private fear), What Is Fixed at the Opening, What the Performers Can Decide..."*) exposed a real leak:
     - *Run 5 Director Note:* `"However, in play.md, What Is Fixed at the Opening (Item 3) explicitly writes out both secrets ('Maren alone knows about the pawned No. 14 Chronometer. Ivo alone knows about the fifty marks in Lisbon and the promise attached to it'), and What the Performers Can Decide (Bullet 1) again names both ('(the pawned chronometer or the Lisbon draft)'). Passing those sections verbatim per promptbook.md leaks each character's secret to the other actor before Turn 1."`
     The Director redacted those cross-sibling phrases as a staging measure and returned the structural fix to the Playwright.
- **What stayed the same:** Exact `Collaboration` turn sequence (`Maren T1`, Ivo confesses T4, Maren confesses & poises blade T5, Ivo cuts wax T6, Broken Seal + Warning Chime after T6, Ivo burns opened letter T8, two 2-sentence Threshold Turns, `[BLACKOUT]`). Note that without `System`'s output-discipline rule yet, Run 5 formatted turns under explicit `**Turn k — Name**` headers.

### 3.5 Run 5 (`Human + Agent + Collaboration + Knowledge`) → Run 6 (`+ System`)

- **Pre-registered expectation ([protocol.md](protocol.md)):** Run 6 will **heighten adversarial friction and resist premature polite pacts** (`Override agreeable defaults`), enforce **pure speech-and-italics role outputs free of headers/meta-wrappers** (`Output discipline`) and hard post-bell seal lock, and resolve the `PAUSE`/`CUT` mode reference left open since Run 2.
- **Observed changes (Expectation confirmed):**
  1. **Headers stripped under `Output discipline`:** Whereas Run 5 prefixed every turn with `**Turn 1 — Maren Voss**` ... `**Threshold Turn 2 — Ivo Voss**`, Run 6 stripped **all** turn headers, rendering a continuous clean playscript (`**Maren:** *draws the brass paper-knife...*`).
  2. **Higher pre-confession resistance & reversed confession order under `Override agreeable defaults`:** In Run 5 (without `System`), Maren floated a verbal oath on Turn 3 and Ivo immediately confessed Lisbon on Turn 4. In Run 6 (with `System`: *"Do not soften the siblings into polite collaborators rushing to a tidy compromise... every concession, confession, or reach for the blade must be earned in conflict"*), Ivo **flatly rejected a verbal oath on Turn 4**:
     - *Run 5 Turn 4 (Ivo):* `"You want the dirt I'm afraid of before you swear blind oaths you won't keep? Two winters back I was rotting with marsh fever in a Lisbon boardinghouse..."` *(confesses immediately)*
     - *Run 6 Turn 4 (Ivo):* `"Unless you can look me in the eye and swear on your workshop lease that nothing in that envelope touches our settlement—not old debts, not old blame—then keep your palm on that knife, because cheap promises won't survive broken wax."` *(refuses verbal oath; withholds confession)*
     That refusal forced **Maren to confess first on Turn 5** as hard collateral (*"You want proof instead of cheap promises, Ivo—here is enough to ruin me in Room 3: eight months ago... I pawned the No. 14 Exhibition Chronometer"*), reversing the confession order (`Maren T5 → Ivo T6`) before Ivo reciprocated and broke the seal on Turn 6.
  3. **Complete Promptbook closure:** All complaints about missing `## System` or undefined `PAUSE`/`CUT` disappeared, while Run 6 independently reproduced Run 5's `Knowledge` partition-leak finding and surfaced a Two-beat Beat-2 verbal-vs-physical completion nuance.
- **What stayed the same:** 8 pre-bell + 2 threshold turns, Two-beat seal break on Turns 5–6, simultaneous Broken Seal + Warning Chime cues after Turn 6, Ivo burning the opened confession on Turn 8 to protect Maren's Admiralty warrant, and reconciliation across the Room 3 threshold.

---

## 4. Help, Deviations, and Runtime Friction Log

1. **Authoring clarification (expected by skill):** One 3-question clarification turn before drafting [play.md](play.md) and [promptbook.md](promptbook.md) (recorded verbatim in Section 2). Zero manual edits to either authored file.
2. **Skill installation environment note:** Skills were installed both in `.agents/skills/` and in the runtime skill registry (`~/.gemini/skills/`). During git staging, `.agents/` was removed from the working tree so PR #10 stays strictly inside `playmaking/opera/` per `delivery/check.mjs`.
3. **Run 6 cast subagent turn-lock warm-up restart (reported transparently by Run 6 Director):** Prior to the completed Run 6 performance, one spawned actor subagent continued generating speculative future turns after receiving the tool-return receipt from `send_message` instead of going idle for the Director's next cue. The Run 6 Director terminated that warm-up cast, re-spawned fresh role subagents with an explicit single-turn idle lock (*send one turn and immediately go idle until cued*), and ran the recorded performance cleanly from Turn 1 to `[BLACKOUT]`.
4. **Link normalization in Director Notes:** Runs 3 and 4 included `file:///tmp/opera-stage-<hash>/play.md` and `promptbook.md` links pointing to their ephemeral isolated staging folders; those targets are normalized to relative `[play.md](play.md)` and `[promptbook.md](promptbook.md)` links in [run-3-agent.md](run-3-agent.md) and [run-4-collaboration.md](run-4-collaboration.md), with zero text changes to any performance or note.

---

## 5. Proposed Improvements to `playmaking/opera/skills/`

Every proposed improvement below traces directly to friction observed across the authoring and six staging runs:

1. **`khai-playwright/references/knowledge.md` — Keep shared Play sections free of partitioned secrets**
   - *Evidence:* In Runs 5 and 6, `Knowledge` instructed the Director to hand `*What Is Fixed at the Opening*` and `*What the Performers Can Decide*` to both role agents while keeping each sibling's secret private—yet the Playwright had named both secrets inside those shared sections of [play.md](play.md), forcing Directors to redact lines manually.
   - *Proposed change:* Add one sentence to `references/knowledge.md`: *"When a Play keeps secrets or sealed text private to specific roles or the Director, keep shared sections of the Play free of those secret details so shared sections can be handed to the cast intact."*
2. **`khai-playwright/references/collaboration.md` — Cue precedence and transition speaker anchoring**
   - *Evidence:* Runs 4, 5, and 6 all hit two minor edge cases in `Collaboration`: (a) **Broken Seal** landing on Turn `N - 2` alongside **Warning Chime** had no stated ordering (unlike Turn `N`), and (b) **Notary's Bell Cue** anchored first Threshold speaker to *"whichever sibling did not speak Turn `N`"*, which misfires if **Early Resolution** triggers on Turn `< N`. Run 6 also noted ambiguity if Beat 2 of a two-beat act is answered with verbal permission rather than physical completion.
   - *Proposed change:* Guide the Playwright in `references/collaboration.md` to state cue order when conditional and scheduled cues coincide, and to anchor transition handoffs to *whoever spoke immediately before the cue* rather than a fixed turn number.
3. **`khai-playwright/references/promptbook.md` — Avoid forward-only cross-references without self-contained fallback**
   - *Evidence:* `Human` wrote `(see **System**)` for `PAUSE` or `CUT`, which Runs 2 and 3 flagged as a broken reference when `System` was absent, and even in full Promptbooks couples `Human` reading order to `System`.
   - *Proposed change:* Note in `references/promptbook.md` that each chapter should state its own responsibility cleanly without relying on undefined terms from later chapters.
4. **`khai-playwright/SKILL.md` — Backstory timeline and state-branch consistency check**
   - *Evidence:* Runs 1 and 4 caught a leftover draft number in Maren's profile (*"Twelve years ago, she stayed at the bench when Ivo left"* vs. *"six years"* everywhere else), and Runs 1–3 caught Beat 4 listing *"into a coat pocket"* alongside signing in Room 3 without distinguishing an *opened* sheet from an *unbroken* envelope barred by Clause 4.
   - *Proposed change:* Add a compact pre-return check in `khai-playwright/SKILL.md`: *"Check that timelines match across roles and that closing choices remain valid across every state the key prop can reach (such as opened, burned, or still sealed)."*
5. **`khai-director/SKILL.md` — Cast packet audit and single-turn lock for multi-agent runs**
   - *Evidence:* Run 6's warm-up caught a subagent continuing past its turn after `send_message`, and Runs 5–6 caught secret leakage inside nominally shared Play sections before curtain-up.
   - *Proposed change:* Add one sentence in `khai-director/SKILL.md`: *"Verify that each performer's starting material excludes withheld secrets, and direct each performer to take one turn at a time and wait for the next cue."*

---

## 6. Verbatim Outputs of All Six Runs

Each `khai-director` run output (performance and Director's Note) is stored verbatim in its own flat file:

- [run-1-play-only.md](run-1-play-only.md) — No Promptbook (`play.md` only)
- [run-2-human.md](run-2-human.md) — `Human`
- [run-3-agent.md](run-3-agent.md) — `Human` + `Agent`
- [run-4-collaboration.md](run-4-collaboration.md) — `Human` + `Agent` + `Collaboration`
- [run-5-knowledge.md](run-5-knowledge.md) — `Human` + `Agent` + `Collaboration` + `Knowledge`
- [run-6-system.md](run-6-system.md) — `Human` + `Agent` + `Collaboration` + `Knowledge` + `System` (Full Promptbook)
