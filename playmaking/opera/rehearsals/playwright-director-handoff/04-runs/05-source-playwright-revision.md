# Run 05 — Source-Based Playwright Focused Revision (`handoff-revised/`)

- **Referral Brief:** [source-based/revision-brief.md](../02-company/source-based/revision-brief.md) (returning the Wave 2 cue conflict from failed Run `02` at [02-source-director/performance-run.md](02-source-director/performance-run.md#L77))
- **Preserved Baseline Handoff (`v1`, untouched):** [`02-company/source-based/handoff/`](../02-company/source-based/handoff/)
- **Revised Handoff (`v2`):** [`02-company/source-based/handoff-revised/`](../02-company/source-based/handoff-revised/) (`9` files revised, `8` files retained byte-identical; `17` files total)
- **Skill Under Test:** [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md#L38) (*"For a focused revision, update the requested material and any links or constraints the change affects"*)
- **Model & Clean-Room Context:** `handoff-playwright` subagent (`Model: "inherit"`, `conversationId: 064f6f33a39b945dcaa43bcd531286ed`), isolated clean-room `pw-rev`

---

## 1. Pre-Replay SHA-256 Manifest (`handoff-revised/`)

```text
195d595cfe1c611ad3fc74811b11b3f74b8ea5138943ca640c3eda3c7a46ffc4  inventory.md                  [revised]
d7e71f89c631c4b97e6968f233763f9722d5b9af35ff3874b5fd8fcf9dfc8e95  persona-country-mouse.md      [revised]
83eb0c70e5a4cce614eec1b23e4331fa3a448c214eb16c2a5731a8b1a0307ec4  persona-town-mouse.md         [unchanged]
f78cd1f6a6e5310b26f6eaa7b16e09ec534b5b16d8444fecc8d5b6b8c63cb83b  piece-basket-cheese.md        [unchanged]
0f977862ac7df7a97cb060829341427eda1f6d85b8bbafcb8463a4e3c5dc419f  piece-country-fare.md         [unchanged]
9baea4cb366f8d23be16c93a8313e1c1eda31859b7176a95f5b35a6677674937  pitch-fable-table.md          [unchanged]
951eba35246301403d0598de939df1de45fd4d3149095f1335b3ab75382d3f16  pitch-footstep-dread.md       [unchanged]
83f5a257c337601ed26e8ee4bca2a89ec7f80eb1cea08ce619e30075e8a1eed6  place-bare-plowlands.md       [unchanged]
0de3c6d69030114d645d5cdc6e8eba16f1c6df67fefb75f1af31a7b31252f52d  place-town-larder.md          [revised]
ae5f07faab6acd940568cec324c3d2226e82d9e05b3901a4bc03ec51b98838a9  plan-share-the-horn-of-plenty.md [unchanged]
53b096b616d5f0ed39b2f33af9a91dcfc10cb924607744870843a206986d11c0  play.md                       [revised]
059a232b5d66c8af9951f99017208bebce1747607d6e2ede9e92c262049bdc27  plot-01-bare-plowlands.md     [unchanged]
780c8ac9d49975b240ac3218a7ac1360240a4ecb1f5d97fbc0f94b2f6c28f2e5  plot-02-horn-of-plenty.md     [revised]
ab2e5a6d5df869a4cca695cd4a8b1e690b702599cfbbaefaaf5b16e2255de929  plot-03-second-footstep.md    [revised]
be1add0309260f1c04003c364e290b8e8383e3fd955503cc72d654f095948914  position-host.md              [revised]
285614024f6127ba4572c16393fbd509b2d518f21ade270a5ef4a9aef5752dcd  process-household-intrusion.md [revised]
bfde7b6249cf5fd0f4fe70446bb1c043b57e07457625dcb2d31ea67d34c3721d  sourcebook.md                 [revised]
```

---

## 2. Verbatim Playwright Focused-Revision Summary

````markdown
### Focused Revision Completed in `handoff-revised/`

Left `handoff/` completely untouched as the preserved v1 baseline and performed a focused revision strictly inside `handoff-revised/` (9 files updated; 8 unchanged files retained in `handoff-revised/`), grounded strictly in Project Gutenberg eBook `#21` (`../../sources/gutenberg-21-town-and-country-mouse.md`) with clean sibling relative Markdown links.

---

### Exact Files Updated in `handoff-revised/`

1. **`process-household-intrusion.md`** (`#initiated-by`, `#direction`, `#lever`, `#echo`)
   - **Sequential-turn trigger (`#initiated-by`):** Replaced the simultaneous two-mouse requirement (*"the instant **both** ... lower their heads to eat"*) with a condition observable on a single sequential cast turn: once both mice are out on the open floorboards beside the spread, the wave starts the instant **either** mouse lowers head or jaws to take a bite or taste (after the cheese is laid out and answered in Plot 2, and upon emerging to resume the meal in Plot 3), explicitly stating that simultaneous eating is not required when the host waits courteously beside the spread while the guest tastes first (and retaining the Plot 3 cupboard pass if the Country Mouse refuses outright to leave the hole).
   - **Single-hole cover geometry (`#direction`, `#echo`):** Replaced undefined *"out of exposed cover into deeper hiding"* with Wave 1 driving both mice off the boards to the cramped mouth of the single narrow wainscot squeeze-hole and Wave 2 driving them off the open spread (or back from the opening) all the way into the pitch-dark inner recess of that same narrow wainscot hole behind the skirting board, leaving the spread abandoned after at most an aborted first taste.

2. **`persona-country-mouse.md`** (`#projection`, `#action`)
   - **Eliminated symmetric *"you eat first"* deference (`#action`, `#projection`):** Scoped pushing the first pulled root across his own earth to when he holds `Host of the Repast` (`position-host.md`), and specified that when he is the invited guest he speaks plain thanks and lowers his jaws straight to an offered portion **without** waiting for the host to taste first.

3. **`position-host.md`** (`#orders`, `#loses`)
   - **Clarified host handoff & retreat (`#orders`, `#loses`):** Specified that the host sets the finest portion within reach and bids the guest begin before eating one's fill—joining in beside them once the guest bends to taste (`#orders`)—and narrowed `#loses` from *"eat ahead of the guest, or bolt first into narrow cover"* to *"snatch the first bite ahead of an unserved guest, or flee into narrow cover without exposing one's own home as meager or unsafe"* so sequential turn order never stalls eating or fleeing.

4. **`place-town-larder.md`** (`#shown`, `#holds`, `#withheld`)
   - **Aligned room cover with eBook `#21` (`#shown`, `#holds`, `#withheld`):** Explicitly defined the single narrow wainscot squeeze-hole (`S6`)—comprising both its splintered floor-level mouth (for peering out at the cheese) and its pitch-dark inner recess behind the skirting board—as the room's **sole** mouse hiding place across `S6` and `S7`, avoiding any ungrounded second hole or extra furniture.

5. **`plot-03-second-footstep.md`** (`#cue`, `#stage` steps `1–2`)
   - **Aligned `Famished in Cover` for `Staging limit: 0%`:** Positioned both mice at the cramped mouth of the single narrow wainscot hole at `Cue`; updated `Stage` step `1` so Wave 2 fires immediately once both mice venture onto the open floorboards beside the spread and **either** mouse lowers head or jaws to take a bite or taste; updated `Stage` step `2` so both bolt off the boards straight back into that single narrow wainscot squeeze-hole, jamming themselves past its opening into its pitch-dark inner recess behind the skirting board out of sight of the cupboard.

6. **`plot-02-horn-of-plenty.md`** (`#stage` step `3`)
   - **Aligned Wave 1 trigger:** Updated `Stage` step `3` to fire on the same single-turn condition (once steps `1–2` are complete and both mice sit openly beside the spread, the instant **either** mouse lowers head or jaws to take the first bite or taste) and send both squeaking to the mouth of the single narrow wainscot hole.

7. **`play.md`** (`#triggers` for Plot 2 and Plot 3)
   - **Synchronized Play-level handoffs:** Updated the Plot 2 end trigger and Plot 3 mid-Plot trigger to match `process-household-intrusion.md#initiated-by` (`either` mouse lowering head or jaws once both are openly beside the spread) and `place-town-larder.md` (driving both deep into the pitch-dark inner recess of the single narrow wainscot squeeze-hole on Wave 2).

8. **`sourcebook.md`** (`#line-of-work`, `#origin`, `#restrictions`, `#encoding`)
   - Linked `../revision-brief.md` in `#origin` and documented the `Staging limit: 0%` rationale and source grounding (`S6`–`S7`) for the single-turn bite trigger, asymmetric host/guest courtesy, and single narrow wainscot hole inner-recess hiding across `#line-of-work`, `#restrictions`, and `#encoding`.

9. **`inventory.md`** (`Edition, Scope, and Access Audit`, `S7`, `Authored KHAI Objects`, `Consolidated` rationale)
   - Aligned `S7`, the object entries for `plot-02-horn-of-plenty.md`, `plot-03-second-footstep.md`, `persona-country-mouse.md`, `position-host.md`, `place-town-larder.md`, and `process-household-intrusion.md`, and the consolidated narrow-hole rationale with the revised Play and Company files.
````
