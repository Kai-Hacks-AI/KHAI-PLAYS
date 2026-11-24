# Execution Record: TO TUNE in *The Giant’s Shoe*

This file records the tested commit, authored Company, paired `TO TUNE` Pitches, and isolated staging conditions used to execute [01-setup/README.md](README.md) on [KHAI PLAYS PR #20](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/20).

## Target Under Test

- **Branch & Commit Tested:** `opera-pitch` authored and rehearsed at `81ef10e1d446917b1ff2b668ff039bf5e71a4660` (*Add TO TUNE and prepare The Giant’s Shoe rehearsal*), then fast-forwarded onto `9bfa7dcde61356f82fe045c3c476157c4ce2d2fa` (*Document many-to-many links across KHAI PLAYS types*; [01-setup/README.md](README.md) unchanged, and both authored Pitches already satisfy `9bfa7dc`’s `Taxonomy` rule).
- **Skills Under Test:**
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) with [pitch.md](../../../skills/khai-playwright/references/pitch.md) (`TO TUNE`: `Taxonomy`, `Owner`, `Tenor`, `Undertow`, `Nerve`, `Echo`), [persona.md](../../../skills/khai-playwright/references/persona.md) (`TO PAST`), [piece.md](../../../skills/khai-playwright/references/piece.md) (`TO PLAY`), [place.md](../../../skills/khai-playwright/references/place.md) (`TO SHOW`), and [promptbook.md](../../../skills/khai-playwright/references/promptbook.md) (`HACKS`)
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md)

---

## 1. Create (`02-company/`)

A fresh `khai-playwright` context received the pinned skills above and the `## Create` brief in [README.md](README.md), without access to legacy `khai-arch` templates, other rehearsals, or repository history. It authored the six-file Company, two `TO TUNE` Pitches, and [authoring-note.md](../02-company/authoring-note.md) (withheld from all Director and performer contexts):

- **Play & Promptbook:** [play.md](../02-company/play.md) (*The Giant’s Shoe*), [promptbook.md](../02-company/promptbook.md) — both bind the active [pitch.md](../02-company/pitch.md) link generically with zero reference to an alternate Pitch.
- **Personas (`TO PAST`):**
  - [persona-toe-carrier.md](../02-company/persona-toe-carrier.md) (*Maren — Toe Carrier*, forward-facing schedule co-signer protecting the Third Ward’s lead marshaling berth)
  - [persona-heel-carrier.md](../02-company/persona-heel-carrier.md) (*Tomas — Heel Carrier*, parish-shed builder cradling his own softening Tuesday-night flour-paste heel patch)
- **Place (`TO SHOW`):** [place-square.md](../02-company/place-square.md) (*Market Square*, thirty open yards of sloped granite flagstones to the east arch flatbed, flanked by white chalk marshaling lines, rope crowd-barriers, and a waist-high stone fountain plinth three paces off-line)
- **Piece (`TO PLAY`):** [piece-shoe.md](../02-company/piece-shoe.md) (*Giant Papier-Mâché Shoe*, the Third Ward’s lone eight-foot left work boot—no giant rigged behind it—with an inner wooden carry-welt and an uncured rear heel seam creasing inward)
- **Two Pitches (`TO TUNE`):**
  - [pitch-dry-comedy.md](../02-company/pitch-dry-comedy.md) (**Dry comedy**)
  - [pitch-quiet-wonder.md](../02-company/pitch-quiet-wonder.md) (**Quiet wonder**)

**Byte-level `TO TUNE` isolation check (`git diff --no-index`):**
- [pitch-dry-comedy.md](../02-company/pitch-dry-comedy.md) and [pitch-quiet-wonder.md](../02-company/pitch-quiet-wonder.md) are **byte-for-byte identical across H1, `Taxonomy`, `Owner`, `Undertow`, `Nerve`, and `Echo`**, differing strictly on line 13 under `## Tenor`:
  - `Dry comedy`: `Play the question with the dry practicality of a parade logistics problem.`
  - `Quiet wonder`: `Give the question the quiet seriousness the child gives it.`

---

## 2. Rehearse (`04-runs/`)

Each `Tenor` was staged twice (`2 × 2 = 4` runs) in fresh, isolated `khai-director` contexts (`Model: inherit`), each spawning two isolated read-only `research` performer sub-contexts (`Maren` and `Tomas`):

| Active Pitch (`pitch.md` in packet) | `Tenor` (line 13) | Runs |
| --- | --- | --- |
| **Dry comedy** ([pitch-dry-comedy.md](../02-company/pitch-dry-comedy.md)) | `Play the question with the dry practicality of a parade logistics problem.` | [01-dry-comedy-a.md](../04-runs/01-dry-comedy-a.md), [02-dry-comedy-b.md](../04-runs/02-dry-comedy-b.md) |
| **Quiet wonder** ([pitch-quiet-wonder.md](../02-company/pitch-quiet-wonder.md)) | `Give the question the quiet seriousness the child gives it.` | [03-quiet-wonder-a.md](../04-runs/03-quiet-wonder-a.md), [04-quiet-wonder-b.md](../04-runs/04-quiet-wonder-b.md) |

**Fixed across all 4 runs:**
- Each run’s isolated staging folder contained the exact same six Company files and **only** its active Pitch mapped to `pitch.md` (with the alternate Pitch and [authoring-note.md](../02-company/authoring-note.md) absent).
- Identical Human brief (`"Stage *The Giant’s Shoe* from the mid-square opening in play.md with the active Pitch in pitch.md while I watch."`), identical mid-crossing opening (`30 yards` short of the east arch, `3 paces` inside the dry fountain plinth, single boot, buckling heel), the child’s single verbatim cue (`“Is the giant coming?”`), free volunteer choice across speech, wordless action, or silence, and a clean stop after one short post-cue exchange and its immediate consequence (`5` volunteer turns in every run).
