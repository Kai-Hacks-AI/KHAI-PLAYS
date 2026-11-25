# Run 03 — Original Playwright (*Slack Water at Marrow Slip*)

- **Case & Brief:** [original/playwright-brief.md](../02-company/original/playwright-brief.md)
- **Skill Under Test:** [khai-playwright/SKILL.md](../../../skills/khai-playwright/SKILL.md)
- **Model & Clean-Room Context:** `handoff-playwright` subagent (`Model: "inherit"`, `conversationId: 0f07a45c55adef1031cb5a0d37828e37`), isolated clean-room `pw-original` ([protocol.md](../01-setup/protocol.md))
- **Delivered Handoff Directory:** [`02-company/original/handoff/`](../02-company/original/handoff/) (`21` files)

---

## 1. Pre-Composition Delivery Proof (Turn 1 → Turn 2)

At Turn 1 completion (`2026-11-25T19:57:50Z`), before Turn 2 composition began, `handoff/` contained **only** `inventory.md` (`0` Play, Plot, or Company files):

```text
4c57abe716191ba7041ba27374b1ce785ce7642c4387fbfb53234a8c0e8ac192  inventory.md
```

That Turn 1 SHA-256 digest remained **byte-identical** after Turn 2 composed the 20 operational files (`play.md`, `plot-01..03`, and 16 Company object files):

```text
4c57abe716191ba7041ba27374b1ce785ce7642c4387fbfb53234a8c0e8ac192  inventory.md
2c0046d388a1204f80f16318faf3f16734707166526230625035f57eb7151fc8  persona-doyle-kerr.md
d9fd19361e120031e7d0abee91d75bfe5405aa85180ea6130d2ef47c4066b324  persona-maren-holt.md
d6f78d9cc297f5e5255a6ddaa95ce0535d168008e42506ccf1d650ef5db0454f  piece-bell-log-envelope.md
5f8cb685283d4120996e945726d7091abe4957698bb8e0519b2b828f37671264  piece-cold-chain-case.md
4f6812e5dea64b8e642c288feae9a3456ea82efc6adc5d6901b12826eb4e41c0  piece-master-key.md
40f41bbf46d631c5b4d5f689c3d9446095598efcd82dabfcf2f80295d421a9fc  piece-work-skiff.md
7251ebfaa1c88072f419dd686e95c9990632fcfc0b060e71bc32f529013a8373  pitch-salt-dread.md
7d40979035a5df12b263b8286f68d8a6a7758fa93ad2f398d50b0d44c8750dc1  pitch-slack-resolve.md
c32027ff9ec4c88b79becf945a725d270fb25e6e48190c0ae852b3a92bc6023a  place-slipway-apron.md
a6df4c98c2f37122b33b0e3866d7b99b2e35ac66760ab447bd8a50c4e1fcce16  place-waiting-room.md
3b79c0d5c700ab74130a3f70b5139c886f69fe1df3fe222ac3ab7a89c5464f10  place-winch-office.md
1b6458a33287e194215d237ca2c284432cdf40eef31e5d7a69f6c9bd8db80c9b  plan-recover-bell-log.md
a39817630c91022301302fe5b1efb8e0dccc26a2ba760baae708fd1af1075eb9  plan-slack-water-crossing.md
280b476e95275d431a157707bbf013173f67a8e8553999c34a6aba0242155abd  play.md
01823d10a23a767947bca0fa27489042a6a02110c3793f04be8df01ec0c84b38  plot-01-the-threshold.md
47469845391b78cf2bb46e2d10123ee304e6033b8cae245183a11a203a9993de  plot-02-the-night-drop.md
ee2f5c3721856a500474c91188a1c895e311580492579fe0b5637eaff489c2d2  plot-03-slack-water.md
8575db186a9728ab6cc9005f7d3a55dca84b49336a789bffb2c930146a58cabf  position-bonded-agent.md
740b148942599ea4479d60cd4bf3587485e16a2f8e2829b654b324ca5380fde2  position-chief-engineer.md
901120fc54d8326a017ce77c2d2c30b89a342d2c2f70907060e79a836bdde569  process-ebb-to-slack.md
```

---

## 2. Verbatim Playwright Turn Summaries

### Turn 1 Delivery (Material Inventory First)

````markdown
Turn 1 complete: I have authored and delivered **only** the theatrical material inventory at `handoff/inventory.md`, using clean relative Markdown links throughout.

### Summary of Turn 1 Material Inventory (*Slack Water at Marrow Slip*)

- **Premise & Brief Fit:** Five nights after *M/V Gullswake* suspended service behind a fake *"RAMP HYDRAULIC INSPECTION"* placard, two waterfront workers converge in sleet at the closed **Marrow Slip Terminal** forty minutes before the **23:20–23:35 low-water slack**:
  - **Maren Holt** (`persona-maren-holt.md`, holding `position-bonded-agent.md`) carries the unreturned **#2 Brass Harbour Master Key** (`piece-master-key.md`) and a **Sealed Dispensary Cold-Chain Case** (`piece-cold-chain-case.md`, thermal ceiling **01:00**), intending to log custody and launch the **16-Foot Aluminum Slipway Work Skiff** (`piece-work-skiff.md`) on the slack tide.
  - **Doyle Kerr** (`persona-doyle-kerr.md`, holding `position-chief-engineer.md`) arrives pry-bar in hand without a key and **knows why the ferry actually stopped running**: Friday at 21:14, *Gullswake* ran radar-blind on an expired hull extension, struck the outer east guide-crib, hid behind Kestrel Island to conceal an uninsured casualty, and sheared an **iron-bolted crib piling** just beneath the low-water line directly across the slip mouth—documented in his signed **Friday Engine-Bell & Fathometer Envelope** (`piece-bell-log-envelope.md`) locked inside the Winch Office Night Drop Box ahead of a **07:00** company cleanout.
- **Planned Turn 2 Objects (17 files in `handoff/`):**
  - **Play (1):** `play.md` (*Slack Water at Marrow Slip*)
  - **Plots (3):** `plot-01-the-threshold.md`, `plot-02-the-night-drop.md`, `plot-03-slack-water.md`
  - **Personas (2) & Positions (2):** `persona-maren-holt.md`, `persona-doyle-kerr.md`, `position-bonded-agent.md`, `position-chief-engineer.md`
  - **Places (3):** `place-waiting-room.md`, `place-winch-office.md`, `place-slipway-apron.md`
  - **Pieces (4):** `piece-master-key.md`, `piece-cold-chain-case.md`, `piece-bell-log-envelope.md`, `piece-work-skiff.md`
  - **Process (1):** `process-ebb-to-slack.md`
  - **Plans (2):** `plan-slack-water-crossing.md`, `plan-recover-bell-log.md`
  - **Pitches (2):** `pitch-salt-dread.md` (Play default), `pitch-slack-resolve.md` (Plot 3 shift)
  *(19 files total once `inventory.md` is counted — 1 Play + 3 Plots + 14 Company object files + `inventory.md`.)*
- **Unused / Optional Material Mapped:** Explicitly documents candidate third-party intrusions (*Port Superintendent Halvorsen*), offstage radio/clinic endpoints, exterior Places, inline props (VHF radio, pry bar), standalone cold-chain decay Process, a fourth morning aftermath Plot, and a comic-bureaucratic Pitch held out of scope to keep the two-hander tight and open-ended.
- **Timeline & Discovery Rules:** Fixes exact timestamps and tide heights where decisions/handoffs depend on them, records starting misconceptions/uncertainties, and leaves performer bargains and the 23:20 slack-water commitment genuinely open.

Ready and waiting for your review and go-ahead before composing `play.md`, the `plot-*.md` files, and the linked Company object files in Turn 2.
````

### Turn 2 Delivery (Original Play, Plots & Linked Company Files)

````markdown
Turn 2 composition is complete. All 21 Markdown files (the Turn 1 `inventory.md` plus `play.md`, all 3 `plot-*.md` files, and all 16 linked Company object files) are written inside `handoff/`:

- [inventory.md](../02-company/original/handoff/inventory.md)
- [play.md](../02-company/original/handoff/play.md)
- [plot-01-the-threshold.md](../02-company/original/handoff/plot-01-the-threshold.md)
- [plot-02-the-night-drop.md](../02-company/original/handoff/plot-02-the-night-drop.md)
- [plot-03-slack-water.md](../02-company/original/handoff/plot-03-slack-water.md)
- [persona-maren-holt.md](../02-company/original/handoff/persona-maren-holt.md)
- [persona-doyle-kerr.md](../02-company/original/handoff/persona-doyle-kerr.md)
- [position-bonded-agent.md](../02-company/original/handoff/position-bonded-agent.md)
- [position-chief-engineer.md](../02-company/original/handoff/position-chief-engineer.md)
- [place-waiting-room.md](../02-company/original/handoff/place-waiting-room.md)
- [place-winch-office.md](../02-company/original/handoff/place-winch-office.md)
- [place-slipway-apron.md](../02-company/original/handoff/place-slipway-apron.md)
- [piece-master-key.md](../02-company/original/handoff/piece-master-key.md)
- [piece-cold-chain-case.md](../02-company/original/handoff/piece-cold-chain-case.md)
- [piece-bell-log-envelope.md](../02-company/original/handoff/piece-bell-log-envelope.md)
- [piece-work-skiff.md](../02-company/original/handoff/piece-work-skiff.md)
- [process-ebb-to-slack.md](../02-company/original/handoff/process-ebb-to-slack.md)
- [plan-slack-water-crossing.md](../02-company/original/handoff/plan-slack-water-crossing.md)
- [plan-recover-bell-log.md](../02-company/original/handoff/plan-recover-bell-log.md)
- [pitch-salt-dread.md](../02-company/original/handoff/pitch-salt-dread.md)
- [pitch-slack-resolve.md](../02-company/original/handoff/pitch-slack-resolve.md)
````
