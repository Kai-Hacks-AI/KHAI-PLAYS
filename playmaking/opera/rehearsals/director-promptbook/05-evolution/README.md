# Evolution: Director-Owned Reusable Promptbooks

Smallest evidence-backed refinements to the relocated Promptbook guides under [khai-director/references/](../../../skills/khai-director/references/promptbook.md), grounded in [director-promptbook-note.md](../02-company/director-promptbook-note.md) and the four staged runs in [03-observations/README.md](../03-observations/README.md).

---

## 1. Keep the Ownership Split Between `khai-director` and `khai-playwright`

Relocating [promptbook.md](../../../skills/khai-director/references/promptbook.md) and its five `HACKS` chapters (`Human`, `Agent`, `Collaboration`, `Knowledge`, `System`) to `khai-director` while updating [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md#L25) and [choosing-material.md](../../../skills/khai-playwright/references/choosing-material.md#L14) validated cleanly:
- One Director-authored [promptbook.md](../02-company/promptbook.md) staged both [Frost Line at Glasshouse Three](../02-company/greenhouse-frost/play.md) (`2` Personas across `2` Places) and [Hold Three on the Ebb](../02-company/harbor-manifest/play.md) (`3` Personas inside `1` Place) across four runs without a single Play-specific clause.
- Both clean-room Playwrights reported ([playwright-a-note.md](../02-company/playwright-a-note.md#L20-L33), [playwright-b-note.md](../02-company/playwright-b-note.md#L16-L27)) that treating the Promptbook as an external reusable contract kept staging mechanics out of `play.md` and pushed world physics and role interdependence into `Process`, `Position`, `Piece`, and `Triggers` where they belong.

---

## 2. Minimal Proposed Refinements to `khai-director/references/`

1. **[agent.md](../../../skills/khai-director/references/agent.md) — distinguish the `Director` role from `Cast` performer roles:**
   - *Evidence:* [agent.md](../../../skills/khai-director/references/agent.md#L3) currently describes agents as one undifferentiated group (*"inhabit roles, speak, act, observe, narrate, or carry out the conditions"*). To prevent performers from self-narrating or leaking orchestration notes across four runs, [02-company/promptbook.md](../02-company/promptbook.md#L11-L12) had to split `## Agent` explicitly between the **Director** (framing Plots, isolating contexts, tracking `Triggers`, assessing `Plans`) and **Cast performers** (inhabiting one `Persona` through observable speech, silence, and action only) ([director-promptbook-note.md](../02-company/director-promptbook-note.md#L21-L22)).
   - *Smallest edit:*
     > `Define what the Director and cast agents each do. Say how the Director frames scenes, tracks Triggers, and assesses outcomes, and how performers inhabit roles through observable speech, silence, or action.`

2. **[collaboration.md](../../../skills/khai-director/references/collaboration.md) — cover silent-witness runs, broader `By a cue` triggers, and `Trigger`-driven Plot handoffs across cast sizes:**
   - *Evidence:*
     1. [collaboration.md](../../../skills/khai-director/references/collaboration.md#L8) narrows **By a cue** to *"waits for a process to reach its cue"*, whereas stage runs also cue turns on entrances and Plot `Triggers` ([director-promptbook-note.md](../02-company/director-promptbook-note.md#L23-L24), [03-harbor-a.md](../04-runs/03-harbor-a.md#L20)).
     2. In a `3`-Persona Play with sequential statutory sign-off gates, both runs of Plot 2 naturally required `7` single-beat turns rather than `4–6` ([03 L152](../04-runs/03-harbor-a.md#L152), [04 L142](../04-runs/04-harbor-b.md#L142)), showing that reusable Promptbooks should scale turn windows with cast size or subordinate turn targets to `Triggers`.
   - *Smallest edit:*
     - Add one sentence to the opening paragraph of [collaboration.md](../../../skills/khai-director/references/collaboration.md#L3):
       > `Include silent-witness runs where the human sets the framing and observes without intervening, and say how one Plot hands off to the next when a Trigger is met.`
     - Broaden **By a cue** ([collaboration.md](../../../skills/khai-director/references/collaboration.md#L8)):
       > `- **By a cue.** The next speaker responds when an entrance, Trigger, or process reaches its cue.`

3. **[knowledge.md](../../../skills/khai-director/references/knowledge.md) — name isolated performer contexts, inspection-timed `Place`/`Piece` gating, and read-only `Plan` assessment:**
   - *Evidence:* Keeping private `Plans`, unentered `Places`, and uninspected `Piece` `Yearbook` causes out of performer prompts—and assessing `Plans` in the run output without mutating `02-company/` files—proved load-bearing across all four runs ([director-promptbook-note.md](../02-company/director-promptbook-note.md#L27-L30), [01 L163](../04-runs/01-greenhouse-a.md#L163), [01 L168](../04-runs/01-greenhouse-a.md#L168), [02 L166](../04-runs/02-greenhouse-b.md#L166)).
   - *Smallest edit:*
     > `Say how information enters, moves through, and lands in the Play, including how performer contexts stay isolated from offstage or uninspected material. Specify who can use or reveal information, what counts as observable evidence, and where outcomes or Plan assessments are recorded without altering authored files.`

4. **[system.md](../../../skills/khai-director/references/system.md#L9) — clarify that an active `Pitch` still tunes pacing and focus at `0%` without altering authored facts or cues:**
   - *Evidence:* The clean-room Director noted ([director-promptbook-note.md](../02-company/director-promptbook-note.md#L25-L26)) a surface tension between [SKILL.md](../../../skills/khai-director/SKILL.md#L9) (*"Use any active Pitch to tune pacing, attention, and staging"*) and [system.md](../../../skills/khai-director/references/system.md#L9-L10) (reserving *"vary staging and timing"* for `50%`). Adding *"within the active Pitch"* to the `0%` bullet resolves that cleanly:
     > `- **0%** stages the Play as written. The Director uses the supplied roles, situation, cues, and active Pitch without altering authored facts or constraints. Performers make the choices the Play leaves open.`
