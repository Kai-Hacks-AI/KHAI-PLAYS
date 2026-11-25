# Review of Draft Opera Guidance: `TO TUNE` and Standard Tenors

---

## 1. Assessment: *“The nine KHAI Tenors were derived from Navarasa.”*

**Verdict:** **Revise.** The primary sources confirm that Opera’s nine standard Tenors were adapted from the legacy KHAI Pitch defaults and support a structural comparison with *Navarasa*, but they do **not** confirm that the KHAI list was historically derived from *Navarasa*.

### Evidence Chain

- **Purpose:**
  - The nine standard Tenors give Playwrights and Directors a shared starting register (`Tenor`, the dominant key) when authoring or tuning a `Pitch` (`TO TUNE`) at Play, Plot, or element/object scope (`playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#standard-tenors`; `ChBrain/khai`: `packages/khai-arch/defaults/pitch.md#pitch-defaults-the-standard-registers-to-tune-from`).
  - A Pitch shapes pacing, attention, and delivery while holding authored facts and events fixed and leaving performance choices open; the author completes the Pitch by supplying `Undertow`, `Nerve`, and `Echo` (`pitch-defaults.md#standard-tenors`, lines 3, 15; `packages/khai-arch/defaults/pitch.md`, lines 3–16, 29).
- **Source:**
  - `ChBrain/khai`’s `packages/khai-arch/defaults/pitch.md#pitch-defaults-the-standard-registers-to-tune-from` (lines 17–27) defines the exact nine labels and glosses (`grieving`, `comic`, `tender`, `furious`, `heroic`, `dread`, `abject`, `wondrous`, `still`), which `Kai-Hacks-AI/KHAI-PLAYS` adopts in `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#standard-tenors` (lines 5–13) and credits at line 28 (`Adapted from the legacy KHAI Pitch defaults`).
  - For comparison with Indian performance theory, the Sourcebook cites Phillip B. Zarrilli’s article (`https://doi.org/10.1017/S0266464X11000455`, table on p. 258) comparing nine *rasas* with their associated performer states.
- **Limits:**
  - Neither `packages/khai-arch/defaults/pitch.md` nor `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md` mentions or cites *Navarasa*. While the nine registers align closely enough with the nine *rasas* to support a comparison, the origin of the legacy KHAI list remains unconfirmed in available sources.
  - *Direct-inspection limit:* The external DOI source (`https://doi.org/10.1017/S0266464X11000455`) was offline/inaccessible in this review environment and could not be inspected directly.
- **Proposed Edit & Target Location:**
  - **Preserve as written:** `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md` (`#standard-tenors` and the attribution line in `#several-pitches-in-one-scene`, line 28: `Adapted from the legacy KHAI Pitch defaults`), which stays strictly within confirmed provenance.
  - **Revise in draft commentary / provenance prose** (or wherever the *Navarasa* note is introduced alongside `pitch-defaults.md#standard-tenors`):
    > “The nine standard KHAI Tenors are adapted from the legacy KHAI Pitch defaults (`packages/khai-arch/defaults/pitch.md`). Although their nine registers correspond closely to the nine *rasas* of *Navarasa* (cf. Zarrilli, p. 258), the legacy defaults give no citation for that relationship, leaving historical derivation unconfirmed.”

---

## 2. Assessment: *“The rehearsal demonstrated that the Play, Place, Persona, and Piece can carry distinct Pitches in the same scene.”*

**Verdict:** **Revise.** Neither rehearsal staged simultaneous Play, Place, Persona, and Piece Pitches within one scene. Rehearsals demonstrated first single-Pitch Play runs and then **sequential Plot-level switching** (Play-wide default → single middle-Plot override → return to Play-wide default) with explicit Promptbook handoff instructions; concurrent multi-object Pitches in one scene remain **proposed, unrehearsed staging guidance**.

### Evidence Chain

- **Purpose (and Director’s Intent for the Shoe):**
  - The four-scope example in `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene` (lines 17–26) illustrates how a Director can aim attention at distinct registers inside a single scene: `Play · Comic` (deadpan parade logistics), `Place · Dread` (mounting pressure from brass warm-up and narrowing route), `Persona · Tender` (Tomas’s care handling the fragile heel), and `Piece · Wondrous`.
  - **Intent for the shoe (`Piece · Wondrous`):** *“Give the oversized shoe a moment to register at the child’s eye level”* (`pitch-defaults.md#several-pitches-in-one-scene`, line 24)—creating a brief focal beat of awe around the eight-foot boot at the child’s sightline while keeping the shoe’s authored properties (lone left boot, softening flour-paste rear seam) fixed and leaving Tomas’s response open (line 26).
- **Source (What Rehearsals Demonstrated & Where the Decision Appears):**
  - **Original Pitch rehearsal** (`playmaking/opera/rehearsals/pitch/03-observations/README.md`, intro lines 3–5; `#1-line-gesture-and-silence-across-all-four-runs-2--2--4`; `#2-how-the-question-lands-across-tenors-dry-comedy-vs-quiet-wonder`): Staged four single-scene runs (`2 × 2`) of *The Giant’s Shoe* with **one shared Play-wide Pitch per run** (`Dry comedy` vs. `Quiet wonder`, varying only the `Tenor` sentence). Line 5 explicitly notes that separate Pitches on individual Personas or multi-Pitch scopes *“remain untested here.”*
  - **Mixed-Pitch three-Plot rehearsal** (`playmaking/opera/rehearsals/mixed-pitch/03-observations/README.md`, intro line 3; `#1-four-run-pitch--consequence-matrix`; `#2-observable-register-shifts-across-the-three-plots`; `#3-world-fact-trigger-continuity--agency-verification`): Staged four runs (`2 × 2`) of a three-Plot adaptation (`Staging limit: 0%`), testing Condition A (`Dry Comedy` across Plots 1–3) against Condition B (`Dry Comedy` in Plot 1 → `Quiet Wonder` override on Plot 2 → `Dry Comedy` default in Plot 3). Both mixed runs (`02`, `03`) stilled Maren’s finger-tap, synchronized gait, and answered at eye level in Plot 2, then snapped cleanly back to brisk parade comedy in Plot 3 (`0` lingering override flags) while carrying physical grip/seam consequences forward.
  - **Where the mixed-Pitch decision appears:**
    1. `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene` (lines 17–26) presents the four-scope (`Play`, `Place`, `Persona`, `Piece`) setup explicitly as an imagined authoring/staging example (*“imagine a comic Play-wide Pitch alongside three Pitches linked to individual objects”*).
    2. `playmaking/opera/rehearsals/mixed-pitch/05-evolution/README.md` (`#1-did-the-updated-guides-support-the-switch-and-return`, `#2-smallest-optional-revision-warranted-by-the-evidence`, and `#3-scope-limits-of-this-rehearsal`, lines 9, 18–23, 29–30) keeps `pitch-defaults.md` unchanged, proposes optional Plot-boundary wording for `khai-director/SKILL.md`, and explicitly classifies simultaneous `Play` + `Place` + `Persona` + `Piece` Pitches as *“Not yet rehearsed here.”*
- **Limits (What Remains Open):**
  - **Concurrent intra-scene arbitration is untested:** Simultaneous object-scoped Pitches inside the same scene/turn (`Play · Comic` + `Place · Dread` + `Persona · Tender` + `Piece · Wondrous`) have not been rehearsed, so how a Director arbitrates competing object Pitches within a single turn remains open (`playmaking/opera/rehearsals/mixed-pitch/05-evolution/README.md#3-scope-limits-of-this-rehearsal`, line 30).
  - **Director-only Plot handoff is untested without Promptbook scaffolding:** Even the validated sequential Plot override relied on explicit Pitch-transition instructions in `02-company/promptbook.md` directing the Director to swap active Pitches across isolated performer contexts at each Plot boundary; it does not independently prove that `khai-director/SKILL.md` alone produces clean transitions (`05-evolution/README.md#1-did-the-updated-guides-support-the-switch-and-return`, line 9; `#2-smallest-optional-revision-warranted-by-the-evidence`, lines 20–23).
  - *Direct-inspection limit:* Relative links from the observation/evolution READMEs to non-snapshotted files (`04-runs/*.md`, `02-company/*`, `references/pitch.md`, `khai-director/SKILL.md`) were not inspected directly.
- **Proposed Status Wording & Staging Cue:**
  - **Replace the proposed claim in guidance/status prose with:**
    > “Rehearsals demonstrated sequential switching between a Play-wide default Pitch (`Dry Comedy`) and a middle-Plot override (`Quiet Wonder`), with clean return to the default in Plot 3 when supported by explicit Promptbook handoff instructions (`playmaking/opera/rehearsals/mixed-pitch/03-observations/README.md`; `05-evolution/README.md#3-scope-limits-of-this-rehearsal`). Combining distinct concurrent Pitches for the Play, Place, Persona, and Piece within a single scene (`playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene`) remains proposed, unrehearsed staging guidance.”
  - **Preserve the hypothetical framing and Piece staging cue in `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md#several-pitches-in-one-scene` (lines 19, 24):**
    > `In The Giant’s Shoe, imagine a comic Play-wide Pitch alongside three Pitches linked to individual objects.`
    > `- Piece · Wondrous. Give the oversized shoe a moment to register at the child’s eye level.`
