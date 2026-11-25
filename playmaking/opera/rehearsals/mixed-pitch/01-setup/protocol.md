# Locked Pre-Staging Protocol — Play-Wide Pitch Default & Middle-Plot Override

Locked before launching any of the four runs at commit `bdbcb93f6fb4c7b37b6e56d4528d04ba3c124587`, implementing [01-setup/README.md](README.md) while keeping the original single-scene [Giant’s Shoe rehearsal](../../pitch/02-company/README.md) untouched.

---

## 1. Conditions & Single-Line Input Diff

| Condition | Input Folder | Play Default (`play.md`) | Plot 1 (`Crossing`) | Plot 2 (`Question & Response`) | Plot 3 (`Immediate Consequence`) |
| --- | --- | --- | --- | --- | --- |
| **A** | [02-company/variant-a/](../02-company/variant-a/play.md) | [Dry Comedy](../02-company/variant-a/pitch-dry-comedy.md) (`comic`) | Inherit (`Dry Comedy`) | Inherit (`Dry Comedy`) | Inherit (`Dry Comedy`) |
| **B** | [02-company/variant-b/](../02-company/variant-b/play.md) | [Dry Comedy](../02-company/variant-b/pitch-dry-comedy.md) (`comic`) | Inherit (`Dry Comedy`) | Override: [Quiet Wonder](../02-company/variant-b/pitch-quiet-wonder.md) (`wondrous`) | Inherit (`Dry Comedy`) |

- **Sole authored input difference:** Line 5 of `plot-2-question-and-response.md` (`inherits the Play’s default Pitch` in Variant A vs. `tuned for this scene by [Quiet Wonder](pitch-quiet-wonder.md)` in Variant B). All other files—including [promptbook.md](../02-company/promptbook.md) (`Staging limit: 0%`), `play.md`, `plot-1-strained-crossing.md`, `plot-3-immediate-consequence.md`, and the six copied Company/Pitch cards—are byte-for-byte identical.

---

## 2. Exact Plot Boundaries, Triggers, and Stopping Rules

1. **[Plot 1: The Strained Crossing](../02-company/variant-a/plot-1-strained-crossing.md) (`2` carrier turns):**
   - **Opening boundary:** Maren (toe welt, facing east) and Tomas (rear heel counter) are halfway across `Market Square`, `30 yards` short of the east arch flatbed and `3 paces` inside the dry fountain plinth, carrying the single eight-foot `Giant Papier-Mâché Shoe` as Tuesday night’s flour-paste heel patch begins creasing inward over Tomas’s knuckles.
   - **Turns & Trigger:** Tomas takes `Turn 1`; Maren takes `Turn 2`. Plot 1 closes at the end of `Turn 2` as their stride brings the boot abreast of the central fountain’s chalk marshaling edge, carrying forward exact grip, cadence, and heel strain.
2. **[Plot 2: Question and Response](../02-company/variant-a/plot-2-question-and-response.md) (`2–3` carrier turns, hard cap `3`):**
   - **Opening Trigger:** Stepping down onto the white chalk marshaling edge beside the flank of the boot, a child looks up at the eight-foot shoe and asks once and verbatim: `“Is the giant coming?”` (zero added words before or after).
   - **Turns & Trigger:** Whichever carrier is most directly caught by the question or load takes `Turn 1` of Plot 2, handing over *by the scene* to their partner (`Turn 2`, plus an optional `Turn 3` only if `Turn 2` directly cues one brief reply; hard cap `3` turns). Speaking, acting without words, and staying silent stand on equal footing. Plot 2 closes once both carriers have committed their response and immediate physical handling of the boot.
3. **[Plot 3: Immediate Consequence](../02-company/variant-a/plot-3-immediate-consequence.md) (`2` carrier turns, then Curtain):**
   - **Opening Trigger:** Continues on the very next stride from Plot 2’s committed physical configuration and spoken/silent stance as brass warm-ups beyond the east arch tighten for parade step-off.
   - **Turns & Stopping Rule:** Maren and Tomas each take `1` brisk turn (`2` turns total in Plot 3, selected *by the scene* from Plot 2’s close) executing the immediate physical consequence for the softening heel, their route (`straight lane` vs. `plinth` brace/pause), and the watching child, followed immediately by closing stage consequence and **Curtain** (`6–7` carrier turns total across the three-Plot Play).

---

## 3. Counterbalanced Four-Run Schedule (`A → B`, then `B → A`)

| Run ID | Repetition & Order | Condition | Variant | Expected Pitch Trajectory (`Plot 1 → Plot 2 → Plot 3`) | Output File |
| --- | --- | --- | --- | --- | --- |
| `01` | Rep 1 · 1st (`A` then `B`) | **A** | `variant-a` | `Dry Comedy` → `Dry Comedy` → `Dry Comedy` | `../04-runs/01-all-comic-r1-a.md` |
| `02` | Rep 1 · 2nd (`A` then `B`) | **B** | `variant-b` | `Dry Comedy` → `Quiet Wonder` → `Dry Comedy` | `../04-runs/02-mixed-wonder-r1-b.md` |
| `03` | Rep 2 · 1st (`B` then `A`) | **B** | `variant-b` | `Dry Comedy` → `Quiet Wonder` → `Dry Comedy` | `../04-runs/03-mixed-wonder-r2-b.md` |
| `04` | Rep 2 · 2nd (`B` then `A`) | **A** | `variant-a` | `Dry Comedy` → `Dry Comedy` → `Dry Comedy` | `../04-runs/04-all-comic-r2-a.md` |

- **Isolation:** Every run executes in a fresh `khai-director` context with two fresh isolated performer contexts (`Maren` and `Tomas`), with prior runs, the other variant, and PR #20’s earlier observations physically absent from the clean-room staging workspace. Each performer receives **only** the active Pitch for the current Plot (`Promptbook ## Knowledge`).
