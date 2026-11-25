# Run 03 — Literary Brief, Repetition 1 (`03-literary-r1`)

- **Case & Brief:** [literary-brief.md](../02-company/literary-brief.md)
- **Skill Under Test:** [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md) (with linked [references/sourcebook.md](../../../references/sourcebook.md))
- **Model & Clean-Room Context:** `research` subagent (`Model: "inherit"`, `conversationId: 3c0baa1a28c1dfc3648896f1071716e1`), network-isolated read-only sandbox restricted to isolated clean-room `run-03` ([protocol.md](../01-setup/protocol.md))
- **Accessible Materials (`02-company/`-relative inside clean room):** `brief.md`, [index.md](../02-company/index.md), `fixtures/**`, and [sources/MANIFEST.md](../02-company/sources/MANIFEST.md) snapshots

## Verbatim Raw Response

````markdown
# Research Report — Grimm KHM 15 (*Hänsel und Grethel*, 1857 Band 1, p. 79)

## 1. Identification of the External Work, Edition, and Episode

- **Authors:** Brüder Grimm (Jacob and Wilhelm Grimm)
- **Work:** *Kinder- und Haus-Märchen*, Tale No. 15: *„Hänsel und Grethel.“* (standard tale identifier: **Grimm KHM 15**; spelled *Hänsel und Gretel* in 1812 and *Hänsel und Grethel* in 1857)
- **Edition & Page in the Brief:** *Kinder- und Haus-Märchen Band 1* (Göttingen, 1857 — 7th *Große Ausgabe*), **printed page 79**, original German text (proofread Wikisource transcription of scan `Kinder_und_Hausmärchen_(Grimm)_1857_I_079.jpg`, inspected firsthand at [sources/grimm-1857-bd1-p079.md](sources/grimm-1857-bd1-p079.md)).
- **Episode on Printed Page 79:** The **opening famine and abandonment-decision episode** of *Hänsel und Grethel*, breaking off mid-sentence at the foot of the page as the sleepless children overhear what is said:
  1. During a severe famine (*große Theuerung*), a poor woodcutter living before a great forest with his wife and two children (Hänsel and Grethel) can no longer provide daily bread and laments aloud in bed at night (*„was soll aus uns werden? wie können wir unsere armen Kinder ernähren, da wir für uns selbst nichts mehr haben?“*).
  2. His wife proposes taking the children at dawn into the thickest part of the forest, lighting a fire, giving each a small piece of bread, and leaving them behind while going to work so they cannot find their way home.
  3. The father refuses at first, fearing wild beasts will tear his children apart (*„die wilden Thiere würden bald kommen und sie zerreißen“*).
  4. The wife berates him (*„O du Narr, … dann müssen wir alle viere Hungers sterben, du kannst nur die Bretter für die Särge hobelen“*) and gives him no peace until he consents, though he still voices pity (*„Aber die armen Kinder dauern mich doch“*).
  5. The final two lines on p. 79 introduce the children awake from hunger and overhearing—cutting off mid-sentence at the page boundary: *„Die zwei Kinder hatten vor Hunger auch nicht einschlafen können und hatten gehört was die Stiefmutter zum Vater gesagt“*.

---

## 2. Inspected Sources: Firsthand Reading vs. Indirect Attribution

| Source | Local Snapshot / File | Scope Actually Inspected (Firsthand) | Uninspected / Indirectly Attributed Material |
| --- | --- | --- | --- |
| Brüder Grimm, *Kinder- und Haus-Märchen Band 1* (Göttingen, 1857), KHM 15 *„Hänsel und Grethel“*, p. 79 (`https://de.wikisource.org/wiki/Seite:Kinder_und_Hausm%C3%A4rchen_(Grimm)_1857_I_079.jpg`) | [sources/grimm-1857-bd1-p079.md](sources/grimm-1857-bd1-p079.md) | **Firsthand:** Verbatim transcription of printed page `79` only (title, opening household crisis, parents’ argument and father’s reluctant consent, and truncated first clause of the children overhearing the *Stiefmutter*). | **Not inspected (access limit):** Pages `080.jpg` onward of the 1857 edition were not retrieved ([sources/MANIFEST.md](sources/MANIFEST.md)). None of the remainder of KHM 15 in the 1857 wording can be verified firsthand. |
| Brüder Grimm, *Kinder- und Haus-Märchen Band 1, Große Ausgabe*, 1. Auflage (Berlin: Realschulbuchhandlung, 1812), KHM 15 *„Hänsel und Gretel“*, pp. `[49]`–`[58]` + appendix notes (`https://de.wikisource.org/wiki/H%C3%A4nsel_und_Gretel_(1812)`) | [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md) | **Firsthand:** Complete 1812 1st-edition text of KHM 15 (`[49]`–`[58]`) plus the Grimms’ appendix notes `Anhang Band 1 [IX]` and `Anhang Band 2 [LXII]`. | **Indirect attribution only (in the Grimms’ notes `[IX]` & `[LXII]`, primary texts not in `sources/`):** Related *Däumlingssagen* and French *le petit poucet*; Oberlin’s Lunéville dialect piece (*Essai sur le patois*); German seven-child *Däumling* / *Menschenfresser* variants (seven crowns/red caps, seven-league boots); the opening of *Nennillo e Nennella* in Basile’s *Pentamerone*; and an oral variant where a wolf replaces the old woman in the sugar-house. |
| Stott, Stone & Allen, *Nature* 432:610–614 (2004), `10.1038/nature03089` (`https://pubmed.ncbi.nlm.nih.gov/15577907/#abstract`) & legacy `Clime` `REFERENCES.md` | [sources/pubmed-15577907-abstract.md](sources/pubmed-15577907-abstract.md), [sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md) | **Firsthand (checked during cross-Pattern/Play sweep):** PubMed abstract/metadata and legacy `Clime` Sourcebook. Confirmed unrelated to Grimm KHM 15. | Full *Nature* article body and other meteorology/climate papers cited in `Clime` (`Lorenz`, `Hasselmann`, `Köppen`, `Milanković`, `Allen 2003`, `NASEM 2016`) are not included in `sources/`. |

### Cross-Edition Comparison of the Opening Episode (`1812, pp. [49]–[50]` vs. `1857, p. 79`)

Comparing the two firsthand Grimm snapshots reveals substantive editorial revisions in the exact scene on page 79:
1. **Mother (*Mutter*) → Stepmother (*Stiefmutter*):** In the 1812 1st edition (`[49]`–`[50]`, and throughout `[51]`–`[58]`), the woman proposing abandonment is the children’s own mother (*seine Frau* / *die Mutter*: *„hatten alles gehört, was die Mutter zum Vater gesagt hatte“*). In 1857 (`p. 79`, line 19), after introducing her as the woodcutter’s *Frau*, the narrator explicitly names her *die Stiefmutter* (*„was die Stiefmutter zum Vater gesagt“*).
2. **Expanded Famine Framing & Dialogue:** In 1812 (`[49]`), the woodcutter tosses silently in bed until his wife speaks first. In 1857 (`p. 79`), a general famine strikes the land (*„als große Theuerung ins Land kam“*) and the father speaks first in anguish (*„was soll aus uns werden?…“*).
3. **Coercive Rhetoric & Lingering Pity:** Where 1812 (`[50]`) has the wife warn simply *„Wenn du das nicht thust … so müssen wir alle miteinander Hungers sterben“* until he says *„Ja“*, 1857 (`p. 79`) sharpens her rebuke (*„O du Narr, … dann müssen wir alle viere Hungers sterben, du kannst nur die Bretter für die Särge hobelen“*) and appends the father’s post-consent sorrow (*„Aber die armen Kinder dauern mich doch“*).

---

## 3. Prior Coverage Across Plays and Patterns

Using the derived lookup index ([index.md](index.md)) and inspecting every fixture Sourcebook in `fixtures/plays/*` and `fixtures/patterns/*`:

### Relevant Existing Plays (Direct Source Use of Grimm KHM 15)

1. **[The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md)**
   - **Recorded Origin & Relationship:** `Grimm KHM 15 · 1812, pp. 49–50, parents’ decision · Direct` (links to `Hänsel_und_Gretel_(1812)`, pinned at [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md)).
   - **Recorded Scope & Encoding:** Restricted to the cited passage (`1812, pp. 49–50`); *“Stages the parents’ decision to leave the children in the forest.”*
   - **Comparison to `1857, p. 79`:** **Adapts the exact same narrative episode across an earlier edition.** Both `1812, pp. 49–50` and `1857, p. 79` cover the parents’ first nighttime famine argument and the father’s reluctant consent to abandon the children in the forest. Because *The Second Loaf* is anchored to the 1812 text, it inherits the biological *Mutter* framing and terser bargaining rather than 1857’s *Stiefmutter* framing, coffin-boards taunt, and explicit paternal lament. *(Note also an internal title/citation tension in this fixture: its title is “The Second Loaf,” yet its Origin and Restrictions bind it strictly to `1812, pp. 49–50`—the **first** abandonment decision—rather than `1812, p. [52]`, where the second abandonment is argued over the last half-loaf of bread.)*

2. **[Out of the House](fixtures/plays/out-of-the-house/sourcebook.md)**
   - **Recorded Origin & Relationship:** `Grimm KHM 15 · 1812, closing episode · Direct` (links to `Hänsel_und_Gretel_(1812)`, pinned at [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md)).
   - **Recorded Scope & Encoding:** Restricted to the 1812 closing episode (corresponding to pp. `[57]`–`[58]` in [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md): Gretel pushing the witch into the oven, freeing Hänsel, taking the pearls and jewels, and returning to their father, with the mother having died); *“Stages the children’s escape and return.”*
   - **Comparison to `1857, p. 79`:** Covers the opposite bookend of KHM 15 (resolution rather than opening crisis), also from the 1812 edition.

### Checked Patterns and Pattern-Mediated Plays (Non-Overlapping)

- **[Clime](fixtures/patterns/clime/sourcebook.md)** (`Direct` use of `10.1038/nature03089` via [sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)) and **[Heat Benchmark](fixtures/patterns/heat-benchmark/sourcebook.md)** (`Direct` use of `10.1038/nature03089` via [sources/pubmed-15577907-abstract.md](sources/pubmed-15577907-abstract.md)): Climate-regime / extreme-heat exceedance Patterns; no overlap with Grimm KHM 15. (While `Clime`’s legacy reference mentions a `margin` composite for resource reserve depletion, `margin` is not present among `fixtures/patterns/*`, and neither Grimm Play uses a Pattern.)
- **[The Closed Hall](fixtures/plays/the-closed-hall/sourcebook.md)** (`Via Clime`, indirect Pattern-mediated use of `10.1038/nature03089`): Stages a company disputing what a single flood implies about a standing climate regime; no overlap with KHM 15.

---

## 4. Coverage Gaps, Unresolved Source Identities, and Access Limits

1. **Page-break truncation of the 1857 source (`p. 79` only):** [sources/grimm-1857-bd1-p079.md](sources/grimm-1857-bd1-p079.md) ends mid-sentence (*„… was die Stiefmutter zum Vater gesagt“*). Pages `080.jpg` onward of the 1857 edition are unavailable in `sources/`. Consequently, we cannot verify firsthand from the 1857 edition how the children react on p. 80, whether later scenes alternate between *Frau*, *Mutter*, and *Stiefmutter*, or what later 1857 episodes (such as the return journey) add or alter relative to 1812.
2. **Uninspected intermediate editions (1815–1850):** Only the 1st (1812) and p. 79 of the 7th (1857) editions are present, so the exact intermediate edition in which *Mutter* shifted to *Stiefmutter* cannot be established from the inspected files.
3. **Minimal fixture Sourcebooks & title/passage ambiguity:** Neither [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md) nor [Out of the House](fixtures/plays/out-of-the-house/sourcebook.md) includes authored Play scripts beyond its 18-line synthetic Sourcebook; *The Second Loaf*’s title gestures toward the second bread-shortage crisis (`1812, p. [52]`), whereas its `Origin` explicitly cites `1812, pp. 49–50` (the first crisis), and *Out of the House* cites `1812, closing episode` without exact page numbers.
4. **Uninspected comparative variants:** Parallel folktales cited in the 1812 appendix notes (*Le Petit Poucet*, Basile’s *Nennillo e Nennella*, Oberlin’s patois fragment, seven-sibling *Däumling* tales, and the wolf-in-the-sugar-house variant) were not inspected firsthand.

---

## 5. What a New Treatment Would Add & Recommendation

### What Would Be Added?

- **If scoped strictly to the passage on `1857, p. 79`:**
  - **At the plot/episode level:** Nothing new—the parents’ nighttime famine deliberation and decision to abandon the children in the forest is **already staged** in [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md).
  - **At the relational and rhetorical level (1857 vs. 1812):** It would contribute **only the 1857 editorial recast of that decision**: replacing the biological mother with a **stepmother** (*Stiefmutter*, changing a two-parent starvation pact into a blended-household expulsion), giving the father the opening lament under *große Theuerung* and lingering spoken pity after yielding, and introducing the stepmother’s coffin-planing taunt (*„du kannst nur die Bretter für die Särge hobelen“*). Because p. 79 cuts off mid-sentence, even the children’s eavesdropping response cannot be completed from `1857, p. 79` alone.
- **If using KHM 15 to stage episodes not yet covered between the two existing Plays (verified firsthand in `1812, pp. [50]–[57]`):**
  - The entire **middle body of KHM 15** between [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md) (`1812, pp. 49–50`) and [Out of the House](fixtures/plays/out-of-the-house/sourcebook.md) (`1812, closing episode`) is **unadapted** in `fixtures/`:
    - The children overhearing, Hänsel’s moonlight pebble trail, the first forest abandonment, and their return (`1812, pp. [50]–[52]`);
    - The **actual second abandonment decision** over the remaining half-loaf (*„nur noch ein halber Laib Brod im Haus“*), where the father feels bound by having yielded once (*„weil er es aber einmal gethan hatte, so durfte er nicht nein sagen“*), the locked door prevents pebble-gathering, birds eat the breadcrumbs, and the children wander three days (`1812, pp. [52]–[54]`);
    - Arrival at the bread/cake/sugar house, the witch’s trap, Hänsel’s four-week caging and bone-trick, and Gretel’s forced kitchen labor (`1812, pp. [54]–[56]`).

### Recommendation

1. **Primary Recommendation — Reuse or Extend [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md) (do not author a redundant standalone Play solely from `1857, p. 79`):**
   - **Reuse** [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md) if the brief only requires staging the parents’ nighttime decision under famine to leave the children in the forest; that episode is already directly covered via `Grimm KHM 15 (1812, pp. 49–50)`.
   - **Extend** [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md) if the Playwright specifically needs the **1857 characterization and rhetoric** (the *Stiefmutter* vs. biological father dynamic, the coffin-boards speech, and the father’s post-consent pity), recording [sources/grimm-1857-bd1-p079.md](sources/grimm-1857-bd1-p079.md) in its Sourcebook `Origin` and `Encoding` while keeping `Restrictions` explicit that only page 79 of 1857 was inspected (or extending its 1812 scope to `p. [52]` if the Play is meant to include the second half-loaf decision implied by its title).
2. **When a Distinct Treatment Is Warranted:**
   - Author a **distinct Play** only if **(a)** the dramatic premise specifically turns on the **stepmother/father split household** of `1857, p. 79` in contrast to *The Second Loaf*’s two-parent 1812 framing (retrieving `1857, p. 80+` first if the children’s overheard reaction is staged from 1857), **or (b)** page 79 served merely to identify KHM 15 and the new work targets the **unadapted middle episodes**—such as the locked-door second abandonment and lost breadcrumb trail (`1812, pp. [52]–[54]`) or the bread-house captivity and bone-trick (`1812, pp. [54]–[56]`)—retrieving `1857, pp. 80ff.` first if the 1857 text rather than [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md) is to be used.

Whichever option the Playwright chooses, record the inspected edition(s), exact page boundaries, edition-specific choices (*Mutter* vs. *Stiefmutter*), and the p. 79 truncation limit in the work’s Sourcebook (`Line of Work`, `Origin`, `Restrictions`, and `Encoding`).
````
