# Evolution: Promptbook Chapters

Proposed optimizations to `playmaking/opera/skills/` and the rehearsal setup, derived from [03-observations](../03-observations/README.md) and the staged outputs in [04-runs/](../04-runs/).

## Skill & Reference Optimizations

Every proposed improvement below traces directly to friction observed across the authoring and six staging runs:

1. **`khai-playwright/references/knowledge.md` — Keep shared Play sections free of partitioned secrets**
   - *Evidence:* In [Run 5](../04-runs/05-knowledge.md) and [Run 6](../04-runs/06-system.md), `Knowledge` instructed the Director to hand `*What Is Fixed at the Opening*` and `*What the Performers Can Decide*` to both role agents while keeping each sibling's secret private—yet the Playwright had named both secrets inside those shared sections of [play.md](../02-company/play.md), forcing Directors to redact lines manually.
   - *Proposed change:* Add one sentence to `references/knowledge.md`: *"When a Play keeps secrets or sealed text private to specific roles or the Director, keep shared sections of the Play free of those secret details so shared sections can be handed to the cast intact."*
2. **`khai-playwright/references/collaboration.md` — Cue precedence and transition speaker anchoring**
   - *Evidence:* [Run 4](../04-runs/04-collaboration.md), [Run 5](../04-runs/05-knowledge.md), and [Run 6](../04-runs/06-system.md) all hit two minor edge cases in `Collaboration`: (a) **Broken Seal** landing on Turn `N - 2` alongside **Warning Chime** had no stated ordering (unlike Turn `N`), and (b) **Notary's Bell Cue** anchored first Threshold speaker to *"whichever sibling did not speak Turn `N`"*, which misfires if **Early Resolution** triggers on Turn `< N`. Run 6 also noted ambiguity if Beat 2 of a two-beat act is answered with verbal permission rather than physical completion.
   - *Proposed change:* Guide the Playwright in `references/collaboration.md` to state cue order when conditional and scheduled cues coincide, and to anchor transition handoffs to *whoever spoke immediately before the cue* rather than a fixed turn number.
3. **`khai-playwright/references/promptbook.md` — Avoid forward-only cross-references without self-contained fallback**
   - *Evidence:* `Human` wrote `(see **System**)` for `PAUSE` or `CUT`, which [Run 2](../04-runs/02-human.md) and [Run 3](../04-runs/03-agent.md) flagged as a broken reference when `System` was absent, and even in full Promptbooks couples `Human` reading order to `System`.
   - *Proposed change:* Note in `references/promptbook.md` that each chapter should state its own responsibility cleanly without relying on undefined terms from later chapters.
4. **`khai-playwright/SKILL.md` — Backstory timeline and state-branch consistency check**
   - *Evidence:* [Run 1](../04-runs/01-play-only.md) and [Run 4](../04-runs/04-collaboration.md) caught a leftover draft number in Maren's profile (*"Twelve years ago, she stayed at the bench when Ivo left"* vs. *"six years"* everywhere else), and [Run 1](../04-runs/01-play-only.md)–[Run 3](../04-runs/03-agent.md) caught Beat 4 listing *"into a coat pocket"* alongside signing in Room 3 without distinguishing an *opened* sheet from an *unbroken* envelope barred by Clause 4.
   - *Proposed change:* Add a compact pre-return check in `khai-playwright/SKILL.md`: *"Check that timelines match across roles and that closing choices remain valid across every state the key prop can reach (such as opened, burned, or still sealed)."*
5. **`khai-director/SKILL.md` — Cast packet audit and single-turn lock for multi-agent runs**
   - *Evidence:* [Run 6](../04-runs/06-system.md)'s warm-up caught a subagent continuing past its turn after `send_message`, and [Run 5](../04-runs/05-knowledge.md)–[Run 6](../04-runs/06-system.md) caught secret leakage inside nominally shared Play sections before curtain-up.
   - *Proposed change:* Add one sentence in `khai-director/SKILL.md`: *"Verify that each performer's starting material excludes withheld secrets, and direct each performer to take one turn at a time and wait for the next cue."*

## Rehearsal Setup Optimization

6. **SCORE Rehearsal Folder Layout (`01-setup` · `02-company` · `03-observations` · `04-runs` · `05-evolution`)**
   - *Evidence:* Storing all six verbatim Director outputs inline inside a single `results.md` produced an 825-line (131 KB) file that obscured the comparative findings and required demoting every run's Markdown headings.
   - *Optimization applied here:* Organize each rehearsal from day one into five sequenced folders spelling **SCORE**—keeping authored company artifacts untouched in `02-company/`, each verbatim Director output untouched in `04-runs/`, empirical comparisons in `03-observations/`, and concrete next improvements here in `05-evolution/`.
