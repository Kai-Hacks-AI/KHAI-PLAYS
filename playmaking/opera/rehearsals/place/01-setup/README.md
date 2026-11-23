# Rehearsal Setup: TO SHOW Place

## Target Under Test

- **Pull Request:** [KHAI PLAYS PR #15](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/15) (`opera-place` → `repertoire/playmaking.opera`)
- **Commit Tested:** `1e3f09489e75773fbdb1c68b4f70a1a1dfa21085` (*Add the TO SHOW Place template*)
- **Skills Under Test:**
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md)
  - [khai-playwright/references/place.md](../../../skills/khai-playwright/references/place.md) *(TO SHOW: Taxonomy, Owner, Shown, Holds, Offers, Withheld)*
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md)
- **Shared Material:** [*Mother's Painting* Company](../../promptbook-collaboration/02-company/README.md) (preserved for this rehearsal at [02-company/README.md](../02-company/README.md)) and the validated two-chapter [Promptbook](../02-company/promptbook.md) from [promptbook-collaboration](../../promptbook-collaboration/02-company/two-chapter/promptbook-combined.md).

---

## 1. Authoring Two Places (`02-company/`)

A fresh authoring subagent received [khai-playwright](../../../skills/khai-playwright/SKILL.md) (including [references/place.md](../../../skills/khai-playwright/references/place.md)) and [*Mother's Painting*](../../promptbook-collaboration/02-company/README.md), without access to other rehearsals, scratch files, or the legacy `khai-arch` template:

> *"Use the Mother's Painting Company as shared material. Author two different Places that can host the same exchange over Mother's painting, where Mother's flat has been cleared and the four siblings each want to take her painting home. Return each Place as its own Markdown document, plus a short authoring note on how the two Places differ."*

The Playwright completed the brief in one pass without requesting clarification, returning:
- [place-mothers-flat.md](../02-company/place-mothers-flat.md) — an enclosed, stripped upper-floor flat holding the real kitchen window, bare wall hook, counter handover keys, and street intercom.
- [place-building-entrance.md](../02-company/place-building-entrance.md) — a narrow ground-floor vestibule wedged open to pavement air and a single idling car three paces away, with Mother's rooms locked out of sight behind the key-return slot.
- [authoring-note.md](../02-company/authoring-note.md) — the Playwright's comparison of the two Places (kept out of all Director and performer contexts).

---

## 2. Single-Sentence Chapter Variants on *The Building Entrance*

Taking [place-building-entrance.md](../02-company/place-building-entrance.md) as the baseline Place, four variants were created by changing strictly **one sentence** in one operational `TO SHOW` chapter while keeping the other five chapters byte-for-byte fixed:

| Variant | Chapter edited | Exact single-sentence change vs. [place-building-entrance.md](../02-company/place-building-entrance.md) |
| --- | --- | --- |
| [variant-shown.md](../02-company/variant-shown.md) | `Shown` | Replaced Sentence 1 (*cold street air and traffic noise*) with: `Steady rain blows in past the building's wedged-open front door, wetting the outer tiles of the narrow vestibule and carrying traffic spray across the threshold.` |
| [variant-holds.md](../02-company/variant-holds.md) | `Holds` | Replaced Bullet 4 (*resident letterboxes, Mother's named slot, and the key-return box*) with: `- The row of resident letterboxes, Mother's named slot, the key-return box, and a folded mover's blanket with brown parcel tape left at the foot of the stairs.` |
| [variant-offers.md](../02-company/variant-offers.md) | `Offers` | Replaced Bullet 2 (*steady or shift Mother's painting along the wall...*) with: `- Set Mother's painting flat onto a dry ledge behind the stairwell turn where all four siblings can stand clear of the doorway with their hands off the frame.` |
| [variant-withheld.md](../02-company/variant-withheld.md) | `Withheld` | Replaced Sentence 2 of Bullet 3 (*to put the painting in the car, someone must carry it past the other three...*) with: `To clear the kerb before the traffic warden walking up the street tickets the idling car, someone must either drive the car off empty or let the painting into its boot now—giving up either the only dry boot at the door or their block on the threshold.` |

---

## 3. Staging Protocol (`04-runs/`)

Each of the six Place conditions was staged twice (`6 × 2 = 12` single-scene runs) in fresh, isolated `khai-director` contexts (`Model: inherit`), with four separate read-only performer sub-contexts (`Ada`, `Ben`, `Cora`, `Dan`):

- **Fixed across all 12 runs:** Cast Personas, isolated private memories, and Piece ([02-company/README.md](../02-company/README.md), supplied in each isolated packet with `Place` pointing to that run's `place.md`); [promptbook.md](../02-company/promptbook.md); observable-only turn sharing; and a **uniform stopping rule** (stage one single-Place exchange until it comes to rest naturally, with a strict ceiling of 10 turns and no move to a second Place).
- **Local Human opening brief (supplied once while watching silently):**
  - *Mother's Flat* ([01](../04-runs/01-flat-a.md)–[02](../04-runs/02-flat-b.md)): `"Mother's flat has been cleared. The four siblings are in Mother's Flat with Mother's painting against the skirting board, and someone downstairs rings the entry buzzer. Stage the exchange here while I watch."`
  - *The Building Entrance* baseline and all four chapter variants ([03](../04-runs/03-entrance-baseline-a.md)–[12](../04-runs/12-entrance-withheld-b.md), word-for-word identical across all ten runs): `"Mother's flat has been cleared and locked upstairs. The four siblings are at The Building Entrance with Mother's painting leaning against the inner vestibule wall and one car idling at the kerb. Stage the exchange here while I watch."`
