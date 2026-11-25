# Review of `before-the-tide/play.md`

## 1. Which House is responsible for this Play?

**Harbor House** (`harbor-house/house.md`) is the House responsible for *Before the Tide*.

- In `before-the-tide/play.md` under `## Estate`, the Play declares: `[Harbor House](../harbor-house/house.md) is the House responsible for this Play.`
- Following that link to `harbor-house/house.md`:
  - `## Home` confirms that Harbor House is the House responsible for its commissioned harbor Plays and is linked under `Estate`.
  - `## Owner` states that Harbor House is owned by **The Human** (echoed in `harbor-house/repertoire.md` under `## Owner`).

---

## 2. Where does the selected Process come from?

The selected Process is **`Inspection`** (`harbor-office/inspection.md`), borrowed from the external collection of **Harbor Office** via the **Harbor House Repertoire** (`harbor-house/repertoire.md`) at pinned revision `da3de5361f2f264105e5cfcb54373b6192a0b16d`.

- In `before-the-tide/play.md` under `## Company` (`Processes (Borrowed)`), the Play explicitly selects `[Inspection](../harbor-office/inspection.md)` from **Harbor Office** via `[Harbor House Repertoire](../harbor-house/repertoire.md)` (pinned revision `da3de5361f2f264105e5cfcb54373b6192a0b16d`), distinguishing Harbor Office’s quay-side `Inspection` from **Shipowners’ Guild**’s homonymous shipboard `Inspection` (`shipowners-guild/inspection.md`), and states that **Harbor Office** retains ownership.
- In `harbor-house/repertoire.md`:
  - `## Declared Collections` → `### Harbor Office` declares **Harbor Office** as Lender & Owner of `harbor-office/inspection.md` (pinned revision `da3de5361f2f264105e5cfcb54373b6192a0b16d`, with both local link `../harbor-office/inspection.md` and pinned GitHub source URL).
  - `## Shared Names Across Declared Collections` explains that both declared lenders (**Harbor Office** and **Shipowners’ Guild**) provide a Process named `Inspection` (`harbor-office/inspection.md` vs. `shipowners-guild/inspection.md`) and requires Playwrights to identify the intended lender in the Play’s `Company`.
- In `harbor-office/inspection.md`:
  - `## Taxonomy` defines it as *"A Harbor Office Process for checking a seal at the quay."*
  - `## Owner` confirms **Harbor Office** owns the Process.
  - `## Initiated by`, `## Direction`, `## Lever`, and `## Echo` supply the exact procedural mechanics referenced across `before-the-tide/play.md`, `before-the-tide/presenting-the-seal.md`, and `before-the-tide/closing-the-record.md`.

---

## 3. Link & File Trace from `before-the-tide/play.md`

### Entry Point: `before-the-tide/play.md`
- **`## Estate`**:
  - Links `[Harbor House](../harbor-house/house.md)` → `harbor-house/house.md`.
- **`## Arc`**:
  - Links `[Presenting the Seal](presenting-the-seal.md)` → `before-the-tide/presenting-the-seal.md`.
  - Links `[Cracked Hatch Seal](damaged-seal.md)` → `before-the-tide/damaged-seal.md`.
  - Links `[Inspection](../harbor-office/inspection.md)` → `harbor-office/inspection.md`.
  - Links `[Closing the Record](closing-the-record.md)` → `before-the-tide/closing-the-record.md`.
- **`## Company`**:
  - **Personas** (inline in `before-the-tide/play.md`): Visiting Captain (Captain Maren Holt) and Boarding Officer (Officer Tomás Venn); links `before-the-tide/damaged-seal.md`, `harbor-office/inspection.md`, and `before-the-tide/presenting-the-seal.md`.
  - **Pieces**: Links `[Cracked Hatch Seal](damaged-seal.md)` (`before-the-tide/damaged-seal.md`) as a local Piece owned by `[Harbor House](../harbor-house/house.md)` (`harbor-house/house.md`) for *Before the Tide*, and declares two unauthored supporting items (the outward manifest and Harbor Office quay ledger).
  - **Processes (Borrowed)**: Links `[Inspection](../harbor-office/inspection.md)` (`harbor-office/inspection.md`) and `[Harbor House Repertoire](../harbor-house/repertoire.md)` (`harbor-house/repertoire.md`).
  - **Place, Positions, and Plans** & **Default Pitch**: Declares *The Outer Quay* as an unauthored Place (with no separate Position or Plan files) and `dread` inline as Default Pitch.
- **`## Triggers` & `## Stakes`**:
  - Re-links `before-the-tide/damaged-seal.md`, `harbor-office/inspection.md`, `before-the-tide/presenting-the-seal.md`, and `before-the-tide/closing-the-record.md`.

### House & Repertoire Files Followed
1. **`harbor-house/house.md`** (via `../harbor-house/house.md` from `before-the-tide/play.md` `## Estate` and `## Company`):
   - `## Home`: Confirms Harbor House’s responsibility for commissioned harbor Plays.
   - `## Owner`: **The Human**.
   - `## Shared Collection Governance`: Governance by **The Human** (subject to confirmation of any additional authorized approvers).
   - `## Repertoire`: Links `[Harbor House Repertoire](repertoire.md)` → `harbor-house/repertoire.md`.
2. **`harbor-house/repertoire.md`** (via `../harbor-house/repertoire.md` from `before-the-tide/play.md` `## Company` and `repertoire.md` from `harbor-house/house.md` `## Repertoire`):
   - `## House`: Links `[Harbor House](house.md)` → `harbor-house/house.md`.
   - `## Owner` & `## Governance`: Owned and governed by **The Human**; requires borrowed material to remain under its lender’s ownership.
   - `## Declared Collections`:
     - `### Harbor Office`: Links `../harbor-office/` and `../harbor-office/inspection.md` → `harbor-office/inspection.md` (Owner: **Harbor Office**, pinned at `da3de5361f2f264105e5cfcb54373b6192a0b16d`).
     - `### Shipowners’ Guild`: Links `../shipowners-guild/` and `../shipowners-guild/inspection.md` → `shipowners-guild/inspection.md` (Owner: **Shipowners’ Guild**, pinned at `da3de5361f2f264105e5cfcb54373b6192a0b16d`).
   - `## Shared Names Across Declared Collections`: Cross-links both `harbor-office/inspection.md` and `shipowners-guild/inspection.md`, requiring explicit lender disambiguation when borrowing `Inspection`.

### Borrowed & Declared Collection Material Followed
3. **`harbor-office/inspection.md`** (selected Process, via `../harbor-office/inspection.md` from `before-the-tide/play.md` and `harbor-house/repertoire.md`):
   - `## Taxonomy`: Harbor Office Process for checking a seal at the quay.
   - `## Owner`: **Harbor Office** (contains no outgoing links).
4. **`shipowners-guild/inspection.md`** (unselected declared Process, reachable via `../shipowners-guild/inspection.md` in `harbor-house/repertoire.md`):
   - `## Taxonomy`: Shipowners’ Guild Process for a shipboard check before arrival.
   - `## Owner`: **Shipowners’ Guild** (not used or linked by `before-the-tide/play.md`).

### Local Play Material Followed
5. **`before-the-tide/damaged-seal.md`** (local Piece `# Cracked Hatch Seal`, via `damaged-seal.md` from `before-the-tide/play.md`):
   - `## Owner`: `[Harbor House](../harbor-house/house.md) (*[Before the Tide](play.md)*)`.
   - `## Taxonomy`, `## Place`, `## Load Bearing`, `## Apparent`, `## Yearbook`: Links back to `before-the-tide/play.md`, `harbor-house/house.md`, `harbor-office/inspection.md`, and `before-the-tide/presenting-the-seal.md`.
6. **`before-the-tide/presenting-the-seal.md`** (local Plot 1, via `presenting-the-seal.md` from `before-the-tide/play.md`):
   - `## Owner`: `[Harbor House](../harbor-house/house.md) (*[Before the Tide](play.md)*)`.
   - `## Taxonomy`, `## Cue`, `## Action`, `## Stage`, `## Tension`: Links `before-the-tide/play.md`, `harbor-house/house.md`, `before-the-tide/damaged-seal.md`, and `harbor-office/inspection.md`.
7. **`before-the-tide/closing-the-record.md`** (local Plot 2, via `closing-the-record.md` from `before-the-tide/play.md`):
   - `## Owner`: `[Harbor House](../harbor-house/house.md) (*[Before the Tide](play.md)*)`.
   - `## Taxonomy`, `## Cue`, `## Action`, `## Stage`, `## Tension`: Links `before-the-tide/play.md`, `harbor-house/house.md`, `before-the-tide/presenting-the-seal.md`, `before-the-tide/damaged-seal.md`, and `harbor-office/inspection.md`.

### Summary of Ownership
- **House (`harbor-house/house.md`) & Repertoire (`harbor-house/repertoire.md`):** Owned by **The Human**.
- **Local Play Material (`before-the-tide/damaged-seal.md`, `before-the-tide/presenting-the-seal.md`, `before-the-tide/closing-the-record.md`, under `before-the-tide/play.md`):** Owned by **Harbor House** (*Before the Tide*).
- **Borrowed Process (`harbor-office/inspection.md`):** Owned by **Harbor Office** (lender retains ownership).
- **Other Repertoire Collection Material (`shipowners-guild/inspection.md`, not borrowed by this Play):** Owned by **Shipowners’ Guild**.

---

## 4. Missing Information or Ambiguous Links

- **No broken file links or unresolved Process ambiguity:** Every relative markdown file link from `before-the-tide/play.md` and its linked files resolves cleanly, and the shared-name collision on `Inspection` between **Harbor Office** (`harbor-office/inspection.md`) and **Shipowners’ Guild** (`shipowners-guild/inspection.md`) is explicitly disambiguated in both `harbor-house/repertoire.md` (`## Shared Names Across Declared Collections`) and `before-the-tide/play.md` (`## Company` → `Processes (Borrowed)`).
- **Directory links in `harbor-house/repertoire.md`:** Under `## Declared Collections` (`### Harbor Office` and `### Shipowners’ Guild`), the `Source (local)` lines include bare directory links (`../harbor-office/` and `../shipowners-guild/`) that do not target a markdown index document; however, each is paired on the same line with a direct file link (`../harbor-office/inspection.md` and `../shipowners-guild/inspection.md`), so file navigation remains unambiguous.
- **Open governance / borrowing-limit confirmations noted in House documents:**
  - `harbor-house/house.md` (`## Shared Collection Governance`) notes that governance is *"subject to confirmation of any additional authorized approvers."*
  - `harbor-house/repertoire.md` (`### Harbor Office`, `### Shipowners’ Guild`, and `## House Borrowing Limits`) notes that lender and House borrowing limits are *"None stated yet (pending confirmation from the Human)"* / *"None recorded at establishment (pending confirmation from the Human)."*
- **Inline / unauthored elements and filename vs. title naming:** `before-the-tide/play.md` (`## Company`) explicitly accounts for elements without standalone files—Personas (Visiting Captain, Boarding Officer), Default Pitch (`dread`), Place (*The Outer Quay*), and supporting items (outward manifest, Harbor Office ledger)—so none are unexpectedly missing. Note only a minor naming difference between the Piece’s title (`Cracked Hatch Seal`) and its filename (`before-the-tide/damaged-seal.md`), which is linked consistently everywhere.
