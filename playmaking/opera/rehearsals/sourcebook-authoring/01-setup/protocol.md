# Locked Run Settings & Pre-Execution Protocol — Sourcebook Authoring Rehearsal

Locked before launching any author, collaborator, or scorer run at rehearsal branch tip `3f94de24c620fc5c788bda63bda58ac0e1b0b8c8` (`opera-sourcebook-authoring-rehearsal`), implementing [01-setup/README.md](README.md).

---

## 1. Pinned Artifacts, Accessibility, Model, Budget & File Permissions

- **Pinned revisions:**
  - Rehearsal branch tip: `3f94de24c620fc5c788bda63bda58ac0e1b0b8c8`
  - `Kai-Hacks-AI/KHAI-PLAYS` raw input snapshot revision: `7f1966e6e5818d49a56ac8acb1f7e8e337c7b650`
  - `ChBrain/khai` raw input snapshot revision: `c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00`
  - Exact copies and SHA-256 digests are recorded in [02-company/README.md](../02-company/README.md).
- **Input accessibility:** All eight pinned files (`3` Task 1 raw inputs, `4` Task 2 raw inputs, and `sourcebook.md` for Condition B) are **100% accessible** and staged locally per isolated run tree. Earlier Sourcebooks (`rehearsals/sourcebook/**`), observation/evolution summaries (`mixed-pitch/03-observations/**`, `mixed-pitch/05-evolution/**`, `pitch/03-observations/**`), non-input repo files, and external links outside the raw input set (such as `ChBrain/khai` `packages/khai-arch/architecture/reference.md` referenced in `sourcebook.md#L23`) are excluded from all author, collaborator, and scorer trees.
- **Model, context isolation, budgets & file permissions:**
  1. **Eight fresh Author contexts (`run-01`..`run-08`):** `cleanroom-author` subagent (`Model: "inherit"`, `Workspace: "inherit"`, `enable_write_tools: true`, no shell/MCP/subagents). Each run sees **only** its isolated run folder (`brief.md`, writable `work/` copy of that Task’s `KHAI-PLAYS` artifact tree, read-only `external/` copy of `ChBrain/khai` `defaults/pitch.md` for Task 1, and read-only `guide/sourcebook.md` for Condition B only). Write permissions are restricted strictly to `work/`. All generated files and entry-point diffs are saved verbatim under `04-runs/` before any evaluation begins.
  2. **Eight fresh Collaborator contexts (`collab-01`..`collab-08`, Findability):** `research` subagent (`Model: "inherit"`, read-only sandbox; `brief.md` and `guide/` stripped from the tree before inspection). Identical inspection budget of at most **`5` file reads** per run, starting strictly at the fixed Task entry point:
     - **Task 1 entry point:** `work/playmaking/opera/skills/khai-playwright/references/pitch-defaults.md` (`# Standard Tenors`)
     - **Task 2 entry point:** `work/playmaking/opera/rehearsals/mixed-pitch/02-company/promptbook.md` (`# Promptbook`)
     Collaborators must follow Markdown links from the entry point before any directory listing; any directory listing or path guessing is logged as guesswork.
  3. **Separate Blind Content Scorer:** `research` subagent (`Model: "inherit"`, read-only sandbox) given unlabeled copies of the eight authored rationale files in the predeclared mixed order `[03, 05, 01, 08, 06, 02, 04, 07]` (`blind-01`..`blind-08`) plus the allowed raw inputs and the predeclared 4-point rubric ([01-setup/README.md](README.md#L25)), then reconciled item-by-item against a second independent scoring pass.

---

## 2. Predeclared Eight-Run Execution Schedule (`A→B` Rep 1, `B→A` Rep 2)

| Slot | Task | Rep | Cond. | Brief | Author Record | Collaborator Record | Blind Scorer ID |
| :---: | :---: | :---: | :---: | --- | --- | --- | :---: |
| `01` | **Task 1** (Playwright — Tenors) | `1` | **A** | [task1-plain-brief.md](../02-company/task1-plain-brief.md) | `../04-runs/01-t1-r1-a-author.md` | `../04-runs/01-t1-r1-a-collab.md` | `blind-03` |
| `02` | **Task 1** (Playwright — Tenors) | `1` | **B** | [task1-lore-brief.md](../02-company/task1-lore-brief.md) | `../04-runs/02-t1-r1-b-author.md` | `../04-runs/02-t1-r1-b-collab.md` | `blind-06` |
| `03` | **Task 1** (Playwright — Tenors) | `2` | **B** | [task1-lore-brief.md](../02-company/task1-lore-brief.md) | `../04-runs/03-t1-r2-b-author.md` | `../04-runs/03-t1-r2-b-collab.md` | `blind-01` |
| `04` | **Task 1** (Playwright — Tenors) | `2` | **A** | [task1-plain-brief.md](../02-company/task1-plain-brief.md) | `../04-runs/04-t1-r2-a-author.md` | `../04-runs/04-t1-r2-a-collab.md` | `blind-07` |
| `05` | **Task 2** (Director — Handoff) | `1` | **A** | [task2-plain-brief.md](../02-company/task2-plain-brief.md) | `../04-runs/05-t2-r1-a-author.md` | `../04-runs/05-t2-r1-a-collab.md` | `blind-02` |
| `06` | **Task 2** (Director — Handoff) | `1` | **B** | [task2-lore-brief.md](../02-company/task2-lore-brief.md) | `../04-runs/06-t2-r1-b-author.md` | `../04-runs/06-t2-r1-b-collab.md` | `blind-05` |
| `07` | **Task 2** (Director — Handoff) | `2` | **B** | [task2-lore-brief.md](../02-company/task2-lore-brief.md) | `../04-runs/07-t2-r2-b-author.md` | `../04-runs/07-t2-r2-b-collab.md` | `blind-08` |
| `08` | **Task 2** (Director — Handoff) | `2` | **A** | [task2-plain-brief.md](../02-company/task2-plain-brief.md) | `../04-runs/08-t2-r2-a-author.md` | `../04-runs/08-t2-r2-a-collab.md` | `blind-04` |

- **Deviations from [01-setup/README.md](README.md):** None.
