# Locked Run Protocol — Playwright–Director Handoff Rehearsal

Locked before launching any role context at PR #31 branch tip `8656e899850bad6244c3785feac8d66b84eb2b18` (`playwright-director-handoff`), implementing [01-setup/README.md](README.md).

---

## 1. Pinned Artifacts & Primary Source Snapshot

- **Pinned revision:** `8656e899850bad6244c3785feac8d66b84eb2b18`
- **Skills under test (left untouched in this PR):**
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) (with linked `references/*.md`, [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md), and [references/sourcebook.md](../../../references/sourcebook.md))
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md) (with linked `references/*.md` and [02-company/promptbook.md](../02-company/promptbook.md))
- **Pinned source snapshot for the source-based run:**
  - [gutenberg-21-town-and-country-mouse.md](../02-company/sources/gutenberg-21-town-and-country-mouse.md) (`sha256: 9d4d358871c546487ef218e157a045cdd5d2cf464b22fc01ac8ab39a685b5d60`) — verbatim Project Gutenberg eBook `#21` edition header (`Aesop's Fables`, translated by George Fyler Townsend, produced by David Widger) and complete text of *The Town Mouse and the Country Mouse*. Live `https://www.gutenberg.org/files/21/21-h/21-h.htm` returned `HTTP 503 Temporarily Down for Maintenance` on `2026-11-25`, recorded transparently in the snapshot header and cross-verified word-for-word across three preserved copies of eBook `#21`.

---

## 2. Clean-Room Isolation & Role Sequence (`4` Fresh Role Contexts + Isolated Performers)

All reviewer prompts in [01-setup/README.md](README.md#L17-L22) are excluded from every subagent system prompt, brief, and directory.

1. **Run `01` — Source-Based Playwright (`handoff-playwright`, isolated directory `pw-source`):**
   - **Brief:** [source-based/playwright-brief.md](../02-company/source-based/playwright-brief.md)
   - **Staged two-turn execution (verifying inventory-before-composition):**
     - *Turn 1:* Deliver the material inventory (`handoff/inventory.md`) and Sourcebook (`handoff/sourcebook.md`) **only**, stopping before composing any Play, Plot, or Company files. Record file list and SHA-256 digests after Turn 1.
     - *Turn 2:* Compose and deliver `handoff/play.md`, `handoff/plot-*.md`, and linked KHAI Company object files for the full arc from that inventory. Record SHA-256 digests of the completed `handoff/` folder before passing it to the Director.
2. **Run `02` — Source-Based Director (`handoff-director` + isolated `handoff-performer` cast, isolated directory `dir-source`):**
   - **Inputs:** Read-only copy of [source-based/handoff/](../02-company/source-based/handoff/), [source-based/director-brief.md](../02-company/source-based/director-brief.md), and [promptbook.md](../02-company/promptbook.md) (`Staging limit: 0%`).
   - **Deliverables:** Write [02-source-director/strichfassung.md](../04-runs/02-source-director/strichfassung.md) for one continuous fragment within a single Plot in the town house, stage it with isolated `handoff-performer` subagents keeping authored facts fixed, write [02-source-director/performance-run.md](../04-runs/02-source-director/performance-run.md), and verify via SHA-256 that every file in `handoff/` is unchanged.
3. **Run `03` — Original Playwright (`handoff-playwright`, isolated directory `pw-original`):**
   - **Brief:** [original/playwright-brief.md](../02-company/original/playwright-brief.md)
   - **Staged two-turn execution:**
     - *Turn 1:* Deliver the material inventory (`handoff/inventory.md`) **only**, stopping before composing any Play, Plot, or Company files. Record file list and SHA-256 digest after Turn 1.
     - *Turn 2:* Compose and deliver an original `handoff/play.md`, `handoff/plot-*.md`, and linked KHAI Company object files from that inventory. Record SHA-256 digests of `handoff/` before passing it to the Director.
4. **Run `04` — Original Director (`handoff-director` + isolated `handoff-performer` cast, isolated directory `dir-original`):**
   - **Inputs:** Read-only copy of [original/handoff/](../02-company/original/handoff/), [original/director-brief.md](../02-company/original/director-brief.md), and [promptbook.md](../02-company/promptbook.md) (`Staging limit: 0%`).
   - **Deliverables:** Write [04-original-director/strichfassung.md](../04-runs/04-original-director/strichfassung.md) for one fragment, then perform that fragment with isolated `handoff-performer` subagents briefed and cued **solely from the starting context and cues captured in `strichfassung.md`**, write [04-original-director/performance-run.md](../04-runs/04-original-director/performance-run.md), and verify via SHA-256 that every file in `handoff/` is unchanged.
