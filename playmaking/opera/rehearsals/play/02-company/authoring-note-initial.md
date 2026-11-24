# Clean-Room Authoring Note — *Low Water at Lock Four* (`v1-initial`)

## 1. Reference Selection

### Chosen References
- **`references/play.md`** — Needed to author `ENACTS.md`, the Play entry point tying both evening scenes, the Company, triggers, and stakes into a single telling under `KHAI-PLAYS`.
- **`references/promptbook.md`** and its five linked chapter references (**`human.md`**, **`agent.md`**, **`collaboration.md`**, **`knowledge.md`**, **`system.md`**) — Required by `SKILL.md` alongside `ENACTS.md` for a whole Play, and essential here to encode the brief's performance constraints (roughly 4–5 cast turns per part, spare working-waterway register, Director handling of the 20-minute physical aftermath and incoming phone cue, and keeping choices genuinely open in both parts).
- **`references/plot.md`** — Used twice (`plot-1-dusk-on-the-lock-wall.md` and `plot-2-the-dusk-gauge-call.md`) to set each part's distinct starting pressure, physical staging, fixed event sequence, and private tension while leaving outcomes open.
- **`references/persona.md`** — Used twice (`persona-lena.md` and `persona-bram.md`) to give the two cast members playable projections, cueing actions, private shadows, and involuntary physical tells.
- **`references/place.md`** — Used twice (`place-lock-wall.md` and `place-lock-house.md`) because both settings actively constrain what the cast can do: water margin and gate leverage on the dusk coping in Part 1, and zero-privacy earshot between wall phone and desk ledger in the eight-foot watch room in Part 2.
- **`references/piece.md`** — Used four times (`piece-intake-gauge.md`, `piece-orchard-barge.md`, `piece-wall-phone.md`, `piece-lock-ledger.md`) for the four objects that carry physical or evidentiary load in the brief.
- **`references/process.md`** — Used twice (`process-chamber-draw.md` and `process-dusk-gauge-call.md`) to model the two condition-triggered world changes around which the cast acts: drawing water from the thin upper pound into the chamber (or leaving the process idle) and the night water-bailiff's dusk telephone check.
- **`references/plan.md`** — Used twice (`plan-hold-the-intake-mark.md` and `plan-make-the-morning-market.md`) to formalize Lena's and Bram's competing courses of action and open `[ ]` targets across both parts.
- **`references/pitch.md`** — Used once (`pitch-working-waterway-realism.md`) to lock in the brief's explicit tonal instruction ("taut, spare working-waterway realism across both parts").

### Unused Reference
- **`references/position.md`** — Intentionally left unread and unused. `SKILL.md` specifies `Position · TO HOLD` for "Defining a role that different Personas could hold" (or a role temporarily assigned by a Process). Lena and Bram hold fixed, non-interchangeable working posts throughout both parts of the Play, so separate Position files would only duplicate their Personas.

---

## 2. Ambiguities, Overlaps, and Friction Noticed

1. **Filenames, H1 titles, and frontmatter scope are underspecified.**
   - `SKILL.md` refers to "The ENACTS document" and "the separate Promptbook" and requires giving each new object its own Markdown document, while only `play.md` mentions YAML frontmatter (`title`, one-sentence `description`, optional `voice`). None of the references specify file-naming conventions (flat vs. subfolder per type, `ENACTS.md` vs. title slug) or whether an object file's H1 should be `# <Instance Name>`, `# <Type> — <VERB>` (as in the reference headers), or both. Combining `# <Instance Name> — <VERB>` in flat kebab-case files resolved this cleanly.
2. **Off-stage/environmental voices sit awkwardly between `Persona`, `Process`, and `Promptbook`.**
   - Part 2 requires the night water-bailiff calling on the wall phone inside a brisk two-hander ("around 4–5 cast turns per part"). Creating a third `Persona` (with `Shadow` and visible `Tell`) for a voice on a telephone wire would distort the cast and eat turn budget, yet neither `plot.md`, `process.md`, nor `promptbook.md` explicitly explains how to stage brief off-stage callers. Modeling the call via `Process` + `Piece` and instructing the Director in `PROMPTBOOK.md` (`## Agent`) to supply the terse incoming prompt worked well, and explicit guidance for off-stage cues would prevent over-casting.
3. **Overlap among `Play (## Triggers)`, `Plot (## Cue / ## Stage)`, and `Promptbook (## Collaboration / ## Knowledge)`.**
   - Opening baselines, scene-ending triggers, and inter-scene state handoffs are asked for in three separate places: `play.md` (`## Triggers`), `plot.md` (`## Cue` and `## Stage`), and `promptbook.md` (`## Collaboration` and `## Knowledge`). Avoiding pure repetition required dividing labor deliberately: arc-level handoff in `ENACTS.md`, immediate spatial staging in each `Plot`, and turn-budget plus three-branch physical state resolution in `PROMPTBOOK.md`.
4. **`## Owner` and `## Taxonomy` shift meaning across templates.**
   - Six object templates define `## Owner` as "Name the project responsible for this <Object>" (`KHAI-PLAYS`), whereas `plan.md` defines `## Owner` as "Name what the Plan is for and link it if it has a file" (the pursuing Persona/Play), and `play.md` uses `## Estate`. Likewise, `## Taxonomy` shifts from parent story (`Plot`), to filled role (`Persona`), containing area (`Place`), kit/group (`Piece`), parent process (`Process`), and functional kind (`Plan`). Including both the linked Persona/Play and `(KHAI-PLAYS)` in `Plan` avoided ambiguity.
5. **Static fields (`Persona ## Action`, `Piece ## Place`) vs. multi-Plot movement and open branches.**
   - `persona.md` asks for "one deliberate move" (`## Action`) across a Play that shifts from an outdoor lock wall to an indoor desk, and `piece.md` asks "where the Piece is now" (`## Place`) even when Part 1's open choice determines where Bram's barge sits in Part 2. Both fields had to be phrased to cover the outdoor/indoor pair and the three open Part 1 outcomes without prejudging the cast's Part 1 decision.
6. **Two-hop discovery in `promptbook.md` and unexplained `HACKS` shorthand.**
   - `SKILL.md` links `promptbook.md` without surfacing its five child files (`human.md`, `agent.md`, `collaboration.md`, `knowledge.md`, `system.md`), and `promptbook.md` refers to "a HACKS chapter" without explicitly noting that `H-A-C-K-S` is the acronym of those five headings.
7. **Preserving reusable `[ ]` targets in `Plan` files.**
   - `plan.md` says to start targets at `[ ]` and "then record its verdict from what happens." For a fixed Play meant to be staged repeatedly, mutating the authored Plan file directly would spoil clean re-runs; `PROMPTBOOK.md` (`## System`) therefore directs the Director to record target verdicts in run notes while keeping the authored Plan files at `[ ]`.
