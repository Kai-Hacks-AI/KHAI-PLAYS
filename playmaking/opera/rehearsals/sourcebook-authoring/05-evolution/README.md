# Evolution — Evidence-Backed Recommendation on LORE Sourcebook Authoring

Scoped strictly to the two tested tasks and eight observed runs (`2 × 2 × 2 = 8`; [03-observations/README.md](../03-observations/README.md)) per [01-setup/README.md](../01-setup/README.md#L27). [playmaking/opera/references/sourcebook.md](../../../references/sourcebook.md) is left untouched in this rehearsal PR.

---

## 1. Separate Conclusions on Completeness vs. Findability

1. **Completeness (Authoring from Raw Artifacts) — Keep & Use [references/sourcebook.md](../../../references/sourcebook.md):**
   - Whereas the [reader-side rehearsal](../../sourcebook/03-observations/README.md) tied at `8.0 / 8` when both packets already contained pre-ordered four-part bullets, starting from raw artifacts separated the two conditions cleanly: **LORE (`Condition B`) achieved `4.0 / 4` median (`4, 4, 4, 4`) vs. `3.0 / 4` median (`3, 3, 3, 4`) for Plain rationale (`Condition A`)**.
   - Specifically, free-form ADR-style rationales omitted explicit evidence limits in **`3 / 4`** runs ([01-t1-r1-a-author.md](../04-runs/01-t1-r1-a-author.md), [04-t1-r2-a-author.md](../04-runs/04-t1-r2-a-author.md), [05-t2-r1-a-author.md](../04-runs/05-t2-r1-a-author.md)) and omitted `#section` encoding anchors in **`4 / 4`** runs, whereas LORE’s `## Restrictions` and `## Encoding` prompts elicited explicit evidence limits in **`4 / 4`** runs (`2/2` on Task 1, `2/2` on Task 2) and exact `#section` encoding links in **`4 / 4`** runs. One LORE run overstated causality by saying the handoff prevented register bleed. The supplied runs show a clean transition with the handoff in place, and its causal contribution remains untested. [Review correction](../03-observations/README.md#review-correction)
2. **Findability (Entry-Point Retrieval) — Format-Neutral When Entry-Point Linking Is Instructed (`4 / 4` vs. `4 / 4`):**
   - Fresh collaborators starting at `pitch-defaults.md` (Task 1) and `mixed-pitch/02-company/promptbook.md` (Task 2) found the decision record in **`1` link hop (`2` file reads) with `0` guesswork across all `8 / 8` runs** (`4/4` Condition A, `4/4` Condition B; [03-observations/README.md](../03-observations/README.md#L9-L21)).
   - Crucially, that `8 / 8` tie relied on the rehearsal brief’s shared instruction (*“Save it with the work and leave a link from the decision’s entry point”*, [01-setup/README.md](../01-setup/README.md#L12)), exposing an important gap in [references/sourcebook.md](../../../references/sourcebook.md) itself (Recommendation 2A below).

---

## 2. Targeted Refinements Recommended for `playmaking/opera/references/sourcebook.md`

1. **Add explicit inward linking from the decision’s entry point and co-located placement ([references/sourcebook.md](../../../references/sourcebook.md#L3)):**
   - **Evidence:** Currently, [references/sourcebook.md](../../../references/sourcebook.md#L3) says *"Keep the Sourcebook with the work or collection it documents. The person responsible for the decision records the rationale and links to the files that carry it,"* and `## Encoding` (`#L21`) links *outward* from the Sourcebook to the target file—nowhere telling the author to leave a link *from* the decision’s entry point *to* the Sourcebook. In addition, in Task 1 [02-t1-r1-b-author.md](../04-runs/02-t1-r1-b-author.md#L3) placed the file in a separate top-level `playmaking/opera/sourcebooks/standard-tenors.md` folder three directories away from `pitch-defaults.md` (unlike [03-t1-r2-b-author.md](../04-runs/03-t1-r2-b-author.md#L3), which co-located `pitch-defaults-sourcebook.md` beside `pitch-defaults.md`).
   - **Recommendation:** Revise the opening paragraph of `references/sourcebook.md` so the Sourcebook sits alongside the work or collection home it documents **and** instructs the author to leave a navigable link to the Sourcebook from the decision’s entry-point file, preserving `1`-hop findability outside rehearsal prompts.
2. **Scope `## Origin` strictly to sources of the *decision*, excluding the Sourcebook template itself ([references/sourcebook.md](../../../references/sourcebook.md#L11-L13), `#L23`):**
   - **Evidence:** In [06-t2-r1-b-author.md](../04-runs/06-t2-r1-b-author.md#L23), the Condition B author copied [references/sourcebook.md](../../../references/sourcebook.md#L23)’s closing LORE credit (`packages/khai-arch/architecture/reference.md`) into `## Origin` of *The Giant’s Shoe*’s staging Sourcebook, generating the rehearsal’s only out-of-input citation (`1 / 4` Condition B runs).
   - **Recommendation:** Clarify in `## Origin` (*“Identify the internal and external sources that informed the decision itself—not formatting guides such as this reference”*) so template provenance never mixes with domain evidence.
3. **Retain `## Restrictions` and `## Encoding` verbatim in sequence ([references/sourcebook.md](../../../references/sourcebook.md#L15-L21)):**
   - **Evidence:** These two chapters accounted for the entire completeness gain over Condition A—preventing imagined illustrations (`pitch-defaults.md#several-pitches-in-one-scene` in `02` and `03`) and single-pair Promptbook runs (`06` and `07`) from being overstated as general multi-scope or unassisted-skill proof, while anchoring every claim to `#section` targets in `pitch.md`, `pitch-defaults.md`, and `promptbook.md`.
