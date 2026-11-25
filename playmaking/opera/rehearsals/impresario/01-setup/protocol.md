# Locked Run Settings & Sequential Clean-Room Protocol — Impresario Rehearsal

Locked before launching any run at branch tip `da3de5361f2f264105e5cfcb54373b6192a0b16d` (`opera-impresario-house-repertoire`), implementing [01-setup/README.md](README.md).

---

## 1. Pinned Revision & Input Artifacts

- **Pinned rehearsal commit:** `da3de5361f2f264105e5cfcb54373b6192a0b16d`
- **Skills under test:**
  - [khai-impresario/SKILL.md](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/blob/da3de5361f2f264105e5cfcb54373b6192a0b16d/playmaking/opera/skills/khai-impresario/SKILL.md) and [references/house-repertoire.md](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/blob/da3de5361f2f264105e5cfcb54373b6192a0b16d/playmaking/opera/skills/khai-impresario/references/house-repertoire.md) (Step 1 only)
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) and its `references/` directory (Step 2 only)
- **Approved external lender fixtures (`02-company/`):**
  1. **Harbor Office** — [harbor-office/inspection.md](../02-company/harbor-office/inspection.md) (`https://github.com/Kai-Hacks-AI/KHAI-PLAYS/blob/da3de5361f2f264105e5cfcb54373b6192a0b16d/playmaking/opera/rehearsals/impresario/02-company/harbor-office/inspection.md`)
  2. **Shipowners’ Guild** — [shipowners-guild/inspection.md](../02-company/shipowners-guild/inspection.md) (`https://github.com/Kai-Hacks-AI/KHAI-PLAYS/blob/da3de5361f2f264105e5cfcb54373b6192a0b16d/playmaking/opera/rehearsals/impresario/02-company/shipowners-guild/inspection.md`)

---

## 2. Three-Stage Clean-Room Execution Plan

Each step runs in a fresh, isolated read-only `research` subagent context (`TypeName: "research"`, `Model: "inherit"`, `Workspace: "inherit"`) restricted to its step-specific clean-room directory, keeping [01-setup/README.md](README.md), prior step transcripts, other roles’ briefs, and scoring criteria out of context:

1. **Step 1 — Fresh Impresario (`04-runs/01-impresario.md`):**
   - Receives [impresario-brief.md](../02-company/impresario-brief.md), the two lender `inspection.md` files, and `khai-impresario` (`SKILL.md` + `references/house-repertoire.md`).
   - Authored House file(s) are materialized verbatim under `02-company/` without post-editing.
2. **Step 2 — Fresh Playwright (`04-runs/02-playwright.md`):**
   - Receives `playwright-brief.md` supplying **only** the House home link produced in Step 1 (not a direct Repertoire link and not the Impresario’s conversation) plus the Play brief, alongside `02-company/` (House file(s) + lender fixtures) and `khai-playwright`.
   - Authored Play and local object file(s) are materialized verbatim under `02-company/` without post-editing.
3. **Step 3 — Fresh Reviewer (`04-runs/03-reviewer.md`):**
   - Receives `reviewer-brief.md` naming the resulting `play.md` as entry point alongside the materialized `02-company/` files (with no briefs from Steps 1–2, no skill docs, and no protocol/scoring criteria), answering which House is responsible and where the selected `Inspection` Process comes from.
