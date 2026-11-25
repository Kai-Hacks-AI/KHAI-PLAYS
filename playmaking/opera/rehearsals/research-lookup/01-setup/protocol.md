# Locked Run Settings & Pre-Execution Protocol — Research Lookup Rehearsal

Locked before launching any researcher run at PR #30 branch tip `63bf845e591a4edda5a0d066bbd24d4467ec4212` (`opera-research-lookup`), implementing [01-setup/README.md](README.md) and [design.md](design.md).

---

## 1. Pinned Artifacts, External Source Snapshots & Access Conditions

- **Pinned revision:** `63bf845e591a4edda5a0d066bbd24d4467ec4212`
- **Skill under test:** [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md) (and its linked [references/sourcebook.md](../../../references/sourcebook.md))
- **Fixture collection & derived lookup table (pre-existing at `63bf845`):**
  - Derived lookup aid: [02-company/index.md](../02-company/index.md)
  - Fixture Sourcebooks: [clime](../02-company/fixtures/patterns/clime/sourcebook.md), [heat-benchmark](../02-company/fixtures/patterns/heat-benchmark/sourcebook.md), [the-closed-hall](../02-company/fixtures/plays/the-closed-hall/sourcebook.md), [the-second-loaf](../02-company/fixtures/plays/the-second-loaf/sourcebook.md), and [out-of-the-house](../02-company/fixtures/plays/out-of-the-house/sourcebook.md)
- **Pinned external source passages ([02-company/sources/MANIFEST.md](../02-company/sources/MANIFEST.md)):**
  1. `https://pubmed.ncbi.nlm.nih.gov/15577907/#abstract` → [pubmed-15577907-abstract.md](../02-company/sources/pubmed-15577907-abstract.md) (verbatim PubMed abstract record; full *Nature* article body inaccessible/not inspected).
  2. `https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/composites/clime/REFERENCES.md` → [chbrain-khai-clime-references.md](../02-company/sources/chbrain-khai-clime-references.md) (verbatim legacy `Clime` `REFERENCES.md` linked from `fixtures/patterns/clime/sourcebook.md`).
  3. `https://de.wikisource.org/wiki/Seite:Kinder_und_Hausm%C3%A4rchen_(Grimm)_1857_I_079.jpg` → [grimm-1857-bd1-p079.md](../02-company/sources/grimm-1857-bd1-p079.md) (verbatim Wikisource page `79` transcription of the 1857 Band 1 edition; pages `80`+ not included).
  4. `https://de.wikisource.org/wiki/H%C3%A4nsel_und_Gretel_(1812)` → [grimm-1812-khm15.md](../02-company/sources/grimm-1812-khm15.md) (verbatim Wikisource transcription of the 1812 1st edition, pp. `[49]`–`[58]` + appendix notes).

---

## 2. Clean-Room Execution Plan (`2 Cases × 2 Fresh Runs = 4`)

- **Model & isolation:** Fresh, network-isolated read-only `research` subagents (`TypeName: "research"`, `Model: "inherit"`, `Workspace: "inherit"`). Each agent receives **only** its isolated directory containing `skills/khai-research/SKILL.md`, `references/sourcebook.md`, its single case brief ([scientific-brief.md](../02-company/scientific-brief.md) or [literary-brief.md](../02-company/literary-brief.md)), `02-company/index.md`, `02-company/fixtures/**`, and `02-company/sources/**`. Expected matches, [01-setup/README.md](README.md), [design.md](design.md), [02-company/README.md](../02-company/README.md), the other case’s brief, and sibling runs are excluded from every context.
- **Runs saved verbatim before scoring:**
  - `../04-runs/01-scientific-r1.md` & `../04-runs/02-scientific-r2.md` (Case 1 — Scientific brief, two independent fresh contexts)
  - `../04-runs/03-literary-r1.md` & `../04-runs/04-literary-r2.md` (Case 2 — Literary brief, two independent fresh contexts)
- **Deviations from [01-setup/README.md](README.md):** None (running `2` independent fresh contexts per case to verify repeatability alongside single-run sufficiency).
