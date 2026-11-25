# Evolution — Research Skill & Lookup Schema Takeaways

Scoped strictly to the two rehearsal cases and four clean-room runs ([03-observations/README.md](../03-observations/README.md)), implementing [01-setup/README.md](../01-setup/README.md) and [design.md](../01-setup/design.md). [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md), [references/sourcebook.md](../../../references/sourcebook.md), and the pre-existing `01-setup/` and `02-company/` fixtures remain untouched in this PR.

> [!NOTE]
> **Scope of inference:** All four runs executed with both [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md) and the derived lookup table ([02-company/index.md](../02-company/index.md)) present; no unguided or no-index ablation was run. The observations below establish **sufficiency under the tested setup** and record behavioral edges observed inside those runs, not causal superiority over an untested baseline.

---

## 1. Assessment of `playmaking/opera/skills/khai-research/SKILL.md`

- **Sufficient as authored across both Pattern and source-based Play briefs (`4 / 4` runs):**
  - Following the three-paragraph workflow in [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md#L9-L13), every fresh researcher began with the external passage, separated firsthand inspection from indirect attribution (`6` secondary citations in `Clime`’s `REFERENCES.md`; comparative folktale notes `[IX]`/`[LXII]` in Grimm `1812`), searched across **both** Plays and Patterns, compared equivalent concepts (*draw* vs. *odds*, *flood* vs. *rain*) and cross-edition shifts (`1812` *Mutter* vs. `1857` *Stiefmutter*), distinguished `Direct` use from `Via Clime`, reported page-cutoff and paywall limits, and gave structured *reuse / extend / distinct* recommendations.
- **One minor precision edge for future observation (background knowledge vs. inspected source metadata):**
  - While no run misattributed unread primary texts, [03-literary-r1.md](../04-runs/03-literary-r1.md#L17) supplied external bibliographic facts (*"7th Große Ausgabe"*, intermediate range *"1815–1850"*) from model background knowledge without noting that those labels were absent from [grimm-1857-bd1-p079.md](../02-company/sources/grimm-1857-bd1-p079.md), and Runs `01`–`02` used general meteorological knowledge when answering the brief’s heat-to-rain transfer question (while explicitly flagging in `§4` that no primary precipitation paper was in `sources/`).
  - **Candidate wording if needed later:** In [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md#L9), *"Cite the source you inspected and distinguish firsthand reading from indirect attribution"* could add *"and from unverified background context"* if subsequent rehearsals show background metadata leaking into Sourcebook `Origin` entries. No immediate edit is required from a single minor bibliographic gloss.

---

## 2. Lookup Relationships & Distinctions to Preserve ([design.md](../01-setup/design.md#L21))

Across the five-row derived table ([02-company/index.md](../02-company/index.md)) and its linked fixture Sourcebooks, five schema properties were actively used in every run (`4 / 4`) to resolve overlap vs. distinctness:

1. **Unified cross-type indexing (`Patterns` + `Plays` in one lookup view):**
   - Searching Plays and Patterns together on `10.1038/nature03089` surfaced not only the owning Pattern ([Clime](../02-company/fixtures/patterns/clime/sourcebook.md)) and a sibling Pattern ([Heat Benchmark](../02-company/fixtures/patterns/heat-benchmark/sourcebook.md)), but also a Play ([The Closed Hall](../02-company/fixtures/plays/the-closed-hall/sourcebook.md)) demonstrating that `Clime` already covers single-event water/regime disputes under the term *flood*.
2. **Work-level canonical `Source identity` paired with edition- and passage-level `Passage or claim`:**
   - **Shared work identity (`Grimm KHM 15`)** bridged an unindexed `1857` scan (`Hänsel und Grethel`, p. 79) to two `1812` Play records (`Hänsel und Gretel`), where exact URL matching alone would miss the match.
   - **Passage/claim + edition specificity** separated two Patterns sharing the exact same DOI (`Abstract, change in heatwave likelihood` vs. `Abstract, historical threshold`), separated two Plays sharing the exact same `1812` URL (`1812, pp. 49–50, parents’ decision` vs. `1812, closing episode`), and prompted firsthand cross-edition comparison exposing the `1812` *Mutter* vs. `1857` *Stiefmutter* shift. Conversely, where `Out of the House` omitted page numbers (`1812, closing episode`) and `The Second Loaf`’s title diverged from its `pp. 49–50` citation, researchers had to read the full `1812` text (`pp. [49]–[58]`) to pin boundaries—supporting [design.md](../01-setup/design.md#L7)’s rule to record exact edition and passage/page spans when known.
3. **Explicit `Relationship` path (`Direct` vs. `Via <Pattern>`):**
   - Recording `Via Clime` in [index.md](../02-company/index.md#L9) and linking `Origin` in [the-closed-hall/sourcebook.md](../02-company/fixtures/plays/the-closed-hall/sourcebook.md#L9) to `../../patterns/clime/sourcebook.md` allowed all four runs to distinguish Playwrights who consulted an external work firsthand from Plays inheriting research through a Pattern ([design.md](../01-setup/design.md#L11)).
4. **One-hop link from every derived row back to the authoritative LORE `sourcebook.md`:**
   - As [design.md](../01-setup/design.md#L17) anticipates, the derived index narrowed candidates, while judging whether two works cover the same idea required following each row’s link to read `Origin`, `Restrictions`, and `Encoding` (and, for `Clime`, following its `Origin` link to [chbrain-khai-clime-references.md](../02-company/sources/chbrain-khai-clime-references.md) to verify its `water` channel and `wildland`/`margin` boundaries).
5. **Preserving access status & uninspected boundaries alongside citations:**
   - Recording snapshot scope and access limits in [sources/MANIFEST.md](../02-company/sources/MANIFEST.md) (abstract-only on `10.1038/nature03089`; `p. 79` page-break truncation on `1857` KHM 15; unpinned secondary works inside `Clime` and the `1812` appendix) gave researchers verifiable boundaries to carry forward into future Sourcebook `Restrictions` ([design.md](../01-setup/design.md#L7)).
