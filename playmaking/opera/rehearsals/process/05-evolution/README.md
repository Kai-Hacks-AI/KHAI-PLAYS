# Evolution: TO IDLE Process

Smallest proposed edits to [references/process.md](../../../skills/khai-playwright/references/process.md) and adjacent authoring/staging guidance, each tied to concrete evidence from [01-setup/execution.md](../01-setup/execution.md) and [04-runs/](../04-runs/).

---

## 1. Keep the Six `TO IDLE` Chapters (`Taxonomy`, `Owner`, `Initiated by`, `Direction`, `Lever`, `Echo`)

Across [01-authored-a](../04-runs/01-authored-a.md)–[04-variant-b](../04-runs/04-variant-b.md), each operational `TO IDLE` chapter performed distinct work onstage:
- **`Initiated by`** governed whether repeated fetching started on Beat 1 ([01](../04-runs/01-authored-a.md)–[02](../04-runs/02-authored-b.md)) or stayed idle on Beat 1 until a hand touched the Broom or Bucket on Beat 2 ([03](../04-runs/03-variant-a.md)–[04](../04-runs/04-variant-b.md)).
- **`Direction`** gave the Stage voice an observable four-stage progression (`Basin swelling` → `Full measure` → `Thresholds awash` → `Steps flooded`) that linked internal vessel fullness (`Stage 2`) to spatial overflow (`Stage 3`) and the Master's entry cue (`Stage 4`).
- **`Lever`** separated what accelerated the Process (compulsion in the wood, spare *Schaalen* seized in [02](../04-runs/02-authored-b.md) Beat 4, shaft-splitting in all four runs) from what only checked a single trip (full-weight door bracing in all four runs) and what severed it completely (the Master's dismissing command).
- **`Echo`** anchored the post-dismissal room state (`0` active servants, split wood in the corner, `Stage 4` floodwater) while leaving room for each run's specific physical aftermath (submerged axe by the sill in [02](../04-runs/02-authored-b.md), splinter-wedged inner doors in [03](../04-runs/03-variant-a.md), stripped rags in [04](../04-runs/04-variant-b.md)).

---

## 2. Proposed Minimal Edits to `references/process.md`

Current [references/process.md](../../../skills/khai-playwright/references/process.md):
```markdown
## Initiated by

Name the condition that makes the Process start once it is met.

## Direction

Say where the Process moves once it starts.

## Lever

Name what drives it and what resists that movement.

## Echo

Say what has changed in the world when the Process has run.
```

Proposed two-line tightening:
- **`Initiated by`:** `Name the observable condition that makes the Process start once it is met.`
  - *Evidence:* Making both the baseline ([process-water-fetching.md](../02-company/process-water-fetching.md#L13)) and variant ([process-water-fetching-variant.md](../02-company/process-water-fetching-variant.md#L13)) thresholds strictly observable let isolated Directors keep Beat 1 idle in [03](../04-runs/03-variant-a.md) and [04](../04-runs/04-variant-b.md) and fire Beat 2 on physical contact without exposing internal rules to the performer.
- **`Lever`:** `Name what drives it, what resists or slows it, and what stops it if anything can.`
  - *Evidence:* `references/process.md` currently asks what starts the Process (`Initiated by`), what drives and resists it (`Lever`), and what remains when it has run (`Echo`), without asking what *stops* it. In [process-water-fetching.md](../02-company/process-water-fetching.md#L29), the Playwright had to append *"until `persona-master.md`'s spoken dismissing word severs the compulsion completely"* onto the end of `Resisted by` alongside temporary one-trip checks, and reinforce that distinction in [play.md](../02-company/play.md#L20-L28) and [promptbook.md](../02-company/promptbook.md#L38-L39). Naming stop conditions explicitly inside `Lever` distinguishes temporary friction (delaying one cycle) from termination without adding a seventh heading.

---

## 3. Adjacent Cross-Class Seams (`Play`, `Promptbook`, `Director`)

1. **Delegate Process start thresholds to `Process -> Initiated by` rather than duplicating them in `Play` or `Promptbook`:**
   - *Evidence:* On the first `## Create` pass ([execution.md](../01-setup/execution.md)), `khai-playwright` restated the summoning trigger inside `play.md` and `promptbook.md`, which would have conflicted with tuning `Initiated by` in `process-water-fetching.md`. Having `Play` and `Promptbook` point to `Process -> Initiated by` kept a single source of truth across baseline and variant runs.
2. **State same-beat vs. next-beat timing when an intervention transforms an active Process near an external cue:**
   - *Evidence:* Cleaving the broom at `Stage 3` landed its doubled pour on the cleave beat itself in [01](../04-runs/01-authored-a.md) (Beat 5), [03](../04-runs/03-variant-a.md) (Beat 6), and [04](../04-runs/04-variant-b.md) (Beat 6)—immediately hitting `Stage 4` and summoning the Master—whereas [02-authored-b](../04-runs/02-authored-b.md) (Beat 5) held `Stage 3` during the *"one brief breath"* split and rise, giving the Apprentice Turn 6 against two active servants before `Stage 4` landed on Beat 6. Neither broke staging, and authors who care whether a solo beat intervenes before an external cue can specify whether the transformation consumes that cycle.
3. **Include `Process` in `khai-director/SKILL.md` and keep delayed discoveries out of static `Shadow` / `Withheld` text:**
   - *Evidence:* Flagged in [02-authored-b](../04-runs/02-authored-b.md)'s Director note: when `Promptbook -> Knowledge` makes a gap discoverable mid-run (*the missing dismissing word*), static phrasing in `Persona -> Shadow` or `Place -> Withheld` should describe the structural boundary (*no grimoire in the room; starts rites whose unmaking he has not mastered*) rather than stating upfront what the performer has not yet discovered.
