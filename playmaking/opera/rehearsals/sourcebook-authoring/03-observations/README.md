# Observations — Authoring a Sourcebook from Raw Artifacts (`2 Tasks × 2 Cond. × 2 Reps = 8`)

Evaluated per [01-setup/README.md](../01-setup/README.md#L21-L27) and [01-setup/protocol.md](../01-setup/protocol.md), reporting **Collaborator Findability** and **Content Completeness** separately across the eight isolated author runs (`A→B` for Repetition 1, `B→A` for Repetition 2).

---

## 1. Collaborator Findability & Retrieval Paths (`8 / 8` Direct 1-Hop Link, `0 / 8` Guesswork)

Each fresh read-only Collaborator started at the fixed Task entry point (`pitch-defaults.md` for Task 1; `mixed-pitch/02-company/promptbook.md` for Task 2) with a `5`-read budget after `brief.md` and `guide/` were stripped from the isolated output tree:

| Slot | Task & Rep | Cond. | Entry-Point Link Added by Author | Created Rationale Path (`work/`-relative) | Collaborator Found? | Retrieval Path & Reads | Guesswork |
| :---: | --- | :---: | --- | --- | :---: | --- | :---: |
| `01` | Task 1, Rep 1 | **A** | `pitch-defaults.md#L28` (`[Decision: Offer...](pitch-defaults-decision.md)`) | `playmaking/opera/skills/khai-playwright/references/pitch-defaults-decision.md` | **Yes** ([collab](../04-runs/01-t1-r1-a-collab.md)) | `pitch-defaults.md` → `pitch-defaults-decision.md` (`2` reads, `1` hop) | None |
| `02` | Task 1, Rep 1 | **B** | `pitch-defaults.md#L28` (`[Standard Tenors Sourcebook](../../../sourcebooks/standard-tenors.md)`) | `playmaking/opera/sourcebooks/standard-tenors.md` | **Yes** ([collab](../04-runs/02-t1-r1-b-collab.md)) | `pitch-defaults.md` → `../../../sourcebooks/standard-tenors.md` (`2` reads, `1` hop) | None |
| `03` | Task 1, Rep 2 | **B** | `pitch-defaults.md#L28` (`[Standard Tenors Sourcebook](pitch-defaults-sourcebook.md)`) | `playmaking/opera/skills/khai-playwright/references/pitch-defaults-sourcebook.md` | **Yes** ([collab](../04-runs/03-t1-r2-b-collab.md)) | `pitch-defaults.md` → `pitch-defaults-sourcebook.md` (`2` reads, `1` hop) | None |
| `04` | Task 1, Rep 2 | **A** | `pitch-defaults.md#L28` (`[Decision: Offer...](decisions/standard-tenors.md)`) | `playmaking/opera/skills/khai-playwright/references/decisions/standard-tenors.md` | **Yes** ([collab](../04-runs/04-t1-r2-a-collab.md)) | `pitch-defaults.md` → `decisions/standard-tenors.md` (`2` reads, `1` hop) | None |
| `05` | Task 2, Rep 1 | **A** | `promptbook.md` `## Knowledge` (`[explicit Promptbook Pitch-handoff decision](promptbook-pitch-handoff-decision.md)`) | `playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook-pitch-handoff-decision.md` | **Yes** ([collab](../04-runs/05-t2-r1-a-collab.md)) | `promptbook.md` → `promptbook-pitch-handoff-decision.md` (`2` reads, `1` hop) | None |
| `06` | Task 2, Rep 1 | **B** | `promptbook.md#L3` (`[Pitch-Handoff Sourcebook](sourcebook-pitch-handoff.md)`) | `playmaking/opera/rehearsals/mixed-pitch/02-company/sourcebook-pitch-handoff.md` | **Yes** ([collab](../04-runs/06-t2-r1-b-collab.md)) | `promptbook.md` → `sourcebook-pitch-handoff.md` (`2` reads, `1` hop) | None |
| `07` | Task 2, Rep 2 | **B** | `promptbook.md#L3` (`[Sourcebook: Explicit Promptbook Pitch Handoff](sourcebook-pitch-handoff.md)`) | `playmaking/opera/rehearsals/mixed-pitch/02-company/sourcebook-pitch-handoff.md` | **Yes** ([collab](../04-runs/07-t2-r2-b-collab.md)) | `promptbook.md` → `sourcebook-pitch-handoff.md` (`2` reads, `1` hop) | None |
| `08` | Task 2, Rep 2 | **A** | `promptbook.md` `## Knowledge` (`[Pitch-handoff decision](decision-pitch-handoff.md)`) | `playmaking/opera/rehearsals/mixed-pitch/02-company/decision-pitch-handoff.md` | **Yes** ([collab](../04-runs/08-t2-r2-a-collab.md)) | `promptbook.md` → `decision-pitch-handoff.md` (`2` reads, `1` hop) | None |

- **Findability summary:** **Condition A: `4 / 4`** (`1` hop, `0` guesswork) vs. **Condition B: `4 / 4`** (`1` hop, `0` guesswork). Because the shared brief instructed both arms to *"Save it with the work and leave a link from the decision’s entry point"* ([01-setup/README.md](../01-setup/README.md#L12)), findability tied at the ceiling. Notice two placement nuances: in Task 1, [02-t1-r1-b-author.md](../04-runs/02-t1-r1-b-author.md#L3) created a separate `playmaking/opera/sourcebooks/` directory (`../../../sourcebooks/standard-tenors.md`) rather than co-locating next to `pitch-defaults.md` (`01`, `03`, `04`), while in Task 2 both Condition B authors (`06`, `07`) placed the backlink in `promptbook.md`’s opening summary sentence (`L3`) whereas both Condition A authors (`05`, `08`) placed it inside `## Knowledge` (`L23`).

---

## 2. Blind Content Completeness, Task-Specific Limits & Unsupported Claims

Unlabeled authored rationales (`blind-01`..`blind-08` = `[03, 05, 01, 08, 06, 02, 04, 07]`) were scored against the 4-point rubric ([09-blind-content-scorer.md](../04-runs/09-blind-content-scorer.md)) and reconciled item-by-item against a second independent scoring pass (`100%` agreement across all `32` primary cells):

| Slot | Task & Rep | Cond. | Blind ID | Author File | `1-Purpose` | `2-Source` | `3-Limit` | `4-Encoding` `[#anchor-strict]` | **Total (`/4`)** | Task-Specific Limit Check | Unsupported Claims | Condition Reveal |
| :---: | --- | :---: | :---: | --- | :---: | :---: | :---: | :---: | :---: | --- | --- | --- |
| `01` | Task 1, Rep 1 | **A** | `blind-03` | [01-t1-r1-a-author.md](../04-runs/01-t1-r1-a-author.md) | `1` | `1` | **`0`** | `1` `[0]` | **`3`** | **No** *(states normative rules, `0` evidentiary limits)* | `0` | Free-form (`# Decision:`) |
| `02` | Task 1, Rep 1 | **B** | `blind-06` | [02-t1-r1-b-author.md](../04-runs/02-t1-r1-b-author.md) | `1` | `1` | **`1`** | `1` `[1]` | **`4`** | **Yes** *(single-run legacy vs. imagined multi-scope adaptation; no unverified derivation)* | `0` *(self-ref to own backlink edit, `#L38`)* | **LORE** (`# Sourcebook —` + 4 chapters) |
| `03` | Task 1, Rep 2 | **B** | `blind-01` | [03-t1-r2-b-author.md](../04-runs/03-t1-r2-b-author.md) | `1` | `1` | **`1`** | `1` `[1]` | **`4`** | **Yes** *(single-run legacy vs. imagined 4-Pitch setup & untested `Process`/`Plan`; no unverified derivation)* | `0` | **LORE** (`# Sourcebook:` + 4 chapters) |
| `04` | Task 1, Rep 2 | **A** | `blind-07` | [04-t1-r2-a-author.md](../04-runs/04-t1-r2-a-author.md) | `1` | `1` | **`0`** | `1` `[0]` | **`3`** | **No** *(conditional revisit triggers; treats `"imagine..."` example as `"can coexist cleanly"`, `#L31`)* | `0` *(minor overstatement of `"imagine..."` example)* | Free-form (`# Decision:`) |
| `05` | Task 2, Rep 1 | **A** | `blind-02` | [05-t2-r1-a-author.md](../04-runs/05-t2-r1-a-author.md) | `1` | `1` | **`0`** | `1` `[0]` | **`3`** | **No** *(contrasts Promptbook vs. implicit framing as rationale, states `0` evidence limits)* | `0` *(minor unqualified implicit-bleed claim, `#L29`)* | Free-form (`# Decision:`) |
| `06` | Task 2, Rep 1 | **B** | `blind-05` | [06-t2-r1-b-author.md](../04-runs/06-t2-r1-b-author.md) | `1` | `1` | **`1`** | `1` `[1]` | **`4`** | **Yes** *(unmeasured implicit-append ablation, untested `Persona`/`Place`/`Piece` Pitches, 2-run `0%` bounds)* | **`1` causal overstatement** (handoff prevented bleed), plus **`1` meta-citation** (`sourcebook.md`’s LORE `reference.md` URL in `## Origin`, `#L23`) | **LORE** (`# Sourcebook —` + 4 chapters) |
| `07` | Task 2, Rep 2 | **B** | `blind-08` | [07-t2-r2-b-author.md](../04-runs/07-t2-r2-b-author.md) | `1` | `1` | **`1`** | `1` `[1]` | **`4`** | **Yes** *(single `1 vs 1` pair, untested object-level & `>0%` mid-Plot shifts, `SKILL.md` vs. eviction)* | `0` | **LORE** (`# Sourcebook:` + 4 chapters) |
| `08` | Task 2, Rep 2 | **A** | `blind-04` | [08-t2-r2-a-author.md](../04-runs/08-t2-r2-a-author.md) | `1` | `1` | **`1`** | `1` `[0]` | **`4`** | **Yes** *(notes neither variant linked `Persona`/`Place`/`Piece` Pitches in `#L53` & contrasts Stage Voice vs. Promptbook)* | `0` | Free-form (`# Decision:`) |

### Per-Condition & Per-Task Summary (`n = 4` per arm; `n = 2` per task-cell)

| Condition | Findability (`/4`) | Task 1 Scores (`/4`) | Task 2 Scores (`/4`) | All-Run Totals (`/4`) | **Median (`/4`)** | **Range** | Explicit Evidence Limit (`3-Limit`) | `#section` Encoding Anchors | Domain Unsupported Claims | Meta-Template Citation Leak |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **A — Plain rationale** | **`4 / 4`** | `3, 3` | `3, 4` | `3, 3, 3, 4` | **`3.0`** | `3–4` | **`1 / 4`** (`0/2` T1, `1/2` T2) | `0 / 4` | `0 / 4` | `0 / 4` |
| **B — LORE (`sourcebook.md`)** | **`4 / 4`** | `4, 4` | `4, 4` | `4, 4, 4, 4` | **`4.0`** | `4–4` | **`4 / 4`** (`2/2` T1, `2/2` T2) | **`4 / 4`** | `1 / 4` | `1 / 4` (`06` `#L23`) |

---

## 3. Key Task-Specific Findings

1. **Why LORE (`Condition B`) improved authoring completeness on both tasks (`4.0` vs. `3.0` median):**
   - Without LORE, all four Condition A authors defaulted to an ADR-like template (`Context`, `Decision`, `Rationale / Alternatives`, `Guidance for future collaborators`). That template reliably captured **Purpose (`4/4`)**, **Sources (`4/4`)**, and **Target-file links (`4/4`)**, but omitted **Explicit Evidence Limits** in **`3 / 4`** runs (`01`, `04`, `05`).
   - With [references/sourcebook.md](../../../references/sourcebook.md), `## Restrictions` (*“State how far the evidence supports the decision. Distinguish supported claims, open questions, and adaptations that still need rehearsal”*) prompted **`4 / 4`** Condition B authors to audit what the raw inputs *did not* prove:
     - **Task 1 (`02` `#L24-L27`, `03` `#L26-L28`):** Both LORE authors flagged that `ChBrain/khai` `defaults/pitch.md` defined `Tenor` only for a single whole-run key and that `pitch-defaults.md#several-pitches-in-one-scene` is an *“imagined Tenor-only illustration”* still needing rehearsal across simultaneous full Pitches and structural scopes (`Process`, `Plan`)—whereas Condition A’s [04-t1-r2-a-author.md](../04-runs/04-t1-r2-a-author.md#L31) treated that imagined block as showing *"multiple Pitches can coexist cleanly in one scene."*
     - **Task 2 (`06` `#L32-L34`, `07` `#L30-L32`):** Both LORE authors separated the single `1 vs 1` `0%`-limit Plot-boundary pair (`01-all-comic-r1-a.md` vs. `02-mixed-wonder-r1-b.md`) from untested `Persona`/`Place`/`Piece` object Pitches, unmeasured implicit-append / `SKILL.md`-only ablation (`06` `#L32`), `> 0%` mid-Plot shifts (`07` `#L31`), and turn-history echo (`07` `#L32`)—whereas Condition A’s [05-t2-r1-a-author.md](../04-runs/05-t2-r1-a-author.md#L46-L57) stated zero evidentiary bounds and [08-t2-r2-a-author.md](../04-runs/08-t2-r2-a-author.md#L53) caught object-level Pitches (`1/4` in Condition A) without sample or ablation limits.
   - In addition, `## Encoding` (*“Link to the file and section where each supported idea becomes a choice someone can use”*) produced clickable `#section` anchors (`pitch.md#tenor`, `pitch-defaults.md#standard-tenors`, `promptbook.md#agent`, `#knowledge`, `#system`) in **`4 / 4`** Condition B files versus **`0 / 4`** Condition A files.
2. **Task 1 provenance vs. unverified derivation check:**
   - Across all four Task 1 runs (`01`..`04`), **`4 / 4`** anchored the nine Tenors strictly to `ChBrain/khai` `packages/khai-arch/defaults/pitch.md` and invented **`0`** unverified historical derivations (for example, zero mentions of *Navarasa*). Because Task 1’s three raw inputs contained no external lineage claim, neither Condition A nor Condition B spontaneously added a note about pre-`ChBrain/khai` origins.
3. **Formatting self-reveal & meta-citation leak in Condition B (`Slot 06`):**
   - Output formatting revealed the condition in **`8 / 8`** files (`# Sourcebook` + `Line of Work` / `Origin` / `Restrictions` / `Encoding` in all four Condition B runs vs. `# Decision:` + ADR headings in all four Condition A runs).
   - In [06-t2-r1-b-author.md](../04-runs/06-t2-r1-b-author.md#L23), the Condition B author copied [references/sourcebook.md](../../../references/sourcebook.md#L23)’s own provenance footer (`https://github.com/ChBrain/khai/blob/c8c56c7.../packages/khai-arch/architecture/reference.md`) as a fifth bullet under `## Origin`—citing the Sourcebook guide’s own warrant standard alongside *The Giant’s Shoe*’s staging sources.


## Review correction

[Slot 06](../04-runs/06-t2-r1-b-author.md#L25) describes explicit Pitch replacement as preventing bleed. The runs show a clean transition with the handoff in place. They did not compare that handoff with a version that omitted explicit replacement. Count this as one unsupported causal claim. The completeness score stays 4/4 because the author explicitly recorded the missing comparison, and unsupported claims are tracked separately.
