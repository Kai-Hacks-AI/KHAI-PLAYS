# Evolution — Director Staging Limit (`0%` vs `50%`)

Smallest evidence-backed recommendation for Owner review from [02-company/README.md](../02-company/README.md) and [03-observations/README.md](../03-observations/README.md), keeping `playmaking/opera/skills/` untouched in this rehearsal PR.

---

## 1. Verdict on the Merged PR #24 Baseline (`khai-director` + `system.md#staging-limit`)

**Keep the merged PR #24 `khai-director/SKILL.md` and `0% / 50% / 100%` scale in [system.md](../../../skills/khai-director/references/system.md#staging-limit) as the baseline (no extra creative-boundary paragraph in `SKILL.md` needed):**

- **Clean `0%` vs `50%` behavioral gate (`8 / 8` runs):** Changing only the numeric `## System` limit (`0%` vs `50%`) cleanly separated strict authored-cue staging (`0 / 4` external cues introduced in [01](../04-runs/01-greenhouse-r1-a-0pct.md), [03](../04-runs/03-harbor-r1-a-0pct.md), [06](../04-runs/06-greenhouse-r2-a-0pct.md), [08](../04-runs/08-harbor-r2-a-0pct.md)) from compatible external-event staging (`4 / 4` external cues introduced in [02](../04-runs/02-greenhouse-r1-b-50pct.md), [04](../04-runs/04-harbor-r1-b-50pct.md), [05](../04-runs/05-greenhouse-r2-b-50pct.md), [07](../04-runs/07-harbor-r2-b-50pct.md)).
- **Process fidelity needs a qualified verdict.** Runs 02 and 06 contain unsupported performer explanations about the manifold. The cue logs show the Director pointing to authored settings and do not show either explanation becoming binding. Keep the cue-use result and carry the unresolved machinery question to the Playwright. [SCORE observations](../03-observations/README.md#3-authored-fidelity--process-claims)

---

## 2. Single Candidate Guide Clarification for Owner Review (`system.md` / `promptbook.md`)

- **Observed pre-staging blocker ([02-company/README.md](../02-company/README.md#L7-L13)):**
  - When PR #24's clean-room Director authored [director-promptbook/02-company/promptbook.md](../../director-promptbook/02-company/promptbook.md) from [promptbook.md](../../../skills/khai-director/references/promptbook.md) and [system.md](../../../skills/khai-director/references/system.md), it repeated `0%` in the opening summary (`L3`), `## Human` (`L7`), and blocker clause (`L35`), and restated `0%`'s ban on external events (`"the Director does not invent external events"`, `L32`) inline beside `Staging limit: 0%`. As a result, swapping only the numeric value in `## System` (`0%` → `50%`) left conflicting `0%` instructions inside the reusable Promptbook until normalized into [promptbook-a-0pct.md](../02-company/promptbook-a-0pct.md) and [promptbook-b-50pct.md](../02-company/promptbook-b-50pct.md).
- **Smallest optional edit (for a separate follow-up solution PR if the Owner wants tunable Promptbooks by default):**
  - Add one sentence to [khai-director/references/system.md](../../../skills/khai-director/references/system.md#L7) under `## Staging limit`:
    > `State the numeric limit in one place in System and rely on this scale rather than repeating limit-specific permissions elsewhere in the Promptbook, so the Human can adjust the number between runs without rewriting other chapters.`

---

## 3. Ambiguities & Scene-Specific Limits Identified

1. **Cue timing (`Turn 4` after holding vs. `Turn 4` immediate) is opening-specific:**
   - Holding the cue across `Turn 3` in *Frost Line* (`02`, `05`) vs. introducing it immediately before `Turn 4` in *Hold Three* (`04`, `07`) tracked whether the preceding turn ended on an open technical question (`Frost Line` `Turn 2`) or a completed opening round (`Hold Three` `Turn 3`), and whether `2` vs `3` cast turns had elapsed before cue delivery.
2. **`4 / 4` cue adoption at `50%` reflects compatible, well-timed cues rather than a requirement to fire every optional cue:**
   - Both tested cues reinforced the active `Pitch` (`Frost-Taut Botanical Realism` and `Clipped Maritime Procedural Realism`) without disrupting an active beat once `Turn 3` cleared. An intrusive or tonally mismatched external cue might appropriately be held even at `50%`.
3. **Commitments vs. causal attribution at `n = 2` per cell:**
   - While both *Frost Line* `50%` runs (`02`, `05`) committed to **Wing A (`4.5 psi`)** in `5` turns after the patrol rattle whereas `0%` split between **Wing A** (`01`, `Turn 6`) and **`2.2 psi` split throttle** (`06`, `Turn 5`), `n = 2` per cell establishes observable stage integration of the external cue (glancing up the stair, public-door dialogue in `02 L47`, signed `12:12 AM` pocket-notebook slip in `05 L75-L77`), not a deterministic shift in performer choice.
4. **Play-specific `Process` / `Trigger` seams surfaced cleanly for Playwrights (not Director skill defects):**
   - *Frost Line:* Performers consistently test an asymmetric branch bias on `Turn 2` (`01, 02, 05, 06`); one clause in `feed-line-freeze.md` (`## Lever`) explaining why any dual-branch draw below `4.5 psi` starves far-end traps would answer that in-card.
   - *Hold Three:* Isolated counter pressure consistently surfaced `Owen`'s blank `774` carbon line (`Turn 5`) and `Callum`'s `#B-19` confession (`Turn 6`) inside Plot 1 (`03, 04, 07, 08`), highlighting two Playwright-side clarifications in `ebb-sill-clearance.md` / `play.md#triggers`: (a) that warrantless `#B-19` sister-ship bonded stores cannot clear on `Form #09-R` without physical sight inspection, and (b) how Plot 2's `6:55 PM` Rider/Detention setup adapts if line `774` was already exposed or annotated during Plot 1.
