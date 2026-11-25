# Run 04 — Literary Brief, Repetition 2 (`04-literary-r2`)

- **Case & Brief:** [literary-brief.md](../02-company/literary-brief.md)
- **Skill Under Test:** [khai-research/SKILL.md](../../../skills/khai-research/SKILL.md) (with linked [references/sourcebook.md](../../../references/sourcebook.md))
- **Model & Clean-Room Context:** `research` subagent (`Model: "inherit"`, `conversationId: 6f9198c8b373da25a434a1ba2c340a18`), network-isolated read-only sandbox restricted to isolated clean-room `run-04` ([protocol.md](../01-setup/protocol.md))
- **Accessible Materials (`02-company/`-relative inside clean room):** `brief.md`, [index.md](../02-company/index.md), `fixtures/**`, and [sources/MANIFEST.md](../02-company/sources/MANIFEST.md) snapshots

## Verbatim Raw Response

````markdown
# Research Report — Grimm *KHM 15* (*Hänsel und Grethel*, 1857 Bd. 1, p. 79)

## 1. Identification of the Starting Work and Episode

- **Authors:** Jacob and Wilhelm Grimm (*Brüder Grimm*)
- **Work:** Tale no. 15 (*KHM 15*), *„Hänsel und Grethel“* (spelled *„Hänsel und Gretel“* in 1812), in *Kinder- und Haus-Märchen, Band 1*
- **Edition & language at starting URL:** 1857 edition (Göttingen, 1857), Band 1, printed page **79** (`https://de.wikisource.org/wiki/Seite:Kinder_und_Hausm%C3%A4rchen_(Grimm)_1857_I_079.jpg`), original German (no translation); inspected firsthand via the proofread Wikisource transcription pinned at [sources/grimm-1857-bd1-p079.md](sources/grimm-1857-bd1-p079.md).
- **Passage & episode on printed page 79:** The **opening of *KHM 15*** — specifically **the household famine and the parents’ first nighttime bedroom decision to abandon the children in the forest**, followed by the incomplete opening sentence of the children overhearing them:
  1. **Famine premise:** A poor woodcutter lives before a great forest with his wife (*seiner Frau*) and two children, Hänsel and Grethel; when a great dearth/famine (*große Theuerung*) strikes the land, he can no longer provide daily bread.
  2. **Proposal & argument in bed:** Tossing with worry at night, the father asks what will become of them. His wife proposes taking the children at dawn into the thickest part of the forest, lighting a fire, giving each one last piece of bread, going off to their work, and leaving them behind (*„Sie finden den Weg nicht wieder nach Haus und wir sind sie los“*).
  3. **Refusal, coercion, and reluctant consent:** The father refuses out of fear that wild beasts will tear his children apart. The wife calls him a fool (*„O du Narr“*), warns all four will starve and he might as well plane the boards for their coffins (*„du kannst nur die Bretter für die Särge hobelen“*), and badgers him until he consents (*„bis er einwilligte“*), though he still voices pity (*„Aber die armen Kinder dauern mich doch“*).
  4. **Page-break truncation:** The last two lines on p. 79 begin the children’s eavesdropping beat and rename the wife **stepmother** (*die Stiefmutter*), cutting off mid-clause at the bottom of the page: *„Die zwei Kinder hatten vor Hunger auch nicht einschlafen können und hatten gehört was die Stiefmutter zum Vater gesagt“*.

---

## 2. Inspected Sources & Firsthand vs. Indirect Attribution

Cataloged against [sources/MANIFEST.md](sources/MANIFEST.md):

### Inspected Firsthand
1. **Grimm 1857, Band 1, printed page 79 only** — `https://de.wikisource.org/wiki/Seite:Kinder_und_Hausm%C3%A4rchen_(Grimm)_1857_I_079.jpg` ([sources/grimm-1857-bd1-p079.md](sources/grimm-1857-bd1-p079.md)): Verbatim German transcription of p. 79 (`15. Hänsel und Grethel.` through the unfinished sentence introducing *die Stiefmutter*). **Pages `80` onward (`080.jpg`+) were not retrieved or inspected.**
2. **Grimm 1812, 1st edition (*Große Ausgabe*), Band 1, pp. `[49]`–`[58]` + Appendix Notes Band 1 `[IX]` and Band 2 `[LXII]`** — `https://de.wikisource.org/wiki/H%C3%A4nsel_und_Gretel_(1812)` ([sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md)): Complete verbatim German text of *„Hänsel und Gretel“* (Berlin: Realschulbuchhandlung, 1812) and the Grimms’ comparative appendix notes.
3. **Non-Grimm repository snapshots checked for cross-collection verification:** PubMed abstract `15577907` for Stott, Stone & Allen (*Nature*, 2004, `10.1038/nature03089`) at [sources/pubmed-15577907-abstract.md](sources/pubmed-15577907-abstract.md) and the legacy `Clime` reference at [sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md).

### Indirect Attribution Only (Not Inspected Firsthand)
- **Comparative tale analogues summarized inside Grimm’s 1812 appendix notes (`[IX]`, `[LXII]` in [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md)):** French *petit Poucet* / *Daumlingssagen* (including Pollux *pulgarejo* and German seven-children *Daumling*/*Dümmling* ogre, seven-crowns/seven-caps, and seven-league-boots tales), Oberlin’s Lunéville dialect fragment (*Essai sur le patois*), the opening of Giambattista Basile’s *„Nennillo e Nennella“* in the *Pentamerone*, and an oral variant where a wolf sits in the sugar-house instead of the old woman. None of these primary texts are pinned or inspected firsthand.

---

## 3. Prior Coverage Across Existing Plays and Patterns

Checked via [index.md](index.md) and all five fixture Sourcebooks in `fixtures/plays/*` and `fixtures/patterns/*`:

### Relevant Existing Works (Grimm *KHM 15*)
1. **[The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md)** (Play — **Direct** source use)
   - **Cited source & passage:** Grimm *KHM 15*, **1812 edition, pp. 49–50, parents’ decision** (`https://de.wikisource.org/wiki/H%C3%A4nsel_und_Gretel_(1812)`, [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md)).
   - **What it takes:** Directly stages **the exact same opening episode** found on 1857 p. 79 — the parents’ nighttime decision to leave the children in the forest — restricted to `1812, pp. 49–50`.
2. **[Out of the House](fixtures/plays/out-of-the-house/sourcebook.md)** (Play — **Direct** source use)
   - **Cited source & passage:** Grimm *KHM 15*, **1812 edition, closing episode** (`https://de.wikisource.org/wiki/H%C3%A4nsel_und_Gretel_(1812)`, corresponding in [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md) to pp. `[57]`–`[58]`: Gretel shoving the witch into the oven, freeing Hänsel, taking jewels and pearls, and returning home to their grieving father after the mother’s death).
   - **What it takes:** Directly stages the children’s escape and return, scoped strictly to the closing episode.

### Cross-Check of Remaining Patterns and Plays (Direct vs. Pattern-Mediated Coverage & Equivalent Concepts)
- **[Clime](fixtures/patterns/clime/sourcebook.md)** (Pattern — `Direct` on `10.1038/nature03089` / [sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)), **[Heat Benchmark](fixtures/patterns/heat-benchmark/sourcebook.md)** (Pattern — `Direct` on `10.1038/nature03089` / [sources/pubmed-15577907-abstract.md](sources/pubmed-15577907-abstract.md)), and **[The Closed Hall](fixtures/plays/the-closed-hall/sourcebook.md)** (Play — `Via Clime`, reaching `10.1038/nature03089` indirectly through the `Clime` Pattern) all concern climate regimes, extreme-event attribution odds, and threshold exceedances.
- **Finding:** Neither *KHM 15* Play mediates its material through a Pattern (both are `Direct`), and no Pattern or differently named Play in `fixtures/` models household famine triage, marital coercion, or child abandonment. (Sibling composites mentioned in passing inside [sources/chbrain-khai-clime-references.md](sources/chbrain-khai-clime-references.md)—such as `margin`, `wildland`, `undertow`, and `peopling`—are climate/place/mood architecture exclusions, not *KHM 15* coverage, and are not present in `fixtures/`.)

---

## 4. Same Episode Across Editions: `1812 (pp. [49]–[50])` vs. `1857 (p. 79)`

Comparing what [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md) cites (`1812, pp. [49]–[50]`) against the brief’s passage (`1857, p. 79`) shows the same dramatic skeleton with four substantive editorial shifts:

| Dimension | 1812 1st Edition (`pp. [49]–[50]`) | 1857 Edition (`p. 79`) |
| --- | --- | --- |
| **Identity of the wife** | Biological **mother** (*seine Frau* / **die Mutter** at `p. [50]` and throughout `pp. [50]–[58]`). | Introduced as *seiner Frau* / *die Frau*, then explicitly identified as **stepmother** (**die Stiefmutter**) in line 19 of `p. 79`. |
| **Scarcity framing & who speaks first** | Chronic destitution tipping over (*„hatte nichts zu beißen und zu brechen, und kaum das tägliche Brod“*); father tosses silently and **the wife speaks first**. | Triggered by an acute external famine (*„als große Theuerung ins Land kam“*); **the father speaks first**, sighing and asking how they can feed their children. |
| **Stated motive & pretext** | Survival triage: *„wir können sie nicht länger ernähren“* / *„so müssen wir alle miteinander Hungers sterben.“* | Expulsion plus survival triage: adds work pretext (*„gehen wir an unsere Arbeit“*) and *„wir sind sie los.“* |
| **Coercion & closing note** | Plain ultimatum; ends as soon as the father yields (*„bis er Ja sagte“*). | Escalates with verbal scorn and coffin imagery (*„O du Narr ... du kannst nur die Bretter für die Särge hobelen“*); father still protests pity after consenting (*„Aber die armen Kinder dauern mich doch“*). |

---

## 5. Access Limits, Unresolved Source Identities, and Coverage Gaps

1. **1857 edition truncated after p. 79:** Only `079.jpg` is pinned ([sources/grimm-1857-bd1-p079.md](sources/grimm-1857-bd1-p079.md)). It breaks off mid-sentence just as the children overhear the stepmother; all subsequent episodes in the 1857 text (`080.jpg` onward) are uninspected.
2. **Intermediate Grimm editions absent:** Editions between 1812 and 1857 are not in `sources/`, so when the *Mutter* → *Stiefmutter* and rhetorical revisions entered the text cannot be established firsthand from repository snapshots.
3. **Fixture-only Play records & Sourcebook precision gaps:** `fixtures/plays/*` contains synthetic rehearsal `sourcebook.md` files only, without authored Play scripts/Personas/Plots. Two internal scoping ambiguities appear in those Sourcebooks:
   - **[The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md)** is named *The Second Loaf* yet scopes its `Origin` and `Restrictions` strictly to `1812, pp. 49–50` (the **first** abandonment decision), leaving `1812, pp. [52]–[53]` (the **second** nighttime decision over the remaining *halber Laib Brod*) uncited.
   - **[Out of the House](fixtures/plays/out-of-the-house/sourcebook.md)** cites `1812, closing episode` without page numbers (verified firsthand as `pp. [57]–[58]` in [sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md), though whether it begins at the oven confrontation on `p. [57]` or the post-oven escape/return on `pp. [57]–[58]` is unspecified).
4. **Unresolved analogue citations:** The parallel European tale traditions referenced in the 1812 appendix (`[IX]`, `[LXII]`) lack primary source snapshots and remain indirect references only.
5. **Unadapted narrative spans of *KHM 15* (verified in `1812, pp. [50]–[57]`):** Between [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md) (`pp. 49–50`) and [Out of the House](fixtures/plays/out-of-the-house/sourcebook.md) (`pp. 57–58`), nothing in the collection adapts:
   - **Nighttime eavesdropping & pebble-gathering, first abandonment, and moonlight return** (`1812, pp. [50]–[52]`).
   - **The second famine crisis, precedent-bound complicity, and the locked door** (`1812, pp. [52]–[53]`): half a loaf left; the father thinks sharing the last bite would be better, *„weil er es aber einmal gethan hatte, so durfte er nicht nein sagen“*; the mother locks the door so Hänsel cannot gather pebbles.
   - **The bread-crumb trail eaten by birds & three days lost in the forest** (`1812, pp. [53]–[54]`).
   - **The bread/cake/sugar house snare and four-week captivity/fattening regime** (`1812, pp. [54]–[57]`): seductive hospitality turning into cage and forced kitchen labor, Hänsel’s bone-for-finger ruse, and Gretel forced to carry and boil the water for her brother’s slaughter up to the oven crisis.

---

## 6. What a New Treatment Would Add & Recommendation

### What a New Treatment Would Add
- **Scoped strictly to 1857 p. 79 alone:** A treatment restricted to p. 79 adds **no new plot episode** beyond [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md); what it changes is **household alignment and rhetoric** — shifting biological-parent triage (*die Mutter*, 1812) into step-parental expulsion (*die Stiefmutter*, *„wir sind sie los“*, 1857), framing scarcity as an acute land-wide shock (*große Theuerung*), giving the father the opening lament and lingering post-consent pity, and sharpening the wife’s coercion with coffin-planing ridicule. Because p. 79 cuts off mid-sentence, even the children’s overheard reaction cannot be grounded cleanly in 1857 without retrieving p. 80+.
- **Beyond the already-staged endpoints of *KHM 15*:** Using the complete 1812 text ([sources/grimm-1812-khm15.md](sources/grimm-1812-khm15.md)), a new work can add genuinely unstaged dramatic mechanisms: **sunk-cost / precedent-trapped compliance** in the second parental decision (`1812, pp. [52]–[53]`, where having yielded once strips the father of refusal while the mother locks the door against Hänsel’s counter-move), **asymmetric sibling foresight and ration-sharing** across the pebble vs. crumb treks (`pp. [50]–[54]`), or **coerced complicity and deception under captivity** in the witch’s house (`pp. [54]–[57]`).

### Recommendation
1. **If the brief only needs the opening parental abandonment decision:** **Reuse or extend [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md)** rather than authoring a separate Play on the same bedroom pact.
   - **Reuse [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md)** as-is if biological-parent famine triage (`1812, pp. 49–50`) satisfies the dramatic brief.
   - **Extend [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md)** if you want either (a) the 1857 p. 79 rhetorical texture (acute *Theuerung*, coffin-boards taunt, explicit lingering pity) or (b) the two-stage escalation across **both** parental decisions by pairing `1812, pp. [49]–[50]` with `1812, pp. [52]–[53]` (resolving the existing title/scope tension in *The Second Loaf*), updating its Sourcebook `Origin`, `Restrictions`, and `Encoding`.
2. **Author a distinct treatment only if** the Play’s dramatic engine diverges structurally from [The Second Loaf](fixtures/plays/the-second-loaf/sourcebook.md) and [Out of the House](fixtures/plays/out-of-the-house/sourcebook.md):
   - **Kinship-wedge variant (1857):** The Play specifically stages **step-family vs. blood-kin coalition fracture** (*Stiefmutter* vs. biological father and children), which contradicts 1812’s biological *Mutter* (retrieve `1857, pp. 80+` first if staging past the bedtime pact); **or**
   - **Unadapted middle episodes (`1812, pp. [50]–[57]`):** Stand-alone staging of the **second decision & locked-door countermeasure** (`pp. [52]–[53]`), the **two forest trails** (`pp. [50]–[54]`), or the **bread-house captivity and bone-trick regime** (`pp. [54]–[57]`).

Whichever path the author chooses, record the exact inspected edition(s), page boundaries (especially the p. 79 cutoff if 1857 is used), and authored choices in the work’s Sourcebook (`Line of Work`, `Origin`, `Restrictions`, `Encoding`).
````
