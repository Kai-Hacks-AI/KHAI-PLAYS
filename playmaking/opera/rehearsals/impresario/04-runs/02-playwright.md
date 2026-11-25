## How Borrowed Material Was Located

1. Starting from the House link in `playwright-brief.md` (`harbor-house/house.md`), I read **Harbor House**, which specifies linking `harbor-house/house.md` under `Estate` and points to its declared collections in `harbor-house/repertoire.md`.
2. In `harbor-house/repertoire.md` (**Harbor House Repertoire**), two external lenders declare a Process named `Inspection`:
   - **Harbor Office** — `harbor-office/inspection.md` (pinned revision `da3de5361f2f264105e5cfcb54373b6192a0b16d`), for checking a vessel’s seal against the manifest at the quay.
   - **Shipowners’ Guild** — `shipowners-guild/inspection.md` (pinned revision `da3de5361f2f264105e5cfcb54373b6192a0b16d`), for a shipboard check before arrival.
3. Following the brief’s instruction to use **Harbor Office’s Inspection** and the Repertoire’s governance rule for shared names, the Play borrows `harbor-office/inspection.md` (`../harbor-office/inspection.md` from `before-the-tide/`), names **Harbor Office** explicitly as lender and owner in `Company`, and leaves `harbor-office/inspection.md` untouched under Harbor Office ownership. Because neither declared collection supplies a damaged-seal Piece, the specific seal is authored locally as `before-the-tide/damaged-seal.md`.

---

## Authored Files Under `02-company/`

### `before-the-tide/play.md`

```markdown
---
title: Before the Tide
description: A visiting captain presents a cracked hatch seal to a Harbor Office boarding officer at the quay minutes before the ebb tide turns.
---

# Before the Tide

## Estate

[Harbor House](../harbor-house/house.md) is the House responsible for this Play.

## Name

Before the Tide

## Arc

Across the final twenty minutes of slack water at the Outer Quay, a routine arrival check narrows into a choice over what enters the permanent harbor record before the departure window closes.

1. [Presenting the Seal](presenting-the-seal.md) puts the outward manifest and the [Cracked Hatch Seal](damaged-seal.md) between the Visiting Captain and the Boarding Officer, testing whether the officer relies on a surface comparison or exercises the direct-inspection lever of Harbor Office’s [Inspection](../harbor-office/inspection.md) while slack water runs down.
2. [Closing the Record](closing-the-record.md) forces both performers to confront what enters the Harbor Office ledger—preserving what was observed and what remains unresolved—before the tide turns and strands the vessel at the berth.

Their order matters: [Presenting the Seal](presenting-the-seal.md) fixes what both people have actually handled, seen, or left unexamined on the [Cracked Hatch Seal](damaged-seal.md) before either must commit to written words or forfeit the tide in [Closing the Record](closing-the-record.md).

## Company

- **Personas:**
  - **Visiting Captain (Captain Maren Holt, master of the coastal trader *Kestrel*):** Enters carrying the signed outward manifest and the [Cracked Hatch Seal](damaged-seal.md). She wants quay clearance completed in time to cast off on the ebb tide without leaving an entry that reads like cargo tampering. At the start of the Play, she already knows the seal is split, though her recollection of how much came from yesterday’s squall versus a dockside pinch thirty minutes before arrival is uncertain.
  - **Boarding Officer (Officer Tomás Venn, on quay duty):** Holds the Harbor Office quay ledger and chalk marker at the Outer Quay table. He needs an accurate, defensible discrepancy entry under his signature before the *Kestrel* clears or holds fast. At the start of the Play, he knows Harbor Office’s [Inspection](../harbor-office/inspection.md) procedure; he learns that the seal is damaged when the Captain presents it in [Presenting the Seal](presenting-the-seal.md), and he can learn the finer contrast inside the break only if the Captain shows it openly or he asks to inspect the [Cracked Hatch Seal](damaged-seal.md) directly.
- **Pieces:**
  - **[Cracked Hatch Seal](damaged-seal.md)** (local Piece, owned by [Harbor House](../harbor-house/house.md) for *Before the Tide*): The *Kestrel*’s stamped lead main-hatch seal (`HO-418`), carried onto the quay by the Visiting Captain. Its outward split is visible as soon as it is presented; the bright inner pinch beside the salt-darkened break becomes apparent on close handling.
  - **Unauthored supporting items in play:** The *Kestrel*’s outward manifest (carried by the Visiting Captain) and the Harbor Office quay ledger (kept on the Outer Quay table by the Boarding Officer).
- **Processes (Borrowed):**
  - **[Inspection](../harbor-office/inspection.md)** — borrowed from **Harbor Office** via the [Harbor House Repertoire](../harbor-house/repertoire.md) (pinned revision `da3de5361f2f264105e5cfcb54373b6192a0b16d`), explicitly selecting Harbor Office’s quay-side `Inspection` rather than Shipowners’ Guild’s shipboard `Inspection`. **Harbor Office** retains ownership of this Process. Both Personas know its rules when the Play begins.
- **Place, Positions, and Plans:**
  - **The Outer Quay** (unauthored Place): The stone inspection table at the foot of the *Kestrel*’s gangplank within earshot of the harbor tide bell. No separate Position or Plan files are drawn on.
- **Default Pitch:**
  - **dread**: Played with brisk, salt-damp procedural restraint against the narrowing slack-water clock, pulled by an undertow of working fatigue. This default Pitch governs the whole Play unless the Director selects another Pitch for a run.

## Triggers

- **Fixed at the start:** The *Kestrel* is moored with singled-up lines at the Outer Quay with **20 minutes of slack water remaining** before the ebb tide turns through the harbor gut; missing that window holds a vessel of her draft at the quay for roughly twelve hours until the next high water. The outward manifest lists main-hatch seal `HO-418` intact, while the physical [Cracked Hatch Seal](damaged-seal.md) is split across the stamped numerals. Both performers begin knowing Harbor Office’s [Inspection](../harbor-office/inspection.md) procedure; only the Captain begins knowing the seal’s damaged state.
- **Plot 1 — [Presenting the Seal](presenting-the-seal.md):** Starts when the Visiting Captain steps down the gangplank to the Outer Quay table and presents the outward manifest and [Cracked Hatch Seal](damaged-seal.md) to the Boarding Officer, initiating Harbor Office’s [Inspection](../harbor-office/inspection.md). Ends as soon as the Boarding Officer either completes or declines a direct in-hand inspection of the seal (`Lever`) and opens the quay ledger—or at **12 minutes elapsed** when the harbor tide bell sounds its **8-minute warning stroke**, whichever comes first—handing straight into [Closing the Record](closing-the-record.md).
- **Plot 2 — [Closing the Record](closing-the-record.md):** Starts at the open Harbor Office ledger with **8 minutes or less before the tide turns**, carrying forward whatever was shown, handled, or withheld in [Presenting the Seal](presenting-the-seal.md). Ends when either (a) the Boarding Officer closes the written finding under [Inspection](../harbor-office/inspection.md) and the Visiting Captain acts on it—casting off on the ebb with that record standing or holding the *Kestrel* at the quay to open the hatch and resolve what the entry leaves open—or (b) the harbor bell strikes the turn of the tide while the vessel is still tied up. Performer choices remain open throughout.

## Stakes

The production fights over whether the *Kestrel* makes the ebb tide and what permanent account of the [Cracked Hatch Seal](damaged-seal.md) stands in Harbor Office’s [Inspection](../harbor-office/inspection.md) record.

- In [Presenting the Seal](presenting-the-seal.md), the Captain chooses how candidly to present the [Cracked Hatch Seal](damaged-seal.md) and the Officer chooses whether to spend scarce slack-water minutes invoking [Inspection](../harbor-office/inspection.md)’s lever to examine the disc in hand—deciding what physical evidence enters play before anything is written.
- In [Closing the Record](closing-the-record.md), the Officer decides what observed facts and unresolved doubts to commit to the ledger (`Echo`), and the Captain decides whether to sail before the tide turns under that permanent record or forfeit the tide at the berth to clear the discrepancy at the hatch.
```

### `before-the-tide/damaged-seal.md`

```markdown
# Cracked Hatch Seal

## Taxonomy

Main-hatch clearance seal from the coastal trader *Kestrel*’s arrival papers in [Before the Tide](play.md), presented for Harbor Office’s [Inspection](../harbor-office/inspection.md).

## Owner

[Harbor House](../harbor-house/house.md) (*[Before the Tide](play.md)*).

## Place

Carried onto the Outer Quay in the Visiting Captain’s oilskin pouch at the opening of [Presenting the Seal](presenting-the-seal.md) and set on the stone inspection table between Captain and Boarding Officer.

## Load Bearing

Without an intact seal matching manifest stamp `HO-418`, the *Kestrel* cannot show on face value that her main hatch stayed shut from loading to arrival, forcing Harbor Office’s [Inspection](../harbor-office/inspection.md) to record a discrepancy before the tide turns.

## Apparent

A thumb-wide lead disc stamped `HO-418` crimped over tarred hemp cord: a split runs across the `4` and `1` nearly to the cord channel. At arm’s length it reads as a cracked weather-worn seal; turned closely in the light, one lip of the fracture is dull grey and salt-crusted while the inner seam shows a bright, unweathered pinch mark.

## Yearbook

- **Three days before arrival, at loading:** Crimped intact onto the *Kestrel*’s main-hatch hasp and entered on the outward manifest as `HO-418`.
- **Yesterday before dusk, in an offshore squall:** A loose deck spar slammed the hatch coaming in a beam sea, splitting the stamped lead crown partway across and letting salt spray darken the open crack.
- **Thirty minutes before docking, in the outer roads:** During arrival deck checks, a hand pinched the loosened lead halves back toward the cord so the disc would not slip free before the quay, leaving a bright fresh crease inside the older salt-dulled break.
```

### `before-the-tide/presenting-the-seal.md`

```markdown
# Presenting the Seal

## Taxonomy

Opening Plot of [Before the Tide](play.md).

## Owner

[Harbor House](../harbor-house/house.md) (*[Before the Tide](play.md)*).

## Cue

The Outer Quay beside the *Kestrel*’s gangplank, twenty minutes before slack water turns to ebb. The vessel’s mooring lines are singled up to leave on the tide; missing the turn keeps her tied to the berth for roughly twelve hours until the next high water.

## Action

The Visiting Captain lays out the outward manifest and presents the [Cracked Hatch Seal](damaged-seal.md) to move quay clearance briskly ahead of the tide. Under Harbor Office’s [Inspection](../harbor-office/inspection.md), the Boarding Officer compares the seal with manifest entry `HO-418` and presses to judge whether he should ask to inspect the seal directly in hand before recording a finding. Their efforts collide over how closely the [Cracked Hatch Seal](damaged-seal.md) is handled and questioned while slack water runs down.

## Stage

The Boarding Officer starts at the Outer Quay inspection table with the closed Harbor Office ledger and chalk marker. The Visiting Captain enters down the gangplank carrying the outward manifest and the [Cracked Hatch Seal](damaged-seal.md) in an oilskin pouch.

Fixed order of events:
1. The Captain presents the manifest and brings out the [Cracked Hatch Seal](damaged-seal.md) at the quay, initiating [Inspection](../harbor-office/inspection.md).
2. The Officer compares stamp `HO-418` against the manifest and decides whether to ask to inspect the seal directly (`Lever`), while the Captain decides how openly to hand over the disc and account for the damage.
3. Once direct inspection is either completed or declined—or at twelve minutes elapsed when the harbor tide bell sounds its eight-minute warning stroke—the Officer opens the Harbor Office ledger.

## Tension

The Visiting Captain noticed the bright inner pinch mark on the [Cracked Hatch Seal](damaged-seal.md) only in the outer roads thirty minutes ago and is unsure whether her mate merely squeezed a storm-cracked disc shut so it would stay on the cord or interfered with the hasp; guarding the seal invites suspicion, while handing it over invites delay. Privately, the Boarding Officer was faulted on an earlier watch for thin slack-water notes, making him wary of waving damage past without looking closely yet reluctant to bog down a working berth on guesswork.
```

### `before-the-tide/closing-the-record.md`

```markdown
# Closing the Record

## Taxonomy

Second and closing Plot of [Before the Tide](play.md), following [Presenting the Seal](presenting-the-seal.md).

## Owner

[Harbor House](../harbor-house/house.md) (*[Before the Tide](play.md)*).

## Cue

The Outer Quay inspection table with the Harbor Office ledger open and eight minutes or less remaining before the tide turns through the harbor gut. Whatever both Personas saw, handled, or left untested on the [Cracked Hatch Seal](damaged-seal.md) in [Presenting the Seal](presenting-the-seal.md) now governs what can honestly be written.

## Action

Following the direction and echo of Harbor Office’s [Inspection](../harbor-office/inspection.md), the Boarding Officer moves to record the discrepancy between the manifest and the [Cracked Hatch Seal](damaged-seal.md), setting down what he observed and what remains unresolved. The Visiting Captain drives to catch the ebb tide without leaving a ledger entry that reads like suspected tampering, pushing to narrow or contextualize what is recorded—or deciding whether to hold the *Kestrel* past the tide to open the hatch and settle the doubt on the spot. Their efforts collide over the exact finding written before the harbor bell strikes the turn.

## Stage

Both Personas stand at the Outer Quay table with the open Harbor Office ledger, the outward manifest, and the [Cracked Hatch Seal](damaged-seal.md) in whichever position [Presenting the Seal](presenting-the-seal.md) left it.

Fixed order of events:
1. The Boarding Officer states or drafts the discrepancy finding he intends to enter in the Harbor Office ledger.
2. In the remaining minutes of slack water, both Personas negotiate, contest, or amend what has been observed versus what remains unresolved, and the Captain decides whether to cast off under that record or keep the vessel moored for full hatch verification.
3. When the remaining eight minutes expire, the harbor bell strikes the turn of the tide, closing the ebb departure window for any vessel still fast to the quay.

## Tension

The Boarding Officer knows [Inspection](../harbor-office/inspection.md) preserves both what he observed and what he left unresolved: recording suspicion beyond what he physically saw overreaches his proof, while understating the break leaves him exposed if a short cargo claim surfaces later. The Visiting Captain knows an unresolved seal discrepancy in Harbor Office’s record follows the *Kestrel* to the consignee’s wharf, yet staying behind to unseal and tally the hold sacrifices the tide she raced in to catch.
```

---

## Requests for Missing Information

If any of the following decisions would change how you want *Before the Tide* staged or revised, please clarify:

1. **Consequence of an unresolved `Inspection` finding on departure:** Harbor Office’s `Inspection` (`harbor-office/inspection.md`) specifies comparing the seal with the manifest, optionally inspecting the seal directly, and recording what was observed and what remains unresolved, without stating whether a boarding officer can legally detain a vessel at the quay or whether departure remains the captain’s risk once the record is entered. I authored the Play around the written record without inventing a separate Harbor Office detention power—should a boarding officer also hold authority to bar departure?
2. **Borrowing limits under Harbor House and Harbor Office:** `harbor-house/repertoire.md` notes that both House-wide borrowing limits and Harbor Office’s borrowing limits are still pending confirmation from the Human. Are there any restrictions on how Harbor Office’s `Inspection` may be paired with local Pieces or Pitches?
3. **Actual hold condition behind the seal:** I kept the Captain’s private knowledge genuinely uncertain (storm damage offshore followed by a dockside pinch thirty minutes out) so performers have room to play either innocence or cover-up. Do you want a fixed truth established about whether cargo under the hatch was actually disturbed?
4. **Promptbook, Pitch, or additional object files:** The brief did not specify a Promptbook, Play-wide Pitch, or separate `Persona`/`Place`/`Position` files (and whether Harbor Office or another lender might supply a Boarding Officer `Position`). Let me know if you want any of those authored or linked for the Director.
