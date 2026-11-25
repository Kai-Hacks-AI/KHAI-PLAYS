# Run 01 — Scientific Brief, Repetition 1 (`01-scientific-r1`)

- **Case & Brief:** [scientific-brief.md](../02-company/scientific-brief.md)
- **Skill Under Test:** [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md) (with linked [references/sourcebook.md](../../../references/sourcebook.md))
- **Model & Clean-Room Context:** `research` subagent (`Model: "inherit"`, `conversationId: 35a66a79a6f56735a071dd185aecd865`), network-isolated read-only sandbox restricted to isolated clean-room `run-01` ([protocol.md](../01-setup/protocol.md))
- **Accessible Materials (`02-company/`-relative inside clean room):** `brief.md`, [index.md](../02-company/index.md), `fixtures/**`, and [sources/MANIFEST.md](../02-company/sources/MANIFEST.md) snapshots

## Verbatim Raw Response

````markdown
# Research Report — Exceptional Rainfall Inference & Prior Coverage

## 1. Phenomenon & Core Scientific Finding

**Brief question:** *“What can a single exceptional rain event tell us about the long-term climate of a place? Would a new Pattern about that inference add anything?”* ([`brief.md`](brief.md))

- **What a single exceptional rain event tells us on its own:** By itself, a single exceptional rainstorm tells us almost nothing definitive about the long-term climate regime of a place—save that such an event is physically possible there. A single storm is one draw (a sample of size one) from a noisy weather distribution. Asking whether the standing or shifting climate regime deterministically “caused” that single storm—or reading the storm directly as a report on the standing regime—is ill-posed, because an extreme event can occur by chance under an unmodified, stationary climate.
- **How an extreme event relates to climate scientifically:** Connecting an exceptional event to long-term climate requires stepping outside the single event to compare **exceedance probabilities (risk / odds / return periods)** across long instrumental baselines and physical-statistical models—asking how much a particular climate regime (or external forcing) changes the *likelihood* of crossing a specified event threshold compared with a counterfactual regime. Even a lived cluster of unusual events remains an ambiguous small sample without baseline records and attribution machinery.

---

## 2. Inspected External & Legacy Sources (Firsthand vs. Indirect Attribution)

All external inspection is bounded by the pinned snapshots listed in [`sources/MANIFEST.md`](sources/MANIFEST.md).

### A. Inspected Firsthand

1. **Stott, Stone & Allen (2004) — Abstract & PubMed Record**
   - **Citation:** Peter A. Stott, D. A. Stone, and M. R. Allen, *“Human contribution to the European heatwave of 2003,”* *Nature* 432(7017):610–614 (2 Dec 2004), DOI `10.1038/nature03089`, PMID `15577907` (`https://pubmed.ncbi.nlm.nih.gov/15577907/#abstract`).
   - **Inspected snapshot:** [`sources/pubmed-15577907-abstract.md`](sources/pubmed-15577907-abstract.md) (bibliographic header, verbatim abstract, publication types, and MeSH terms only; the full *Nature* article body behind publisher access was **not** inspected).
   - **Recorded claims in the abstract:**
     1. *Ill-posed deterministic single-event causation:* Asking whether the 2003 European heatwave was caused “in a simple deterministic sense” by external climate forcing (such as rising greenhouse gas concentrations) is an **ill-posed question**, “because almost any such weather event might have occurred by chance in an unmodified climate.”
     2. *Probabilistic risk reformulation:* One can instead estimate by how much human activities changed the **risk (likelihood)** of the occurrence of an event exceeding a specified magnitude.
     3. *Empirical heatwave estimate:* Using a threshold for **mean summer temperature** across a large region of continental Europe that was exceeded in 2003 “but in no other year since the start of the instrumental record in 1851,” the authors estimate it is *very likely* (>90% confidence) that human influence **at least doubled the risk** of a heatwave exceeding that threshold magnitude.
   - **Alternate names & equivalent concepts:** *Probabilistic extreme event attribution* (EEA), *detection and attribution*, *fraction of attributable risk / risk ratio / change in exceedance likelihood* (PubMed MeSH terms in [`sources/pubmed-15577907-abstract.md`](sources/pubmed-15577907-abstract.md): `Likelihood Functions`, `Risk`, `Models, Theoretical`, `Greenhouse Effect`, `Hot Temperature`, `Weather`).

2. **Legacy `Clime` Sourcebook (`REFERENCES.md`)**
   - **Inspected snapshot:** [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md) (pinned verbatim from `ChBrain/khai` commit `c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00`, linked from [`fixtures/patterns/clime/sourcebook.md`](fixtures/patterns/clime/sourcebook.md)).
   - **Inspection note:** Inspected firsthand as an authored KHAI Sourcebook record; however, the primary scientific publications it summarizes (other than the Stott et al. 2004 abstract above) are **not** present in `sources/` and are therefore known here only via **indirect attribution**.

### B. Known Only via Indirect Attribution (Cited in [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md), Primary Texts Uninspected)

- **Edward N. Lorenz (1963, 1969)** — *“Deterministic Nonperiodic Flow”* (*J. Atmos. Sci.*, 1963) and *“The Predictability of a Flow Which Possesses Many Scales”* (1969): sensitive dependence imposes a predictability horizon of days on particular weather states while leaving long-run attractor statistics well-defined.
- **Klaus Hasselmann (1976)** — *“Stochastic climate models, Part I: Theory”* (*Tellus*, 1976): weather acts as fast, effectively random forcing integrated by slow climate components—climate is accumulated weather, yet no individual day is a report on the climate.
- **Wladimir Köppen (1884 onward; Köppen & Geiger)** & **Milutin Milanković (1941)**: baseline climate regime defined by long-run temperature and moisture statistics, and slow orbital forcing showing climate regimes themselves shift over time.
- **Myles Allen (2003)** — *“Liability for climate change”* (*Nature*, 2003): conceptual framing of event attribution around changed odds rather than deterministic single-case verdicts.
- **National Academies of Sciences, Engineering, and Medicine (2016)** — *Attribution of Extreme Weather Events in the Context of Climate Change*: assesses routine event attribution and states its key methodological bound—attribution confidence **varies sharply by event type** and is highest where the physical chain is simplest.

### C. Scope & Limits of Applying Stott et al. (2004) to Exceptional Rainfall

While Stott et al.’s **epistemological framing** (that single-event deterministic causation is ill-posed because extreme weather can occur by chance, so inference must target changes in threshold-exceedance probability) transfers across weather variables, their **empirical evidence and confidence bounds do not transfer directly to an exceptional rain event**:

1. **Variable & physical-chain mismatch (heat vs. precipitation):** Stott et al. (2004) analyze temperature only. Large-scale summer heat responds relatively directly to radiative/thermodynamic forcing. Exceptional rainfall depends not only on atmospheric moisture capacity (thermodynamics) but on vertical motion, mesoscale convection, storm-track dynamics, moisture transport, and local orography—where internal dynamical variability is much larger and climate-model representation is much more uncertain. (This matches the indirect NASEM 2016 caution recorded in [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md) that confidence drops as the physical chain becomes more complex.)
2. **Spatiotemporal scale mismatch:** Stott et al.’s threshold applies to **seasonal (mean summer) temperature averaged across a large region of continental Europe**, smoothing out local day-to-day noise. A “single exceptional rain event” at “a place” is typically short-lived (hours to days) and spatially localized, inflating sample noise (“chance”) relative to any background climate signal.
3. **Baseline record & tail-threshold limits:** Stott et al. rely on a continuous continental instrumental temperature series back to 1851. Point or catchment rainfall extremes have heavier statistical tails and patchier gauge coverage, making return-period and historical-threshold estimates far more sensitive to record length and spatial sampling.
4. **Rainfall vs. flood / ground-impact boundary:** Even when a rain event produces a flood, surface inundation also depends on antecedent soil saturation, catchment hydrology, geomorphology, and drainage—factors completely outside atmospheric temperature/precipitation probability (explicitly separated from `Clime` as `wildland`/hydrology in [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md)).

---

## 3. Prior Coverage Across Plays and Patterns

Checked via the derived lookup index ([`index.md`](index.md)) and verified directly across every fixture Sourcebook in `fixtures/patterns/*` and `fixtures/plays/*`:

| Work | Type | Source Relationship | What the Work Actually Takes & Encodes |
| --- | --- | --- | --- |
| **[`Clime`](fixtures/patterns/clime/sourcebook.md)** (legacy detail in [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md)) | Pattern | **Direct** (`10.1038/nature03089`, *Abstract, change in heatwave likelihood*, via legacy `REFERENCES.md`) | **Owns the exact inference in the brief:** *“A single event and its probability answer different questions.”* Wires the `weather` engine (explicitly including **water**, wind, heat, cold, sky, season) to the `climate` engine (regime, seasonality, extremity, shift) across three bridges: *the day* (felt weather load, minimum inference), *the terms* (standing regime, knowable only secondhand), and *the run* (lived sample too long to shrug off and too short to settle). Explicitly refuses single-day causal verdicts and already covers rain/flood odds (*“the flood is hydrology’s and the odds of the flood are here”*). Its fixture `Restrictions` already notes: *“The cited study estimates the likelihood of crossing a temperature threshold.”* |
| **[`Heat Benchmark`](fixtures/patterns/heat-benchmark/sourcebook.md)** | Pattern | **Direct** (`10.1038/nature03089`, *Abstract, historical threshold*) | Takes a **different, non-inferential slice** of Stott et al.’s abstract: the 1851 instrumental record benchmark itself, encoding *“Use a recorded threshold to decide when the heat log marks an exceedance.”* Narrowly scoped to heat-log threshold exceedance, not regime inference or rainfall. |
| **[`The Closed Hall`](fixtures/plays/the-closed-hall/sourcebook.md)** | Play | **Indirect — `Via Clime`** (links to [`fixtures/patterns/clime/sourcebook.md`](fixtures/patterns/clime/sourcebook.md), reaching `10.1038/nature03089` through the Pattern) | **Already adapts the inference to a water extreme under a different name (*flood*):** encodes *“The company disputes what a single flood says about the standing regime.”* Demonstrates that `Clime` already governs single-event water/regime disputes in Plays without needing a separate rain-inference Pattern. |
| **[`The Second Loaf`](fixtures/plays/the-second-loaf/sourcebook.md)** & **[`Out of the House`](fixtures/plays/out-of-the-house/sourcebook.md)** | Plays | Unrelated (`Grimm KHM 15`, 1812 ed., [`sources/grimm-1812-khm15.md`](sources/grimm-1812-khm15.md); cf. [`sources/grimm-1857-bd1-p079.md`](sources/grimm-1857-bd1-p079.md)) | Inspected to verify completeness; stage episodes from *Hänsel und Gretel* with no climate, weather, or threshold overlap. |

**Equivalent concepts under different names checked:**
- *Draw vs. odds*, *sample vs. attractor / standing regime*, and *the day / the terms / the run* in [`Clime`](fixtures/patterns/clime/sourcebook.md) ([`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md)) are the exact KHAI vocabulary for “what a single exceptional event tells us about long-term climate.”
- *Single flood vs. standing regime* in [`The Closed Hall`](fixtures/plays/the-closed-hall/sourcebook.md) is the hydro-meteorological staging of that same `Clime` question.
- Sibling composites referenced inside [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md) handle distinct adjacent questions under other names: `wildland` (physical hydrology/flood mechanics), `margin` (remaining reserve before an ongoing drift cannot recover), `undertow` (how a wet week affects a persona’s mood), and `peopling` (who comes out in the weather).

---

## 4. Unresolved Source Identities, Access Limits, and Coverage Gaps

1. **Publisher paywall on Stott, Stone & Allen (2004):** Only the PubMed abstract and metadata ([`sources/pubmed-15577907-abstract.md`](sources/pubmed-15577907-abstract.md)) were accessible; the full *Nature* article (model ensemble design, optimal detection math, spatial mask, and uncertainty bounds) was not inspected ([`sources/MANIFEST.md`](sources/MANIFEST.md)).
2. **Unpinned primary texts & incomplete citations in legacy `Clime`:** Primary works cited inside [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md)—Lorenz (1963, 1969), Hasselmann (1976), Köppen (1884), Milanković (1941), Allen (2003), and NASEM (2016)—are not pinned in `sources/` and lack DOIs, editions, or page numbers in the table (e.g., Lorenz 1969 lacks a venue; Milanković 1941 and Köppen 1884 lack exact titles/editions). Their content is known here strictly via secondary summary.
3. **No firsthand extreme-precipitation literature in scope:** Neither the brief nor `sources/` contains primary hydrometeorological or extreme-rainfall attribution studies (e.g., convective vs. synoptic precipitation attribution, Clausius–Clapeyron scaling limits, or heavy-tailed precipitation return-period estimation).
4. **Uninspected repository object bodies:** Within `02-company/`, only Sourcebooks (`fixtures/.../sourcebook.md` and [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md)) are present. The underlying Pattern/Play object files referenced in `Clime` (`process_clime.md`, `process_clime_day.md`, `process_clime_terms.md`, `process_clime_run.md`) and sibling composites (`weather`, `climate`, `wildland`, `margin`, `undertow`, `peopling`) are outside the fixture set and could not be inspected directly.

---

## 5. What a Proposed Pattern Would Add & Recommendation

### Would a new Pattern about that inference add anything?
**No.** A new Pattern about what a single exceptional rain event tells us about a place’s long-term climate would **duplicate [`Clime`](fixtures/patterns/clime/sourcebook.md)** without adding new structural or inferential capability:
- [`Clime`](fixtures/patterns/clime/sourcebook.md) already owns the epistemic relation between a single weather draw (*the day*), a lived cluster (*the run*), and the standing climate distribution (*the terms*), explicitly encoding that *“a single event and its probability answer different questions.”*
- As documented in [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md), `Clime` is already multi-channel—wiring `water` alongside heat, wind, cold, sky, and season—and [`The Closed Hall`](fixtures/plays/the-closed-hall/sourcebook.md) already stages this exact inference for a water extreme (*“what a single flood says about the standing regime”*) `Via Clime`.
- Moreover, Stott et al. (2004) alone cannot warrant a rainfall-specific Pattern because its empirical result is strictly about continental mean summer temperature.

### Recommendation: **Reuse [`Clime`](fixtures/patterns/clime/sourcebook.md)** (with targeted Sourcebook **Extension** only if event-type attribution bounds need sharpening)

1. **Reuse [`Clime`](fixtures/patterns/clime/sourcebook.md) for any Play or staging about single-rainstorm climate inference:** Route the work through `Clime` (`Via Clime`, matching [`The Closed Hall`](fixtures/plays/the-closed-hall/sourcebook.md)), keeping `Clime`’s refusal to issue a deterministic single-event causal verdict and carrying forward its restriction that the underlying Stott et al. (2004) citation demonstrates probability change on a temperature threshold rather than local rainfall.
2. **Extend [`Clime`](fixtures/patterns/clime/sourcebook.md) (rather than minting a new Pattern) if variable-specific attribution limits matter:** The current fixture [`fixtures/patterns/clime/sourcebook.md`](fixtures/patterns/clime/sourcebook.md) condenses `Clime`’s `Origin` to `10.1038/nature03089` alone. If authors need explicit guidance that local extreme rainfall carries much higher internal variability and lower attribution confidence than continental seasonal heat, extend `Clime`’s `Origin` and `Restrictions` after inspecting primary precipitation-attribution literature (or NASEM 2016 firsthand).
3. **Reserve a Distinct Treatment only for non-inferential mechanisms outside `Clime`’s scope:** A separate Pattern would be justified *only* if the brief shifts away from climate inference toward (a) **physical runoff, drainage, and inundation mechanics** on terrain (delegated to hydrology/`wildland` in [`sources/chbrain-khai-clime-references.md`](sources/chbrain-khai-clime-references.md)), or (b) **operational rainfall/gauge threshold logging** (analogous to [`Heat Benchmark`](fixtures/patterns/heat-benchmark/sourcebook.md), which would require primary hydrometeorological threshold sources rather than Stott et al. 2004).
````
