# Rehearsal Setup: TO PLAY Piece

## Target Under Test

- **Pull Request:** [KHAI PLAYS PR #13](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/13) (`opera-piece` → `repertoire/playmaking.opera`)
- **Commit Tested:** `10c404985250437f64f7662e31d6937d271520c2` (*Add the TO PLAY Piece template*)
- **Skills Under Test:**
  - `playmaking/opera/skills/khai-playwright/SKILL.md`
  - `playmaking/opera/skills/khai-playwright/references/piece.md` *(TO PLAY: Taxonomy, Owner, Place, Load Bearing, Apparent, Yearbook)*
  - `playmaking/opera/skills/khai-director/SKILL.md`
- **Grounding Material:** [Persona rehearsal](../../persona/) (*After Handover* — [play.md](../../persona/02-company/play.md), [promptbook.md](../../persona/02-company/promptbook.md), and [persona-maren-solis.md](../../persona/02-company/persona-maren-solis.md))

---

## Authoring Setup (`02-company/`)

- **Skill installation:** `khai-playwright` (including `references/piece.md`) and `khai-director` from `10c404985250437f64f7662e31d6937d271520c2` were installed in `.agents/skills/` and registered in the runtime skill table (`~/.gemini/skills/`).
- **Brief:**
  > *"Author the Second’s key ring from After Handover as one short Piece. Use the existing Play and Persona rehearsal under `playmaking/opera/rehearsals/persona/` to ground its history."*
- **Clarification requested before drafting:** Triggered directly by `references/piece.md` (`Place`: *"Say where the Piece is now"* and `Yearbook`), the Playwright paused once to ask which timeline anchor `"now"` referred to across the Persona rehearsal's branching history (post-Friday on Maren's belt, post-Friday on Jude's Second's belt, or Scene 1 when set on the office table). We answered to anchor at the Scene 1 moment when the Second puts the key ring within reach on the office table twenty minutes after walkthrough so it could be staged live from that beat.
- **Output:** Saved verbatim as [piece-second-key-ring.md](../02-company/piece-second-key-ring.md).

---

## Paired Staging Setup (`04-runs/`)

Both runs use fresh, blind `khai-director` subagents (`Model: inherit`) with **identical** cast, opening facts, Promptbook, and verbatim Opening Cue—differing **only** in whether [piece-second-key-ring.md](../02-company/piece-second-key-ring.md) is supplied to the Director and cast:

- **Fixed Cast:** **Maren Solis** ([persona-maren-solis.md](../../persona/02-company/persona-maren-solis.md)) as `House Lead` and `The Second` (Scene 1 of [play.md](../../persona/02-company/play.md)).
- **Fixed Promptbook:** [promptbook.md](../../persona/02-company/promptbook.md) (`Turn 1 House Lead → Turn 2 The Second → Turn 3 House Lead → Hard cut`).
- **Fixed Opening Facts & Verbatim Opening Cue (starting at the moment the Second puts the keys within reach):**
  - Walk-in facts already on the table: the inspector left twenty minutes ago leaving a thirty-day provisional citation on the office table; noon intake is under two hours away with no third staffer on the roster; `House Lead` must leave before noon for the downtown property-trust closing; `The Second` has just stepped in dry-coated with the night-watch binder and clipped receipts, admitted shutting their phone off at dawn to pay half of an overdue personal debt six blocks over so a collector wouldn't show up during walkthrough, and warned the collector gave them until 5:00 p.m. today for the other half.
  - **Verbatim Opening Cue:**
    > *Setting the night-watch binder beside the thirty-day provisional citation, your Second opens their other hand and sets the second set of house keys down on the office table within reach between you: “Every log and receipt licensing asked for is inside that cover, and I don't make five o'clock's balance without my hours here. Slide those keys back across the wood and I'll clear the citation and hold noon intake through handover—or take the ring off the table right now and I'll clear out while you still have an hour before you head downtown.”*
- **Two Isolated Runs:**
  1. [01-without-piece.md](../04-runs/01-without-piece.md) — Play, Promptbook, and Maren Solis Persona only *(no Piece file)*.
  2. [02-with-piece.md](../04-runs/02-with-piece.md) — Identical packet **plus** [piece-second-key-ring.md](../02-company/piece-second-key-ring.md) given to the Director and both cast contexts.

---

## Pre-Staging Expectation (Written Before Staging)

- **Without the Piece (`01-without-piece.md`):** `"the second set of house keys"` is an undifferentiated token of trust/employment; Maren and `The Second` will play an all-or-nothing keep-vs-confiscate exchange around authority and shift coverage.
- **With the Piece (`02-with-piece.md`):** Giving the Director and cast [piece-second-key-ring.md](../02-company/piece-second-key-ring.md) introduces `Apparent` (*tarnished brass split ring on a belt clip holding separate duplicate keys for the **front lock, side door, and office** plus a brass tag stamped **2**, still warm from a closed hand*), `Load Bearing` (*no deputy can unlock, secure, or relieve the doors while House Lead is downtown or off watch—collapsing freeze-night coverage onto one belt*), and `Yearbook` (*six-month personal guarantee over board hesitation*). We expect Run 2 to play the physical anatomy and operational mechanics of the keys (such as splitting the `office` key from the door keys, invoking tag `2` / the belt clip, or pressing the exact door-lock consequence of holding noon intake without exterior keys) rather than treating the ring as a generic prop.
