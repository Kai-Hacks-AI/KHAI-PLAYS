# Playwright brief — Case 2: Clime

## Brief

A market hall floods during an unusually heavy rain. The people inside must decide whether to reopen tomorrow. Give them the current conditions and the standing regime the hall was built for. Leave them free to disagree about what this event means.

## Supplied References & Pinned Pattern Inputs

- **Opera Dramaturgy reference:** `references/dramaturgy.md`
- **Playwright skill:** `skills/khai-playwright/SKILL.md` and `skills/khai-playwright/references/`
- **Pinned Clime, Climate & Weather Patterns (`ChBrain/khai` @ `c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00`):**
  - Clime authoring guidance: `fixtures/ChBrain-khai/packages/composites/clime/playwright_instructions.md`
  - Clime legacy Sourcebook: `fixtures/ChBrain-khai/packages/composites/clime/REFERENCES.md`
  - Clime composite files: `fixtures/ChBrain-khai/packages/composites/clime/process_clime.md`, `process_clime_day.md`, `process_clime_terms.md`, `process_clime_run.md`
  - Constituent Climate & Weather engines: `fixtures/ChBrain-khai/packages/engines/climate/` and `fixtures/ChBrain-khai/packages/engines/weather/` *(in legacy files, `@chbrain/khai-engine-climate/...` maps to `packages/engines/climate/...` and `@chbrain/khai-engine-weather/...` maps to `packages/engines/weather/...`)*

## Deliverables

1. **Operational Play (`play/`):** Write `play/play.md` and the linked Opera object files (`Plot`, `Place`, `Persona` cards, and any needed `Piece` or `Process`) so a Director can stage the opening from `play/play.md`. Link to the pinned Clime, Climate, and Weather Pattern files in `../fixtures/ChBrain-khai/packages/...` where the Play and its `Place` take on the composed Pattern. Keep the `Place`’s current conditions and standing-regime details in the `Place` file that carries them rather than duplicating the Place’s full regime specification across unrelated files.
2. **Separate Author Rationale & Trace (`rationale.md` outside `play/`):** Record your Dramaturgy rationale (including how the composed Pattern’s constituents interact) and one explicit trace about **the relationship between the current load and the standing regime**:
   **`source claim → Pattern requirement → authored file and section → expected observable beat`**
   Use `REFERENCES.md` as the record of what the Pattern authors drew on: name the underlying work (and passage if the fixture gives one), state explicitly whether you inspected that underlying work directly (`No` in this offline fixture environment), and keep the attributed research claim distinct from the Pattern author’s adaptation.
