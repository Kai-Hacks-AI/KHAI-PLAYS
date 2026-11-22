# Controls

## The station registry rejects KHAI PLAYS move names

- **Need** — List the delivery controls and see which apply at Rehearsal and Opening.
- **Revision** — [KAAL finder at `0f92f1a`](https://github.com/Kai-Hacks-AI/KAAL/blob/0f92f1a4fb977fc13794154ddbc5d37fb26bf080/packages/kaal-controls/skills/kaal-controls/scripts/find-controls.mjs).
- **Observed result** — In external mode, the same control declaration was valid with no `stations` field and with `stations: [Integrating:detective, Promoting:detective]`. The finder discovered the declaration with `stations: [Rehearsal:detective, Opening:detective]` but marked it invalid.
- **Impact** — KAAL can list our controls. Its station registry cannot answer “what runs at Rehearsal?” using that name.
- **How we work instead** — List controls with KAAL’s finder and name Rehearsal and Opening in the control descriptions. GitHub’s [rehearsal](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/rules/27847925) and [opening](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/rules/27846980) rulesets show where the required checks are enforced.
