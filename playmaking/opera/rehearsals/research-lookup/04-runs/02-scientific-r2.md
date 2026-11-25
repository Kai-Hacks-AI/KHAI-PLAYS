# Run 02 — Scientific Brief, Repetition 2 (`02-scientific-r2`)

- **Case & Brief:** [scientific-brief.md](../02-company/scientific-brief.md)
- **Skill Under Test:** [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md) (with linked [references/sourcebook.md](../../../references/sourcebook.md))
- **Model & Clean-Room Context:** `research` subagent (`Model: "inherit"`, `conversationId: b9f31086a8e77273b4305c389e9d5b9a`), network-isolated read-only sandbox restricted to isolated clean-room `run-02` ([protocol.md](../01-setup/protocol.md))
- **Accessible Materials (`02-company/`-relative inside clean room):** `brief.md`, [index.md](../02-company/index.md), `fixtures/**`, and [sources/MANIFEST.md](../02-company/sources/MANIFEST.md) snapshots

## Verbatim Raw Response

````markdown
# Research Report: Inferring Long-Term Climate from a Single Exceptional Rain Event

## 1. Executive Summary

- **Scientific answer:** A single exceptional rain event **cannot** deterministically establish what the long-term climate ("standing regime") of a place is or prove that a climate shift caused the storm. As Stott, Stone & Allen (2004) state, single-event deterministic causation is **ill-posed** because extreme weather events can occur by chance in an unmodified climate ([sources/pubmed-15577907-abstract.md](sources/pubmed-15577907-abstract.md)). Scientifically, a single extreme event only supplies one draw/benchmark; connecting it to long-term climate requires **probabilistic event attribution** (estimating how external forcing or regime shift alters the *likelihood* of exceeding a threshold across a long record and model ensemble). Moreover, transferring that quantitative attribution from Stott et al.’s continental summer heatwave to an exceptional rain event faces major physical, spatial-temporal, observational, and hydrological limits.
- **Coverage & recommendation:** A new Pattern about inferring long-term climate from a single exceptional rain event **would not add a distinct mechanism**. The existing Pattern **[Clime](fixtures/patterns/clime/sourcebook.md)** (legacy record pinned at [sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)) **already owns this exact inference across all weather channels—explicitly including `water` alongside `heat`—and already stages the gap between a single event (`the day`), a lived sequence (`the run`), and the standing regime (`the terms`)**. In addition, the Play **[The Closed Hall](fixtures/plays/the-closed-hall/sourcebook.md)** already applies `Clime` (`Via Clime`) to a dispute over what *"a single flood says about the standing regime."*
- **Recommended action:** **Reuse [Clime](fixtures/patterns/clime/sourcebook.md)** rather than authoring a new inference Pattern. Only consider **(a) extending [Clime](fixtures/patterns/clime/sourcebook.md)** if primary extreme-precipitation attribution literature is later inspected and added to tighten its `Origin` and `Restrictions` on event-type confidence, or **(b) a distinct treatment** if the target mechanism is *not* climate inference at all (for example, an operational rain-gauge threshold rule analogous to [Heat Benchmark](fixtures/patterns/heat-benchmark/sourcebook.md), or catchment runoff/flood hydrology delegated by `Clime` to `wildland`).

---

## 2. External Sources & Scientific Literature

### A. Firsthand Reading

- **Stott, P. A., Stone, D. A., & Allen, M. R. (2004).** *"Human contribution to the European heatwave of 2003."* *Nature*, 432(7017), 610–614. DOI: `10.1038/nature03089`, PMID: `15577907`.
  - **Inspected source:** Public PubMed `#abstract` record, bibliographic header, publication types, and MeSH terms pinned at [sources/pubmed-15577907-abstract.md](sources/pubmed-15577907-abstract.md) (canonical URL `https://pubmed.ncbi.nlm.nih.gov/15577907/#abstract`; see [sources/MANIFEST.md](sources/MANIFEST.md)). Full *Nature* article text behind publisher access was **not** inspected.
  - **Core claims in the inspected abstract:**
    1. **Ill-posedness of deterministic single-event inference:** Asking whether the 2003 European heatwave *"was caused, in a simple deterministic sense, by a modification of the external influences on climate—for example, increasing concentrations of greenhouse gases in the atmosphere"* is **an ill-posed question**, *"because almost any such weather event might have occurred by chance in an unmodified climate."*
    2. **Probabilistic threshold-exceedance framing:** Instead of deterministic causation, one can estimate *by how much* external forcing changed the **risk (likelihood)** of crossing a defined magnitude threshold.
    3. **Quantitative heatwave result:** Using a threshold for **mean summer temperature** across **a large region of continental Europe** exceeded in 2003 and in no other year since the start of the **instrumental record in 1851**, the authors estimate it is *very likely* (**confidence level >90%**) that human influence (greenhouse gases and other pollutants) **at least doubled the risk** of a heatwave exceeding that threshold magnitude.

### B. Indirect Attribution (Uninspected Primary Literature Cited via `Clime`)

We also inspected the pinned legacy `Clime` Sourcebook ([sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)) firsthand, which cites six scientific source groups. Beyond the Stott et al. (2004) abstract above, the primary texts below are **not** present in `02-company/sources/` ([sources/MANIFEST.md](sources/MANIFEST.md)) and are known here **only by indirect attribution**:

- **Allen, M. (2003),** *"Liability for climate change"* (*Nature*) — attributed in `Clime` for framing event attribution as a change in odds between factual and counterfactual worlds rather than a deterministic verdict on a single event.
- **National Academies of Sciences, Engineering, and Medicine [NASEM] (2016),** *Attribution of Extreme Weather Events in the Context of Climate Change* — attributed in `Clime` as assessing routine event attribution and stating its key methodological bound: **attribution confidence varies sharply by event type and is highest where the physical chain is simplest**.
- **Lorenz, E. N. (1963),** *"Deterministic Nonperiodic Flow"* (*J. Atmos. Sci.*), and **Lorenz (1969),** *"The Predictability of a Flow Which Possesses Many Scales"* — attributed in `Clime` for sensitive dependence limiting particular weather predictability to days while leaving long-run attractor statistics well defined.
- **Hasselmann, K. (1976),** *"Stochastic climate models, Part I: Theory"* (*Tellus*) — attributed in `Clime` for treating weather as fast random forcing integrated by slow climate components (*"Climate is made of nothing but days, and no day is a report on the climate"*).
- **Köppen, W. (1884 onward) & Geiger** — attributed in `Clime` for defining baseline climate types from long-run temperature **and moisture** rather than any single season.
- **Milanković, M. (1941)** — attributed in `Clime` for treating the climate regime itself as a slowly moving state rather than a fixed constant.

### C. Alternate Names & Equivalent Scientific Terms

Across the inspected PubMed record ([sources/pubmed-15577907-abstract.md](sources/pubmed-15577907-abstract.md)) and `Clime` reference record ([sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)), the phenomenon and method appear under several equivalent or closely related names:
- *Probabilistic event attribution* / *extreme event attribution* / *detection and attribution*
- *Change in risk* / *change in likelihood* / *risk doubling* / *likelihood functions* (MeSH) / *threshold exceedance*
- *Weather vs. climate* / *draw vs. odds* / *sample vs. standing regime (or attractor statistics)*

### D. Scope and Limits of the Evidence: Applying Stott et al. (2004) from Heat to Exceptional Rainfall

1. **What *does* transfer to exceptional rainfall (the negative epistemic principle):**
   - The conceptual point that **a single extreme weather event cannot deterministically diagnose the long-term climate or prove regime shift** holds for an exceptional rainstorm for the exact reason stated in Stott et al.’s abstract: an extreme rain event can occur by chance internal variability in an unmodified or drier baseline climate. By itself, one storm shows only that such a draw is physically possible in that location and can define an empirical threshold for future comparison.
2. **What *does not* transfer directly (limits of moving from continental summer heat to an exceptional rain event):**
   - **Thermodynamic simplicity vs. convective/dynamical complexity:** Mean summer temperature responds relatively directly to large-scale radiative forcing. Exceptional rainfall depends not only on atmospheric moisture capacity, but also on vertical motion, mesoscale convection, storm tracks, and cloud microphysics, producing much larger internal variability, lower signal-to-noise ratios, and greater climate-model structural uncertainty. (This aligns with `Clime`’s indirect attribution to NASEM 2016 that confidence *"varies sharply by event type, and is highest where the physical chain is simplest,"* though NASEM 2016 was not inspected firsthand.)
   - **Spatial and temporal scale mismatch:** Stott et al. (2004) analyzed a **multi-month seasonal average** (*mean summer temperature*) over **continental Europe**. Exceptional rain events are typically **short-duration** (hours to days) and **spatially localized** (catchment or mesoscale), where tail-risk estimation and coarse global climate model resolution are much less reliable than at continental seasonal scales.
   - **Instrumental baseline limits:** Stott et al. relied on a continuous continental summer temperature record back to **1851**. Long, homogeneous sub-daily or local precipitation records are often shorter, sparser, and harder to compare cleanly across gauges.
   - **Non-transferability of quantitative risk claims:** Stott et al.’s quantitative conclusion (*>90% confidence* that human influence *at least doubled the risk* of exceeding the 2003 threshold) applies strictly to continental European summer mean temperature and **cannot** be cited as evidence for rainfall risk changes.
   - **Rainfall vs. flood confounding:** On the ground, an "exceptional rain event" is frequently experienced through runoff and flooding, which depend on antecedent soil moisture, topography, land use, and drainage rather than atmospheric climate alone (a boundary `Clime` explicitly marks by delegating hydrology to `wildland`).

---

## 3. Prior Coverage Across KHAI PLAYS

Starting from the derived lookup index ([index.md](index.md)), all five fixture Sourcebooks in `fixtures/patterns/*` and `fixtures/plays/*` plus the pinned legacy snapshot ([sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)) were inspected firsthand.

### A. Relevant Existing Works

| Work | Type | Source Relationship | What the Work Actually Takes from `10.1038/nature03089` | Relevance to Proposed Rainfall-Inference Pattern |
| --- | --- | --- | --- | --- |
| **[Clime](fixtures/patterns/clime/sourcebook.md)** (legacy record: [sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)) | Pattern | **Direct** (`10.1038/nature03089`, Abstract, change in heatwave likelihood) | Takes the **conceptual separation between a single weather draw and regime probability**: *"A single event and its probability answer different questions."* In the full legacy Sourcebook, wires `weather` (load falling now across wind, **water**, heat, cold, sky, season) to `climate` (standing regime) across three bridges: `the day` (single felt event, minimum inference), `the terms` (standing regime, knowable only at second hand), and `the run` (lived sample too long to dismiss and too short to settle, anchored by Stott et al. 2004). Explicitly refuses deterministic single-day verdicts. | **Direct conceptual overlap (100% of the inference question).** `Clime` already governs what a single weather event—including `water`/rain—can and cannot tell observers about a place’s long-term climate. |
| **[Heat Benchmark](fixtures/patterns/heat-benchmark/sourcebook.md)** | Pattern | **Direct** (`10.1038/nature03089`, Abstract, historical threshold) | Takes **only the operational threshold-exceedance rule** from the abstract’s 1851–2003 record comparison: *"Use a recorded threshold to decide when the heat log marks an exceedance,"* scoped strictly to heat logs and the cited passage. | **Distinct, narrow operational mechanism.** Does *not* cover weather-to-climate inference; isolates empirical heat-log exceedance tracking. |
| **[The Closed Hall](fixtures/plays/the-closed-hall/sourcebook.md)** | Play | **Via Pattern (`Via Clime`)** — links to `../../patterns/clime/sourcebook.md` rather than citing Stott et al. directly | Reaches Stott et al.’s probabilistic framing **indirectly through `Clime`** to stage a collective epistemic dispute about a water extreme: *"The company disputes what a single flood says about the standing regime."* | **Existing dramatic proof-of-use.** Demonstrates that `Clime` already supports water/flood disputes about the standing regime without needing a separate rain-inference Pattern. |

*(Checked for completeness: the other two indexed Plays—**[The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md)** and **[Out of the House](fixtures/plays/out-of-the-house/sourcebook.md)**—adapt episodes from the 1812 edition of Grimm KHM 15 and have no overlap with weather, rainfall, or statistical inference.)*

### B. Equivalent Concepts Under Different Names

Across [index.md](index.md), the fixture Sourcebooks, and [sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md), the brief’s concepts already appear under established KHAI vocabulary:
- **"Long-term climate of a place"** $\leftrightarrow$ **standing regime**, **the terms**, **baseline type**, **the odds**, **climate engine**.
- **"Single exceptional rain event"** $\leftrightarrow$ **the day**, **a draw**, **a sample**, **water** load on the `weather` engine, **wet week**, **downpour**, and (once routed through surface hydrology) **a single flood** in [The Closed Hall](fixtures/plays/the-closed-hall/sourcebook.md).
- **Adjacent composites distinguished in `Clime`’s `Restrictions` ([sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)):**
  - `wildland`: owns geomorphology, erosion, and **hydrology** (*"the flood is hydrology's and the odds of the flood are here"*).
  - `margin`: owns remaining reserve before an irreversible threshold under drift/shift (*"Margin asks how much is left; clime asks what can yet be known"*).
  - `undertow`: owns what a *"wet week"* does to a persona’s mood/body rather than to knowledge of the place.
  - `peopling`: owns how weather alters who occupies a place.

---

## 4. Unresolved Source Identities, Access Limits, and Coverage Gaps

1. **External access limits ([sources/MANIFEST.md](sources/MANIFEST.md)):**
   - **Stott, Stone & Allen (2004) (`10.1038/nature03089`):** Inspection was limited to the public PubMed abstract and metadata ([sources/pubmed-15577907-abstract.md](sources/pubmed-15577907-abstract.md)); the full *Nature* article text (statistical likelihood model, GCM ensemble details, spatial domain bounds) behind publisher access was not retrieved.
   - **Secondary citations inside legacy `Clime`:** Lorenz (1963, 1969), Hasselmann (1976), Köppen (1884+), Milanković (1941), Allen (2003), and NASEM (2016) were not pinned in `02-company/sources/` and could not be verified firsthand.
   - **Missing primary precipitation literature:** No primary scientific study on extreme-precipitation attribution (e.g., Clausius–Clapeyron moisture scaling vs. convective dynamics) is present in `02-company/sources/`.
2. **Incomplete bibliographic identities in legacy `Clime` ([sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)):**
   - None of the six rows in `Clime`’s legacy `Origin` table record DOIs, URLs, or page numbers; Köppen (*"The climate classification (1884 onward); Köppen & Geiger"*) and Milanković (*"Orbital forcing of the ice ages (1941)"*) are cited by descriptive topic rather than exact canonical publication titles and editions.
3. **Repository coverage gaps in the `02-company/` fixture set:**
   - `02-company/fixtures/` contains Sourcebooks only, not the encoded Pattern/Play body files referenced in `Clime` (`process_clime.md`, `process_clime_day.md`, `process_clime_terms.md`, `process_clime_run.md`) or the scene files of [The Closed Hall](fixtures/plays/the-closed-hall/sourcebook.md).
   - Sibling Patterns and engines named in `Clime` (`weather`, `climate`, `wildland`, `margin`, `undertow`, `peopling`) are outside the `02-company/fixtures/` subset, so their current Sourcebooks could not be inspected firsthand to check how `wildland` currently encodes flood/rainfall hydrology or whether a rain-gauge equivalent of [Heat Benchmark](fixtures/patterns/heat-benchmark/sourcebook.md) exists elsewhere.

---

## 5. What the Proposed Work Would Add & Recommendation

### What a New Pattern Would (and Would Not) Add
- **As a Pattern about climate inference from a single exceptional rain event:** It would add **nothing structurally new**. [Clime](fixtures/patterns/clime/sourcebook.md) ([sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)) is explicitly channel-general over the `weather` and `climate` engines—covering `water` as well as `heat`—and already encodes why a single extreme day (`the day`) cannot settle the standing regime (`the terms`), why lived sequences (`the run`) remain contested, and why single-event causation must be reformulated as a change in odds. Creating a separate "Rain Inference" Pattern would split a single epistemic principle by weather channel and duplicate `Clime` (which [The Closed Hall](fixtures/plays/the-closed-hall/sourcebook.md) already reuses for a flood dispute).

### Recommendation: **Reuse [Clime](fixtures/patterns/clime/sourcebook.md)** (with Optional Sourcebook Extension Only if Primary Rainfall Sources Are Added)

1. **Primary path — Reuse [Clime](fixtures/patterns/clime/sourcebook.md):**
   - If the goal is to stage or reason about what an exceptional rainstorm tells people about a place’s long-term climate, **reuse `Clime` directly**.
   - In any Play’s Sourcebook (following the four chapters: *Line of Work*, *Origin*, *Restrictions*, *Encoding*), record the relationship in `Origin` as **`Via Clime`** linking to [fixtures/patterns/clime/sourcebook.md](fixtures/patterns/clime/sourcebook.md) (matching [The Closed Hall](fixtures/plays/the-closed-hall/sourcebook.md)), and record in `Restrictions` that:
     - Stott et al. (2004) (`10.1038/nature03089`) supports only the **probabilistic vs. deterministic framing**, while its empirical risk-doubling claim (>90% confidence) is restricted to continental European mean summer temperature and must **not** be cited as a rainfall likelihood estimate; and
     - if characters argue over **flooding** rather than **rainfall odds** alone, catchment saturation and runoff belong to hydrology (`wildland`) rather than `Clime` alone.
2. **When an Extension of [Clime](fixtures/patterns/clime/sourcebook.md) would add value:**
   - Notice that the condensed fixture [fixtures/patterns/clime/sourcebook.md](fixtures/patterns/clime/sourcebook.md) currently lists only `10.1038/nature03089` in `Origin` and notes in `Restrictions` that *"The cited study estimates the likelihood of crossing a temperature threshold."* If Playwrights frequently use `Clime` for extreme rainfall, **extending `Clime`’s own Sourcebook**—once NASEM (2016) or a peer-reviewed extreme-precipitation attribution paper can be inspected firsthand—to explicitly encode the lower attribution confidence and shorter/smaller scales of convective rainfall versus continental heat would sharpen `Clime`’s `Restrictions` without spawning a redundant Pattern.
3. **When a Distinct Treatment would be warranted (non-inference scope only):**
   - Author a distinct Pattern **only** if the intended choice is **not** inferring long-term climate from an event—for instance, an operational gauge-exceedance trigger analogous to [Heat Benchmark](fixtures/patterns/heat-benchmark/sourcebook.md) (anchored in a hydrometeorological threshold source rather than Stott et al. 2004), or physical runoff/inundation dynamics (after inspecting `wildland` to avoid duplicating hydrology coverage).
````
