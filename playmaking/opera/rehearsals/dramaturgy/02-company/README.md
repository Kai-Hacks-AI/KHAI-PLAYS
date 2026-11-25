# Company Artifacts — Dramaturgy and Patterns Rehearsal

Pinned at PR #29 branch tip `3e19b37111448dc16ba42c5481d088d2aa325ce8` (`opera-dramaturgy-patterns`) with `ChBrain/khai` Pattern fixtures snapshotted verbatim from `c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00` per [01-setup/README.md](../01-setup/README.md) and [01-setup/protocol.md](../01-setup/protocol.md).

---

## 1. Pinned Authoring & Staging Briefs

| File | Stage & Role | Purpose |
| --- | --- | --- |
| [gender-playwright-brief.md](gender-playwright-brief.md) | Step 1 — Fresh Playwright (`Case 1: Gender`) | Supplies the harbor-office brief, [dramaturgy.md](../../../references/dramaturgy.md), `khai-playwright`, and pinned `Gender` Pattern fixtures. |
| [clime-playwright-brief.md](clime-playwright-brief.md) | Step 1 — Fresh Playwright (`Case 2: Clime`) | Supplies the flooded market-hall brief, [dramaturgy.md](../../../references/dramaturgy.md), `khai-playwright`, and pinned `Clime` / `Climate` / `Weather` Pattern fixtures. |
| [promptbook.md](promptbook.md) | Step 3 — Shared `0%` Promptbook (`Attempts 01–04`) | Reusable two-round opening Promptbook (`Staging limit: 0%`) with isolated cast performer contexts. |
| [director-brief.md](director-brief.md) | Step 3 — Fixed Director Brief (`Attempts 01–04`) | Identical starting instruction across all four variants (`play/play.md` + `promptbook.md`). |

---

## 2. Pinned Pattern & Sourcebook Fixtures (`fixtures/ChBrain-khai/`)

- **Gender (`packages/engines/gender/`):** `README.md`, `REFERENCES.md` *(authoring only)*, `playwright_instructions.md` *(authoring only)*, `position_gender.md`, `position_female.md`, `position_male.md`.
- **Clime (`packages/composites/clime/`):** `README.md`, `REFERENCES.md` *(authoring only)*, `playwright_instructions.md` *(authoring only)*, `process_clime.md`, `process_clime_day.md`, `process_clime_terms.md`, `process_clime_run.md`.
- **Constituent Engines (`packages/engines/climate/` & `packages/engines/weather/`):** `README.md`, `REFERENCES.md` *(authoring only)*, `playwright_instructions.md` *(authoring only)*, `process_climate.md`, `process_regime.md`, `process_seasonality.md`, `process_extremity.md`, `process_shift.md`, and `process_weather.md` with its channel/band `process_*.md` files.

---

## 3. Separate Playwright Rationales & Authored Play Variants

| Artifact | Case & Variant | Description |
| --- | --- | --- |
| [gender-rationale.md](gender-rationale.md) | **Gender** — Separate rationale & 4-step trace | Excluded from all Step 3 staging trees; traces Manne (*Down Girl*, 2017, via `gender/REFERENCES.md`, direct inspection `No`) → `position_female.md` → `persona_clara_dane.md` (`## Projection`) → silent counter opening beat. |
| `gender-complete/` ([play.md](gender-complete/play.md)) | **Gender** — Complete copy (`Attempt 01`) | *Before the Bar Closes* (`7` files): wires `Gender` across `Warden Clara Dane` (`Female` in `Projection`) and `Captain Maren Voss` (`Male` in `Projection`, concealed `Female` in `Shadow`). |
| `gender-reduced/` ([play.md](gender-reduced/play.md)) | **Gender** — Reduced copy (`Attempt 02`) | Removes `Warden Clara Dane`’s `Projection` gender-expression link/assignment and cross-file pronoun/accommodation echoes (exact diff in [00-variant-diffs.md](../04-runs/00-variant-diffs.md)). |
| [clime-rationale.md](clime-rationale.md) | **Clime** — Separate rationale & 4-step trace | Excluded from all Step 3 staging trees; traces Lorenz (1963/1969), Hasselmann (1976), and Köppen (1884/1923) via `clime/REFERENCES.md` (direct inspection `No`) → `process_clime_day.md` + `process_clime_terms.md` → `place_barrowgate_hall.md` (`## Shown`) → opening mismatch beat over the clear sump strainer. |
| `clime-complete/` ([play.md](clime-complete/play.md)) | **Clime** — Complete copy (`Attempt 04`) | *The Sunken Flags* (`13` files): wires `Clime` (`the Day`, `the Terms`, `the Run`), `Weather`, and `Climate` onto `Barrowgate Market Hall` with `1908` `22 mm/hr` culvert terms vs. `48 mm` in `70 min` deluge. |
| `clime-reduced/` ([play.md](clime-reduced/play.md)) | **Clime** — Reduced copy (`Attempt 03`) | Removes the authored standing-regime (`Clime, the Terms` / `1908` `22 mm/hr` `1875–1905` baseline) information from `place_barrowgate_hall.md` and cross-file echoes (exact diff in [00-variant-diffs.md](../04-runs/00-variant-diffs.md)). |
