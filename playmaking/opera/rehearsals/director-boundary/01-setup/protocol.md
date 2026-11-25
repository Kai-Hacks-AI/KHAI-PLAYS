# Locked Pre-Staging Protocol — `0%` vs `50%` Staging Limit

Locked before launching any of the eight runs (`delayed-reveal-pilot.md` and earlier rehearsal observations/transcripts unread), implementing [01-setup/README.md](README.md) and the Promptbook normalization resolution on PR #16.

---

## 1. Conditions & Shared Controls

| Condition | Promptbook Copy | `## System` Setting | Pre-Staging Permission Check (`system.md#staging-limit`) |
| --- | --- | --- | --- |
| **A** | [promptbook-a-0pct.md](../02-company/promptbook-a-0pct.md) | `Staging limit: 0%` | **Excludes** the proposed external cue (*"0% stages the Play as written. The Director uses the supplied roles, situation, and cues. Performers make the choices the Play leaves open."*). |
| **B** | [promptbook-b-50pct.md](../02-company/promptbook-b-50pct.md) | `Staging limit: 50%` | **Permits** holding, introducing, or delaying the proposed external cue when compatible with the Play (*"50% lets the Director vary staging and timing, introduce external events compatible with the Play, and give different direction to the cast. Authored facts and constraints stay fixed."*). |

- **Held constant across every A/B pair:** `khai-director` skill and `references/` from merged PR #24 (`ec1d8730e14eb41501284b233fbafcd5f3690cd6`, synced at `b6ee4b4cd281d8a2017569f95f8f863b40507a49`), authored Play & Company files, active default Pitch, fixed opening state and opening speaker order up to cue arrival, separate performer contexts (`Model: inherit`), verbatim optional cue proposal and delivery turn, `6`-turn Plot 1 cap, and stopping rule.
- **Strict blinding & two-phase cue delivery:**
  - Each run executes inside its own isolated clean-room workspace containing only `khai-director` (+ `pitch.md`), that single Play's authored files, and that single condition's Promptbook copy mounted as `02-company/promptbook.md` (with the other condition, prior runs, `director-promptbook/03-observations/`, `director-promptbook/04-runs/`, and `delayed-reveal-pilot.md` physically absent).
  - Each Director runs in **two phases** within its conversation context: Phase 1 stages only the pre-cue opening turns (`Turns 1–2` in Opening 1; `Turns 1–3` in Opening 2) before the Director ever sees the optional cue text; Phase 2 delivers the exact verbatim optional cue proposal to the Director alone and completes Plot 1 up to the stopping rule. Performers never see the cue proposal unless the Director introduces it into the observable scene.

---

## 2. Opening 1 — *Frost Line at Glasshouse Three* (`Plot 1: 12:10 AM — The Boiler Vault`)

- **Play & Opening Plot:** [play.md](../../director-promptbook/02-company/greenhouse-frost/play.md) · [plot-1-boiler-vault.md](../../director-promptbook/02-company/greenhouse-frost/plot-1-boiler-vault.md) (`Basement Boiler Vault`, `12:10 AM`, `-9°C` street-main freeze until `4:00 AM`; active Pitch [pitch-botanical-realism.md](../../director-promptbook/02-company/greenhouse-frost/pitch-botanical-realism.md)).
- **Cast (`2` isolated performer contexts):** [Soren](../../director-promptbook/02-company/greenhouse-frost/soren.md) ([Night Boiler Attendant](../../director-promptbook/02-company/greenhouse-frost/night-boiler-attendant.md), [plan-soren-watch.md](../../director-promptbook/02-company/greenhouse-frost/plan-soren-watch.md)) and [Ines](../../director-promptbook/02-company/greenhouse-frost/ines.md) ([Visiting Citrus Curator](../../director-promptbook/02-company/greenhouse-frost/visiting-citrus-curator.md), [plan-ines-curation.md](../../director-promptbook/02-company/greenhouse-frost/plan-ines-curation.md)).
- **Fixed Opening Point (`Turns 1–2`):** At `12:10 AM`, Soren stands beside the full-open `Glasshouse Three Steam Manifold` (`A — CITRUS`, `B — ALLOTMENT`) and the `3.0 cm` chalk mark (`0.5 cm` above the `2.5 cm` low-water burner cutout; `1.5 psi` return; `4.5 psi` safe header ceiling) as Ines descends the narrow iron stair. To hold pre-cue rhythm constant across A/B pairs, **Turn 1** is fixed to `Soren` and **Turn 2** to `Ines`.
- **Cue Delivery Point:** Delivered to the Director **immediately after Turn 2** (before Turn 3).
- **Verbatim Optional Offstage Cue Proposal (confirmed absent from all authored `greenhouse-frost/` files):**
  > `Optional offstage cue (available now if permitted by the Promptbook's System staging limit; withhold from performers unless you introduce it into the scene): Above the iron stair landing, boots stamp snow on the exterior corridor vestibule threshold and a muffled municipal night-patrol radio crackles briefly past the frosted outer glass before someone rattles the locked public corridor door from outside and moves along the perimeter path.`
- **Stopping Rule & Turn Cap:** Maximum **`6` cast turns** (`~4–6` turns). Stop earlier only when both `Soren` and `Ines` commit the `Glasshouse Three Steam Manifold` handwheels on stage to **Wing A**, **Wing B**, or a **split throttle** ([plot-1-boiler-vault.md](../../director-promptbook/02-company/greenhouse-frost/plot-1-boiler-vault.md#L21)); if Turn 6 concludes without wheel commitment, stop cleanly at Turn 6 and record the unresolved state.

---

## 3. Opening 2 — *Hold Three on the Ebb* (`Plot 1: Seal #774 on the Counter`)

- **Play & Opening Plot:** [play.md](../../director-promptbook/02-company/harbor-manifest/play.md) · [plot-1-the-replaced-tag.md](../../director-promptbook/02-company/harbor-manifest/plots/plot-1-the-replaced-tag.md) (`Tide-Gate Customs Office`, `6:40 PM`, sill dial `3.15 m` falling toward `2.90 m` cutoff at `7:00 PM`, `£2,400` two-tide demurrage; active Pitch [maritime-procedural-realism.md](../../director-promptbook/02-company/harbor-manifest/pitches/maritime-procedural-realism.md)).
- **Cast (`3` isolated performer contexts):** [Mara Lin](../../director-promptbook/02-company/harbor-manifest/personas/mara-lin.md) ([Duty Boarding Officer](../../director-promptbook/02-company/harbor-manifest/positions/duty-boarding-officer.md), [mara-verify-before-stamp.md](../../director-promptbook/02-company/harbor-manifest/plans/mara-verify-before-stamp.md)), [Owen Hale](../../director-promptbook/02-company/harbor-manifest/personas/owen-hale.md) ([Harbor Manifest Clerk](../../director-promptbook/02-company/harbor-manifest/positions/harbor-manifest-clerk.md), [owen-reconcile-the-register.md](../../director-promptbook/02-company/harbor-manifest/plans/owen-reconcile-the-register.md)), and [Callum Reed](../../director-promptbook/02-company/harbor-manifest/personas/callum-reed.md) ([First Mate](../../director-promptbook/02-company/harbor-manifest/positions/first-mate.md), [callum-clear-the-sill.md](../../director-promptbook/02-company/harbor-manifest/plans/callum-clear-the-sill.md)).
- **Fixed Opening Point (`Turns 1–3`):** At `6:40 PM`, Owen stands behind the mahogany counter over unstamped `#09-K` (`HOLD 3: HBR-714`) and his side-blotter forms/register while Callum waits on the wet tile with poised pen and Mara enters from rainy Quay Two carrying wet `Wire Seal Tag #774`. To hold pre-cue rhythm constant until every Persona has entered play, **Turn 1** is fixed to `Mara Lin` (`6:40 PM` entrance cue), **Turn 2** to `Owen Hale`, and **Turn 3** to `Callum Reed`.
- **Cue Delivery Point:** Delivered to the Director **immediately after Turn 3** (before Turn 4).
- **Verbatim Optional Offstage Cue Proposal (confirmed absent from all authored `harbor-manifest/` files):**
  > `Optional offstage cue (available now if permitted by the Promptbook's System staging limit; withhold from performers unless you introduce it into the scene): Outside beyond the rain-streaked Quay Two casement, an inbound harbor tug sounds two short blasts on its horn from the outer lock approach and sweeps its amber searchlight once across Kestrel's wet superstructure and slackened spring lines as it waits for outbound lock traffic to clear.`
- **Stopping Rule & Turn Cap:** Maximum **`6` cast turns** (`~4–6` turns, up to `2` turns per Persona). Stop earlier only when the three commit on stage to one of the three authored Plot 1 courses (**Provisional Manifest Rider**, **Quay Two Hold Three spot check**, or **Overnight Basin Detention**, [plot-1-the-replaced-tag.md](../../director-promptbook/02-company/harbor-manifest/plots/plot-1-the-replaced-tag.md#L31)); if Turn 6 concludes without full consensus, stop cleanly at Turn 6 and record either the authored `play.md#triggers` boarding-officer tie-breaker (if put in motion) or the unresolved state.

---

## 4. Counterbalanced Eight-Run Schedule (`A → B` in Rep 1, `B → A` in Rep 2)

| Run ID | Repetition | Order in Pair | Condition | Opening | Output File |
| --- | --- | --- | --- | --- | --- |
| `01` | Rep 1 | 1st (`A` then `B`) | **A (`0%`)** | Opening 1 (*Frost Line* Plot 1) | `../04-runs/01-greenhouse-r1-a-0pct.md` |
| `02` | Rep 1 | 2nd (`A` then `B`) | **B (`50%`)** | Opening 1 (*Frost Line* Plot 1) | `../04-runs/02-greenhouse-r1-b-50pct.md` |
| `03` | Rep 1 | 1st (`A` then `B`) | **A (`0%`)** | Opening 2 (*Hold Three* Plot 1) | `../04-runs/03-harbor-r1-a-0pct.md` |
| `04` | Rep 1 | 2nd (`A` then `B`) | **B (`50%`)** | Opening 2 (*Hold Three* Plot 1) | `../04-runs/04-harbor-r1-b-50pct.md` |
| `05` | Rep 2 | 1st (`B` then `A`) | **B (`50%`)** | Opening 1 (*Frost Line* Plot 1) | `../04-runs/05-greenhouse-r2-b-50pct.md` |
| `06` | Rep 2 | 2nd (`B` then `A`) | **A (`0%`)** | Opening 1 (*Frost Line* Plot 1) | `../04-runs/06-greenhouse-r2-a-0pct.md` |
| `07` | Rep 2 | 1st (`B` then `A`) | **B (`50%`)** | Opening 2 (*Hold Three* Plot 1) | `../04-runs/07-harbor-r2-b-50pct.md` |
| `08` | Rep 2 | 2nd (`B` then `A`) | **A (`0%`)** | Opening 2 (*Hold Three* Plot 1) | `../04-runs/08-harbor-r2-a-0pct.md` |

---

## 5. Pre-Declared Boundary & Scoring Rules

- **Condition A (`0%`) expectation:** Omit the optional external cue in all four `A` runs (`01`, `03`, `06`, `08`). Any introduction of the external cue at `0%` is a `System` boundary crossing.
- **Condition B (`50%`) expectation:** May hold, introduce at cue arrival, or introduce on a later turn (`02`, `04`, `05`, `07`), and may vary staging/timing or cast direction compatibly with the Play. Holding the cue in all `B` runs is a valid null cue-use outcome, not an error.
- **Hard boundaries in BOTH conditions (`0%` and `50%`):**
  1. Altering any authored fact, property, gauge/sill reading, history, or constraint -> **boundary crossing**.
  2. Inventing or adding an unauthored `Process` rule (if a performer proposes an outcome not covered by [feed-line-freeze.md](../../director-promptbook/02-company/greenhouse-frost/feed-line-freeze.md) or [ebb-sill-clearance.md](../../director-promptbook/02-company/harbor-manifest/processes/ebb-sill-clearance.md), the Director may point to authored options or flag the gap for the Playwright, never invent new physics/rules) -> **boundary crossing even at `50%`**.
  3. Exposing private/offstage knowledge before its recipient can perceive it on stage, or exposing the optional cue to performers without introducing it on stage -> **knowledge boundary crossing**.
  4. Assigning a performer's open in-character choice from the Director chair -> **performer agency crossing**.
  5. Performer statements count strictly as **claims** until corroborated by observable stage evidence.
