# Fixture, Input Variants, and Pinned Source Refs — *The Giant’s Shoe* (Three-Plot Mixed Pitch)

Locked before staging at branch tip `bdbcb93f6fb4c7b37b6e56d4528d04ba3c124587` (`opera-standard-pitches`, incorporating merged PR #16 baseline `359ea3e`). The original one-scene [Giant’s Shoe fixture](../../pitch/02-company/README.md) and its four run records remain untouched.

---

## 1. Shared Promptbook & Two Three-Plot Variants

- **Shared Director-Owned Promptbook:** [promptbook.md](promptbook.md) (`Staging limit: 0%` under `## System`; instructs the Director to follow the Play’s default and Plot-level Pitch links across Plot boundaries and supply each isolated performer context only with the currently active Pitch).
- **Condition A (`variant-a/` — Play-wide default throughout):** [variant-a/play.md](variant-a/play.md) sets [Dry Comedy](variant-a/pitch-dry-comedy.md) (`comic` [standard Tenor](../../../skills/khai-playwright/references/pitch-defaults.md)) as the Play-wide default; [Plot 1](variant-a/plot-1-strained-crossing.md), [Plot 2](variant-a/plot-2-question-and-response.md), and [Plot 3](variant-a/plot-3-immediate-consequence.md) all inherit that default.
- **Condition B (`variant-b/` — Middle-Plot override + return to default):** [variant-b/play.md](variant-b/play.md), [Plot 1](variant-b/plot-1-strained-crossing.md), and [Plot 3](variant-b/plot-3-immediate-consequence.md) are byte-for-byte identical to `variant-a/`; [Plot 2](variant-b/plot-2-question-and-response.md) links [Quiet Wonder](variant-b/pitch-quiet-wonder.md) (`wondrous` [standard Tenor](../../../skills/khai-playwright/references/pitch-defaults.md)) for that scene alone before Plot 3 returns to `Dry Comedy`.

Verified `diff -ruU 0 variant-a variant-b` across all ten files in each variant folder:

```diff
--- variant-a/plot-2-question-and-response.md
+++ variant-b/plot-2-question-and-response.md
@@ -5 +5 @@
-Middle Plot of [The Giant’s Shoe](play.md) (inherits the Play’s default Pitch).
+Middle Plot of [The Giant’s Shoe](play.md), tuned for this scene by [Quiet Wonder](pitch-quiet-wonder.md).
```

---

## 2. Pinned Skill & Fixture SHA-256 Hashes (`bdbcb93f6fb4c7b37b6e56d4528d04ba3c124587`)

| Scope | File | SHA-256 |
| --- | --- | --- |
| **Updated `TO TUNE` Guide** | [pitch.md](../../../skills/khai-playwright/references/pitch.md) | `a5090a2837dcb155a3e8fb7746293a912175e81952eeda4f07918f53cd3e751b` |
| **New Standard Tenors** | [pitch-defaults.md](../../../skills/khai-playwright/references/pitch-defaults.md) | `6d6e7e761d48b272c209615c03a3963eae18ea291f4d97c53276feffb972143e` |
| **Director Skill** | [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md) | `6495fc8a59ef5f9f357f08b53755bd92c5d2fa30c18be2c7ef6d0927b4893a52` |
| **Shared Promptbook** | [promptbook.md](promptbook.md) | `748bd018782c098e6e622ac088a274317648c55746aff635d906c990d824a48b` |
| **Play (`A` & `B`)** | [variant-a/play.md](variant-a/play.md) · [variant-b/play.md](variant-b/play.md) | `5a891b318984d780220f22edbcd5609e501bb3798ea55bd27802c1bb7548871c` |
| **Plot 1 (`A` & `B`)** | [variant-a/plot-1-strained-crossing.md](variant-a/plot-1-strained-crossing.md) · [variant-b/plot-1-strained-crossing.md](variant-b/plot-1-strained-crossing.md) | `35117f61139e75662f1fc62285cf44a5bde7d30909fdceb01cab7e3e82a0a0cd` |
| **Plot 2 (`A` — Inherit)** | [variant-a/plot-2-question-and-response.md](variant-a/plot-2-question-and-response.md) | `7d7d65ad57ebfa0e41a7211c5c994b7a050169eff49bcc709eb580388af4fd3e` |
| **Plot 2 (`B` — Wonder)** | [variant-b/plot-2-question-and-response.md](variant-b/plot-2-question-and-response.md) | `42536112b911f521a8cb019a55ab7ca0b1dfc7f73a5126a7fb3c10a6bbd8a5f8` |
| **Plot 3 (`A` & `B`)** | [variant-a/plot-3-immediate-consequence.md](variant-a/plot-3-immediate-consequence.md) · [variant-b/plot-3-immediate-consequence.md](variant-b/plot-3-immediate-consequence.md) | `703c55c2c442351bb73f73b5baf90bf28c84789a1995ed10623238d67e6e52e5` |
| **Personas (Unchanged)** | [persona-toe-carrier.md](variant-a/persona-toe-carrier.md) / [persona-heel-carrier.md](variant-a/persona-heel-carrier.md) | `5c3823882878b42194f1b5422f000e93364a2b4b160548e4d6b6a4f8243a9287` / `dc868df27b9632ae1f23848a14f6884211db9643eac124cac54fdadd539375f1` |
| **Place & Piece (Unchanged)** | [place-square.md](variant-a/place-square.md) / [piece-shoe.md](variant-a/piece-shoe.md) | `a871736f1612a045920f0e74cdac4064032467b4aff7d0bb1fe210875bec6668` / `8d017ab605340da648c29ac8a64b70f3bec24f7d27d2a65215b09014194017f7` |
| **Pitch Cards (Unchanged)** | [pitch-dry-comedy.md](variant-a/pitch-dry-comedy.md) / [pitch-quiet-wonder.md](variant-a/pitch-quiet-wonder.md) | `4b92d38bb49a39d32b9c34d338a86a7802415071d86bafe6b7a2905d45a5f21f` / `c519cc1e86fd695054fb2f9312e19b02e5b000f6d83e73a9c21d912ceb88c4a8` |
