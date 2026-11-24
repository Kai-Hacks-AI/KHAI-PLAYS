# Execution Record: TO DOIT in *The Last Airing*

This file records the exact commit, authored Company, paired `TO DOIT` Plans, and staging conditions used to execute [01-setup/README.md](README.md) on [KHAI PLAYS PR #19](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/19).

## Target Under Test

- **Branch & Commit Tested:** `opera-plan` at `2b0ed4394d5d90af73210fba9560d88e24dbf3fe` (*Prepare The Last Airing Plan rehearsal*)
- **Skills Under Test:**
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) with [plan.md](../../../skills/khai-playwright/references/plan.md) (`TO DOIT`: `Taxonomy`, `Owner`, `Direction`, `Orders`, `Implementation`, `Targets`), [position.md](../../../skills/khai-playwright/references/position.md) (`TO HOLD`), [process.md](../../../skills/khai-playwright/references/process.md) (`TO IDLE`), [place.md](../../../skills/khai-playwright/references/place.md) (`TO SHOW`), [piece.md](../../../skills/khai-playwright/references/piece.md) (`TO PLAY`), [persona.md](../../../skills/khai-playwright/references/persona.md) (`TO PAST`), and [promptbook.md](../../../skills/khai-playwright/references/promptbook.md) (`HACKS`)
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md)

---

## 1. Create (`02-company/`)

A fresh `khai-playwright` context received the pinned skills above and the `## Create` brief in [README.md](README.md), without access to legacy `khai-arch` templates, other rehearsals, or repository history. It authored the fixed twelve-file Company, two `TO DOIT` Plans, and an [authoring-note.md](../02-company/authoring-note.md) (kept out of all Director and performer contexts):

- **Play & Promptbook:** [play.md](../02-company/play.md) (*The Last Airing*), [promptbook.md](../02-company/promptbook.md) — both reference the active [plan.md](../02-company/plan.md) slot generically with zero mention of an alternate Plan.
- **Personas (`TO PAST`) & Station Positions (`TO HOLD`):**
  - [persona-host.md](../02-company/persona-host.md) (*Julian Mercer*) — [position-host.md](../02-company/position-host.md) (*Station Host*)
  - [persona-producer.md](../02-company/persona-producer.md) (*Nadia Okafor*) — [position-producer.md](../02-company/position-producer.md) (*Broadcast Producer*)
  - [persona-engineer.md](../02-company/persona-engineer.md) (*Devon Cho*) — [position-engineer.md](../02-company/position-engineer.md) (*Sound Engineer*)
- **Place (`TO SHOW`):** [place-studio.md](../02-company/place-studio.md) (*Studio A*, WKRB-LP 89.9 FM)
- **Pieces (`TO PLAY`):** [piece-printed-message.md](../02-company/piece-printed-message.md) (*The Printed Message*, `"STILL ON THE BLOCK"`, `2:00` across four `:30` blocks), [piece-recording.md](../02-company/piece-recording.md) (*The Recording*, `"WKRB FIELD 2"` USB stick carried by founder Marta Vega)
- **Process (`TO IDLE`):** [process-final-broadcast.md](../02-company/process-final-broadcast.md) (*The Final Broadcast*, hard `00:00:00` master-clock transmitter relay cutoff)
- **Two Plans (`TO DOIT`):**
  - [plan-read-live.md](../02-company/plan-read-live.md) (**Read live**)
  - [plan-hold-for-recording.md](../02-company/plan-hold-for-recording.md) (**Hold for the recording**)

**Pre-staging verification & alignments:**
- Both Plans share **byte-for-byte identical H1, `Taxonomy`, `Owner`, `Direction`, and five open `[ ]` `Targets`**, differing strictly under `Orders` and `Implementation`.
- Before staging, one pre-scripted `Mic 2` late-arrival clause in `plan-read-live.md` (`Orders` bullet 4) was trimmed so neither Plan pre-answered Marta's `23:59:00` arrival before the `23:50:00` call, a fifth shared archive handoff target (supported by the open `"WATER STREET / ST. JUDE'S ARCHIVE"` envelope in [place-studio.md](../02-company/place-studio.md#L17)) was synced across both Plans, and [play.md](../02-company/play.md#L68) / [promptbook.md](../02-company/promptbook.md#L26) were aligned so any target unsettled at `00:00:30` could remain `[ ]` open to carry forward rather than being forced closed.

---

## 2. Rehearse (`04-runs/`)

Each Plan was staged twice (`2 × 2 = 4` runs) in fresh, isolated `khai-director` contexts (`Model: inherit`) with three separate read-only performer sub-contexts (`Julian Mercer`, `Nadia Okafor`, `Devon Cho`):

| Active Plan (`plan.md` in packet) | Runs | Pre-`23:50:00` setup in `Orders` |
| --- | --- | --- |
| **Read live** ([plan-read-live.md](../02-company/plan-read-live.md)) | [01-read-live-a.md](../04-runs/01-read-live-a.md), [02-read-live-b.md](../04-runs/02-read-live-b.md) | Place [piece-printed-message.md](../02-company/piece-printed-message.md) on `Mic 1` stand, calibrate `Mic 1` on PFL, and lock `23:57:30` for the Host's live `2:00` read (`23:55:00` `Deck B` end-to-end verification lock). |
| **Hold for the recording** ([plan-hold-for-recording.md](../02-company/plan-hold-for-recording.md)) | [03-hold-for-recording-a.md](../04-runs/03-hold-for-recording-a.md), [04-hold-for-recording-b.md](../04-runs/04-hold-for-recording-b.md) | Arm `Deck B` on PFL standby with `Mic 1` closed, retain [piece-printed-message.md](../02-company/piece-printed-message.md) inside the producer's closed folder, and vest sole switch authority in `Broadcast Producer` up to `23:57:30` (`23:58:00` `2:00`-runtime floor). |

**Fixed across all 4 runs:**
- Identical Human brief (`"Stage *The Last Airing* from the 23:49:00 opening in play.md with the active Plan in plan.md while I watch."`), identical `23:49:00` opening with zero knowledge of any transit delay, one opening preparation round before `23:50:00`, the exact verbatim `23:50:00` payphone call from Marta Vega (`ETA 23:59:00`, heard directly only by whoever answered the copper screening handset), Marta's `23:59:00` threshold arrival, the hard `00:00:00` carrier cutoff, and one closing booth beat in the `00:00:00`–`00:00:30` static.
- Turn-guard note: The Director prompt supplied a 15-turn runaway-loop guard while [promptbook.md](../02-company/promptbook.md#L20) instructed giving each booth Persona one closing beat in the `00:00:00`–`00:00:30` static. [01-read-live-a](../04-runs/01-read-live-a.md) finished in 15 turns; Directors in [02-read-live-b](../04-runs/02-read-live-b.md) (16 turns), [03-hold-for-recording-a](../04-runs/03-hold-for-recording-a.md) (18 turns), and [04-hold-for-recording-b](../04-runs/04-hold-for-recording-b.md) (19 turns) played through midnight (`00:00:00`) and all three closing static turns rather than cutting mid-broadcast.
