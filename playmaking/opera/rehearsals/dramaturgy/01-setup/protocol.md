# Locked Run Settings & Pre-Execution Protocol — Dramaturgy & Patterns Rehearsal

Locked before launching any authoring or staging run at PR #29 branch tip `3e19b37111448dc16ba42c5481d088d2aa325ce8` (`opera-dramaturgy-patterns`), implementing [01-setup/README.md](README.md).

---

## 1. Pinned Revisions, Skills, Fixtures & Model Settings

- **Pinned revisions:**
  - `Kai-Hacks-AI/KHAI-PLAYS` branch tip: `3e19b37111448dc16ba42c5481d088d2aa325ce8`
  - `ChBrain/khai` Pattern & Sourcebook fixture revision: `c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00` (snapshotted verbatim under `02-company/fixtures/ChBrain-khai/`)
- **Skills & references pinned from `3e19b37111448dc16ba42c5481d088d2aa325ce8`:**
  - Authoring stage (`Step 1` only): [references/dramaturgy.md](../../../references/dramaturgy.md) + [skills/khai-playwright/](../../../skills/khai-playwright/SKILL.md) (and [references/repertoire.md](../../../references/repertoire.md))
  - Staging stage (`Step 3` only): [skills/khai-director/](../../../skills/khai-director/SKILL.md) (plus [pitch.md](../../../skills/khai-playwright/references/pitch.md) linked from `khai-director/SKILL.md`)
- **External academic works named in legacy `REFERENCES.md` files:** None of the external books or journal articles cited in `gender/REFERENCES.md` (Risman 2004; West & Zimmerman 1987; Manne 2017; Connell 1987; Bourdieu 1998) or `clime/REFERENCES.md` (Lorenz 1963, 1969; Hasselmann 1976; Köppen 1884; Milanković 1941; Allen 2003; Stott, Stone & Allen 2004; NASEM 2016) are included in the sandboxed fixtures or inspected directly by any agent in this rehearsal; all agents work strictly from the pinned `ChBrain/khai` fixtures and must distinguish attributed research claims from the Pattern authors’ adaptations.
- **Model, subagent isolation & turn budget:**
  - **Step 1 — Fresh Playwrights (`2` isolated contexts, `dram-playwright`, `Model: "inherit"`):** One fresh context for **Gender** and one for **Clime**. Each writes operational Play files under `play/` and a separate `rationale.md` containing the explicit trace (`source claim → Pattern requirement → authored file and section → expected observable beat`). `rationale.md`, `playwright_instructions.md`, `REFERENCES.md`, and the authoring transcript are excluded from all Step 3 staging trees.
  - **Step 2 — Complete & Reduced Variants (`2 × 2 = 4` copies):**
    - `gender-complete/` vs. `gender-reduced/` (one Persona’s `Projection` link/statement of gender expression removed, verified unrecoverable across all remaining files in `gender-reduced/`).
    - `clime-complete/` vs. `clime-reduced/` (authored standing-regime information removed from the `Place`, verified unrecoverable across all remaining files in `clime-reduced/`).
  - **Step 3 — Fresh Directors + Isolated Performers (`4` staged attempts, `dram-director` + `dram-performer`, `Model: "inherit"`):**
    - Counterbalanced execution order: `01 = gender-complete`, `02 = gender-reduced`, `03 = clime-reduced`, `04 = clime-complete`.
    - Fixed across all four attempts: [director-brief.md](../02-company/director-brief.md), [promptbook.md](../02-company/promptbook.md) (`Staging limit: 0%`), `khai-director` skill, linked Pattern object files (`position_*.md` for Gender; `process_*.md` across `clime`/`climate`/`weather` for Clime), and a fixed opening turn budget of **`2` rounds (`1` opening turn + `1` response turn per cast Persona; max `4` cast turns for a 2-Persona opening, `6` for a 3-Persona opening)**.
- **Deviations from [01-setup/README.md](README.md):** None.
