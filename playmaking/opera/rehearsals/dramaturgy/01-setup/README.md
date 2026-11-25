# SCORE rehearsal plan — Dramaturgy and Patterns

Can the [Dramaturgy reference](../../../references/dramaturgy.md) help a Playwright turn a Pattern’s requirements into authored material that a fresh Director can stage? Can the Director locate a missing requirement from the Play and its linked material?

## Cases and pinned research

| Case | Authoring brief | Pinned Pattern inputs |
| --- | --- | --- |
| Gender | In a harbor office, a visiting captain seeks a clearance decision. Author how the room reads each Persona before they speak, and make that reading visible in the opening beat. Give one Persona a concealed reading in Shadow and leave each performer’s response open. | [Authoring guidance](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/engines/gender/playwright_instructions.md), [legacy Sourcebook](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/engines/gender/REFERENCES.md), and the Position anchor and expressions linked from the [Gender package](https://github.com/ChBrain/khai/tree/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/engines/gender). |
| Clime | A market hall floods during an unusually heavy rain. The people inside must decide whether to reopen tomorrow. Give them the current conditions and the standing regime the hall was built for. Leave them free to disagree about what this event means. | [Authoring guidance](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/composites/clime/playwright_instructions.md), [legacy Sourcebook](https://github.com/ChBrain/khai/blob/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages/composites/clime/REFERENCES.md), and [Clime, Weather, and Climate package files](https://github.com/ChBrain/khai/tree/c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00/packages). |

Use the legacy Sourcebooks as the record of what the Pattern authors drew on. Name the underlying work and passage if the fixture gives one, and record whether anyone inspected it directly. Keep an attributed research claim distinct from the Pattern author’s adaptation. For Clime, trace a claim about the **relationship** between the current load and the standing regime.

## Author and stage

1. Pin the PR revision, skills, inputs, briefs, model settings, and turn budget before execution. Give a fresh Playwright each case brief, Dramaturgy, the Playwright skill, and the relevant pinned Pattern inputs. Ask them to return the authored Play plus one explicit trace: **source claim → Pattern requirement → authored file and section → expected observable beat**. Record the author’s rationale separately from the operational staging material.
2. For each authored Play, retain a complete copy and make a second copy with one requirement removed. For Gender, remove one Persona’s Projection link to their gender expression. For Clime, remove the authored standing-regime information for the Place. Check that the missing information cannot be recovered elsewhere in the supplied Play. Preserve the rest of the input, and record the exact deletion. If the complete copy lacks the requirement already, record the authoring gap and obtain a complete version before running that pair.
3. Use a fresh Director and isolated performers for each variant, four staged attempts total. Within a pair, hold the Director skill, starting brief, Promptbook at `0%`, linked Pattern material, and turn budget fixed. Start the Director at the Play and ask them to stage its authored opening or identify what prevents staging. Keep the authoring conversation, expected trace, and identity of the missing requirement out of staging contexts. Record whether and where each Director identifies a gap, and whether they invent a replacement or stage around it.

## Evaluate

- **Source-to-stage trace:** Check the named source and evidence limit, the requirement against the pinned Pattern, the authored choice against the Play, and the predicted beat against the transcript. A successful beat is evidence about staging the adaptation.
- **Clime composition:** Check that the opening makes today’s rain meaningful against the hall’s standing regime. A performer may draw a stronger inference. Record it as a claim and check whether the Director treats it as established.
- **Missing requirement:** Compare each complete and reduced case. Record whether the Director identifies the missing section and leaves its resolution to the Playwright. Check performer agency in every staged opening.

Save pinned briefs, source records, and authored copies under `02-company/`; exact variant diffs and stage transcripts under `04-runs/`; trace checks under `03-observations/`; and the smallest supported refinement under `05-evolution/`. Scope conclusions to these cases. Use the pinned fixtures for this rehearsal. Repo-wide research lookup is covered by #30.
