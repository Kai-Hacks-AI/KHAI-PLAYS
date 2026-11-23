# Execution Record: TO HOLD at the Printmaking Bench

This file records the exact commit, authored Company, casting protocol, and isolation rules used to execute [01-setup/README.md](README.md) on [KHAI PLAYS PR #18](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/18).

## Target Under Test

- **Branch & Commit Tested:** `opera-position` at `6a8b8f6f80e9ee89ee3666fa44c5bfa168bc2e28` (*Add TO HOLD and prepare the printmaking rehearsal*)
- **Skills Under Test:**
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) with [position.md](../../../skills/khai-playwright/references/position.md) (`TO HOLD`: `Taxonomy`, `Owner`, `Has`, `Orders`, `Loses`, `Drives`), [persona.md](../../../skills/khai-playwright/references/persona.md) (`TO PAST`), [piece.md](../../../skills/khai-playwright/references/piece.md) (`TO PLAY`), [place.md](../../../skills/khai-playwright/references/place.md) (`TO SHOW`), [process.md](../../../skills/khai-playwright/references/process.md) (`TO IDLE`), and [promptbook.md](../../../skills/khai-playwright/references/promptbook.md) (`HACKS`)
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md)

---

## 1. Create (`02-company/`)

A fresh `khai-playwright` context received the pinned skills above and the `## Create` requirements in [README.md](README.md), without access to legacy `khai-arch` templates, other rehearsals, or repository history. It authored all eleven Company files plus an [authoring-note.md](../02-company/authoring-note.md) (kept out of all Director and performer contexts) in a single pass without needing revision:

- **Positions (`TO HOLD`, reusable without Persona or printmaking-specific names):** [position-teacher.md](../02-company/position-teacher.md), [position-student.md](../02-company/position-student.md)
- **Personas (`TO PAST`):** [persona-teacher.md](../02-company/persona-teacher.md) (*Nadia*, current Teacher), [persona-student.md](../02-company/persona-student.md) (*Theo*, current Student), [persona-former-teacher.md](../02-company/persona-former-teacher.md) (*Arthur*, former Teacher)
- **Pieces (`TO PLAY`):** [piece-crooked-proof.md](../02-company/piece-crooked-proof.md), [piece-clean-sheet.md](../02-company/piece-clean-sheet.md)
- **Place (`TO SHOW`):** [place-workshop.md](../02-company/place-workshop.md)
- **Process (`TO IDLE`, open result):** [process-last-pull.md](../02-company/process-last-pull.md)
- **Play & Promptbook:** [play.md](../02-company/play.md) (*One Clean Sheet*), [promptbook.md](../02-company/promptbook.md)

---

## 2. Two Castings (`04-runs/`)

All eleven authored Company files were copied byte-for-byte into four isolated staging folders (`2 × 2 = 4` runs). Each run launched in a fresh `khai-director` context (`Model: inherit`) holding the Stage and Process-runner voice outside the fiction, with three separate read-only performer sub-contexts for `Nadia`, `Theo`, and `Arthur`:

| Casting | Runs | Active Position bindings supplied to isolated performers |
| --- | --- | --- |
| **Teacher only** | [01-teacher-only-a.md](../04-runs/01-teacher-only-a.md), [02-teacher-only-b.md](../04-runs/02-teacher-only-b.md) | **8:55 PM to curtain:** `Nadia` holds [Teacher](../02-company/position-teacher.md) toward `Theo`; `Theo` holds [Student](../02-company/position-student.md) toward `Nadia`. When `Arthur` enters on cue at 8:56 PM, `Arthur` receives no Position file (visitor only), and `Nadia` receives no `Student` Position toward `Arthur`. |
| **Teacher and Student** | [03-teacher-and-student-a.md](../04-runs/03-teacher-and-student-a.md), [04-teacher-and-student-b.md](../04-runs/04-teacher-and-student-b.md) | **8:55 PM opening:** `Nadia` holds [Teacher](../02-company/position-teacher.md) toward `Theo`; `Theo` holds [Student](../02-company/position-student.md) toward `Nadia`. **From Arthur's 8:56 PM entrance cue to curtain:** `Arthur` receives [Teacher](../02-company/position-teacher.md) active toward `Nadia`, and `Nadia` receives [Student](../02-company/position-student.md) active toward `Arthur` alongside her ongoing [Teacher](../02-company/position-teacher.md) toward `Theo`. |

**Fixed across all 4 runs:**
- **Human audience brief (supplied once, differing only by the casting name):** `"Stage *One Clean Sheet* from the 8:55 PM opening in play.md under the **[Teacher only | Teacher and Student]** casting while I watch."`
- **Fixed entrance cue and verbatim line:** As `Theo` stepped into the single-person press apron with wiped hands, checked the re-inked block on the grid, and reached for the brass handling clips beside [piece-clean-sheet.md](../02-company/piece-clean-sheet.md) *before* lifting the sheet from the tray, `Arthur` walked in, stopped beside [piece-crooked-proof.md](../02-company/piece-crooked-proof.md), and said: `“I remember that mistake.”`
- **Stopping rule:** Play through the open decision over [piece-clean-sheet.md](../02-company/piece-clean-sheet.md), the open `Echo` of [process-last-pull.md](../02-company/process-last-pull.md), and one concrete consequence exchange (2–4 turns after `Echo` lands), with a 12-turn runaway loop guard that no run needed (all four runs concluded naturally at 11 performer turns).
