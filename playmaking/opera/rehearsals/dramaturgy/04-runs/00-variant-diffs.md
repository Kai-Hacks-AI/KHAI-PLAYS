# Exact Complete vs. Reduced Variant Diffs (`Step 2`)

Generated before launching any staging run per [01-setup/README.md](../01-setup/README.md#L17).

## 1. Gender (`gender-complete/` → `gender-reduced/`)

Removed [Warden Clara Dane](../02-company/gender-complete/persona_clara_dane.md)’s `## Projection` link and room-assignment description (`position_female.md`) along with cross-file pronoun/accommodation echoes so Dane’s assigned Gender expression cannot be recovered elsewhere in `gender-reduced/`.

````diff
--- gender-complete/persona_clara_dane.md
+++ gender-reduced/persona_clara_dane.md
@@ -14,16 +14,16 @@
 
 ## Projection
 
-Pressed dark harbor-service jacket with braided deputy cuffs, ink-stained forefingers, a brass pocket chronometer on a lanyard, and a composed, upright stance behind the counter. Before Dane speaks a word, the room assigns [Female](../fixtures/ChBrain-khai/packages/engines/gender/position_female.md): despite the statutory badge at her lapel, the harbor room reads her presence on sight as accommodating support — someone expected to keep the desk pleasant, absorb other people's urgency without friction, and smooth the way rather than stand as an unyielding bar to passage.
+Pressed dark harbor-service jacket with braided deputy cuffs, ink-stained forefingers, a brass pocket chronometer on a lanyard, and a composed, upright stance behind the counter.
 
 ## Action
 
-Before a word is spoken, sweeps the wire tray of unsorted pilot chits off her blotter edge with the back of her wrist and draws the open [Tide-Gate Clearance Ledger](piece_clearance_ledger.md) and chained brass stamps squarely in front of her own chest, placing her body directly across the sightline to the empty inner office behind her.
+Before a word is spoken, sweeps the wire tray of unsorted pilot chits off the blotter edge with the back of one wrist and draws the open [Tide-Gate Clearance Ledger](piece_clearance_ledger.md) and chained brass stamps squarely in front of Dane's chest, placing Dane's body directly across the sightline to the empty inner office behind the desk.
 
 ## Shadow
 
-Dane believes that spotless command of the harbor regulations and tide tables can compel the room to answer strictly to her professional judgment — refusing to reckon with the corner she cut at first light, when she waived a borderline shoal-draft check for the mail packet rather than endure another loud accusation of obstruction from the pilot bench, leaving almost no depth margin over the bar if she miscalculates the next deep-laden hull.
+Dane believes that spotless command of the harbor regulations and tide tables can compel the room to answer strictly to Dane's professional judgment — refusing to reckon with the corner cut at first light, when Dane waived a borderline shoal-draft check for the mail packet rather than endure another loud accusation of obstruction from the pilot bench, leaving almost no depth margin over the bar if Dane miscalculates the next deep-laden hull.
 
 ## Tell
 
-Her right thumb presses white against the inked brass rim of the clearance stamp without lifting it from the pad, her eyes flicking once to the chalked bar-depth slate beside the transom before locking back onto the counter.
+Dane's right thumb presses white against the inked brass rim of the clearance stamp without lifting it from the pad, Dane's eyes flicking once to the chalked bar-depth slate beside the transom before locking back onto the counter.

--- gender-complete/play.md
+++ gender-reduced/play.md
@@ -42,4 +42,4 @@
 
 ## Stakes
 
-Control of the *Sable Tern*'s passage across Greyhaven's outer bar — held materially in the [Tide-Gate Clearance Ledger](piece_clearance_ledger.md) — and the standing of both figures in front of a watching port room. In [The Flood-Gate Desk](plot_opening_clearance.md), Voss risks either missing the flood tide (defaulting on the *Sable Tern*'s coastal charter) or inviting lamp-lit scrutiny at the counter that jeopardizes command altogether, while Dane risks either letting a deep-laden hull ground on a razor-thin bar margin or absorbing institutional blowback from a port room ready to treat her refusal as personal hostility rather than lawful command.
+Control of the *Sable Tern*'s passage across Greyhaven's outer bar — held materially in the [Tide-Gate Clearance Ledger](piece_clearance_ledger.md) — and the standing of both figures in front of a watching port room. In [The Flood-Gate Desk](plot_opening_clearance.md), Voss risks either missing the flood tide (defaulting on the *Sable Tern*'s coastal charter) or inviting lamp-lit scrutiny at the counter that jeopardizes command altogether, while Dane risks either letting a deep-laden hull ground on a razor-thin bar margin or absorbing institutional blowback from a port room watching every delay at the counter.

--- gender-complete/plot_opening_clearance.md
+++ gender-reduced/plot_opening_clearance.md
@@ -18,14 +18,14 @@
 
 ## Action
 
-[Captain Maren Voss](persona_maren_voss.md) drives toward securing an immediate wet-ink clearance stamp in the [Tide-Gate Clearance Ledger](piece_clearance_ledger.md) so the *Sable Tern* can clear the bar on this tide without delay or intrusive counter inspection. [Warden Clara Dane](persona_clara_dane.md) drives toward holding the *Sable Tern* at her rail until hull draft, bar margin, and shipmaster particulars are verified to her satisfaction under the counter lamp. Their efforts collide across six inches of mahogany between the leather clearance pouch and the chained brass stamps, with both performers' choices and final decision left open.
+[Captain Maren Voss](persona_maren_voss.md) drives toward securing an immediate wet-ink clearance stamp in the [Tide-Gate Clearance Ledger](piece_clearance_ledger.md) so the *Sable Tern* can clear the bar on this tide without delay or intrusive counter inspection. [Warden Clara Dane](persona_clara_dane.md) drives toward holding the *Sable Tern* at the rail until hull draft, bar margin, and shipmaster particulars are verified to Dane's satisfaction under the counter lamp. Their efforts collide across six inches of mahogany between the leather clearance pouch and the chained brass stamps, with both performers' choices and final decision left open.
 
 ## Stage
 
-1. **At rise (before speech):** [Warden Clara Dane](persona_clara_dane.md) stands alone behind the central counter with the [Tide-Gate Clearance Ledger](piece_clearance_ledger.md) open beneath the brass lamp. Before anyone speaks, the room's reading of Dane is already arranged around her: the changing watch has shoved its wire tray of unsorted pilot chits and tea tallies onto her blotter corner for her to clear, and left the senior Harbor Master's inner door propped wide behind her shoulder so every entrant's first glance travels past her desk toward the empty leather chair.
+1. **At rise (before speech):** [Warden Clara Dane](persona_clara_dane.md) stands alone behind the central counter with the [Tide-Gate Clearance Ledger](piece_clearance_ledger.md) open beneath the brass lamp. The changing watch has left its wire tray of unsorted pilot chits and tea tallies on the blotter corner, and the senior Harbor Master's inner door stands propped wide behind the duty desk toward the empty leather chair.
 2. **Threshold arrival (before speech):** [Captain Maren Voss](persona_maren_voss.md) steps across the salt-wet threshold carrying the *Sable Tern*'s brass-cornered clearance pouch. Catching Voss's silhouette through the glass transom before a word is spoken, the watchroom pulls the braided latch-cord that swings open the **Masters' Chart Well** gate — bypassing the **Petitioners' Bench** and opening a straight command lane to the ledger while the room waits for Voss to take charge of the counter.
 3. **Counter engagement (opening beat):** Still prior to the first spoken word, Dane and Voss meet across the rail as their silent counter moves and physical tells register under the brass lamp. From that moment forward, who speaks first, how each responds to the room's framing, and whether the *Sable Tern* is cleared, delayed, or held for survey are open to play.
 
 ## Tension
 
-Neither Persona can afford a routine transaction that lingers under the transom's eyes: Dane knows the dawn shoal sounding leaves perilous water over the bar yet knows how swiftly the port room turns against her desk when she refuses to accommodate a shipmaster's urgency, while Voss needs the speed of command at the rail yet faces a bright counter lamp and bare-hand signature column where either hesitation or close inspection threatens far more than a missed tide.
+Neither Persona can afford a routine transaction that lingers under the transom's eyes: Dane knows the dawn shoal sounding leaves perilous water over the bar yet knows how swiftly the port room turns against the desk when Dane delays a shipmaster's urgency, while Voss needs the speed of command at the rail yet faces a bright counter lamp and bare-hand signature column where either hesitation or close inspection threatens far more than a missed tide.
````

## 2. Clime (`clime-complete/` → `clime-reduced/`)

Removed the authored standing-regime (`Clime, the Terms` / `Climate` `1908` `22 mm/hr` `1875–1905` baseline) specification from [place_barrowgate_hall.md](../02-company/clime-complete/place_barrowgate_hall.md) along with cross-file `1908`/return-period echoes in `play.md`, `piece_works_ledger.md`, `plot_*.md`, `persona_*.md`, and `pitch_practical_reckoning.md` so the hall’s standing regime cannot be recovered elsewhere in `clime-reduced/` while `play.md` still declares `Clime`, `the Terms`, and `Climate` on `Barrowgate Market Hall`.

````diff
--- clime-complete/persona_maren_holt.md
+++ clime-reduced/persona_maren_holt.md
@@ -1,6 +1,6 @@
 ---
 title: "Maren Holt"
-description: "Methodical Hall Superintendent who has just pulled a clean strainer from an overwhelmed 1908 sump."
+description: "Methodical Hall Superintendent who has just pulled a clean strainer from an overwhelmed sump."
 ---
 
 # Persona: Maren Holt
@@ -23,7 +23,7 @@
 
 ## Shadow
 
-Treats holding the hall shut tomorrow as pure fidelity to the 1908 culvert rating, while concealing that during September's routine check she signed off the central-aisle floor electrical boxes without unbolting a seized brass cover plate to replace its perished rubber gasket.
+Treats holding the hall shut tomorrow as strict plant-safety caution, while concealing that during September's routine check she signed off the central-aisle floor electrical boxes without unbolting a seized brass cover plate to replace its perished rubber gasket.
 
 ## Tell
 

--- clime-complete/persona_priya_nair.md
+++ clime-reduced/persona_priya_nair.md
@@ -1,6 +1,6 @@
 ---
 title: "Priya Nair"
-description: "Dry-goods merchant and Trust Treasurer weighing shifted catchment odds and insurance terms against Saturday rent rebates."
+description: "Dry-goods merchant and Trust Treasurer weighing flood-damage insurance terms against Saturday rent rebates."
 ---
 
 # Persona: Priya Nair
@@ -15,15 +15,15 @@
 
 ## Projection
 
-Dry wool cardigan over ledger ink-cuffs, standing on the raised east plinth with [The Hall Works & Gauge Ledger](piece_works_ledger.md) flagged by paper slips. Speaks in odds, deductibles, and operating balances, refusing both panic and wishful dismissal.
+Dry wool cardigan over ledger ink-cuffs, standing on the raised east plinth with [The Hall Works & Gauge Ledger](piece_works_ledger.md) flagged by paper slips. Speaks in deductibles and operating balances, refusing both panic and wishful dismissal.
 
 ## Action
 
-Opens the loose September catchment and insurance circulars beside the 1908 culvert drawing and puts a sharp conditional choice on the table: name what physical terms tomorrow trades under — full floor, raised plinths and overhead leads only, or locked gates — and sign for the cost that comes with it.
+Opens the loose September insurance endorsement beside the incident sheets and puts a sharp conditional choice on the table: name what physical terms tomorrow trades under — full floor, raised plinths and overhead leads only, or locked gates — and sign for the cost that comes with it.
 
 ## Shadow
 
-Frames her insistence on pricing the shifted return odds as neutral fiduciary care for the whole hall, while overlooking how neatly a "raised side-aisles only" compromise protects her own dry perimeter stall while stranding central-aisle chillers like Tomasz's.
+Frames her insistence on enforcing policy conditions as neutral fiduciary care for the whole hall, while overlooking how neatly a "raised side-aisles only" compromise protects her own dry perimeter stall while stranding central-aisle chillers like Tomasz's.
 
 ## Tell
 

--- clime-complete/piece_works_ledger.md
+++ clime-reduced/piece_works_ledger.md
@@ -1,6 +1,6 @@
 ---
 title: "The Hall Works & Gauge Ledger"
-description: "Bound municipal maintenance and rainfall folio holding the 1908 drainage spec, the post-2022 flood entries, and the latest catchment return circular."
+description: "Bound municipal maintenance folio holding the post-2022 flood entries and the September 2026 insurance and street-works notes."
 ---
 
 # Piece: The Hall Works & Gauge Ledger
@@ -19,14 +19,13 @@
 
 ## Load Bearing
 
-Without this ledger, neither the thirty-year gauge record the hall was built to nor the documented local causes of the 2022 and 2024 floods could be verified in the room; the argument over reopening would reduce to guesswork about what the drains were sized for and memory of how the last two back-ups happened.
+Without this ledger, the documented local causes of the 2022 and 2024 floods and the current insurer conditions could not be verified in the room.
 
 ## Apparent
 
-A heavy canvas-bound foolscap volume with brass corners, open to a folded blue linen culvert section from 1908 beside handwritten incident sheets and two loose clipped circulars — one from the regional hydrometric service and one from the municipal mutual insurer.
+A heavy canvas-bound foolscap volume with brass corners, open to handwritten incident sheets and two loose clipped September 2026 notes — one on Sawyer's Lane street works and one from the municipal mutual insurer.
 
 ## Yearbook
 
-- **1908:** Bound at the hall's opening with the borough engineer's drainage schedule certifying twin twelve-inch culverts sized to the 1875–1905 thirty-year gauge maximum, followed by 113 autumns of roof-slate and gutter repairs with zero recorded trading-floor floods.
 - **October 2022 & October 2024:** Two incident pages logged after autumn Friday back-ups — the first noting Highways steel road-plates over the High Street storm grate during gas works, the second noting downstream weir sluices pinned shut for masonry pointing.
-- **September 2026:** Two loose sheets clipped inside the back board: a regional catchment bulletin revising the estimated return period of a 45 mm autumn hour from roughly 1-in-50 years to 1-in-12 years (explicitly framed as a shift in odds rather than a forecast for any date), and an insurer's endorsement doubling the water-damage excess if the hall trades after floor inundation without a dry-conduit sign-off, alongside an August note recording impermeable tarmac resurfacing on Sawyer's Lane.
+- **September 2026:** Two loose sheets clipped inside the back board: an insurer's endorsement doubling the water-damage excess if the hall trades after floor inundation without a dry-conduit sign-off, alongside an August note recording impermeable tarmac resurfacing on Sawyer's Lane.

--- clime-complete/pitch_practical_reckoning.md
+++ clime-reduced/pitch_practical_reckoning.md
@@ -19,11 +19,11 @@
 
 ## Undertow
 
-Dread — the quiet vertigo of realising that the building underfoot was engineered carefully for a record that may no longer describe the sky above it, and that Saturday arrives before certainty can.
+Dread — the quiet pressure that Saturday's carrier deadline arrives before certainty can.
 
 ## Nerve
 
-Sharp, divided sympathy: the audience should feel the full weight of both the ruined perishable delivery if the gates stay shut and the stranded century-old margin if the gates swing open.
+Sharp, divided sympathy: the audience should feel the full weight of both the ruined perishable delivery if the gates stay shut and the uninspected electrical risk if the gates swing open.
 
 ## Echo
 

--- clime-complete/place_barrowgate_hall.md
+++ clime-reduced/place_barrowgate_hall.md
@@ -1,6 +1,6 @@
 ---
 title: "Barrowgate Market Hall"
-description: "A 1908 brick-and-iron covered market hall in a temperate valley whose sunken stone trading aisle has flooded under an autumn cloudburst."
+description: "A brick-and-iron covered market hall whose sunken stone trading aisle has flooded under an autumn cloudburst."
 ---
 
 # Place: Barrowgate Market Hall
@@ -18,8 +18,7 @@
 A Victorian-Edwardian covered hall where [Clime](../fixtures/ChBrain-khai/packages/composites/clime/process_clime.md) shows all three faces at once on the room itself before anyone speaks:
 
 - **Current conditions ([Clime, the Day](../fixtures/ChBrain-khai/packages/composites/clime/process_clime_day.md), from [Weather](../fixtures/ChBrain-khai/packages/engines/weather/process_weather.md)):** Set on a late-October [Season, Dormant](../fixtures/ChBrain-khai/packages/engines/weather/process_season_dormant.md) floor of short daylight and low sun, the front loads each channel at its own band. [Water, Deluge](../fixtures/ChBrain-khai/packages/engines/weather/process_water_deluge.md) hammers the glazed clerestory roof at forty-eight millimetres in seventy minutes, sheeting past the eaves hoppers and backing four and a half inches of brown rainwater across the sunken York-stone flags of the central aisle because the floor drains have nothing left to shed with. [Wind, Fresh](../fixtures/ChBrain-khai/packages/engines/weather/process_wind_fresh.md) pushes steady spray through the open north gable louvers and bellies the tarpaulin at the loading arch while the brick side-aisles hold their lee. [Cold, Cool](../fixtures/ChBrain-khai/packages/engines/weather/process_cold_cool.md) sits briskly on wet ankles and ironwork without numbing hands. [Sky, Veiled](../fixtures/ChBrain-khai/packages/engines/weather/process_sky_veiled.md) flattens the roof glass to dull pewter at 4:40 p.m., dimming Sawyer's Lane outside the archway into grey mist.
-- **Standing regime ([Clime, the Terms](../fixtures/ChBrain-khai/packages/composites/clime/process_clime_terms.md), from [Climate](../fixtures/ChBrain-khai/packages/engines/climate/process_climate.md)):** Every built line of the 1908 hall shows the moderate maritime baseline it was fitted to rather than today's fall. Its [Regime](../fixtures/ChBrain-khai/packages/engines/climate/process_regime.md) is a cool, humid temperate valley built for damp air rather than storm sealing: uninsulated Flemish-bond brick walls, fixed ventilation louvers under the eaves, and open timber stall fronts. Its [Seasonality](../fixtures/ChBrain-khai/packages/engines/climate/process_seasonality.md) assumes gentle, multi-day autumn drizzles and winter frosts: long, shallow-pitched Welsh slate roofs feeding open cast-iron box gutters timed for steady runoff, never summer-weight convective bursts in late October. Its [Extremity](../fixtures/ChBrain-khai/packages/engines/climate/process_extremity.md) is stamped directly into the municipal brass inspection plate bolted above the north sump (`BOROUGH SURVEY 1908 — TWIN 12-IN. CULVERTS — MAX RATED SHED 22 MM/HR`): two twelve-inch cast-iron pipes under the flags and three-inch stone plinths raising the perimeter side-aisle stalls, sized to the worst hourly rain recorded in the 1875–1905 borough gauge books. Today's water drowns the central aisle and laps half an inch shy of the side-aisle plinths solely because forty-eight millimetres in seventy minutes doubles the shed rate the hall was built for.
-- **The sequence under dispute ([Clime, the Run](../fixtures/ChBrain-khai/packages/composites/clime/process_clime_run.md) and candidate [Shift](../fixtures/ChBrain-khai/packages/engines/climate/process_shift.md)):** On the fluted cast-iron pier beside the north sump grate, two earlier high-water ticks are marked in white paint — `14 OCT 2022 — 3.5 IN.` and `25 OCT 2024 — 4.0 IN.` — while today's floating sawdust ring sits half an inch above both at `4.5 IN.`, the third flooded October Friday in five years after more than a century without an overtopped trading floor, indistinguishable on sight between a moving autumn regime ([Shift](../fixtures/ChBrain-khai/packages/engines/climate/process_shift.md)) and an unlucky cluster of separately caused days.
+- **The sequence under dispute ([Clime, the Run](../fixtures/ChBrain-khai/packages/composites/clime/process_clime_run.md) and candidate [Shift](../fixtures/ChBrain-khai/packages/engines/climate/process_shift.md)):** On the fluted cast-iron pier beside the north sump grate, two earlier high-water ticks are marked in white paint — `14 OCT 2022 — 3.5 IN.` and `25 OCT 2024 — 4.0 IN.` — while today's floating sawdust ring sits half an inch above both at `4.5 IN.`, the third flooded October Friday in five years indistinguishable on sight between a moving autumn regime ([Shift](../fixtures/ChBrain-khai/packages/engines/climate/process_shift.md)) and an unlucky cluster of separately caused days.
 
 ## Holds
 
@@ -30,11 +29,11 @@
 ## Offers
 
 - Immediate dry footing on the raised east and west perimeter plinths (standing half an inch clear of today's crest) and on the south clerk's dais to everyone inside.
-- Direct inspection of the north sump intake, the brass rating plate, the painted flood marks on the pier, and the overhead breaker switches to anyone willing to wade the central aisle or cross on duckboards.
+- Direct inspection of the north sump intake, the painted flood marks on the pier, and the overhead breaker switches to anyone willing to wade the central aisle or cross on duckboards.
 - Full authority to post tomorrow's trading status at the north arch to whoever holds the gatehouse key and signs the notice before the 5:30 p.m. carrier cutoff.
 
 ## Withheld
 
-- Direct sight of the buried 1908 twin twelve-inch culverts beneath the mortared York-stone flags and the outfall into the weir sewer; checking beyond the open sump throat requires waiting for a municipal camera crew next week.
+- Direct sight of the buried floor culverts beneath the mortared York-stone flags and the outfall into the weir sewer; checking beyond the open sump throat requires waiting for a municipal camera crew next week.
 - Safe verification of the brass-capped central-aisle floor electrical boxes while water stands over the flags; inspecting their internal rubber gaskets requires isolating the floor circuit, draining the aisle, and unbolting a recessed cover plate, forfeiting plug-in chiller power along the central row until an electrician signs it back on.
-- Any sensory proof of the true multi-decadal rainfall distribution; standing in the hall gives only today's water, the 1908 masonry, and five autumns of chalk marks.
+- Any sensory proof of the true multi-decadal rainfall distribution; standing in the hall gives only today's water and five autumns of chalk marks.

--- clime-complete/play.md
+++ clime-reduced/play.md
@@ -1,6 +1,6 @@
 ---
 title: "The Sunken Flags"
-description: "When an October cloudburst overwhelms a 1908 market hall's culverts for the third autumn in five years, the people inside must decide before the wholesale cutoff whether to reopen tomorrow."
+description: "When an October cloudburst floods a market hall's floor for the third autumn in five years, the people inside must decide before the wholesale cutoff whether to reopen tomorrow."
 ---
 
 # Play: The Sunken Flags
@@ -17,7 +17,7 @@
 
 Two continuous late-afternoon Plots inside a flooded covered market move the cast from diagnosing an active overflow to committing tomorrow's trade without certainty:
 
-1. **[The Deluge Floor](plot_the_deluge_floor.md)** catches the cast while rain is still roaring over [Barrowgate Market Hall](place_barrowgate_hall.md). Stripping away the easy assumption of a leaf-clogged grate exposes the real mismatch between today's fall and the hall's 1908 design record, alongside a five-year run of October flood marks that every person in the room can explain differently.
+1. **[The Deluge Floor](plot_the_deluge_floor.md)** catches the cast while rain is still roaring over [Barrowgate Market Hall](place_barrowgate_hall.md). Stripping away the easy assumption of a leaf-clogged grate leaves an active pool over clear strainers alongside a five-year run of October flood marks that every person in the room can explain differently.
 2. **[The Saturday Slate](plot_the_saturday_slate.md)** begins once the cloudburst eases enough for the culverts to start drawing down the pool twenty minutes before the 5:30 p.m. wholesale dispatch lock. Removing the active peak makes reopening physically plausible for a dry Saturday morning without resolving whether the hall's standing regime has shifted, forcing an irreversible operational choice while leaving what the flood means unsettled.
 
 ## Company
@@ -30,8 +30,8 @@
 
 ### Place & Pieces
 
-- **[Barrowgate Market Hall](place_barrowgate_hall.md)** (local owner: `barrowgate-market`) — the 1908 covered market where the composed Pattern is rooted on `Shown`, carrying current conditions, built standing-regime adaptations, and the five-year sequence of flood marks in one place.
-- **[The Hall Works & Gauge Ledger](piece_works_ledger.md)** (local owner: `barrowgate-market`) — folio of the 1908 culvert sizing record, the 2022 and 2024 incident entries, and the September 2026 hydrometric and insurance circulars.
+- **[Barrowgate Market Hall](place_barrowgate_hall.md)** (local owner: `barrowgate-market`) — the covered market where the composed Pattern is rooted on `Shown`.
+- **[The Hall Works & Gauge Ledger](piece_works_ledger.md)** (local owner: `barrowgate-market`) — folio of the 2022 and 2024 incident entries and the September 2026 Sawyer's Lane and insurance notes.
 - **[The Saturday Trading Slate](piece_saturday_board.md)** (local owner: `barrowgate-market`) — reversible enamelled gatehouse sign, chalk strip, and loading-bay padlock key governing tomorrow's 6:00 a.m. market.
 
 ### Borrowed Pattern Processes (Lender: KAI HACKS AI, `ChBrain/khai`)
@@ -48,13 +48,13 @@
 
 - **Fixed at the start:** It is 4:40 p.m. Friday in [Barrowgate Market Hall](place_barrowgate_hall.md). Forty-eight millimetres of October rain in seventy minutes have put four and a half inches of water over the central aisle despite clear sump strainers; the perimeter plinths and south dais remain half an inch above the crest; wholesale carriers check the north gate at 5:30 p.m. before dispatching Saturday's 4:30 a.m. refrigerated vans.
 - **Opening ([The Deluge Floor](plot_the_deluge_floor.md)):** Starts as [Maren Holt](persona_maren_holt.md) returns from the north sump with the clean brass strainer basket while [Tomasz Kowalski](persona_tomasz_kowalski.md) shifts crates onto duckboards and [Priya Nair](persona_priya_nair.md) opens [The Hall Works & Gauge Ledger](piece_works_ledger.md).
-- **Handoff to [The Saturday Slate](plot_the_saturday_slate.md):** Triggered at 5:10 p.m. (or once the cast have confronted the clear strainer, the ledger's 1908 culvert limit, and the breaker question) when the overhead rain slackens enough for the north sump to pull a visible vortex and the wholesale carrier sounds outside the arch for the twenty-minute warning.
+- **Handoff to [The Saturday Slate](plot_the_saturday_slate.md):** Triggered at 5:10 p.m. (or once the cast have confronted the clear strainer and the breaker question) when the overhead rain slackens enough for the north sump to pull a visible vortex and the wholesale carrier sounds outside the arch for the twenty-minute warning.
 - **Closing ([The Saturday Slate](plot_the_saturday_slate.md)):** Ends when [The Saturday Trading Slate](piece_saturday_board.md) is locked onto the outer north arch in a chosen configuration — or when 5:30 p.m. arrives with the cast deadlocked on the current face of the sign.
 - **Left open to play:** Whether the cast isolate or energize the central floor sockets, whether they reopen fully, reopen under restricted plinth-and-overhead terms, or close tomorrow, and what each Persona concludes today's flood means. Never supply an authoritative verdict on whether a shifted climate regime caused today's storm.
 
 ## Stakes
 
-The Company is fighting over tomorrow's Saturday harvest-end market and who bears the cost of a century-old building whose design record may or may not still hold:
+The Company is fighting over tomorrow's Saturday harvest-end market and who bears the cost of a flooded trading hall ahead of Saturday's deliveries:
 
-- In **[The Deluge Floor](plot_the_deluge_floor.md)**, immediate safety and stock salvage collide over [The Hall Works & Gauge Ledger](piece_works_ledger.md) and the east-pier breaker cabinet: proving the grates are clear turns a routine maintenance complaint into a structural mismatch between today's load and the hall's 1908 drainage ceiling.
+- In **[The Deluge Floor](plot_the_deluge_floor.md)**, immediate safety and stock salvage collide over [The Hall Works & Gauge Ledger](piece_works_ledger.md) and the east-pier breaker cabinet: proving the grates are clear removes the easy assumption of a clogged grate while water stands over the floor.
 - In **[The Saturday Slate](plot_the_saturday_slate.md)**, the receding water shifts the fight onto [The Saturday Trading Slate](piece_saturday_board.md): locking `HALL CLOSED` forfeits Saturday stall rents and strands dawn perishables, locking `OPEN` without conditions risks damp floor circuits and doubled insurance deductibles, and any compromise forces uneven losses across central and perimeter stalls while the meaning of three flooded Octobers in five years remains genuinely undecidable in the room.

--- clime-complete/plot_the_deluge_floor.md
+++ clime-reduced/plot_the_deluge_floor.md
@@ -15,15 +15,15 @@
 
 ## Cue
 
-4:40 p.m. on a late-October Friday inside [Barrowgate Market Hall](place_barrowgate_hall.md), under the live atmospheric load and built regime shown there. Brown water already covers the sunken central flags and laps just below the perimeter plinths, with fifty minutes left until the 5:30 p.m. wholesale carrier cutoff for Saturday's market.
+4:40 p.m. on a late-October Friday inside [Barrowgate Market Hall](place_barrowgate_hall.md). Brown water already covers the sunken central flags and laps just below the perimeter plinths, with fifty minutes left until the 5:30 p.m. wholesale carrier cutoff for Saturday's market.
 
 ## Action
 
 - [Tomasz Kowalski](persona_tomasz_kowalski.md) drives to treat the flood as a clearing-and-salvage job — demanding the blocked intake be freed, keeping power available for chillers, and preparing the floor to trade at 6:00 a.m. tomorrow.
-- [Maren Holt](persona_maren_holt.md) drives to prove the sump grates are already clear, isolate the submerged central-aisle floor circuit at the east pier cabinet, and halt talk of a routine Saturday opening while the hall's rated shed limit is overrun.
+- [Maren Holt](persona_maren_holt.md) drives to prove the sump grates are already clear, isolate the submerged central-aisle floor circuit at the east pier cabinet, and halt talk of a routine Saturday opening while water stands over the floor sockets.
 - [Priya Nair](persona_priya_nair.md) drives to cross-check today's water and the prior two October marks against [The Hall Works & Gauge Ledger](piece_works_ledger.md) so nobody commits the Trust to an uninsured opening or an unfunded rent rebate on guesswork.
 
-Their efforts collide at the north sump and the weigh-table: once the clean strainer basket shows no debris caused the back-up, every practical move on the breaker switch and the stock crates forces them to confront the gap between today's downpour, the hall's 1908 terms, and the three flooded autumns on the pier.
+Their efforts collide at the north sump and the weigh-table: once the clean strainer basket shows no debris caused the back-up, every practical move on the breaker switch and the stock crates forces them to confront the gap between today's downpour and the three flooded autumns on the pier.
 
 ## Stage
 

--- clime-complete/plot_the_saturday_slate.md
+++ clime-reduced/plot_the_saturday_slate.md
@@ -20,7 +20,7 @@
 ## Action
 
 - [Tomasz Kowalski](persona_tomasz_kowalski.md) drives to lock [The Saturday Trading Slate](piece_saturday_board.md) on `SATURDAY MARKET OPEN 6:00 A.M.`, pointing to the draining flags, the dry overnight forecast, and the distinct local infrastructure causes behind all three autumn floods.
-- [Maren Holt](persona_maren_holt.md) drives to turn the slate to `HALL CLOSED — NO UNLOADING` — or refuse floor-power sign-off — arguing that three overtopped Octobers in five years show the hall's 1908 margin can no longer be trusted sight unseen.
+- [Maren Holt](persona_maren_holt.md) drives to turn the slate to `HALL CLOSED — NO UNLOADING` — or refuse floor-power sign-off — arguing that three overtopped Octobers in five years make reopening without a full floor inspection unsafe.
 - [Priya Nair](persona_priya_nair.md) drives to force an explicit, signed operating posture before 5:30 p.m. — full opening, restricted trading on raised plinths and overhead festoon power, or full closure — making Maren and Tomasz confront the exact insurance deductible, rent rebate, or stall loss attached to each choice.
 
 Their efforts collide at the north arch bracket where [The Saturday Trading Slate](piece_saturday_board.md) and padlock key hang: the draining floor makes reopening physically tempting right now, while the third mark on the pier and the uninspected floor conduits refuse to guarantee what the hall now stands in.
````
