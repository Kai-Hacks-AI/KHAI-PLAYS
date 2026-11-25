# Review of Draft Opera Guidance: `TO TUNE` and Standard Tenors

> **Source Inspection Note:** All linked repository files in `ChBrain/khai` and `Kai-Hacks-AI/KHAI-PLAYS` were inspected directly. Phillip B. Zarrilli’s article (`https://doi.org/10.1017/S0266464X11000455`, table on p. 258) was offline/inaccessible in this review environment and could not be inspected directly; it is evaluated strictly through the supplied Sourcebook summary.

---

## 1. Assessment: *“The nine KHAI Tenors were derived from Navarasa.”*

**Verdict: Do not adopt as written (revise from historical derivation to structural comparison).**

While the nine standard Tenors closely parallel the nine *rasas* (*Navarasa*), the primary KHAI source provides no provenance or citation linking the list to *Navarasa*. Claiming that the KHAI Tenors *“were derived from”* *Navarasa* asserts an unverified historical lineage rather than a documented comparison.

### Evidence Chain

1. **Purpose:**
   - The nine standard Tenors (`grieving`, `comic`, `tender`, `furious`, `heroic`, `dread`, `abject`, `wondrous`, `still`) give Playwrights and Directors a starting dominant register for authoring or tuning a `Pitch` at Play, Plot, or element/object scope (`playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#standard-tenors`, lines 3–15). A Pitch tunes pacing, attention, and delivery without altering fixed events or performer agency, and the author completes the card by supplying `Undertow`, `Nerve`, and `Echo` (lines 3, 15).
2. **Source:**
   - Opera’s list in `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#standard-tenors` (lines 5–13, 28) is adapted verbatim in its nine Tenor labels from the legacy KHAI defaults in `ChBrain/khai` (`packages/khai-arch/defaults/pitch.md#pitch-defaults-the-standard-registers-to-tune-from`, lines 17–27).
   - `packages/khai-arch/defaults/pitch.md` defines the four `TO TUNE` facets (`Tenor`, `Undertow`, `Nerve`, `Echo`) and the nine default tenors, but contains **no mention or citation of *Navarasa***.
   - The Sourcebook cites Phillip B. Zarrilli’s article on Indian performance (`https://doi.org/10.1017/S0266464X11000455`, p. 258 table — *not inspected directly*), which compares nine *rasas* with associated performer states.
3. **Limits:**
   - Comparing the nine Tenors against Zarrilli’s table supports an analytical **correspondence/comparison**, not confirmed **derivation**. Because `packages/khai-arch/defaults/pitch.md` records no source for its nine labels—and Zarrilli’s article could not be inspected directly here and in any case cannot establish `ChBrain/khai`’s authoring provenance—the origin of the KHAI list remains unconfirmed.
4. **Target File / Section & Proposed Edit:**
   - **Preserve in skill reference:** Keep line 28 of `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md` (at the end of `#several-pitches-in-one-scene`, attributing `#standard-tenors`) grounded strictly in its verified source:
     > `Adapted from the legacy KHAI Pitch defaults.`
   - **Revise in draft guidance / commentary (or if a note is added under `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#standard-tenors`):** Replace *“The nine KHAI Tenors were derived from Navarasa”* with:
     > `The nine standard Tenors are adapted from the legacy KHAI Pitch defaults (packages/khai-arch/defaults/pitch.md). Their nine registers correspond closely to the nine rasas (Navarasa), though the legacy KHAI defaults cite no source and leave historical derivation unconfirmed.`

---

## 2. Assessment: *“The rehearsal demonstrated that the Play, Place, Persona, and Piece can carry distinct Pitches in the same scene.”*

**Verdict: Reject as factually overstated (distinguish rehearsed sequential Plot overrides from unrehearsed concurrent multi-object staging guidance).**

### Analysis of Intent, Rehearsal Evidence, Open Questions, and Location

- **Director’s intent for the shoe (`Piece`):** In the multi-Pitch scene example (`playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene`, lines 19–26), the Director uses distinct Tenors within one comic crossing (`Play · Comic`) to direct register and attention selectively across `Place · Dread` (brass warm-up and narrowing square), `Persona · Tender` (Tomas’s care for the fragile heel), and `Piece · Wondrous`. Specifically, `Piece · Wondrous` (*“Give the oversized shoe a moment to register at the child’s eye level,”* line 24) cues a beat of awe around the eight-foot boot from the child’s vantage point while preserving the shoe’s authored physical properties (lone left boot, buckling flour-paste seam) and leaving Tomas’s response open (line 26).
- **What the rehearsals actually demonstrated:**
  1. *Single shared Pitch per run:* The first rehearsal (`playmaking/opera/rehearsals/pitch/03-observations/README.md#observations-to-tune-in-the-giants-shoe`, lines 3–5; `#1-line-gesture-and-silence-across-all-four-runs-2--2--4`; `#2-how-the-question-lands-across-tenors-dry-comedy-vs-quiet-wonder`) ran four single-scene passes (`2 × 2`) of *The Giant’s Shoe* using **one Play-wide Pitch per run** (`Dry comedy` vs. `Quiet wonder`, swapping only the `Tenor` sentence) and explicitly marked separate Persona or multi-Pitch scopes as untested (line 5).
  2. *Sequential Plot override and return:* The mixed-Pitch rehearsal (`playmaking/opera/rehearsals/mixed-pitch/03-observations/README.md#observations--play-wide-pitch-default--middle-plot-override-2--2--4`, line 3; `#1-four-run-pitch--consequence-matrix`, lines 9–14; `#2-observable-register-shifts-across-the-three-plots`, lines 20–28) ran four passes (`2 × 2`) of a three-Plot adaptation at `Staging limit: 0%`. In both mixed runs (`02-mixed-wonder-r1-b`, `03-mixed-wonder-r2-b`), the company shifted **sequentially across Plot boundaries**—`Dry Comedy` (Plot 1, Play default) → `Quiet Wonder` (Plot 2 override on *“Is the giant coming?”*) → `Dry Comedy` (Plot 3 return to Play default)—cleanly dropping wondrous phrasing in Plot 3 while carrying Plot 2’s physical grip and spoken consequences forward (`#3-world-fact-trigger-continuity--agency-verification`, line 36).
- **What remains open:**
  1. *Simultaneous multi-object Pitches in one scene/turn:* Combining `Play · Comic`, `Place · Dread`, `Persona · Tender`, and `Piece · Wondrous` concurrently inside the same Plot—and testing how a Director arbitrates competing object-scoped registers within a single turn—has **not** been rehearsed (`playmaking/opera/rehearsals/mixed-pitch/05-evolution/README.md#3-scope-limits-of-this-rehearsal`, lines 29–30).
  2. *Unassisted Director-skill transitions:* Even the sequential Plot switch and return in PR #25 relied on explicit Pitch-handoff instructions in `02-company/promptbook.md` (`L11-L26`) telling the Director to check Pitch links at each Plot boundary and replace the prior Plot’s Pitch in isolated performer contexts; `playmaking/opera/skills/khai-director/SKILL.md` (`L9`) was not tested independently without that Promptbook scaffold (`playmaking/opera/rehearsals/mixed-pitch/05-evolution/README.md#1-did-the-updated-guides-support-the-switch-and-return`, line 9; `#2-smallest-optional-revision-warranted-by-the-evidence`, lines 20–23).
- **Where the mixed-Pitch decision appears:**
  - **Proposed concurrent example:** `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene` (lines 17–26, introduced with *“imagine a comic Play-wide Pitch alongside three Pitches linked to individual objects”*).
  - **Documented rehearsal scope & status:** `playmaking/opera/rehearsals/mixed-pitch/05-evolution/README.md#3-scope-limits-of-this-rehearsal` (lines 27–30) and `#2-smallest-optional-revision-warranted-by-the-evidence` (lines 18–23), following the earlier boundary note in `playmaking/opera/rehearsals/pitch/03-observations/README.md` (line 5).

### Evidence Chain

1. **Purpose:**
   - Show how `TO TUNE` can differentiate register across scopes—in particular, letting a Director hold a comic crossing overall while giving the square (`Place`), Tomas (`Persona`), and the shoe at the child’s eye level (`Piece`) distinct attentional registers without changing world facts or performer agency (`playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene`, lines 19–26).
2. **Source:**
   - `playmaking/opera/rehearsals/pitch/03-observations/README.md` (lines 3–5) tested one Play-wide Pitch per run; `playmaking/opera/rehearsals/mixed-pitch/03-observations/README.md` (`#1-four-run-pitch--consequence-matrix` and `#2-observable-register-shifts-across-the-three-plots`) tested a Play-wide default (`Dry Comedy`) with a middle-Plot override (`Quiet Wonder`) and return (`Dry Comedy`); `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene` (lines 17–26) supplies the `Play` / `Place` / `Persona` / `Piece` scene illustration.
3. **Limits:**
   - Per `playmaking/opera/rehearsals/mixed-pitch/05-evolution/README.md#1-did-the-updated-guides-support-the-switch-and-return` (line 9) and `#3-scope-limits-of-this-rehearsal` (lines 29–30), sequential Plot-override switching was demonstrated only with explicit Promptbook transition rules, and concurrent `Play`, `Place`, `Persona`, and `Piece` Pitches inside a single scene have not yet been rehearsed.
4. **Proposed Status Wording & Staging Cue:**
   - **Replacement wording to describe status (for Opera guidance / review summary, preserving `pitch-defaults.md#several-pitches-in-one-scene`’s framing as an illustrative `"imagine..."` example):**
     > `Rehearsals demonstrated a Play-wide default Pitch with a sequential middle-Plot override and clean return (Dry Comedy → Quiet Wonder → Dry Comedy) when supported by explicit Promptbook handoff rules; assigning distinct Pitches simultaneously to the Play, Place, Persona, and Piece within the same scene (as in pitch-defaults.md#several-pitches-in-one-scene) remains unrehearsed, proposed staging guidance.`
   - **Follow-up staging / skill cue (`playmaking/opera/skills/khai-director/SKILL.md`, line 9, per `05-evolution/README.md#2-smallest-optional-revision-warranted-by-the-evidence`):** Adopt the candidate Director cue (*“Use the Play’s default Pitch and any Plot- or object-linked Pitch in scope to tune pacing, attention, and staging, updating the active Pitch when a Plot overrides it or returns to the default”*) and run a dedicated multi-object scene rehearsal before promoting concurrent `Play`/`Place`/`Persona`/`Piece` tuning from proposed guidance to a rehearsal-backed claim.
