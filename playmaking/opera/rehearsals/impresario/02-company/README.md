# Company Artifacts — House and Repertoire Rehearsal

Pinned at commit `da3de5361f2f264105e5cfcb54373b6192a0b16d` (`opera-impresario-house-repertoire`), implementing [01-setup/README.md](../01-setup/README.md) and [01-setup/protocol.md](../01-setup/protocol.md).

## 1. Input Briefs

| File | Stage | Purpose |
| --- | --- | --- |
| [impresario-brief.md](impresario-brief.md) | Step 1 (`01-impresario.md`) | Commissions Harbor House (owned by the Human) and supplies the two pinned lender links. |
| [playwright-brief.md](playwright-brief.md) | Step 2 (`02-playwright.md`) | Supplies **only** the House link ([harbor-house/house.md](harbor-house/house.md)) and the harbor Play brief, letting the Playwright locate the Repertoire from the House. |
| [reviewer-brief.md](reviewer-brief.md) | Step 3 (`03-reviewer.md`) | Supplies [before-the-tide/play.md](before-the-tide/play.md) as the entry point and asks which House is responsible and where the selected Process comes from. |

## 2. External Lender Fixtures (Pre-Existing at `da3de53`)

| File | Lender & Owner | Shared Process Name |
| --- | --- | --- |
| [harbor-office/inspection.md](harbor-office/inspection.md) | **Harbor Office** | `Inspection` (quay-side seal vs. manifest check) |
| [shipowners-guild/inspection.md](shipowners-guild/inspection.md) | **Shipowners’ Guild** | `Inspection` (shipboard loading-record check before arrival) |

## 3. House Declaration (Materialized Verbatim from Step 1)

| File | Owner | Role |
| --- | --- | --- |
| [harbor-house/house.md](harbor-house/house.md) | **The Human** | Stable House home linked under `Estate`; links directly to [harbor-house/repertoire.md](harbor-house/repertoire.md). |
| [harbor-house/repertoire.md](harbor-house/repertoire.md) | **The Human** | Harbor House Repertoire naming and linking both **Harbor Office** and **Shipowners’ Guild** at `da3de5361f2f264105e5cfcb54373b6192a0b16d` and disambiguating the shared `Inspection` name. |

## 4. Authored Play & Local Material (Materialized Verbatim from Step 2)

| File | Owner | Role |
| --- | --- | --- |
| [before-the-tide/play.md](before-the-tide/play.md) | **Harbor House** (*Before the Tide*) | Entry-point Play linking [harbor-house/house.md](harbor-house/house.md) under `Estate`, borrowing [harbor-office/inspection.md](harbor-office/inspection.md) in `Company`, and casting the local Piece and two Plots. |
| [before-the-tide/damaged-seal.md](before-the-tide/damaged-seal.md) | **Harbor House** (*Before the Tide*) | Locally authored Piece (`Cracked Hatch Seal`), owned separately from **Harbor Office**. |
| [before-the-tide/presenting-the-seal.md](before-the-tide/presenting-the-seal.md) | **Harbor House** (*Before the Tide*) | Opening Plot initiating Harbor Office’s `Inspection` at the Outer Quay. |
| [before-the-tide/closing-the-record.md](before-the-tide/closing-the-record.md) | **Harbor House** (*Before the Tide*) | Closing Plot carrying forward the direct-inspection choice into the permanent Harbor Office ledger before the tide turns. |
