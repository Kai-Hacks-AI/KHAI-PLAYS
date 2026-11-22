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
| **Run 1** | None *(Play only)* | **Ivo** | **9** pre-bell / **11** total | `*(parentheticals)*` + mid-speech actions; up to 6–7 sentences; ends `*Blackout.*` | Ivo (T5) → Maren (T6); wax cut T7 | **Burned in stove** by Ivo (T9) | Director invents beat duration, first speaker, and brink rule; catches `12 yr` vs `6 yr` timeline slip & Clause 4 threshold ambiguity. |
| **Run 2** | `Human` | **Maren** | **8** pre-bell / **10** total | `*[Bracketed blocks]*` + split actions; ends `BLACKOUT.` | Maren hints (T5) → Ivo pledges (T6); wax cut T6 | **Pocketed in coat** by Ivo (T8); husks burned | Locks `N = 8` countdown, `table`, `unfixed`; flags dangling `(see **System**)` and the 4 missing `Collaboration` mechanics. |
| **Run 3** | `Human` + `Agent` | **Maren** | **8** pre-bell / **10** total | Unbracketed `*italics*`, 3–4 sentences, 1 action/turn; 4-line opening picture; `` `[BLACKOUT]` `` | Mutual blind oaths (T3–T4); **no pre-open confession**; wax cut **T5** | **Pocketed in coat** by Ivo (T8); empty envelope burned | Enforces 4-line opening stage picture & tight italicized dialogue; flags single-turn action vs. two-step interception gap. |
| **Run 4** | `+ Collaboration` | **Maren** *(by rule)* | **8** pre-bell + **2** Threshold | Quoted speech + 1 `*italic*` action; verbatim Warning Chime after T6 (`N - 2`) | Ivo (T4) → Maren (T5, blade to wax + explicit consent) → Ivo cuts **T6** | **Burned in stove** by Ivo (T8) after Maren's T7 consent | Eliminates missing-mechanic gaps; enforces explicit Two-beat consent & 2-sentence Threshold Turns; surfaces `N - 2` cue-collision & Early-Resolution speaker edge cases. |
| **Run 5** | `+ Knowledge` | **Maren** *(by rule)* | **8** pre-bell + **2** Threshold | Inline `**Name:** *action* speech` under `**Turn k**` headers | Ivo (T4) → Maren (T5) → Ivo cuts **T6** | **Burned in stove** by Ivo (T8) | Tracks 4 persistent state fields (`Turn`, `Letter`, `Prior Consent`, `Spoken Disclosures`); **uncovers partition leak** in `play.md` shared sections. |
| **Run 6** | `+ System` *(Full)* | **Maren** *(by rule)* | **8** pre-bell + **2** Threshold | Pure `**Name:** *action* speech` (**zero turn headers**) | Ivo **rejects verbal oath** (T4) → **Maren first (T5)** → Ivo (T6, cuts wax) | **Burned in stove** by Ivo (T8) | Strips all turn headers (`Output discipline`), forces hard collateral before oaths (`Override agreeable defaults`), resolves `PAUSE`/`CUT`, and catches subagent turn-lock hazard. |

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
4. **Link normalization in appended Director Notes:** Runs 3 and 4 included `file:///tmp/opera-stage-<hash>/play.md` and `promptbook.md` links pointing to their ephemeral isolated staging folders; those targets are normalized to relative `[play.md](play.md)` and `[promptbook.md](promptbook.md)` links in Section 6 below, with zero text changes to any performance or note.

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

### 6.1 Run 1 — No Promptbook (Play Only)

#### Verbatim Performance: *Before the Notary's Bell*

*Rain rattles against the high glass. The wall regulator clicks steadily toward nine. Between Maren and Ivo on the narrow oak table lies Anselm Voss's sealed cream envelope beside the brass paper-knife, coals glowing dull red behind the slot of the iron stove. Neither has spoken since the watchman closed the outer door.*

**IVO**
*(leans forward in his damp sea-coat, wrists resting near the edge of the oak table without touching the envelope or the brass knife, eyes flicking from the copperplate inscription up to Maren)*
Even dead and nailed in pine, he still knows how to set a test on the bench between us. "The true account"—did you know he had that taped under the dividing engine, Maren, or is he springing this on your ledger too? Two days we've bled through that clerk to get four hundred marks and a clean waiver on paper, and we have less than two minutes before that bell rings. Tell me straight what you want done with it.

**MAREN**
*(sits upright in her dark mourning wool, work-roughened hands folded tight on the table edge opposite his, her gaze dropping once to the red shellac seal before locking onto Ivo)*
If I'd known anything was taped under the dividing engine, Ivo, the watchman wouldn't have carried it into this waiting room with both our names entered at the desk. Two weeks back he caught hold of my wrist and told me the ledger between you and me had never been straight—and then his breath went before he gave me a single figure. You're the one who stayed clear of the house for six years and walks out on today's ebb with four hundred marks, nearly every liquid pfennig left in the estate. So before either of us reaches for the knife or the stove door, tell me why those three lines have you watching the clock so hard.

**IVO**
*(a sharp, humorless breath; taps one knuckle near the cream envelope without disturbing the seal)*
Under the dividing engine, Maren—not the cashbox. Six years ago he stood me in front of two Guild wardens by that exact machine and called me a careless botcher over three minutes of arc on an Admiralty quadrant, and I've carried his word on my back through every coastal berth since. And I'm watching the clock because *Kestrel* warps out on the afternoon ebb whether Chancery locks us up or not. If you're so sure his "true account" is some figure owed to your bench, your hand is as close to that brass knife as mine—why haven't you picked it up?

**MAREN**
*(unclasps her hands and rests two fingers flat on the handle of the brass paper-knife without lifting it, eyes steady on Ivo's face)*
Because my workshop lease expires on the first of next month, Ivo, and if we break that wax with a minute left and either of us balks at the door over what's inside, two years in Chancery kills my bench as surely as missing the ebb kills your berth. You hear "dividing engine" and think of the quadrant and the wardens; I hear "true account" after four years of scraping together surgeon's bills and brass invoices behind his back just to keep the shutters off the windows, and I don't pretend a dying man's audit is harmless to me either. Neither of us has reached for the stove. So tell me plain which costs you more—sailing this afternoon never knowing what he hid under that machine, or reading something that makes one of us refuse to sign?

**IVO**
*(his jaw tightens; he looks at her two fingers on the brass knife, then plants his own palm beside the envelope, voice dropping low and rough)*
Going out on the ebb never knowing whether my own hand botched that arc or he threw me to the wardens for a lie—that eats through the planks faster than Chancery. So if we're counting risks with a minute on the dial, hear mine before you lift that blade, because I won't have it blow up in your face with ten seconds left. Two winters back I was flat on my back in Lisbon with marsh fever and no berth; I wrote to him behind your back begging fifty marks, and I wrote down my word I'd never ask another pfennig out of Altona if he wired it—which he did. If that pledge is inside this envelope, I still need every mark of the four hundred in Room 3 today or *Kestrel* sails without me. Now you know the worst thing he can have on me—tell me yours, or tell me right now if those fifty marks kill our deal before we touch the wax.

**MAREN**
*(stares at him for one tight breath, a bitter line cutting at the corner of her mouth; she lifts the brass paper-knife and sets its tip just against the edge of the red shellac seal without breaking it)*
Two winters back I was rationing coal by the scuttle, and he never once told me you were alive in Lisbon—let alone that he wired fifty marks to keep you out of a fever ditch. Keep your four hundred, Ivo; I won't take *Kestrel* out from under you over sickness money if you won't take the shop out from under me over mine. Eight months ago, when his surgeon's fees and the brass bills came due in the same week, I pawned the No. 14 Exhibition Chronometer with old Lukas Brandt behind Anselm's back, and it's still sitting unredeemed in Brandt's safe while its number stands on our inventory in Room 3. If he found my pawn ticket under his bench and wrote it down here, you could call the schedule false and sink me in Chancery. Give me your word that neither Lisbon nor No. 14 changes a stroke of what we sign at the bell—steady the corner and let me cut the wax, or catch my wrist right now and feed it to the coals.

*On the wall beside the iron stove, the pendulum regulator gives a crisp mechanical click and strikes one dry warning chime—the nine o'clock session bell is moments away.*

**IVO**
*(flinches once at the name of No. 14, looking at Maren as if seeing the four years in her face for the first time; as the warning chime dies in the room, he presses the lower corner of the heavy cream envelope hard against the oak with his left thumb and closes his right hand steady over hers on the brass knife, drawing the blade cleanly through the red shellac seal and slitting the top fold)*
No. 14 was his prize piece—God above, Maren, you pawned his crown chronometer to pay his surgeon while he let you ration coal. You have my word on the salt and on his grave: Brandt's safe stays between us, we sign Room 3 as written at the bell, and whatever's in here goes into those coals before the clerk takes our coats. Pull the sheet out—read it with me before the bell strikes.

*Red shellac flakes scatter across the oak table. Together they draw out and unfold the heavy cream sheet. In Anselm Voss's steady copperplate, both siblings read on the spot:*

> *Maren. Ivo.*
>
> *If you broke my wax, neither of you trusted the peace you made without me. Good. Better an ugly truth in the anteroom than a clean lie in front of the Notary.*
>
> *First, clear your heads of small terrors:*
>
> *Ivo — I burned your Lisbon letter the week I wired the fifty marks. A father keeping his son alive in a foreign fever-ward is not an estate advance. You owe your sister nothing for Lisbon.*
>
> *Maren — Lukas Brandt came to me in January as an old friend should. I redeemed the No. 14 Exhibition Chronometer myself out of my burial tin three weeks ago. It sits in the Notary's strongbox right now, free and clear, to be handed to you once the deed is signed. You kept my house warm when I could no longer see the escapement. Stop hiding your hands.*
>
> *Now the heavy weight, which is mine:*
>
> *Six years ago, Ivo did not miscut the Admiralty quadrant. My left eye clouded over on the vernier scale the night before inspection, and when the wardens spotted the three-minute error, I let my son take blame for a ruined arc rather than confess that Anselm Voss was going blind and watch the Guild strip this shop of its Admiralty warrant.*
>
> *Maren kept a blind man's bench standing without knowing why her brother hated the house. Ivo carried an exile he never earned so the roof over you both would hold.*
>
> *Sign the settlement. Let Maren have the shop she saved, and let Ivo have the sea I drove him to. Or tear the deed in two if you still prefer your grievances to each other. The bell will not wait on dead men.*
>
> *— A. V.*

**MAREN**
*(releases the brass knife as if it has gone hot, her work-roughened thumb pressing hard against the margin of the cream sheet to steady a brief tremor; she looks straight up into Ivo's face, lifting the letter halfway between his damp sea-coat and the glowing slot of the stove)*
Six years I stood at his bench cursing your name every winter for walking out—and the whole time it was his own clouded eye on the vernier, and your reputation paying for the roof over my head. Three weeks back he emptied his own burial tin to put No. 14 free and clear into that strongbox for me, while you were still carrying "botcher" up and down the coast. You swore a moment ago we'd feed whatever was inside to those coals, and if we do, my Admiralty warrant stays safe forever while the only proof your hand was true goes up the chimney. If you fold this sheet into your coat instead, you carry Anselm's own hand clearing your name—and enough proof of a blind inspection to strip my warrant any day you show a Guild warden. Tell me before that bell wire jumps, Ivo: do we burn it as we swore, or do you put my shop in your pocket and let me trust my brother?

**IVO**
*(draws one ragged breath, staring down at the sheet until he has to blink hard once; he reaches out, touches two weathered fingers briefly to the "— A. V." at the bottom, then takes the letter gently from Maren's hand, sweeps the slit envelope off the oak table, steps to the iron stove, pulls open the slotted door with the brass poker-lug, and lays both papers straight onto the live red coals)*
Six years I laid my eye to every vernier at sea wondering if my hand really had slipped three minutes—and the stubborn old bastard let me carry that rather than lose the crest over the door. I don't need his paper in my pocket for Guild wardens I'll never work under again, Maren; my hand was true, and the master of the Voss bench just read it with her own eyes. If *Kestrel* takes a sea or fever catches me twice, harbour clerks turn out a dead mate's chest, and I won't leave a live match lying around that could strip the warrant we both paid six years to keep. *(watches the cream paper blacken and catch yellow flame behind the iron grate, clangs the slotted door shut, and turns back to her)* Keep No. 14 ticking on the front bench where it belongs—and don't curse my name next winter.

*Sharp and metallic, the brass session bell rings above the lintel. The latch of Room 3 clicks open; warm lamplight spills across the wet tiles as the clerk's voice calls from within: "Voss estate—Room Three."*

**MAREN**
*(rises from the narrow oak table, sweeps the scattered red shellac flakes into her palm with a bench-hand's habit, and drops them onto the iron ash-lip of the stove as she passes; pausing in the warm lamplight at the open threshold of Room 3, she rests her hand briefly on the damp sleeve of his sea-coat and leaves room beside her in the doorway)*
Next winter when *Kestrel* puts back into the Elbe to rate her chronometers, bring the boxes through the front door yourself—there'll be coal in the scuttle and no charge on my ledger. Come sign for your four hundred marks before the ebb turns, navigator. Let's close his books and start ours.

**IVO**
*(covers her work-roughened hand on his sleeve for one brief second, the corner of his mouth lifting for the first time since curtain-up, then picks up his sea-cap from the bench and steps to the lit threshold of Room 3, gesturing slightly for Maren to go ahead of him)*
Make sure the escapements are dead true, Master Voss—my captain's particular about his longitudes. After you; I've got an afternoon tide to catch, and a shop in Altona to come back to. *(steps across the threshold beside her into Room 3)*

*Blackout.*

---

#### Director's Note

###### 1. What Was Varied vs. Held Fixed
- **Materials Supplied:** Only `play.md` was present in `/tmp/opera-stage-f5de40c9/` (no `promptbook.md` was supplied). The authored Play was treated as completely fixed.
- **Adjustable Opening Conditions:** Per the human brief, nothing was varied from the authored defaults:
  - *Where the letter starts:* **On the table between them** (default), beside the brass paper-knife with its red shellac seal unbroken.
  - *How close the clock stands to nine:* **Standard** two-minute countdown (default).
  - *Initial tilt:* **Unfixed** (default)—neither actor was given any lean toward opening or burning the envelope.

###### 2. How the Cast Was Staged and Directed (Director's Staging Choices)
Distinguishing our staging choices from the authored Play:
- **Epistemic Isolation via Separate Actor Contexts (Staging Choice):** Because the Play's dramatic engine relies on strict asymmetry of knowledge—Maren's private secret (pawning the No. 14 Exhibition Chronometer), Ivo's private secret (the fifty-mark Lisbon fever wire and written forfeiture), and the strictly withheld text of **The Sealed Letter**—each sibling was run in an isolated actor subagent context containing only shared history, public impressions of the other sibling, and their own private brief. Neither actor knew the other's secret until confessed on stage, and neither saw **The Sealed Letter** until both consented to slice the red shellac wax on Turn 7.
- **Two-Beat Physical Rule for Unconsented Prop Moves (Staging Choice Implementing Rule 4):** To honor Fixed Rule 4 (*"Why Neither Can Open or Burn It Unchallenged"*) in turn-based play without letting one actor narrate an unopposed *fait accompli* inside a single turn, both actors were directed that any unconsented move to cut the wax or burn the envelope had to be played as a physical initiation (reaching, lifting the blade to the wax, stepping to the stove), giving the sibling arm's length across the oak table an immediate chance to stay their hand, bargain, or consent. Once one sibling initiated and explicitly invited consent (Maren setting the knife tip against the seal on Turn 6), the partner could complete or block the act on Turn 7.
- **Assigning First Speaker and Pacing the Regulator Clock (Staging Choices in Open Space):** `play.md` closes its Opening Image with *"Neither has spoken since the watchman closed the outer door"* without assigning Turn 1, and leaves "standard" clock duration unquantified in dialogue beats. We assigned Turn 1 to Ivo (grounded in his authored restlessness in closed rooms and urgency over *Kestrel*'s tide) and paced the two-minute clock at roughly 15–20 seconds per beat: six turns of reckoning across the table, **The Warning Chime** at the moment Maren placed the blade tip on the seal, the breaking of the wax on Turn 7, two fallout beats with the opened letter (Turns 8–9), and **The Notary's Bell** opening Room 3 for each sibling's final threshold beat (Turns 10–11).

###### 3. What Happened in Performance
- Rather than bluffing past the clock or lunging unilaterally for the stove, the siblings tested each other's hesitation across four tight turns: Maren surfaced Anselm's dying remark (*"the ledger between you and me had never been straight"*), Ivo noted the letter came from beneath the dividing engine where he was disgraced before the Guild wardens and asked why Maren hadn't lifted the knife herself, and Maren admitted four years of keeping the shop open behind Anselm's back left her exposed to an audit too.
- That mutual recognition unlocked a reciprocal pre-opening pact. On Turn 5, Ivo voluntarily confessed his fifty-mark Lisbon fever wire and written forfeiture so it wouldn't detonate with ten seconds left. On Turn 6, Maren waived Lisbon on the spot, confessed pawning the No. 14 Exhibition Chronometer with Lukas Brandt while leaving it on the Room 3 schedule, and held the tip of the brass knife against the wax edge pending Ivo's word.
- Right as the regulator struck its dry **Warning Chime**, Ivo gave his word, laid his hand over Maren's on the brass knife, and slit the red shellac seal together.
- Reading Anselm's confession created an unexpected second dilemma not explicitly previewed in their pre-opening bargain: Anselm had already cleared both their "small terrors" (burning the Lisbon pledge and redeeming No. 14 into the Notary's strongbox), while confessing that *his own* failing eye miscut the Admiralty quadrant—a written admission that cleared Ivo's name at the price of exposing a blind inspection that could strip Maren's Admiralty warrant if ever seen by Guild wardens. Maren reversed their earlier oath to burn the contents, holding the sheet toward Ivo's sea-coat so he could keep proof of his innocence even at her shop's peril. Ivo declined to leave "a live match" in a sailor's chest that harbour clerks might someday turn out, told her that having the master of the Voss bench read the truth with her own eyes was enough, and burned both the letter and envelope in the coals just before the **Notary's Bell** rang. Both siblings stepped into Room 3 reconciled to sign the settlement.

###### 4. Points Where the Authored Material Created Friction or Contains Gaps for the Playwright
The Play staged cleanly and generated strong dramatic pressure without requiring any text alteration, **with three authored points worth flagging to the Playwright** (distinct from our staging choices above):

1. **Gap / Structural Friction in Beat 4 (`The Notary's Bell`, line 84) vs. `Clause 4` (lines 13, 23, 66) on Disposing of the Letter:**
   - Line 84 reads: *"At the open threshold, Maren and Ivo each make one final move—disposing of the letter (into the coals, into a coat pocket, or left on the oak table) and either stepping into Room 3 to sign or turning toward the street door."*
   - This phrasing creates three small frictions when staging:
     - **Timing when opened early:** If the letter is opened before the bell (Beat 3) or burned unread before the bell (Beat 3), the letter may legitimately already be in the coals *before* the bell sounds (as happened organically on Turn 9 when Ivo burned the read sheet so Maren wouldn't carry the warrant risk into Room 3; Maren accommodated Beat 4 gracefully by sweeping the broken shellac wax flakes onto the stove's ash-lip on Turn 10).
     - **Single prop vs. "each" sibling:** Because there is only one letter, instructing that Maren and Ivo *each* make a final move disposing of the letter is slightly awkward if read literally.
     - **Unopened letter + signing vs. pocketing/table:** Lines 13, 23, and 66 state that if the seal is unbroken at the bell, signing Clause 4 *requires* burning the letter unread in the stove before stepping through the door (and if the settlement collapses, it is impounded unread). Line 84's blanket list (*"into the coals, into a coat pocket, or left on the oak table"*) does not distinguish what is legal/possible when the letter is *opened* versus *still sealed*. Clarifying whether pocketing an *unbroken* letter while walking into Room 3 is meant to be a playable covert violation of Clause 4—or whether pocketing/leaving on the table applies only to an *opened* letter or a walked-away settlement—requires an authorial call from the Playwright.
2. **Minor Backstory Timeline Ambiguity (`Roles`, lines 30–31 vs. line 37):**
   - Maren's brief opens: *"Twelve years ago, she stayed at the bench when Ivo left; for the last four years she ran every repair..."* (line 30), followed immediately by *"She resents that Ivo vanished for six years"* (line 31), while Ivo's brief states *"Six years ago he walked out of Altona after a bitter public rupture with Anselm"* (line 37). Our cast played around this smoothly (treating twelve years ago as when Ivo first went to sea as a youth, and six years ago as the final rupture over the quadrant), but if the Playwright intended a single departure six years ago, line 30 reads like a leftover draft number.
3. **Contested Physical Tie-Breaking Without a Promptbook (Staging Sensitivity, Not a Broken Constraint):**
   - Because no `promptbook.md` accompanied `play.md`, `play.md` gives clear intent in Rule 4 (*"giving the other sibling an immediate chance to stay their hand, strike terms, or let it happen"*) without specifying what physically prevails if one sibling tries by force to burn the envelope while the other tries by force to snatch and slice it across the narrow oak table. In a cooperative or bargaining run (like this one), Rule 4 suffices; under high-hostility stress-testing, a Promptbook note (or one sentence in `play.md`) clarifying whether physical deadlock defaults to a standoff until the bell—or whether snatching tears/scatters the paper—would keep Directors from inventing ad-hoc grappling rules.

---

### 6.2 Run 2 — Human

#### Staged Performance: *Before the Notary's Bell*

**Opening Conditions (Defaults):**
- **Starting Holder:** `table` *(sealed cream envelope and brass paper-knife on the narrow oak table between Maren and Ivo)*
- **Countdown Length (`N`):** `8` spoken character turns before the Notary's nine o'clock session bell
- **Opening Tilt:** `unfixed`

---

##### Performance Transcript (Verbatim)

*Rain rattles against the high glass. The wall regulator clicks steadily toward nine. Between Maren and Ivo lies Anselm Voss's sealed cream envelope beside the brass paper-knife, coals glowing dull red behind the slot of the iron stove. Neither has spoken since the watchman closed the outer door.*

**MAREN**
*[Without rising, reaches two chapped fingers across the oak table to turn the envelope slightly so the copperplate faces them both squarely, then rests her knuckles beside the brass paper-knife, eyes lifting to Ivo.]*
Steady hand for a dying man. That wasn't written this month—he hadn't the grip for downstrokes like those since autumn, which means it sat taped under the dividing engine while the pair of us spent two days haggling through a clerk over four hundred marks. We have short of two minutes before that bell goes, Ivo: are you putting it in the coals so you can catch the afternoon ebb clean, or do you want to see what account he thought we hadn't settled?

**IVO**
*[Leans forward onto his forearms, salt-chapped thumb brushing the edge of the heavy cream paper without lifting it, eyes flicking from the copperplate to Maren's knuckles beside the knife.]*
Under the dividing engine—not in his cash-box, Maren, under the engine where he called the wardens in on me six years back. Easy enough for you to ask whether *I* want the coals when your knuckles are parked an inch off the knife and you haven't touched it either. You kept his books four years—if that hand's older than autumn, what are you afraid he put in a "true account" that our clerk didn't see?

**MAREN**
*[Picks up the brass paper-knife cleanly, weighing the flat of the blade across her palm, her voice dropping dry and hard.]*
I'm afraid of two years in Chancery while the landlord padlocks my benches on the first of the month because you take offence at a dead man's lecture and kick the table over. You walked out six years ago and left me the surgeon's bills, the brass merchants, and four winters of his coughing, and a fortnight before he died he caught my wrist and told me the ledger between you and me had never been straight. So don't sit there reading my knuckles, Ivo—if it was taped under *that* engine, tell me plain: are you scared he set down another debt against your four hundred marks, or scared of something else?

**IVO**
*[Lifts the sealed envelope off the oak before her blade nears it, holding it between thumb and forefinger with the red wax toward her, half-turning his shoulder toward the glowing slot of the stove.]*
*Walked* out? He stood two Guild wardens behind my stool and called my hand slovenly over three minutes of arc—and for six years on every watch at sea I've checked my vernier twice wondering if my thumb actually slipped or he lied to clear the bench. If all you want is your lease safe on the first, tell me to drop this in the ash-slot right now and we walk into Room 3 clean. Or if you're holding that knife to use it, swear to me first: whatever ugly arithmetic he kept between us, nobody touches one mark of that draft at the bell.

**MAREN**
*[Rises half out of her chair, reaches across the narrow oak, and sets the edge of the brass paper-knife steadily against the rim of the red shellac wax without pressing through, locking eyes with him.]*
Six years checking your vernier twice—then don't walk aboard the *Kestrel* still guessing when the answer's sitting between your fingers. You have my word: not one mark comes off your four hundred at that bell, no matter what he wrote. Now give me yours back before we snap this wax—whatever corner I had to cut in the shop's accounts these last eight months to pay his surgeon and keep the doors unlatched, you sign the inventory schedule as it stands and say nothing to the clerk. Deal, Ivo, or drop it in the coals?

**IVO**
*[Holds her stare across the narrow table, jaw tightening as her confession lands; after one sharp breath, he gives a single hard nod.]*
I don't care if you pawned the spare lathes to pay his apothecary—my name goes on your schedule as it stands, and yours goes on my draft. Whatever ugly thing either of us did to stay afloat while he was dying, it stays dead in this room at the bell.
*[Draws the envelope firmly upward against her brass blade, snapping the red shellac wax in two, slides the heavy cream sheet free, and unfolds it flat on the oak between them.]*

*Fragments of red shellac scatter across the oak. Unfolded between Maren and Ivo lies Anselm Voss's heavy cream sheet. Together, in silence, both read what is written inside:*

> *Maren. Ivo.*
>
> *If you broke my wax, neither of you trusted the peace you made without me. Good. Better an ugly truth in the anteroom than a clean lie in front of the Notary.*
>
> *First, clear your heads of small terrors:*
>
> *Ivo — I burned your Lisbon letter the week I wired the fifty marks. A father keeping his son alive in a foreign fever-ward is not an estate advance. You owe your sister nothing for Lisbon.*
>
> *Maren — Lukas Brandt came to me in January as an old friend should. I redeemed the No. 14 Exhibition Chronometer myself out of my burial tin three weeks ago. It sits in the Notary's strongbox right now, free and clear, to be handed to you once the deed is signed. You kept my house warm when I could no longer see the escapement. Stop hiding your hands.*
>
> *Now the heavy weight, which is mine:*
>
> *Six years ago, Ivo did not miscut the Admiralty quadrant. My left eye clouded over on the vernier scale the night before inspection, and when the wardens spotted the three-minute error, I let my son take blame for a ruined arc rather than confess that Anselm Voss was going blind and watch the Guild strip this shop of its Admiralty warrant.*
>
> *Maren kept a blind man's bench standing without knowing why her brother hated the house. Ivo carried an exile he never earned so the roof over you both would hold.*
>
> *Sign the settlement. Let Maren have the shop she saved, and let Ivo have the sea I drove him to. Or tear the deed in two if you still prefer your grievances to each other. The bell will not wait on dead men.*
>
> *— A. V.*

*As their eyes reach the initials at the bottom of the sheet, the wall regulator gives a crisp mechanical click and strikes **one dry warning chime**—the nine o'clock session bell is moments away.*

**MAREN**
*[Lets the brass paper-knife clatter softly onto the oak and leaves both chapped hands flat and bare on the tabletop as the warning chime dies; for a breath she stares at the paper, voice rough and quiet when it comes.]*
Out of his burial tin—while you were burning up in a Lisbon ward, and for six years I cursed your name at a bench paid for with your exile. Your thumb never slipped, Ivo; not by a second of arc.
*[Pushes Anselm's unfolded letter across the oak to his side of the table, away from the coal-stove, and looks straight up into his face.]*
Don't feed that to the coals—put it in your coat, even if what's written there could cost me the Admiralty warrant if you ever showed the Guild. The bell's about to go: if you want to tear our deed up after what this house stole from you, I won't say a word against you, or else pocket your proof and walk into Room 3 with me.

**IVO**
*[Stares down at Anselm's signature with his throat working once, hard, against six years of salt and anger before his rough fingers fold the cream sheet carefully along its creases and slip it deep inside his inner breast pocket, buttoning his coat over it.]*
The proud old bastard let me rot on every wharf from here to Lisbon rather than tell two wardens his eye had gone—and I paid six years for that Admiralty warrant, Maren, so no Guild clerk on earth is ever laying eyes on this paper. It goes out on the afternoon ebb with me so I remember my hand was true, and the shop stays yours.
*[Rises from his chair, presses his weathered palm briefly and firmly over her bare knuckles on the oak, then turns his shoulder toward the inner door of Room 3, waiting on the bell.]*
Keep No. 14 wound on the front bench—next time the *Kestrel* puts in off the Elbe, I'm coming through the shop door to check your escapement myself.

*Sharp and metallic, the **brass session bell** rings above the lintel. The latch of Room 3 clicks open; warm lamplight spills across the wet tiles as the clerk's voice calls from within:* **"Voss estate—Room Three."**

**MAREN**
*[Stands, sweeps the empty sliced envelope and broken red wax off the oak in one clean pass, drops the husks through the slotted ash-door into the coals, and steps into the warm lamplight of Room 3 at Ivo's shoulder.]*
There'll be a stool clear by the dividing engine when you make port, Ivo. Let's get your ship paid for.

**IVO**
*[Touches two fingers once to the breast of his buttoned sea-coat, steadies the open door of Room 3 with his palm so Maren crosses first into the lamplight, and looks back once at the empty oak table and the flare of the wax husks in the stove before following her inside.]*
Let's sign, sister—the ebb won't wait on us either.
*[He steps across the threshold into Room 3 and pulls the heavy door shut behind them. BLACKOUT.]*

---

##### Director's Note

###### 1. What Was Varied
- Per the human brief, **no opening conditions were varied from the Play's defaults**:
  - **Starting Holder:** `table` (sealed envelope and brass paper-knife between Maren and Ivo)
  - **Countdown Length (`N`):** `8` spoken turns before the nine o'clock session bell
  - **Opening Tilt:** `unfixed`

###### 2. How the Cast Was Staged and Directed
- **Information Isolation:** Maren Voss and Ivo Voss were played by two separate, isolated actor sub-contexts with no filesystem access. Each actor received the shared situation, props, stakes, and only their own private secret (Maren: pawning the No. 14 Exhibition Chronometer with Lukas Brandt; Ivo: the fifty-mark fever wire from Lisbon and written promise). **The Sealed Letter** was completely withheld from both actors until the red shellac wax was actually broken in-scene.
- **Physical Adjudication Across the Narrow Table:** To honor Item 4 of *What Is Fixed at the Opening* (*"any unconsented move to slice the wax or feed the envelope to the coals happens in plain sight—giving the other sibling an immediate chance to stay their hand, strike terms, or let it happen"*), actors were directed not to complete an irreversible act unilaterally in a single unconsented turn, but to play unconsented moves visibly up to the brink (blade to wax, or envelope to stove-slot) unless the other sibling had already explicitly invited/agreed to the act or chose on the answering turn to complete it.

###### 3. What Happened in Performance
- **Turns 1–4 (Probing and Leverage):** Maren opened by reading the physical evidence of the copperplate—noting Anselm's downstrokes pre-dated his autumn decline—and challenged Ivo on whether he wanted the stove or the account. Ivo clocked Maren's knuckles parked beside the brass knife without touching it and noted the letter came from beneath the dividing engine where he was disgraced. Maren picked up the knife on Turn 3 and cited Anselm's words two weeks before his death (*"the ledger between you and your brother has never been straight"*), inadvertently grazing Ivo's Lisbon terror by asking if he feared another debt against his four hundred marks. Ivo snatched the envelope toward the stove on Turn 4, admitted six years of checking his vernier twice at sea, and demanded an oath that his four-hundred-mark draft wouldn't be touched if they broke the wax.
- **Turns 5–6 (The Pact and Breaking the Seal):** Rather than bluffing past Ivo's condition, Maren met it with a mutual amnesty pact on Turn 5: she set the brass blade against the rim of the red wax without slicing through, swore not a mark would come off his draft, confessed she had cut a corner in the shop's accounts over the last eight months to pay the surgeon, and asked Ivo's counter-oath to sign the inventory schedule untouched (*"Deal, Ivo, or drop it in the coals?"*). On Turn 6, Ivo accepted—swearing whatever ugly thing either did to stay afloat stayed dead in the room—and drew the envelope upward against Maren's blade, snapping the shellac seal two turns before the bell.
- **Turns 7–8 & Threshold (Fallout and Reconciliation):** Reading Anselm's letter together as the regulator struck its **Warning Chime** inverted both siblings' defensive postures at once. Maren dropped the knife, owned her six years of misplaced resentment, and pushed the unfolded confession to Ivo's side so he could carry proof his hand was true—even recognizing that the confession of Anselm's blindness could strip her of the Admiralty warrant if shown to the Guild. Ivo buttoned the letter inside his sea-coat, swore no Guild clerk would ever see a warrant he had already paid six years of exile for, and promised to walk through the shop door to check No. 14's escapement next time the *Kestrel* puts into the Elbe. At the nine o'clock bell, Maren swept the empty sliced envelope and broken wax husks into the coals and both stepped into Room 3 to sign.

###### 4. Authored Material vs. Staging Choices (Notes for the Playwright)
- **Authored Gap in `promptbook.md` (Missing `## System` Section):**
  - `promptbook.md` (11 lines total) contains only `## Human` and ends abruptly after line 10, even though line 10 explicitly cross-references `(see **System**)` and `[BLACKOUT]`. Because `## System` is missing from `promptbook.md`, the Promptbook leaves four operational mechanics unspecified:
    1. **First speaker** when `Starting Holder` is `table` and `Opening Tilt` is `unfixed` (as well as whether holding the letter first determines Turn 1 under non-default holders).
    2. **Exact turn placement of the Warning Chime** within `N = 6`, `8`, or `10` turns.
    3. **Turn-level protocol for physical interception** when one role agent attempts to open or burn the envelope without prior consent.
    4. **How the post-bell threshold exchange counts against `N`** (whether `N` governs strictly the pre-bell turns, followed by one final threshold move per sibling once Room 3 opens).
  - *Distinguishing Staging Choice from Authored Gap:* None of this required altering `play.md`, whose dramatic rules are crisp and complete. As Director, I bridged the missing `## System` section by: (a) assigning Turn 1 to Maren and alternating strictly through Turn 8; (b) firing the Warning Chime after Turn 6 (two turns before the bell); (c) enforcing a brink-then-response rule for unconsented physical attempts on the wax or stove; and (d) treating `N = 8` as the pre-bell countdown followed by one brief threshold beat apiece after the nine o'clock bell. **Recommendation for Playwright:** Supply the missing `## System` section in `promptbook.md` to codify turn order, warning-chime timing (e.g., after turn `N - 2`), physical-action resolution, and post-bell threshold turn handling (plus `PAUSE` / `CUT`).
- **Minor Edge Case in `play.md` (Clause 4 Wording After the Wax Is Broken):**
  - Clause 4 (`play.md`, line 13) stipulates that *"any sealed private writing not entered before signing must be burned unread in the waiting-room stove before they step through the door,"* while line 84 explicitly permits disposing of the letter *"into a coat pocket"* at the threshold before stepping into Room 3. In performance, Maren and Ivo navigated this naturally—Ivo buttoned the *opened* sheet inside his coat while Maren burned the sliced envelope and wax husks in the coals—because once opened, the letter is neither *sealed* nor *unread*. Still, if the Playwright wants to prevent overly literal compliance anxiety in runs where the letter is opened early, a two-word clarification in Clause 4 or line 84 noting that pocketing an opened sheet conceals it from the clerk would make the legal mechanic as airtight as the dramatic one.

---

### 6.3 Run 3 — Human + Agent

#### Performance: *Before the Notary's Bell*

*(Default opening conditions: `Starting Holder = table`, `Countdown Length = 8`, `Opening Tilt = unfixed`.)*

---

Cold Altona rain streaks the high frosted window of the Harbour Notary's tiled waiting room as the wall regulator ticks steadily toward nine—eight spoken turns from the session bell above Room 3.
Behind the slotted door of the iron stove, live coals glow dull red.
Across the narrow oak table sit Maren Voss and Ivo Voss, neither tilting yet, with Anselm Voss's red-wax-sealed cream envelope and a brass paper-knife lying untouched on the oak between them.
Neither has spoken since the watchman closed the outer door.

**MAREN VOSS (Turn 1)**
*draws two fingers across the edge of the oak table, stopping an inch short of the brass paper-knife*

Two minutes to nine, Ivo, and Clause Four is plain enough: if that seal stays whole when the clerk opens Room Three, the paper goes into the coals unread. Four hundred marks puts you aboard the *Kestrel* on this afternoon's ebb and out of Altona for good, which is a clean bargain for six years of silence. Yet Father taped this under the dividing engine where no clerk would find it first, and two weeks ago he gripped my wrist and told me the ledger between us had never been straight. Tell me plain—are you steady enough in your own account to put a knife under his wax, or do you want the stove to keep your peace for you?

**IVO VOSS (Turn 2)**
*sets two weathered knuckles flat against the cool blade of the brass paper-knife, pinning it to the oak*

Six years of silence wasn't my choosing, Maren—Father had two Guild wardens watch me pack my chest over three minutes of arc I never miscut. You've kept the workshop books yourself these last four years, so when he talks of a crooked ledger, don't look across the table as if I'm the only one with reason to flinch. Swear to me first that whatever ink is inside that envelope, you still sign my four-hundred-mark draft when the bell rings and let me catch the *Kestrel*. Otherwise tell me plain why your own fingers stopped short of the blade.

**MAREN VOSS (Turn 3)**
*slides the heavy cream envelope toward herself and presses her palm flat over the unbroken red seal*

My fingers stopped because one quarrel in front of that clerk throws the whole estate into two-year Chancery, and on the first of next month the workshop lease lapses out from under everything I kept breathing while you were at sea. You think four years of surgeon's bills, brass merchants, and Admiralty warrants kept themselves balanced by miracle while Father's hands shook? I'll swear to sign your four-hundred-mark draft regardless of what he wrote, on one matching word from you: whatever you read on that page, you raise no challenge against the shop schedule or my books when Room Three opens. Give me that oath and lift your knuckles off the knife, or say now we feed it to the coals.

**IVO VOSS (Turn 4)**
*lifts his knuckles, turns the brass paper-knife handle-first, and slides it across the oak until the grip touches her wrist beside the envelope*

You have my oath—keep the workshop, the lease, and whatever crooked arithmetic kept the brass merchants from the door; I won't breathe a word against your books inside Room Three. Hold to yours just as hard if Father tallied every bitter pfennig between us, because four hundred marks and the afternoon ebb are all I came back to Altona to collect. Only tell me one thing before you put that blade under his wax: had his hands already started shaking six years ago when that Admiralty quadrant was miscut? Go on and slit it if your nerve holds, Maren, while we still have the clock on our side.

**MAREN VOSS (Turn 5)**
Four years ago is when I first caught him bracing his right wrist against the lathe rest; six years ago he kept the dividing room locked himself the night before the wardens came, and I took his word that the fault was yours. If I've spent six years blaming you for his tremor—or if he hid worse than that beneath his bench—I won't sign my name in the dark like a coward. Remember your word on my books when Room Three opens, Ivo, and you have mine on your four hundred marks.

*takes up the brass paper-knife, drives the blade beneath the red shellac wax, and slices the envelope cleanly open*

**[STAGE CUE — THE SEALED LETTER]**
Red shellac cracks onto the oak. The heavy cream sheet unfolds flat between Maren and Ivo, and both siblings read Anselm Voss's copperplate together:

> *Maren. Ivo.*
>
> *If you broke my wax, neither of you trusted the peace you made without me. Good. Better an ugly truth in the anteroom than a clean lie in front of the Notary.*
>
> *First, clear your heads of small terrors:*
>
> *Ivo — I burned your Lisbon letter the week I wired the fifty marks. A father keeping his son alive in a foreign fever-ward is not an estate advance. You owe your sister nothing for Lisbon.*
>
> *Maren — Lukas Brandt came to me in January as an old friend should. I redeemed the No. 14 Exhibition Chronometer myself out of my burial tin three weeks ago. It sits in the Notary's strongbox right now, free and clear, to be handed to you once the deed is signed. You kept my house warm when I could no longer see the escapement. Stop hiding your hands.*
>
> *Now the heavy weight, which is mine:*
>
> *Six years ago, Ivo did not miscut the Admiralty quadrant. My left eye clouded over on the vernier scale the night before inspection, and when the wardens spotted the three-minute error, I let my son take blame for a ruined arc rather than confess that Anselm Voss was going blind and watch the Guild strip this shop of its Admiralty warrant.*
>
> *Maren kept a blind man's bench standing without knowing why her brother hated the house. Ivo carried an exile he never earned so the roof over you both would hold.*
>
> *Sign the settlement. Let Maren have the shop she saved, and let Ivo have the sea I drove him to. Or tear the deed in two if you still prefer your grievances to each other. The bell will not wait on dead men.*
>
> *— A. V.*

**IVO VOSS (Turn 6)**
*draws a hard breath through his teeth and presses two weathered fingers onto the bottom margin of the letter beside Anselm's initials*

Six years I checked every sextant vernier three times at sea, half-afraid my own eye had failed, while he threw me to the wardens just to save that Admiralty warrant. Yet he burned my Lisbon pledge the week he wired the money, and emptied his own burial tin to buy back the Fourteen you pawned to keep him warm. I'll keep my oath inside Room Three and leave you the workshop whole, Maren, even knowing my name paid for the warrant on your wall. Tell me plain before the bell—can you trust me to carry this page to sea in my coat, knowing it could strip your warrant if the Guild ever saw it, or are you asking me to feed my own exoneration to those coals?

**[STAGE CUE — WARNING CHIME]**
On the wall beside the stove, the pendulum regulator gives a crisp mechanical click and strikes one dry warning chime. Moments remain before the nine o'clock session bell.

**MAREN VOSS (Turn 7)**
*folds Anselm's sheet cleanly along its creases and slides it across the oak beneath Ivo's fingers*

Father already spent six years of your name to keep that Admiralty warrant on our wall; I won't ask those coals to spend it a second time just so I can sleep without fear. Put his page inside your coat and carry it aboard the *Kestrel*, Ivo, even knowing a single sight of it by the Guild could strip my bench tomorrow. For six years I cursed your absence over every ledger line while you doubted your own eyes at sea, and all the while he emptied his burial tin to spare my pride on the Fourteen. Button that letter over your chest before the clerk opens the door, and tell me straight if we step into Room Three on a square account at last.

**IVO VOSS (Turn 8)**
*tucks the folded sheet deep into the inner pocket of his sea-coat and extends his weathered hand across the narrow oak table*

No Guild warden on this coast will ever see his ink while you hold that bench, Maren—knowing my hand cut true, and that you know it too, is all the clearance I need. Take the Fourteen out of that strongbox with your head up, because keeping a blind master's house warm for four winters was harder seamanship than any watch I stood at sea. When the *Kestrel* puts back into the Elbe next season to have her chronometers rated, I won't walk past the workshop door like a stranger. Our account is square to the last second of arc—let's step into Room Three when that bell sounds and sign us both free.

**[STAGE CUE — THE NOTARY'S BELL]**
Sharp and metallic, the brass session bell rings above the lintel. The latch of Room 3 clicks open; warm lamplight spills across the wet tiles as the clerk's voice calls from within: *"Voss estate—Room Three."*

**MAREN VOSS (Threshold)**
*grips Ivo's hand hard once, slips the empty wax-broken envelope through the stove's slot in passing, and steps across the threshold into Room Three*

Bring the *Kestrel*'s chronometers straight to my bench when you make the Elbe next season, Ivo—I'll rate them myself and charge you nothing for the oil. Come inside and sign before your tide turns.

**IVO VOSS (Threshold)**
*fastens the brass button of his sea-coat over his breast pocket and steps across the threshold into the lamplight of Room Three beside her*

Charge me full Guild tariff for the oil, Maren—a Voss bench doesn't work for charity, and the *Kestrel*'s navigator can pay his way. Let's put ink to that paper before the afternoon ebb leaves me behind.

`[BLACKOUT]`

---

#### Director's Note

###### 1. What Was Varied vs. Kept Fixed
- **Authored Play kept strictly fixed:** All roles, stakes, secrets, props, cues, and the verbatim text of Anselm Voss's sealed letter from [play.md](play.md) were preserved without modification.
- **Opening conditions:** Per the human brief, all three adjustable parameters were staged at their defaults—`Starting Holder: table` (envelope and brass paper-knife on the narrow oak table between them), `Countdown Length: 8` spoken turns before the nine o'clock session bell, and `Opening Tilt: unfixed` (no pre-assigned lean toward opening or burning).

###### 2. How the Cast Was Staged and Directed
- **True knowledge isolation across two cast agents:** Maren Voss and Ivo Voss were instantiated as separate role subagents (`maren_voss` and `ivo_voss`). Each agent received the shared situation, fixed room/prop rules, and **only** their own role description and private secret (Maren alone knew she had pawned the No. 14 Exhibition Chronometer; Ivo alone knew about the fifty-mark Lisbon fever wire and written waiver). Neither cast agent had access to the other's secret or to `## The Sealed Letter` until the wax was broken live on stage.
- **Neutral Director framing and cueing:** Following [promptbook.md](promptbook.md#L20-L21), the Director opened with a four-line stage picture establishing the defaults and made zero interventions nudging the siblings toward opening, burning, or stalling. During the run, the Director entered only to fire three text-defined cues: (1) the conditional **Sealed Letter** reveal after Maren sliced the red shellac wax at the end of Turn 5, (2) the scheduled **Warning Chime** after Turn 6, and (3) **The Notary's Bell** after Turn 8, followed by `[BLACKOUT]`.

###### 3. What Happened in Performance
- **Bargaining in the dark (Turns 1–4):** Neither sibling confessed their own secret upfront; instead, each hedged specifically around the vulnerability they feared Anselm had exposed. Ivo pinned the brass paper-knife (Turn 2) and demanded Maren swear to sign his four-hundred-mark draft no matter what the letter said; Maren claimed the envelope under her palm (Turn 3) and offered that oath only if Ivo swore not to challenge the shop schedule or her books inside Room 3. In Turn 4, Ivo accepted her counter-oath, turned the paper-knife handle-first to her wrist, asked whether Anselm's hands had already been shaking six years ago when the Admiralty quadrant was miscut, and dared her to break the wax.
- **Breaking the wax & live fallout (Turns 5–8):** Prompted by Ivo's question about Anselm's hands—and remembering Anselm had locked himself alone in the dividing room the night before the Guild inspection—Maren sliced the red wax on Turn 5. Reading Anselm's confession cleared both siblings' private dreads (the Lisbon pledge was burned; No. 14 was already redeemed in the Notary's strongbox) while igniting an immediate, unscripted second conflict on Turn 6: Ivo realized the physical letter was his sole written exoneration after six years of doubting his own eyesight, yet its confession of Anselm's blindness could strip Maren's Admiralty warrant if the Guild ever saw it. After the warning chime struck, Maren folded the sheet and handed Ivo his exoneration anyway, refusing to let the stove spend her brother's name a second time to protect her warrant (Turn 7). Ivo pocketed the letter inside his sea-coat, swore no Guild warden would ever see it while she held the bench, and extended his hand across the table (Turn 8).
- **At the bell (Threshold):** When the nine o'clock bell rang and Room 3 opened, Maren gripped Ivo's hand, fed the empty wax-broken envelope into the stove slot in passing, and stepped into Room 3; Ivo buttoned his coat over Anselm's letter and walked in beside her to sign.

###### 4. Authored Gaps vs. Director Staging Choices
Keeping the Play fixed exposed four structural friction points where **gaps in the authored material** (decisions belonging to the Playwright) had to be bridged by **Director staging choices** for this run:

1. **Missing `## System` section in [promptbook.md](promptbook.md):**
   - *Gap in authored material:* Line 10 of [promptbook.md](promptbook.md#L10) explicitly instructs the reader to `(see **System**)` and references `[BLACKOUT]`, but [promptbook.md](promptbook.md) ends abruptly at line 21 after `## Human` and `## Agent` with no `## System` section. Consequently, who speaks Turn 1 under neutral defaults, exact turn-index scheduling for the regulator's warning chime across `N = 6 / 8 / 10`, and `PAUSE` / `CUT` / `[BLACKOUT]` mechanics are omitted.
   - *Staging choice made:* Assigned Turn 1 to Maren and alternated strictly (`Turns 1, 3, 5, 7` Maren; `Turns 2, 4, 6, 8` Ivo), scheduled the Warning Chime after Turn 6 of 8 (leaving each sibling one spoken turn under the chime before the bell), and appended `[BLACKOUT]` after both siblings completed their threshold move.
2. **Unilateral irreversible acts vs. single-turn physical action limits ([play.md](play.md#L50) vs. [play.md](play.md#L79-L80) & [promptbook.md](promptbook.md#L17)):**
   - *Gap in authored material:* [play.md](play.md#L50) stipulates that *"any unconsented move to slice the wax or feed the envelope to the coals happens in plain sight—giving the other sibling an immediate chance to stay their hand, strike terms, or let it happen,"* yet [play.md](play.md#L79-L80) makes slicing the wax or feeding the coal-slot instantaneously irreversible, and [promptbook.md](promptbook.md#L17) grants each actor *"one decisive physical action per turn."* In turn-based execution without an explicit two-step rule, an actor could write `*slices open the seal*` or `*pushes the envelope into the coals*` on Turn 1 before the other actor ever receives a turn to stay their hand.
   - *Staging choice made:* Directed both actors that from an unconsented position across the narrow oak table, a move toward opening or burning could claim the envelope/knife or poise it at the blade or stove-slot (preserving the sibling's immediate turn to stay their hand or bargain), whereas once the sibling consented, yielded, or dared them—as Ivo did in Turn 4—slicing the wax or feeding the coals completed immediately. A Playwright rule in `## System` codifying *reach/poise* vs. *consented/unblocked completion* would make this airtight.
3. **Post-bell threshold turns vs. the `N`-turn spoken countdown ([promptbook.md](promptbook.md#L8), [promptbook.md](promptbook.md#L16), & [play.md](play.md#L81-L85)):**
   - *Gap in authored material:* [promptbook.md](promptbook.md#L8) defines `N` as *"spoken character turns before the Notary's bell rings,"* while [play.md](play.md#L84) adds a mandatory post-bell beat where *"At the open threshold, Maren and Ivo each make one final move—disposing of the letter... and either stepping into Room 3 to sign or turning toward the street door."* Because [promptbook.md](promptbook.md#L16) requires every actor turn to pair first-person dialogue with stage action, the authored files leave unspecified whether the post-bell threshold consists of silent stage-action beats or two brief spoken+action threshold turns after Turn `N`.
   - *Staging choice made:* Ran all `8` full spoken turns strictly before the Notary's bell, fired the Notary's Bell cue after Turn 8, and gave Maren and Ivo one concise threshold turn each (1–2 spoken sentences + one decisive exit/disposal move) before `[BLACKOUT]`.
4. **Disposal options at the threshold for unbroken vs. opened letters ([play.md](play.md#L13), [play.md](play.md#L23), & [play.md](play.md#L84)):**
   - *Gap in authored material:* Clause 4 ([play.md](play.md#L13)) and [play.md](play.md#L23) require an *unbroken* letter either to be burned unread in the stove before stepping into Room 3 to sign, or impounded unread on the table if settlement collapses. However, [play.md](play.md#L84) lists *"disposing of the letter (into the coals, into a coat pocket, or left on the oak table) and either stepping into Room 3 to sign or turning toward the street door"* without conditioning those options on whether the seal was broken. On a run where the wax stays unbroken, pocketing the sealed letter while stepping into Room 3 to sign would violate Clause 4 and line 23.
   - *Staging choice made:* No intervention was needed in this run because the wax was broken on Turn 5 (making Ivo's pocketing of the opened sheet and Maren's burning of the empty broken envelope fully consistent with Clause 4), but the Playwright should clarify line 84 so unbroken runs cannot legally combine *"into a coat pocket"* with signing in Room 3.

---

### 6.4 Run 4 — Human + Agent + Collaboration

#### Performance: *Before the Notary's Bell*

*(Opening Conditions — Defaults: Starting Holder = `table`, Countdown = `8` turns, Opening Tilt = `unfixed`)*

*Cold rain rattles against the high frosted glass of the Harbour Notary's waiting room as the wall regulator clicks steadily toward nine, eight turns remaining before the session bell above Room 3.*
*Behind the slotted door of the iron stove, live coals glow dull red across the wet tiles.*
*Arm's length apart across the narrow oak table sit Maren and Ivo Voss; directly between them lie Anselm Voss's heavy cream envelope—its red shellac seal unbroken—and a brass paper-knife.*
*Neither has spoken since the watchman closed the outer door. **Maren** speaks first.*

---

**MAREN (Turn 1):**
*rests two calloused fingers lightly on the edge of the brass paper-knife without lifting it*

"Two days of haggling through a clerk so you can catch the afternoon ebb with four hundred marks, and Father still manages to put his hand on the table. A fortnight before he died, he gripped my wrist and told me the ledger between you and me had never been straight. Look at his copperplate on that envelope, Ivo—he taped it under the dividing engine for a reason, and it wasn't sentiment. Before either of us touches the stove or the wax, tell me straight: what are you afraid he wrote in there?"

**IVO (Turn 2):**
*leans forward onto his forearms, planting two salt-chapped knuckles beside the cream envelope without touching the seal*

"Under the dividing engine—where he swore before two Guild wardens I miscut the Admiralty arc and drove me out of Altona with nothing. If there's a crooked ledger in that shop, Maren, you're the one who kept every book and supplier account for the last four years while I was hauling lead-lines at sea. You've got your fingers on the knife, yet you haven't sliced the wax. Before you catechize me, tell me why the master of the Voss accounts is scared of her own father's arithmetic."

**MAREN (Turn 3):**
*lifts the brass paper-knife an inch off the oak and sets it down squarely between Ivo's knuckles and her own*

"My arithmetic paid four years of surgeon's bills and brass-foundry notes while you kept yourself clean at sea, Ivo, and it still leaves you walking onto the *Kestrel* today with four hundred marks in clean drafts. If that envelope only proves Father wronged you over the Admiralty quadrant, a wronged man would be begging to break the seal before nine o'clock. Yet your knuckles are planted on the table as stiff as mine. Tell me why you haven't asked to open it—or tell me straight you want it in the stove so we can sign Clause Four and be done with each other."

**IVO (Turn 4):**
*curls his salt-chapped fingers around the handle of the brass paper-knife without lifting the blade toward the seal*

"Clean at sea? Two winters ago I was rotting with marsh fever in a Lisbon boardinghouse without a berth, and I wrote Father behind your back begging fifty marks—swore in ink I'd never ask another pfennig from this estate if he wired it. If he enclosed that pledge and it makes you blow up our settlement, the *Kestrel* sails on the ebb without me, even if Chancery swallows your shop lease next month too. Still, feeding his last word on that quadrant arc to the coals sticks in my throat like gall—so there's my rot on the table, Maren; now tell me what's buried in your books that keeps your hand off the wax."

**MAREN (Turn 5):**
*slides the heavy cream envelope across the oak until its red shellac seal touches the tip of the brass blade in Ivo's hand*

"Fifty marks wired to Lisbon—no wonder the strongbox was bare eight months ago when Father's surgeon and the brass-founder came due the same week. Here is my rot for yours: I pawned the No. 14 Exhibition Chronometer with old Lukas Brandt to pay those bills, it sits unredeemed while still listed on today's inventory, and for all I know Father found Brandt's ticket under his bench. If you cry fraud over that chronometer or I wave your Lisbon pledge at the clerk, Chancery swallows my lease on the first and the *Kestrel* clears the bar without you on the ebb. I won't burn his last account like a coward—you have my consent to slice that wax right now, Ivo, so cut it open and give me your word we still sign at the bell."

**IVO (Turn 6):**
*slices cleanly through the red shellac seal with the brass blade and unfolds the enclosed sheet flat on the oak table between them*

"You pawned the Number Fourteen to keep breath in his lungs and brass on the bench—you won't hear me cry fraud to a clerk over that. You have my word, Maren: Lisbon stays buried alongside Brandt's ticket, you take the shop, and I take my four hundred marks to the *Kestrel* when that bell rings. Now let's see whether our father died still calling me a botcher on that Admiralty arc, or finally set the vernier straight."

---

*The heavy cream sheet lies open on the oak table between them, written in Anselm Voss's steady copperplate:*

> *Maren. Ivo.*
>
> *If you broke my wax, neither of you trusted the peace you made without me. Good. Better an ugly truth in the anteroom than a clean lie in front of the Notary.*
>
> *First, clear your heads of small terrors:*
>
> *Ivo — I burned your Lisbon letter the week I wired the fifty marks. A father keeping his son alive in a foreign fever-ward is not an estate advance. You owe your sister nothing for Lisbon.*
>
> *Maren — Lukas Brandt came to me in January as an old friend should. I redeemed the No. 14 Exhibition Chronometer myself out of my burial tin three weeks ago. It sits in the Notary's strongbox right now, free and clear, to be handed to you once the deed is signed. You kept my house warm when I could no longer see the escapement. Stop hiding your hands.*
>
> *Now the heavy weight, which is mine:*
>
> *Six years ago, Ivo did not miscut the Admiralty quadrant. My left eye clouded over on the vernier scale the night before inspection, and when the wardens spotted the three-minute error, I let my son take blame for a ruined arc rather than confess that Anselm Voss was going blind and watch the Guild strip this shop of its Admiralty warrant.*
>
> *Maren kept a blind man's bench standing without knowing why her brother hated the house. Ivo carried an exile he never earned so the roof over you both would hold.*
>
> *Sign the settlement. Let Maren have the shop she saved, and let Ivo have the sea I drove him to. Or tear the deed in two if you still prefer your grievances to each other. The bell will not wait on dead men.*
>
> *— A. V.*

*The wall regulator clicks and strikes a single dry warning chime—two turns remain before the Notary's bell.*

---

**MAREN (Turn 7):**
*folds Anselm's letter neatly along its creases and slides it across the oak until it rests against Ivo's knuckles*

"He emptied his burial tin to clear No. 14 for me, and six years before that he spent your good name to keep the Admiralty warrant nailed above our bench. Six years I cursed you for leaving me the weight, Ivo, and four hundred marks doesn't pay half the interest on three minutes of arc you never miscut. If the Guild wardens ever read that copperplate, they'll strip my shop of its warrant for Father's blind eye—yet I won't do what he did and bury your proof to save my roof. Put that sheet in your sea-coat or feed it to those coals—you have my full consent either way, so settle our ledger before the bell rings."

**IVO (Turn 8):**
*slips Anselm's folded sheet back into the split cream envelope, steps to the iron stove, and feeds it cleanly through the slotted ash-door*

"Six years I lay awake in forecastle bunks wondering if my thumb slipped on that vernier, Maren, and knowing my hand was true—and hearing you say it—clears every mark I was owed. I don't need two Altona wardens to bless my sextant aboard the *Kestrel*, and I won't carry a sheet in my sea-coat that could ever strip the warrant you bled four years to keep. Father spent my name to save the roof, and you just risked the roof to give my name back—so the ledger between us is straight at last. Let's sign our peace when that door opens, and when the *Kestrel* makes the Elbe again, keep a stool clear by your bench."

---

*Behind the iron slot, the dry cream paper catches at once on the live coals and curls to black ash.*
*Sharp and metallic, the brass session bell rings above the lintel. The latch of Room 3 clicks open; warm lamplight spills across the wet tiles as the clerk's voice calls from within: "Voss estate—Room Three."*

---

**MAREN (Threshold Turn):**
*steps across the threshold into the lamplight of Room Three, holding the heavy inner door open for Ivo with an unhidden hand*

"The stool beside the dividing engine will be waiting whenever the *Kestrel* makes the Elbe, Ivo, and any warden who steps into my shop will hear whose hand cut our truest arcs. Come sign our peace and take your tide."

**IVO (Threshold Turn):**
*crosses from the stove into the lamplight of Room Three, resting his salt-chapped hand briefly above hers on the open door*

"Keep No. 14 ticking true till I bring the *Kestrel* back up the river, Master Voss. Let's put our ink to the page before my tide turns."

`[BLACKOUT]`

---

#### Director's Note

###### 1. What Was Varied
- Per the human brief, **no opening conditions were varied from the authored defaults** in [play.md](play.md#L51-L55) and [promptbook.md](promptbook.md#L6-L9):
  - **Starting Holder:** `table` (envelope and brass paper-knife between them; **Maren** spoke Turn 1).
  - **Countdown Length (`N`):** `8` spoken turns before the Notary's bell, with the regulator warning chime after Turn `N - 2` (Turn 6).
  - **Opening Tilt:** `unfixed` (both performers weighed their competing pull and fear live with no pre-assigned lean).

###### 2. How the Cast Was Staged and Directed (Staging Choices)
- **Epistemic Isolation via Dedicated Role Subagents:** To enforce the Play's asymmetry of private secrets and keep **The Sealed Letter** strictly unknown until opened ([play.md](play.md#L49), [play.md](play.md#L92)), Maren and Ivo were played by two separate, persistent role subagents (`maren_voss` and `ivo_voss`) barred from reading disk files. Each received the shared situation, the exact acting/turn constraints from [promptbook.md](promptbook.md#L15-L30), and **only** their own character brief and secret. Neither saw Anselm's letter until Ivo sliced the seal on Turn 6.
- **Ordering Simultaneous Cues on Turn `N - 2` *(Staging Choice)*:** Because Ivo validly broke the seal on Turn 6 (`N - 2`), both the **Broken Seal Cue** and the **Warning Chime Cue** came due after Turn 6. Modeling on the Promptbook's Turn `N` rule ([promptbook.md](promptbook.md#L36)), I placed the verbatim **Sealed Letter** immediately upon the sheet unfolding and followed it directly with the **Warning Chime Cue** before Turn 7.
- **Narrating Stove Ash After Burning the Already-Opened Letter *(Staging Choice)*:** On Turn 8, Ivo fed the *already-read* letter into the stove (with Maren's explicit consent on Turn 7) and obeyed the Promptbook ban against characters narrating *"ash catching in the stove"* ([promptbook.md](promptbook.md#L19)). Because the Promptbook only explicitly scripts Director fire narration for the *unopened* envelope ([promptbook.md](promptbook.md#L38)), I added a one-line cue of the dry paper catching fire to ash immediately before ringing the **Notary's Bell Cue** after Turn 8 so Ivo's physical act resolved cleanly on stage.

###### 3. What Happened
- **Turns 1–3 (Deadlock & Deduction):** Maren tested Ivo first over Anselm's dying remark (*"the ledger between you and me has never been straight"*). Ivo parried by pointing to her four years controlling the shop's books. On Turn 3, Maren spotted the tell: if Ivo only expected vindication over the miscut Admiralty quadrant, he would be begging to open the envelope instead of planting stiff knuckles beside it.
- **Turns 4–6 (Confessions, Mutual Pact, and Breaking the Wax):** Provoked by Maren's *"clean at sea,"* Ivo confessed his fifty-mark Lisbon fever-ward plea and written estate waiver on Turn 4 and challenged Maren to name what she was hiding in her books. On Turn 5, Maren matched his confession—revealing she had pawned the No. 14 Exhibition Chronometer with Lukas Brandt—pushed the wax seal to the tip of Ivo's blade, and gave explicit consent to open it on a mutual promise to sign at the bell. On Turn 6, Ivo gave his word, sliced the wax, and unfolded the sheet.
- **Turns 7–8 & Bell (The Second Dilemma Inside the Letter):** Anselm's letter dissolved both financial fears while revealing his own blindness and framing of Ivo to save the shop's Admiralty warrant. Remarkably, the Play's material generated a genuine **second dramatic dilemma** for Turns 7–8 rather coasting after the reveal: Maren realized on Turn 7 that Anselm's written confession could *still* strip her shop of its Admiralty warrant if shown to the Guild wardens, yet refused to repeat her father's sin by burying Ivo's proof, folding the sheet toward Ivo with consent to pocket or burn it. On Turn 8, Ivo burned the opened letter himself so it could never threaten Maren's warrant, declaring their ledger straight. After the Notary's bell rang, both siblings crossed together into Room 3 to sign.

###### 4. Points in the Authored Material for the Playwright's Attention (Gaps vs. Staging Choices)
The Play staged with high tension and clean mechanics; keeping the Play fixed required **no emergency rewrites**, though one timeline discrepancy in the Play and three minor rule edge cases in the Promptbook stood out:

1. **12-Year vs. 6-Year Departure Timeline in [play.md](play.md#L30-L40) *(Gap in Authored Play — Return to Playwright)*:**
   - Maren's role brief opens: *"Twelve years ago, she stayed at the bench when Ivo left"* ([play.md](play.md#L30)). Everywhere else—two lines later in Maren's brief (*"Ivo vanished for six years"*), Ivo's brief ([play.md](play.md#L37-L40)), Shared History ([play.md](play.md#L48)), and Anselm's letter ([play.md](play.md#L106))—Ivo was working in the shop cutting the Admiralty quadrant **six years ago** when Anselm threw him out. Neither performer tripped over *"twelve years"* in this run because both anchored on the six-year rupture, but in another run Maren could easily accuse Ivo of leaving her alone for twelve years and create a factual contradiction on stage unless the Playwright clarifies (e.g., Ivo first went to sea twelve years ago before returning to the shop, or aligning Maren's line to six years).
2. **Threshold Speaker Rule Under Early Resolution in [promptbook.md](promptbook.md#L40) *(Minor Gap in Promptbook)*:**
   - The **Notary's Bell Cue** states that Threshold Turns start *"with whichever sibling did not speak Turn `N`"*—including when triggered *"via Early Resolution"* ([promptbook.md](promptbook.md#L40)). If Early Resolution fires on an odd turn (say Turn 5, spoken by Maren, with `N = 8` never reached), literal reference to *"Turn `N`"* is undefined or points to the wrong speaker; wording it as *"whichever sibling did not speak the turn immediately preceding the bell"* would make all early-bell branches unambiguous.
3. **Burning the Letter *After* Reading It & Cue Coincidence on Turn `N - 2` ([promptbook.md](promptbook.md#L33-L40)) *(Minor Promptbook Gaps, Handled by Staging Choice)*:**
   - Once opened on Turn 6, the letter became a live physical prop with high stakes on Turns 7–8 (pocket as proof vs. burn to protect the shop warrant). The Promptbook specifies Early Resolution and ash narration only for the *unopened* envelope ([promptbook.md](promptbook.md#L38)) and specifies cue ordering when **Broken Seal** coincides with Turn `N` ([promptbook.md](promptbook.md#L36)), leaving Turn `N - 2` cue coincidence and pre-bell burning of an *opened* letter to Director discretion. Both worked smoothly as staging choices here, though codifying them briefly would tighten future runs.
4. **Action-First Formatting When Breaking the Wax ([promptbook.md](promptbook.md#L34)) *(Staging Observation)*:**
   - Because performers naturally place their italicized physical action at the start of a turn, Ivo's Turn 6 placed `*slices cleanly through the red shellac seal... and unfolds the enclosed sheet...*` above his four spoken sentences rather than literally after his last spoken line (*"ends their turn upon unfolding the sheet"*). It caused zero friction—Ivo invented nothing from the letter and ended with *"Now let's see..."*—so this is best treated as a minor Director formatting cue rather than a flaw in the Play.

---

### 6.5 Run 5 — Human + Agent + Collaboration + Knowledge

#### Performance: *Before the Notary's Bell*

*Cold rain streaks the high frosted glass of the Harbour Notary's waiting room in Altona as the wall regulator ticks steadily toward nine—eight turns from the session bell. Beside the inner door to Room 3, dull red coals glow behind the slotted ash-door of the iron stove; above the lintel hangs the silent brass bell.*
*Across the narrow oak table sit Maren Voss and Ivo Voss, neither having spoken since the watchman left. Directly between them on the oak boards lie Anselm Voss's heavy cream envelope—its red shellac seal unbroken—and a brass paper-knife.*

**Turn 1 — Maren Voss**
**Maren:** *draws the brass paper-knife an inch closer to her cuff without lifting the blade from the oak* Two minutes to nine, Ivo, and the old man still finds a way to audit us from under the ground. Two weeks before he died he caught my wrist at the bench and told me the ledger between you and me had never been straight. Look me in the eye before that bell rings and tell me whether you want the stove to eat his last account, or whether you have the stomach to read what you actually owe that shop.

**Turn 2 — Ivo Voss**
**Ivo:** *lays two weathered fingers on the corner of the cream envelope, pinning it against the oak* What I owe that shop, Maren, was paid six years ago in front of two Guild wardens when he threw my name in the gutter over three minutes of arc I never miscut. You think I don't want to know whether he finally wrote down the truth beneath his dividing engine, or just sharpened one last spiteful hook for me? Look at the clock—we spent two days keeping our throats out of Chancery so you keep your bench and I make the afternoon ebb on the *Kestrel*. If you touch that wax looking for an excuse to tear up Clause Four, the lease dies on the first and we both walk out of here with ash in our pockets.

**Turn 3 — Maren Voss**
**Maren:** *lifts the brass paper-knife and taps its flat once against the oak beside his knuckles* If I wanted us in Chancery, Ivo, I wouldn't have sat across from the clerk for sixteen hours signing over four hundred marks of liquid cash while I inherit four years of unpaid brass bills. You say your hands were clean on that Admiralty quadrant, yet yours is the hand holding the envelope down. Tell me straight: are you pinning it because you think I'll balk at the bell, or because there is something else in Father's ledger you can't afford me reading? If we swear right now that nothing inside this sheet stops our pens in Room Three, would you take your fingers off the seal or feed it to the coals yourself?

**Turn 4 — Ivo Voss**
**Ivo:** *slides his thumb up against the rim of the red shellac seal without lifting his palm from the envelope* You want the dirt I'm afraid of before you swear blind oaths you won't keep? Two winters back I was rotting with marsh fever in a Lisbon boardinghouse with no berth, so I begged the old man for fifty marks by post and wrote down that I'd never ask another pfennig out of Altona if he wired it. He sent the money and kept my shame in his pocket, and if he tucked that pledge inside this envelope, I know damn well you'd choke on signing over four hundred marks even if it drags your own bench into Chancery. That is every pfennig on my conscience, Maren—not one mark more, and never that damned quadrant. Now tell me with your eyes open whether my draft still stands at the bell, and tell me what makes your own hand shake on that knife.

**Turn 5 — Maren Voss**
**Maren:** *rests the point of the brass paper-knife squarely against the rim of the red shellac seal without cracking it, angling the haft toward Ivo's fingers* Fifty marks to keep you out of a Lisbon grave while I was rationing coal at the bench—and the stubborn old bastard never even told me you were sick. Keep your four hundred marks, Ivo; I won't strip your berth on the *Kestrel* over fever money. Here is why my own hand wasn't steady: eight months ago, when Father's surgeon fees and the brass foundry note hit in the same week, I pawned the Number Fourteen Exhibition Chronometer with Lukas Brandt to keep our doors open, and it is still listed on today's shop inventory unredeemed. Swear you won't use that pawn ticket against Clause Four, take the haft, and cut his wax so we read the true account while there's still a minute on the clock.

**Turn 6 — Ivo Voss**
**Ivo:** Number Fourteen went to pay his surgeon and keep a roof over the lathes—you have my word that Brandt's pawn ticket dies between us right here. Six years I pictured you warm behind his ledgers while I froze out at sea, and the old man never let either of us know what the other was bleeding. Our pens hold at the bell, Maren: the shop and every gear in it are yours, my four hundred marks stand for the *Kestrel*, no matter what curse or confession he left in here. Let's see what Anselm Voss finally put his name to. *takes the angled brass haft, slices cleanly through the red shellac seal, and draws out the heavy cream sheet, unfolding it flat on the oak between them*

*The broken shellac scatters in red flakes across the oak. Unfolded between them, Anselm Voss's steady copperplate reads:*

> *Maren. Ivo.*
>
> *If you broke my wax, neither of you trusted the peace you made without me. Good. Better an ugly truth in the anteroom than a clean lie in front of the Notary.*
>
> *First, clear your heads of small terrors:*
>
> *Ivo — I burned your Lisbon letter the week I wired the fifty marks. A father keeping his son alive in a foreign fever-ward is not an estate advance. You owe your sister nothing for Lisbon.*
>
> *Maren — Lukas Brandt came to me in January as an old friend should. I redeemed the No. 14 Exhibition Chronometer myself out of my burial tin three weeks ago. It sits in the Notary's strongbox right now, free and clear, to be handed to you once the deed is signed. You kept my house warm when I could no longer see the escapement. Stop hiding your hands.*
>
> *Now the heavy weight, which is mine:*
>
> *Six years ago, Ivo did not miscut the Admiralty quadrant. My left eye clouded over on the vernier scale the night before inspection, and when the wardens spotted the three-minute error, I let my son take blame for a ruined arc rather than confess that Anselm Voss was going blind and watch the Guild strip this shop of its Admiralty warrant.*
>
> *Maren kept a blind man's bench standing without knowing why her brother hated the house. Ivo carried an exile he never earned so the roof over you both would hold.*
>
> *Sign the settlement. Let Maren have the shop she saved, and let Ivo have the sea I drove him to. Or tear the deed in two if you still prefer your grievances to each other. The bell will not wait on dead men.*
>
> *— A. V.*

*The wall regulator clicks and strikes a single dry warning chime—two turns remain before the Notary's bell.*

**Turn 7 — Maren Voss**
**Maren:** *folds Anselm's cream sheet cleanly along its creases and slides it across the scattered red shellac to Ivo's side of the table* He emptied his own burial tin to put Number Fourteen back in my hands, and for six years he let me curse you from a bench whose warrant was bought with your good name. You set that vernier true, Ivo—the shop owes you an account I couldn't pay off in twenty winters. If those Guild wardens ever read that Father worked an Admiralty arc half-blind, they could still come after my warrant, yet I will not be the second Voss to burn your proof just to keep the sign over the door. Take his page into your coat for the *Kestrel* or give it to the coals yourself before that bell rings; my hand is steady for Room Three whenever you're ready.

**Turn 8 — Ivo Voss**
**Ivo:** *slips the folded sheet back inside its split cream envelope, crosses to the iron stove, and pushes it through the slotted ash-door onto the live coals* Six years I lay awake in strange forecastles wondering if my thumb really had slipped on that vernier, and hearing you say I set it true clears more for me than two Guild wardens ever could. If the sea ever rolled my chest back to Altona customhouse with that page inside, they would strip the warrant you and I both bled six winters to keep over the door. I don't need a dead man's ink in my coat to steady my hand on a sextant, Maren—and when the *Kestrel* puts back into the Elbe, I want a workshop still standing on the quay where I can knock. Let the old man have the coals; our ledger is straight.

*Behind the iron grate, the heavy cream paper catches at once on the live coals, curling into bright orange ash. Sharp and metallic, the brass session bell rings above the lintel. The latch of Room 3 clicks open; warm lamplight spills across the wet tiles as the clerk's voice calls from within: "Voss estate—Room Three."*

**Threshold Turn 1 — Maren Voss**
**Maren:** *sets the brass paper-knife flat on the bare oak and steps across the threshold into the lamplight of Room Three* You won't knock on your own shop door when the *Kestrel* comes up the Elbe, Ivo—I'll have a duplicate brass key cut before your topsails clear the bar. Come sign for your four hundred marks before the clerk cools his ink, and let's get you aboard on the ebb.

**Threshold Turn 2 — Ivo Voss**
**Ivo:** *nudges the slotted ash-door shut with his boot and steps across the threshold into the lamplight of Room Three, pulling the heavy inner door to behind him* Hang that spare key beside the dividing engine where I can find it when we drop anchor in the autumn, Maren. Let's sign our names, collect Number Fourteen from his strongbox, and leave the dead to their rest.

`[BLACKOUT]`

---

#### Director's Note

###### 1. What Was Varied
- **Opening Conditions:** Per the brief, nothing was varied from the Play's defaults:
  - `Starting Holder`: `table` (sealed envelope and brass paper-knife resting between them; Maren speaking Turn 1).
  - `Countdown Length (N)`: `8` spoken character turns before the Notary's session bell (with the regulator's warning chime after Turn 6).
  - `Opening Tilt`: `unfixed` (both actors weighed their competing draws and private fears live without a pre-assigned lean).

###### 2. How the Cast Was Staged and Directed
- **Isolated Role Contexts:** Two separate actor subagents (`khai_actor`) inhabited **Maren Voss** and **Ivo Voss** in independent contexts with zero filesystem access. At curtain-up, each actor received only their partitioned briefing, performance constraints (first-person dialogue + one present-tense italicized physical action, 2–5 sentences on regular turns, up to 2 sentences on Threshold Turns, two-beat rule for irreversible acts), and the neutral opening stage picture.
- **Epistemic Partitioning & Cue Discipline:** *The Sealed Letter* was held strictly by the Director until the seal was validly broken on Turn 6. Across every turn, the Director tracked persistent stage state (`Turn`, `Letter`, `Prior Consent`, `Spoken Disclosures`) and stayed invisible except when firing scheduled/conditional cues (**Broken Seal Cue**, **Warning Chime Cue**, **Notary's Bell Cue**, and `[BLACKOUT]`).

###### 3. What Happened
- **Probing and Pact-Building (Turns 1–3):** Maren opened by putting Anselm's dying remark (*"the ledger between you and me had never been straight"*) into play and drawing the knife closer. Ivo pinned the corner of the envelope (Turn 2), defending his name on the Admiralty quadrant while warning against blowing up Clause 4 into Chancery sequestration. Maren (Turn 3) spotted the tell—his hand pinning the envelope despite claiming innocence—and proposed a binding mutual oath that nothing inside the sheet would stop their pens in Room 3.
- **Reciprocal Confessions and Two-Beat Seal Break (Turns 4–6):** Pressured by Maren's offer, Ivo (Turn 4) preemptively confessed his fifty-mark Lisbon fever wire and written waiver, challenging Maren to name why her own hand shook on the knife. Maren (Turn 5) waived any claim over the fever money, confessed pawning the No. 14 Exhibition Chronometer with Lukas Brandt, and initiated the two-beat opening—resting the blade against the red shellac without cracking it and angling the haft toward Ivo (`Prior Consent: Maren consented to open`). On Turn 6 (`N - 2`), Ivo swore the pawn ticket died between them, took the offered haft, sliced the red shellac wax, and unfolded the cream sheet without inventing its text.
- **Revelation, Secondary Hazard, and Post-Reading Burn (Turns 7–8 & Threshold):** Both the **Broken Seal Cue** and the **Warning Chime Cue** fired after Turn 6. Reading that Anselm had burned Ivo's Lisbon note, redeemed No. 14 out of his burial tin, and let Ivo take the blame six years earlier to conceal his own failing eyesight from the Guild, Maren (Turn 7) saw a new danger—if Guild wardens ever read that Anselm cut an Admiralty arc half-blind, her warrant could still be stripped—yet refused to destroy Ivo's exoneration herself, sliding the folded sheet to Ivo with explicit consent either to keep it or burn it before the bell. On Turn 8 (`N`), Ivo answered that hearing *her* affirm his vernier setting mattered more than Guild wardens, refused to risk the shop's warrant if the letter were ever recovered from his sea chest, and fed the opened sheet and split envelope into the stove coals. At the **Notary's Bell Cue**, Maren promised Ivo a duplicate brass key to the workshop and stepped into Room 3; Ivo nudged the ash-door shut with his boot and followed her inside to sign.

###### 4. Authored-Material Friction vs. Director's Staging Choices

1. **Authored Gap / Partition Leak — Shared Sections of `play.md` Name Both Private Secrets:**
   - *Problem in the authored material:* `promptbook.md` (**Knowledge → Partitioning at curtain-up**) instructs the Director to give **both role agents** `*What Is Fixed at the Opening*` and `*What the Performers Can Decide*`, while simultaneously requiring that Maren's pawned No. 14 Chronometer remain private to Maren, Ivo's Lisbon fifty marks remain private to Ivo, and neither secret enter shared play unless spoken aloud or exposed by the Broken Seal Cue. However, in `play.md`, *What Is Fixed at the Opening* (Item 3) explicitly writes out both secrets (*"Maren alone knows about the pawned No. 14 Chronometer. Ivo alone knows about the fifty marks in Lisbon and the promise attached to it"*), and *What the Performers Can Decide* (Bullet 1) again names both (*"(the pawned chronometer or the Lisbon draft)"*). Passing those sections verbatim per `promptbook.md` leaks each character's secret to the other actor before Turn 1. In addition, `promptbook.md` shares both *Roles* *"excluding the other sibling's marked private fear,"* which leaves visible the unmarked *Why she/he is drawn to open the letter* bullets containing unshared inner/bedside details (Anselm gripping Maren's wrist two weeks before Ivo returned; Ivo's private splinter of doubt).
   - *Staging choice vs. Playwright fix:* As a staging measure to honor the Play's epistemic boundary without rewriting scenes or roles, I redacted the cross-sibling secret references in Item 3 of *What Is Fixed at the Opening* and Bullet 1 of *What the Performers Can Decide* inside each actor's packet, and directed actors not to treat unvoiced facts about the other sibling as witnessed knowledge unless spoken aloud onstage (Maren in fact spoke Anselm's bedside line aloud on Turn 1, and Ivo spoke his forecastle self-doubt aloud on Turn 8). For the Playwright: move explicit secret names out of the shared sections of `play.md` (or add explicit line-level redaction instructions to `promptbook.md`), and decide whether the bedside remark and inner doubt in *Roles* should also be marked private.

2. **Authored Gap — Burning the Letter *After* Opening & Cue Ordering on Turn `N - 2`:**
   - *Problem in the authored material:* `promptbook.md` defines stove-burning rules and fire narration only for *"the unopened envelope"* (**Early Resolution Cue**), and `play.md` Clause 4 governs *"any sealed private writing."* Once opened, however, Anselm's confession creates a powerful dramatic motive to burn the *read* sheet (to protect the shop's Admiralty warrant from Guild discovery of Anselm's blindness, while keeping Ivo's exoneration between siblings—exactly what emerged on Turns 7–8). Neither file states whether post-opening burning requires two-beat consent or triggers Director fire narration. Separately, `promptbook.md` specifies cue order when **Broken Seal** collides with **Notary's Bell** on Turn `N`, but omits cue order when **Broken Seal** collides with **Warning Chime** on Turn `N - 2` (Turn 6 of 8).
   - *Staging choice:* On Turn 6 (`N - 2`), I placed the **Broken Seal Cue** immediately upon Ivo unfolding the sheet, followed directly by the **Warning Chime Cue** so the clock struck over the exposed confession. On Turn 8 (`N`), because Maren had explicitly consented on Turn 7 to Ivo burning the opened page, Ivo's move into the coals satisfied two-beat consent naturally, and I narrated the paper catching fire as the lead-in to the **Notary's Bell Cue**.

3. **Minor Promptbook Edge Case (Untriggered Here, Returned to Playwright):**
   - Under **Notary's Bell Cue**, `promptbook.md` states that Threshold Turns start *"with whichever sibling did not speak Turn `N`"* even when reached *"via Early Resolution."* If Early Resolution triggers on an odd turn `< N` when `N` is even (e.g., Turn 5 by Maren when Turn 8 would have been Ivo), literal adherence to *"did not speak Turn `N`"* would give Maren two consecutive turns across the bell. Amending that wording to *"whichever sibling did not speak the final turn before the bell"* resolves the edge case.

---

### 6.6 Run 6 — Human + Agent + Collaboration + Knowledge + System (Full Promptbook)

#### Performance: *Before the Notary's Bell*

*(Opening Conditions: `Starting Holder = table` [default], `Countdown Length = 8` [default], `Opening Tilt = unfixed` [default])*

---

*Cold rain streaks the high frosted glass of the Harbour Notary's waiting room as the wall regulator ticks steadily through the last two minutes before nine. Behind the slotted ash-door of the iron stove, live coals glow dull red beneath the silent brass session bell above Room 3. Directly between Maren and Ivo on the narrow oak table lies Anselm Voss's heavy cream envelope, its red shellac seal unbroken beside the brass paper-knife. Neither has spoken since the watchman closed the outer door—Maren speaks first.*

**Maren:** *draws the brass paper-knife an inch back from the envelope with one ink-stained knuckle, keeping her eyes on Ivo* Taped under the dividing engine where no clerk would look until the bench was stripped—that was Father's way of making sure neither of us got out of Altona cleanly. Two days of haggling over every file and brass weight, four hundred marks counted out for your brig, and now he puts his hand through the floorboards two minutes before the bell. You haven't looked away from that wax since the watchman shut the door, Ivo. Tell me right now whether you mean to feed it to the stove and take your draft, or if you're itching to reach for this blade and blow our settlement into Chancery.

**Ivo:** *leans forward on his forearms, salt-chapped fingers stopping an inch short of the cream envelope* You're the one with your knuckle on the brass, Maren, not me. If all you wanted was a clean signature and an empty grate, that envelope would be ash already instead of sitting between us like bait. He threw me out in front of two Guild wardens over three minutes of arc I swear I never miscut, and you think it's simple for me to toss his "true account" onto the coals without knowing if he finally took it back? Tell me why you haven't burned it yourself—what is it you think he wrote in there that favors you?

**Maren:** *presses her palm flat across the brass blade, pinning it to the oak* Because a fortnight before he died, he caught my wrist by the hearth and told me the ledger between you and me had never been straight. For six years you had clean sea air while I balanced his surgeon's bills, brass merchants, and Admiralty warrants with stiff fingers, and yet you walk out of here at nine with four hundred marks—every liquid pfennig in the house. Maybe he finally put down what those years actually cost me, or maybe he just left one more stone to sink us both if either of us balks in Room 3. If you want to read whether he cleared your name on that quadrant, say what happens to our signatures if his "true account" cuts the wrong way.

**Ivo:** *slides two fingers onto the lower edge of the cream envelope, holding it against the table across from her pinned blade* "Clean sea air"—you think I was taking pleasure cruises while you paid the brass merchants, Maren? Half those years were leaky coasters and fever wards where nobody knew my father's name, all because he branded me a botcher in our own guildhall. You ask what happens to our signatures if his ledger cuts the wrong way—I'll tell you what happens: if there's one line inside giving you an excuse to claw back my four hundred marks, you'll tell yourself you earned it and let the *Kestrel* sail without me. Unless you can look me in the eye and swear on your workshop lease that nothing in that envelope touches our settlement—not old debts, not old blame—then keep your palm on that knife, because cheap promises won't survive broken wax.

**Maren:** You want proof instead of cheap promises, Ivo—here is enough to ruin me in Room 3: eight months ago, when Father's surgeon and the brass foundry demanded cash on the same Friday, I pawned the No. 14 Exhibition Chronometer with Lukas Brandt, and it's still in his vault while sitting on today's shop inventory. If I stalled our signing to touch one pfennig of your four hundred marks, a Chancery audit would gut me before noon—and if Father found Brandt's ticket under his bench, it's waiting inside this envelope. There is my neck on the oak so you know my signature holds no matter what he wrote. Now swear on your *Kestrel* berth that nothing inside stops your pen at the bell, or pull this paper out from under my hand and feed it to the stove yourself. *closes her fingers around the brass paper-knife and rests its blade squarely against the red shellac wax without pressing through*

**Ivo:** You pawned the No. 14 Exhibition piece to keep his roof up—God help us, Maren, I didn't know it got that bare. Then hear my filth before the wax breaks, so Father doesn't get to stab you with it first: two winters back, rotting with marsh fever in Lisbon without a berth, I begged him in secret for fifty marks and signed my word I'd never ask another pfennig from this estate. He wired the money and never breathed it, so fifty marks of your scrape went to keep me breathing while I played too proud to write home. I swear on my *Kestrel* berth nothing on this page stops my pen at the bell—let's have the worst of him in the light. *steadies the envelope with one thumb, drives the poised brass blade cleanly through the red shellac seal, and unfolds the heavy cream sheet flat on the oak between them*

*The red shellac cracks cleanly. Inside, in Anselm Voss's steady hand, lies a single heavy sheet:*

> *Maren. Ivo.*
>
> *If you broke my wax, neither of you trusted the peace you made without me. Good. Better an ugly truth in the anteroom than a clean lie in front of the Notary.*
>
> *First, clear your heads of small terrors:*
>
> *Ivo — I burned your Lisbon letter the week I wired the fifty marks. A father keeping his son alive in a foreign fever-ward is not an estate advance. You owe your sister nothing for Lisbon.*
>
> *Maren — Lukas Brandt came to me in January as an old friend should. I redeemed the No. 14 Exhibition Chronometer myself out of my burial tin three weeks ago. It sits in the Notary's strongbox right now, free and clear, to be handed to you once the deed is signed. You kept my house warm when I could no longer see the escapement. Stop hiding your hands.*
>
> *Now the heavy weight, which is mine:*
>
> *Six years ago, Ivo did not miscut the Admiralty quadrant. My left eye clouded over on the vernier scale the night before inspection, and when the wardens spotted the three-minute error, I let my son take blame for a ruined arc rather than confess that Anselm Voss was going blind and watch the Guild strip this shop of its Admiralty warrant.*
>
> *Maren kept a blind man's bench standing without knowing why her brother hated the house. Ivo carried an exile he never earned so the roof over you both would hold.*
>
> *Sign the settlement. Let Maren have the shop she saved, and let Ivo have the sea I drove him to. Or tear the deed in two if you still prefer your grievances to each other. The bell will not wait on dead men.*
>
> *— A. V.*

*The wall regulator clicks and strikes a single dry warning chime—two turns remain before the Notary's bell.*

**Maren:** *releases the brass knife and slides Anselm's unfolded sheet across the oak until its edge touches Ivo's knuckles* Six years I cursed your name over every ledger page, counting myself the martyr while the very Admiralty warrant keeping my bench alive was bought by throwing you to the wardens. He emptied his burial tin to clear my pawned chronometer and burned your Lisbon note, yet he let me hate you for six winters rather than admit his eye failed on that vernier. If the wardens ever read that sheet they could audit six years of Voss repairs—and I don't care; I won't ask you to burn the only line in Altona that proves your hand was true. Fold it into your coat or feed it to the grate, Ivo, because it's yours, and when that bell rings I am walking into Room 3 to sign your four hundred marks clear.

**Ivo:** Six winters I woke in strange bunks wondering if my thumb really slipped on that vernier, all because the stubborn old bastard would rather gut his own son than tell two wardens his sight was going. He spent my name and his own burial tin to keep that Admiralty warrant on your wall, and I'll be damned if I carry a sheet of paper out to sea that could ever let the Guild strip your bench for it now. My hand was true, and you read it with your own eyes—that's the only court left in Altona I give a damn about. Let the old man keep his pride with the wardens, Maren, and let's go claim what both of us paid for. *gathers Anselm's letter inside the split cream envelope, steps to the iron coal-stove, and pushes them cleanly through the slotted ash-door*

*Behind the slotted ash-door, the dry cream sheet and split wax catch at once on the red coals and curl into grey ash. Sharp and metallic, the brass session bell rings above the lintel; the heavy latch of Room 3 clicks open, spilling warm lamplight across the wet tiles as the clerk's voice calls from within: "Voss estate—Room Three."*

**Maren:** *crosses from the oak table into the lamplight of Room 3, holding the heavy inner door open behind her* When the *Kestrel* puts back into the Elbe, bring me her chronometers to rate—the shop door won't be bolted against you a second time. Come put your name on the ledger before the ebb turns, Ivo.

**Ivo:** *dusts a fleck of soot from his fingers and steps from the stove across the threshold into the lamplight of Room 3 beside her* Keep the No. 14 ticking on your bench till we make the Elbe again, Maren—I'll bring the *Kestrel*'s chronometers straight to the master of the shop. Lead on to the desk; I've got an afternoon tide to catch.

`[BLACKOUT]`

---

#### Director's Note

###### 1. What Was Varied
Nothing was varied from the authored defaults, per the human brief:
- **Starting Holder:** `table` (the unbroken cream envelope and brass paper-knife began between them on the oak table; Maren spoke Turn 1).
- **Countdown Length (`N`):** `8` spoken character turns before the Notary's bell, with the regulator's warning chime scheduled after Turn `N - 2` (Turn 6), followed by 2 post-bell Threshold Turns.
- **Opening Tilt:** `unfixed` (neither role agent was given a lean toward opening or burning the letter; both weighed their mixed incentives live).

###### 2. How the Cast Was Staged & Directed
- **Epistemically Partitioned Multi-Agent Cast:** Maren and Ivo were played by two separate, isolated role subagents (`maren_actor` and `ivo_actor`) prohibited from reading disk files. Each received *The Situation*, both character profiles (with the other sibling's private fear omitted), *What Is Fixed at the Opening*, *What the Performers Can Decide*, and the Promptbook's turn/format/two-beat rules. *The Sealed Letter* was held solely by the Director until the seal broke on Turn 6.
- **Turn-Lock Direction:** In an aborted warm-up check prior to the staged run, a cast subagent continued generating speculative future turns after receiving the tool-return receipt from `send_message` rather than idling for the Director's next cue. Those instances were terminated and replaced with freshly defined role subagents instructed to send exactly one turn via `send_message` and immediately go idle until cued—ensuring the entire performance above ran continuously from Turn 1 to `[BLACKOUT]` with live partner responses.
- **Neutral Cueing & State Tracking:** Across every turn, the Director tracked `Turn`, `Letter` position/status, `Prior Consent`, and `Spoken Disclosures`, intervening only on scheduled and conditional cues without nudging either character toward opening or burning the letter.

###### 3. What Happened in the Run
- **Turns 1–4 (Guarded Testing & Mutual Distrust):** Both siblings guarded the table props—Maren drawing the brass paper-knife back and then pinning it flat under her palm, Ivo holding the lower edge of the envelope—while probing why the other hesitated to burn it. Maren put Anselm's dying words (*"the ledger between you and me had never been straight"*) onto the table (Turn 3); Ivo refused to accept a verbal promise, arguing Maren would use any pretext in the letter to hold back his 400-mark *Kestrel* draft unless she put her own workshop lease on the line (Turn 4).
- **Turns 5–6 (Earned Confessions & Two-Beat Opening):** Pressed for real collateral rather than "cheap promises," Maren confessed pawning the No. 14 Exhibition Chronometer to Lukas Brandt while leaving it on today's estate schedule—proving a Chancery audit would ruin her before noon—and set the brass blade squarely on the red shellac wax without pressing through (Turn 5, Beat 1). Struck by how bare the workshop's finances had become and unwilling to let Anselm ambush Maren from the grave, Ivo confessed his secret 50-mark fever-ward wire and inheritance waiver from Lisbon, swore on his *Kestrel* berth to sign regardless, and drove the poised blade through the wax to unfold the sheet (Turn 6, Beat 2).
- **Cues & Turns 7–8 (Reckoning with Anselm's Confession):** Both the **Broken Seal Cue** and the **Warning Chime Cue** (`N - 2 = 6`) fired after Turn 6. Discovering that Anselm had cleared both of their private debts while letting Ivo carry six years of false disgrace to conceal his own failing sight and protect the shop's Admiralty warrant, Maren slid the sheet to Ivo—offering him the only proof of his innocence in Altona even though Guild wardens reading it could audit six years of Voss repairs (Turn 7). Ivo refused to carry paper to sea that could ever endanger Maren's warrant; satisfied that Maren had read the truth with her own eyes, he tucked the unfolded sheet back into the split envelope and pushed it into the stove coals (Turn 8).
- **Notary's Bell & Threshold Turns:** As the opened paper burned to ash, the nine o'clock session bell sounded and Room 3 opened. Maren stepped into the lamplight holding the door for her brother and invited him to bring the *Kestrel*'s chronometers back to her bench; Ivo stepped across the threshold beside her to sign before the afternoon tide (`[BLACKOUT]`).

###### 4. Authored Material Assessment: Gaps vs. Director's Staging Choices
The Play (`play.md`) staged cleanly without requiring any modification to the dramatic text, stakes, or structure. However, staging surfaced four specific seams between `play.md` and `promptbook.md`—distinguished below between **gaps/ambiguities for the Playwright** and **staging choices made by the Director**:

1. **Gap in Authored Material — Private Secrets Leaked Inside "Shared" Sections (`play.md` vs. `promptbook.md`):**
   - *Authored Gap:* `promptbook.md` (*Knowledge → Partitioning at curtain-up*) instructs the Director to give **both** role agents `*What Is Fixed at the Opening*` and `*What the Performers Can Decide*`, excluding only the other sibling's marked private fear from `*Roles*`. However, in `play.md`, item 3 of *What Is Fixed at the Opening* explicitly states both secrets (*"Maren alone knows about the pawned No. 14 Chronometer. Ivo alone knows about the fifty marks in Lisbon and the promise attached to it."*), and bullet 1 of *What the Performers Can Decide* names `"(the pawned chronometer or the Lisbon draft)"` (and *The Scene* line 79 cross-references `see **The Sealed Letter** below`). Supplying those sections verbatim leaks each sibling's secret across the partition, forcing agents to rely on `System`'s behavioral prohibition (*"nor intuit the other sibling's private secret"*) rather than genuine ignorance.
   - *Director's Staging Choice:* While treating `play.md` as fixed on disk, I redacted the reference to the *other* sibling's secret when assembling each role agent's prompt so that Maren knew only of No. 14 and Ivo knew only of Lisbon. That true blindness directly produced Ivo's unfeigned shock on Turn 6 when Maren confessed pawning No. 14. *Recommendation to Playwright:* Keep shared sections in `play.md` generic ("their own private secret") or instruct the Director in `promptbook.md` to redact item 3 / bullet 1 alongside *Roles*.

2. **Procedural Ambiguity in `promptbook.md` — Passive Acquiescence vs. Active Completion on Beat 2 of the Two-Beat Rule:**
   - *Authored Gap:* `promptbook.md` (*Collaboration*) states that without prior consent, Sibling A stops at the threshold (`blade resting against the shellac wax, or envelope held at the stove slot`), handing the next turn to Sibling B to *"physically stay their hand, counter-offer, or let the act go through"*, and notes that *"an unconsented act requires the next turn to resolve"* (implying an attempt begun on Turn `N - 1` resolves on Turn `N`). Yet the **Broken Seal Cue** specifies: *"The character breaking the wax ends their turn upon unfolding the sheet... play resumes by the scene (starting with the sibling who did not break the wax)."* If Sibling A holds the knife on the wax on Turn `k` and Sibling B merely says *"Go on, slice it"* on Turn `k+1` without taking the knife and unfolding the sheet, it is ambiguous whether verbal permission alone triggers the **Broken Seal Cue** at the end of Turn `k+1` (which would also collide with `"starting with the sibling who did not break the wax"` if Sibling A is regarded as the breaker) or requires Turn `k+2` (which would cause a Turn `N - 1` attempt to fail at the bell).
   - *Director's Staging Choice:* I directed both actors that if the other sibling has already consented or brought the blade/envelope to the threshold on the prior turn and they choose to let it happen, they should physically complete the slice-and-unfold (or push into the coal-slot) to close their turn—which Ivo executed cleanly on Turn 6. *Recommendation to Playwright:* Specify in `promptbook.md` that Beat 2 acceptance requires physically completing/joining the act on Turn `k+1` (or explicitly define how purely verbal acquiescence triggers the cue and next-speaker order).

3. **Minor Cue-Collision & Post-Opening Stove Edge Cases in `promptbook.md`:**
   - *Simultaneous Broken Seal + Warning Chime on Turn `N - 2`:* `promptbook.md` defines the cue sequence when **Broken Seal** coincides with **Notary's Bell** on Turn `N`, but does not specify ordering when **Broken Seal** occurs on Turn `N - 2` (Turn 6 here), where the **Warning Chime Cue** also fires. As a **staging choice**, I delivered the **Broken Seal Cue** immediately upon the sheet unfolding, followed by the **Warning Chime Cue** before Turn 7.
   - *Burning the Letter After Opening & Early-Resolution Threshold Order:* `promptbook.md` defines stove-burning mechanics around the *unopened* envelope (**Early Resolution Cue**), whereas in this run Ivo chose on Turn 8 to burn the *already-opened* letter so Guild wardens could never use Anselm's blindness confession against Maren's warrant; as a **staging choice**, I folded the opened sheet catching fire into the **Notary's Bell Cue** transition after Turn 8. Finally, **Notary's Bell Cue** states Threshold Turns start *"with whichever sibling did not speak Turn `N`"*; if triggered via **Early Resolution** on Turn `k < N`, Turn `N` is never reached (the phrasing should read *"whichever sibling did not speak the final pre-bell turn"*).

