# Evolution — Playwright Inventory & Director Strichfassung Takeaways

Scoped strictly to the two rehearsed pipelines (`Runs 01–02` source-based, `Runs 03–04` original; [03-observations/README.md](../03-observations/README.md)) per [01-setup/README.md](../01-setup/README.md). [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) and [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md) remain untouched in this rehearsal PR.

> [!NOTE]
> **Scope of inference:** Each route was executed once with inventory-first authoring and `Strichfassung` fragment staging under `Staging limit: 0%` (no without-inventory, without-`Strichfassung`, or `>0%`-limit ablations were run). The takeaways below record what worked as written and which specific handoff edge cases surfaced during staging.

---

## 1. Playwright Material Inventory Before Composition ([khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md#L11-L20))

- **Worked as written across both routes (`2 / 2`):**
  - Delivering `inventory.md` (plus `sourcebook.md` on the source-based route) before composing `play.md` and `plot-*.md` produced complete, stable object maps whose Turn 1 SHA-256 digests stayed byte-identical through Turn 2 (`15` operational files in `source-based/handoff/`; `20` operational files in `original/handoff/`), while recording unused/consolidated candidates and leaving multi-Plot Company material intact for alternative productions.
- **Two small authoring hygiene points surfaced by Director staging (candidate refinements if echoed in later runs):**
  1. **Match every `Plot` / `Process` movement target to a named feature in `Place`:** In Run `01`/`02`, `plot-03-second-footstep.md#stage` and `process-household-intrusion.md#direction` carried Townsend’s *"ran away and hid themselves"* into *"deeper hiding"*, while `place-town-larder.md` named only the single wainscot squeeze-hole ([03-observations/README.md](../03-observations/README.md#L53)).
  2. **Keep `Persona` `Tell` strictly externally observable in every posture:** In Run `03`/`04`, `persona-maren-holt.md#tell` paired an open variant with an inside-the-pocket variant (*"Inside her right coat pocket—or openly at her side once drawn..."*), requiring the Director to filter unseen brass-key detail on Turn 1 ([03-observations/README.md](../03-observations/README.md#L63)).

---

## 2. Director `Strichfassung` & Fragment Handoff ([khai-director/SKILL.md](../../../skills/khai-director/SKILL.md#L13))

- **Worked as written across both sub-Plot cuts (`2 / 2`) while keeping `handoff/` `100%` unchanged:**
  - Both Directors cut cleanly inside a single Plot (`Plot 3 Cue → Stage 1–2` in [02-source-director/strichfassung.md](../04-runs/02-source-director/strichfassung.md); `Plot 1 Stage 1 → Stage 3` in [04-original-director/strichfassung.md](../04-runs/04-original-director/strichfassung.md)), linked back to `handoff/` without touching a single authored byte (`38 / 38` files SHA-256 unchanged across both routes), and in Run `04` proved that a thoroughly written `Strichfassung` can drive a 6-turn isolated cast run on its own without re-consulting `handoff/`.
- **One structural distinction surfaced between mid-arc fragments with fixed vs. contingent entry states:**
  - Run `02` staged a **Plot 3** fragment under `0%` without inventing prior events because `play.md#triggers` fixed Plot 2’s closing state (`Wave 1` at first bite, both mice wedged empty-stomached in the narrow hole, cheese unbitten on the boards).
  - Run `04` chose a **Plot 1** fragment under `0%` ([performance-run.md](../04-runs/04-original-director/performance-run.md#L88)) because Plots 2 and 3 of *Slack Water at Marrow Slip* inherit *contingent* bargains, item custody, and breaker states from earlier Plots with no recorded `TO LOAN` Performance card.
  - **Candidate clarification if needed when Directors stage standalone mid-arc fragments under `0%`:** In [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md#L13), note that when a selected mid-Play fragment depends on open choices from an unstaged earlier Plot, those starting conditions must come either from a linked [Performance card](../../../skills/khai-director/references/performance.md) or from explicit Human production assumptions in the brief/Promptbook rather than unrecorded Director invention.
