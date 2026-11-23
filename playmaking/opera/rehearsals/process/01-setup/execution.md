# Execution Record: TO IDLE in *Der Zauberlehrling*

This file records the exact commit, material, variant diff, and staging conditions used to execute [01-setup/README.md](README.md) on [KHAI PLAYS PR #17](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/17).

## Target Under Test

- **Branch & Commit Tested:** `opera-process` at `86e099d71dc067f195a28f3692695e1459547c95` (*Rehearsal: add TO IDLE for Der Zauberlehrling*)
- **Source Material:** Johann Wolfgang von Goethe, [*Der Zauberlehrling* (1798)](https://de.wikisource.org/wiki/Der_Zauberlehrling_(1798)) (*Musen-Almanach für das Jahr 1798*, S. 32–37)
- **Skills Under Test:**
  - [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md) with [persona.md](../../../skills/khai-playwright/references/persona.md) (`TO PAST`), [piece.md](../../../skills/khai-playwright/references/piece.md) (`TO PLAY`), [place.md](../../../skills/khai-playwright/references/place.md) (`TO SHOW`), [process.md](../../../skills/khai-playwright/references/process.md) (`TO IDLE`), and [promptbook.md](../../../skills/khai-playwright/references/promptbook.md) (`HACKS`)
  - [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md)

---

## 1. Create (`02-company/`)

A fresh `khai-playwright` context received the pinned skills above, the full 1798 German text of *Der Zauberlehrling*, and the `## Create` requirements in [README.md](README.md), without access to other rehearsals or repository history. It authored all eight Company files in [02-company/](../02-company/):

- **Play & Promptbook:** [play.md](../02-company/play.md), [promptbook.md](../02-company/promptbook.md)
- **Personas (`TO PAST`):** [persona-apprentice.md](../02-company/persona-apprentice.md), [persona-master.md](../02-company/persona-master.md)
- **Pieces (`TO PLAY`):** [piece-broom.md](../02-company/piece-broom.md), [piece-bucket.md](../02-company/piece-bucket.md)
- **Place (`TO SHOW`):** [place-hall.md](../02-company/place-hall.md)
- **Process (`TO IDLE`):** [process-water-fetching.md](../02-company/process-water-fetching.md)

**Authoring alignment before staging:**
- **Delegating initiation to `Process -> Initiated by`:** On its first pass, the Playwright restated the summoning trigger inside [play.md](../02-company/play.md) and [promptbook.md](../02-company/promptbook.md) (*"Once the Apprentice finishes that opening summoning command, Water-Fetching starts"*), which would have competed with [process-water-fetching.md](../02-company/process-water-fetching.md) when `Initiated by` was varied. One authoring revision delegated Process start timing strictly to the `Initiated by` heading of `process-water-fetching.md` while keeping the opening moment one beat before any spell takes effect.
- **Fixed Master entry cue across all runs:** Agreed and locked in [play.md](../02-company/play.md#L25-L28) and [promptbook.md](../02-company/promptbook.md#L20) prior to staging—[persona-master.md](../02-company/persona-master.md) stays offstage until **whichever observable event happens first**: (a) the Apprentice calls aloud for the Master loudly enough to carry past the outer doorway of [place-hall.md](../02-company/place-hall.md), or (b) water in [place-hall.md](../02-company/place-hall.md) crosses the outer threshold onto the entry steps.

---

## 2. Single-Sentence `Initiated by` Variant

[process-water-fetching-variant.md](../02-company/process-water-fetching-variant.md) changes strictly **one sentence** (line 13, under `## Initiated by`) while holding `Taxonomy`, `Owner`, `Direction`, `Lever`, and `Echo` byte-for-byte identical and introducing no new props or surfaces:

```diff
--- a/process-water-fetching.md
+++ b/process-water-fetching-variant.md
@@ -13 +13 @@
-The Apprentice ([`persona-apprentice.md`](persona-apprentice.md)) finishes speaking the Master's summoning formula over the rag-wrapped Broom ([`piece-broom.md`](piece-broom.md)) beside the Water Bucket ([`piece-bucket.md`](piece-bucket.md)) in the Hall ([`place-hall.md`](place-hall.md)).
+Having spoken the Master's summoning formula in the Hall ([`place-hall.md`](place-hall.md)), the Apprentice ([`persona-apprentice.md`](persona-apprentice.md)) lays a hand on the rag-wrapped Broom ([`piece-broom.md`](piece-broom.md)) or the Water Bucket ([`piece-bucket.md`](piece-bucket.md)) to make it move.
```

Both thresholds are reachable from the shared opening in [play.md](../02-company/play.md#L19), where the rag-wrapped Broom and empty Water Bucket already rest beside the dry bath basin within arm's reach of the Apprentice.

---

## 3. Staging Protocol (`04-runs/`)

Both Process conditions were staged twice (`2 × 2 = 4` runs) in fresh, isolated `khai-director` contexts (`Model: inherit`), with isolated read-only performer sub-contexts for `The Apprentice` and `The Old Master`:

- **Authored `Initiated by`:** [01-authored-a.md](../04-runs/01-authored-a.md), [02-authored-b.md](../04-runs/02-authored-b.md)
- **Variant `Initiated by`:** [03-variant-a.md](../04-runs/03-variant-a.md), [04-variant-b.md](../04-runs/04-variant-b.md) (supplied in each isolated staging packet as `process-water-fetching.md` so all file links and instructions stayed identical)
- **Fixed across all 4 runs:**
  - Human opening brief (supplied once while watching silently from outside the scene): `"Stage *The Sorcerer's Apprentice* from the shared opening in play.md while I watch."`
  - Role isolation per [promptbook.md](../02-company/promptbook.md): `The Apprentice` began with the opening situation, [persona-apprentice.md](../02-company/persona-apprentice.md), [place-hall.md](../02-company/place-hall.md), and the observable `Place`/`Apparent`/`Yearbook` details of [piece-broom.md](../02-company/piece-broom.md) and [piece-bucket.md](../02-company/piece-bucket.md) (discovering the missing dismissing word and the axe-cleaving consequence only through observable Stage beats); `The Old Master` remained offstage until the fixed entry cue fired and received only what drew him to the steps plus the visible room state on arrival.
  - Stopping rule: Play through to the `Ending` in [play.md](../02-company/play.md#L45) (with a 10-turn runaway loop guard that no run needed; runs concluded naturally in 8–9 performer turns).
