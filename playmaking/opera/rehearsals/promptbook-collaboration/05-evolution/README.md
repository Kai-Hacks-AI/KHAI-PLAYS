# Evolution: Promptbook authoring and direction

## Playwright and HACKS templates

Comparing the two fresh authoring passes shows directly what helps the Playwright move from a desired effect to a short set of conditions:

1. **Goal-first selection and the five-job filter (`references/promptbook.md`):**
   Before the five-job HACKS table was added to [01-setup/README.md](../01-setup/README.md), the [five-chapter pass](../02-company/five-chapter/authoring-note.md) (`bd33f6e`) filled every chapter; once `a0cc75f` stated each chapter's job alongside the goal, the [two-chapter pass](../02-company/two-chapter/authoring-note.md) selected only `Human` and `Collaboration` and explained why `Agent`, `Knowledge`, and `System` could stay empty because the Company and spectator cue already carried those jobs. Make both steps part of the reusable [Promptbook guide](../../../skills/khai-playwright/references/promptbook.md):

   > Write only the conditions this Play needs to achieve the Human's intended effect. Leave a chapter empty when the Play, Company, or another rule already carries its job.

   Both passes also showed that the `Human` (and in `bd33f6e`, `System`) spectator/Play-Mode clauses overlapped with Empty Baseline when Human participation was held fixed; preserve the authored results and test mid-play intervention in a separate matched probe before deciding whether to cut a boundary rule.

2. **Threshold-bound resistance rather than unconditional refusal (`references/agent.md`):**
   In the [five-chapter observations](../03-observations/README.md), `Knowledge` (*withhold private memory until another move threatens to cost them the painting*) compressed early exposition cleanly and still allowed earned Scene 2 settlements ([09-knowledge-a](../04-runs/five-chapter/09-knowledge-a.md), [10-knowledge-b](../04-runs/five-chapter/10-knowledge-b.md)), whereas `Agent` (*meeting any attempt to settle... with a fresh claim, deflection, or block*) prevented Scene 2 from resting even after every private stake was on the table ([05-agent-a](../04-runs/five-chapter/05-agent-a.md), [06-agent-b](../04-runs/five-chapter/06-agent-b.md), [13-combined-a](../04-runs/five-chapter/13-combined-a.md), [14-combined-b](../04-runs/five-chapter/14-combined-b.md)). When the next desired effect asks to keep an exchange moving without forcing a permanent stalemate, tie an `Agent` resistance rule to an unfulfilled condition (for example, blocking quick compromise *while a Persona's stake remains unspoken*) rather than barring settlement unconditionally.

3. **Cue authority under isolated briefs (`references/collaboration.md`):**
   In [references/collaboration.md](../../../skills/khai-playwright/references/collaboration.md), *“The persona most affected by what just happened responds”* worked across both passes, while the five-chapter clause *“passing play directly from sibling to sibling”* collided with performer isolation because no sibling can see another's hidden Shadow or private memory ([07-collaboration-a](../04-runs/five-chapter/07-collaboration-a.md), [08-collaboration-b](../04-runs/five-chapter/08-collaboration-b.md), [14-combined-b](../04-runs/five-chapter/14-combined-b.md)). Add one clarifying line to `references/collaboration.md` so the Playwright does not assign cross-brief cueing to isolated performers:

   > When Personas hold private briefs, the Director cues who is most affected unless the handoff depends only on what was just said or done aloud.

## Director

All twenty-two Directors staged the cut to *The entrance*, kept open external pressures (the entry buzzer, the idling car, and any blind paper-strip draw) coherent from outside the fiction, and carried unresolved claims across the cut without forcing an outcome. Make that continuity responsibility explicit in [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md) while keeping the Director outside the fiction:

> Carry forward what the Personas have established, including what they have left unresolved.

Both Collaboration sentences leave room to decide which Persona is most affected and when a scene rests. Keep those judgments—along with adjudicating shared physical state across isolated performers—with the Director. The [observations](../03-observations/README.md) show why a fixed speaker rotation would miss the two-person volleys and claim-revisits we wanted to learn about.
