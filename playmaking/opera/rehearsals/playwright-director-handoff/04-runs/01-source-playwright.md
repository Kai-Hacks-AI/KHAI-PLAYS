# Run 01 — Source-Based Playwright (`The Town Mouse and the Country Mouse`)

- **Case & Brief:** [source-based/playwright-brief.md](../02-company/source-based/playwright-brief.md)
- **Primary Source Snapshot:** [gutenberg-21-town-and-country-mouse.md](../02-company/sources/gutenberg-21-town-and-country-mouse.md) (`sha256: 9d4d358871c546487ef218e157a045cdd5d2cf464b22fc01ac8ab39a685b5d60`)
- **Skill Under Test:** [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md)
- **Model & Clean-Room Context:** `handoff-playwright` subagent (`Model: "inherit"`, `conversationId: d3d70c5b28138f4cf80727558c821997`), isolated clean-room `pw-source` ([protocol.md](../01-setup/protocol.md))
- **Delivered Handoff Directory:** [`02-company/source-based/handoff/`](../02-company/source-based/handoff/) (`17` files)

---

## 1. Pre-Composition Delivery Proof (Turn 1 → Turn 2)

At Turn 1 completion (`2026-11-25T19:57:09Z`), before Turn 2 composition began, `handoff/` contained **only** `inventory.md` and `sourcebook.md` (`0` Play, Plot, or Company files):

```text
7cb92c343726620712968a325125044148f72b67ff0a8935eaaa48d49aca8c6c  inventory.md
bc0abc6688fb261f9b47f28e062e1c3d5f802a5ec13a383659df6aa7c050d5b4  sourcebook.md
```

Both Turn 1 SHA-256 digests remained **byte-identical** after Turn 2 composed the 15 operational files (`play.md`, `plot-01..03`, and 11 Company object files):

```text
7cb92c343726620712968a325125044148f72b67ff0a8935eaaa48d49aca8c6c  inventory.md
0adf7173374c74f267cef9dc4801dea587d11db46ec53a8050c3081ba0500284  persona-country-mouse.md
83eb0c70e5a4cce614eec1b23e4331fa3a448c214eb16c2a5731a8b1a0307ec4  persona-town-mouse.md
f78cd1f6a6e5310b26f6eaa7b16e09ec534b5b16d8444fecc8d5b6b8c63cb83b  piece-basket-cheese.md
0f977862ac7df7a97cb060829341427eda1f6d85b8bbafcb8463a4e3c5dc419f  piece-country-fare.md
9baea4cb366f8d23be16c93a8313e1c1eda31859b7176a95f5b35a6677674937  pitch-fable-table.md
951eba35246301403d0598de939df1de45fd4d3149095f1335b3ab75382d3f16  pitch-footstep-dread.md
83f5a257c337601ed26e8ee4bca2a89ec7f80eb1cea08ce619e30075e8a1eed6  place-bare-plowlands.md
1ebaf2617c0d428a43c0da866b4e909ad8df2f0364a634d3e763d86a1f5455d7  place-town-larder.md
ae5f07faab6acd940568cec324c3d2226e82d9e05b3901a4bc03ec51b98838a9  plan-share-the-horn-of-plenty.md
81c831c44f57dd8ba107280524dd44c05490b1ff7a53db24325d5a13d05e149d  play.md
059a232b5d66c8af9951f99017208bebce1747607d6e2ede9e92c262049bdc27  plot-01-bare-plowlands.md
5ec1c1d546e48ada96450f807ccaa02fefda40371030f42162bca296a4a033aa  plot-02-horn-of-plenty.md
898005f0f818e6e97a6e79878ebc6c79953303e2b4014880a3c7403d886630ab  plot-03-second-footstep.md
25dbb4a7981d00810203b08cc4ae4a125f51db21a75e067ea349bf4646e0e8bf  position-host.md
12fbe08d575218bc50b5c2835d69e7e7b212be117648a325bc661fa3fb15677f  process-household-intrusion.md
bc0abc6688fb261f9b47f28e062e1c3d5f802a5ec13a383659df6aa7c050d5b4  sourcebook.md
```

---

## 2. Verbatim Playwright Turn Summaries

### Turn 1 Delivery (Inventory & Sourcebook First)

````markdown
Turn 1 deliverables for *The Town Mouse and the Country Mouse* (Project Gutenberg eBook `#21`, George Fyler Townsend translation) are complete and ready for review:

1. **Material Inventory:** `handoff/inventory.md`
   - Audits the pinned edition, scope (complete fable in Project Gutenberg eBook `#21`, noting the absence of a separate printed moral epigram in this edition), and access/verification record from `../../sources/gutenberg-21-town-and-country-mouse.md`.
   - Decomposes the complete fable into eight sequential clauses (`S1`–`S8`).
   - Maps the planned Turn 2 deliverables (`play.md`, three `plot-*.md` files, two `persona-*.md` files, transferable `position-host.md`, two `place-*.md` files, two focal `piece-*.md` files, `process-household-intrusion.md`, `plan-share-the-horn-of-plenty.md`, and two `pitch-*.md` files), distinguishing source-grounded facts from added/inferred playable details.
   - Documents unused, consolidated, and excluded possibilities (e.g., keeping the two unseen human intruders offstage inside `process-household-intrusion.md` rather than casting them as Personas; consolidating the six secondary town provisions and the narrow wainscot squeeze-hole inside `place-town-larder.md` around focal `piece-basket-cheese.md`; omitting a pre-set Country Mouse return Plan so persuasion and departure remain live performer choices; excluding non-eBook-`#21` predators/morals).

2. **Sourcebook:** `handoff/sourcebook.md`
   - Follows the four-chapter Sourcebook specification (`Line of Work`, `Origin`, `Restrictions`, `Encoding`), connecting every planned KHAI object and section to verbatim source passages (`S1`–`S8`) in `../../sources/gutenberg-21-town-and-country-mouse.md` and recording the boundaries for rehearsal and future staging.

No `play.md`, `plot-*.md`, or individual Company object files have been written yet. Ready for your review and go-ahead for Turn 2 composition.
````

### Turn 2 Delivery (Play, Plots & Linked Company Files)

````markdown
Turn 2 composition is complete. All 17 linked deliverables for *The Town Mouse and the Country Mouse* (Project Gutenberg eBook `#21`, George Fyler Townsend translation) are in `handoff/`, with clean relative Markdown links across `handoff/`, `../playwright-brief.md`, and `../../sources/gutenberg-21-town-and-country-mouse.md`:

- [inventory.md](../02-company/source-based/handoff/inventory.md)
- [sourcebook.md](../02-company/source-based/handoff/sourcebook.md)
- [play.md](../02-company/source-based/handoff/play.md)
- [plot-01-bare-plowlands.md](../02-company/source-based/handoff/plot-01-bare-plowlands.md)
- [plot-02-horn-of-plenty.md](../02-company/source-based/handoff/plot-02-horn-of-plenty.md)
- [plot-03-second-footstep.md](../02-company/source-based/handoff/plot-03-second-footstep.md)
- [persona-country-mouse.md](../02-company/source-based/handoff/persona-country-mouse.md)
- [persona-town-mouse.md](../02-company/source-based/handoff/persona-town-mouse.md)
- [position-host.md](../02-company/source-based/handoff/position-host.md)
- [place-bare-plowlands.md](../02-company/source-based/handoff/place-bare-plowlands.md)
- [place-town-larder.md](../02-company/source-based/handoff/place-town-larder.md)
- [piece-country-fare.md](../02-company/source-based/handoff/piece-country-fare.md)
- [piece-basket-cheese.md](../02-company/source-based/handoff/piece-basket-cheese.md)
- [process-household-intrusion.md](../02-company/source-based/handoff/process-household-intrusion.md)
- [plan-share-the-horn-of-plenty.md](../02-company/source-based/handoff/plan-share-the-horn-of-plenty.md)
- [pitch-fable-table.md](../02-company/source-based/handoff/pitch-fable-table.md)
- [pitch-footstep-dread.md](../02-company/source-based/handoff/pitch-footstep-dread.md)
````
