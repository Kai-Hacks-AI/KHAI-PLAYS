# Locked Run Settings & Pre-Execution Record — Sourcebook Rehearsal

Locked before launching any reviewer run at branch tip `9a76f177c4f708dce763b04d3c389b84b0172ebb` (`opera-sourcebook-rehearsal`, incorporating merged PR #25 baseline `3c93faece59162b082fd3b50f31aabbcbdd4615b`), implementing [01-setup/README.md](README.md).

---

## 1. Execution Environment & Identical Source-Access Conditions

- **Reviewer agent type & model:** Fresh, read-only `research` subagent contexts (`TypeName: "research"`, `Model: "inherit"`, `Workspace: "inherit"`), running in a network-isolated read-only sandbox with identical instructions and budget across all eight runs.
- **Clean-room context isolation:** Each reviewer `run-01`..`run-08` receives access **only** to its isolated run folder (`reviewer-brief.md` + `packet.md`) and a shared read-only snapshot directory holding the exact accessible files linked from the packet—never seeing [01-setup/README.md](README.md), the predeclared scoring key, [references/sourcebook.md](../../../references/sourcebook.md), the opposite condition’s packet, or any sibling run.
- **Linked source accessibility (held 100% identical across both Condition A and Condition B):**
  1. `ChBrain/khai` `packages/khai-arch/defaults/pitch.md` at `c8c56c7e843eac2eb33709d06ad1d7aca4dd8c00` — **Accessible** (`sha256: af979423ef8f6df209360da7d3cdea715c812dbfe0ce12c20a6c94b40db4ea14`).
  2. `https://doi.org/10.1017/S0266464X11000455` (Phillip B. Zarrilli, *New Theatre Quarterly*, Cambridge Core redirect behind Cloudflare/paywall) — **Inaccessible in full text** across all eight runs (`research` sandbox has no external web access, and Cambridge Core redirects behind Cloudflare). Reviewers are given the identical mapping of accessible snapshot paths and instructed to note any inaccessible external link rather than guessing unseen text.
  3. `Kai-Hacks-AI/KHAI-PLAYS` `playmaking/opera/rehearsals/pitch/03-observations/README.md` at `068605d97afa13f6ff07d7cb74ada52c92a61474` — **Accessible** (`sha256: f8601f9db6ea9d5afb76bd8848b121b01613a69fe70da477a14c1633c2c242ec`).
  4. `Kai-Hacks-AI/KHAI-PLAYS` `playmaking/opera/rehearsals/mixed-pitch/03-observations/README.md` at `3c93faece59162b082fd3b50f31aabbcbdd4615b` — **Accessible** (`sha256: 2bdc853e972fab520b13ad1796f09bf2125ef3834fd48b6f148c8f7d75c222a0`).
  5. `Kai-Hacks-AI/KHAI-PLAYS` `playmaking/opera/rehearsals/mixed-pitch/05-evolution/README.md` at `3c93faece59162b082fd3b50f31aabbcbdd4615b` — **Accessible** (`sha256: 2c37d8a5305a5aeb3d19d2b022614285e0a85a7529234f13165f608d17b98859`).
  6. `Kai-Hacks-AI/KHAI-PLAYS` `playmaking/opera/skills/khai-playwright/references/pitch-defaults.md` (`#standard-tenors` and `#several-pitches-in-one-scene`) at `3c93faece59162b082fd3b50f31aabbcbdd4615b` — **Accessible** (`sha256: 6d6e7e761d48b272c209615c03a3963eae18ea291f4d97c53276feffb972143e`).

---

## 2. Predeclared Eight-Run Order (`A, B, B, A, B, A, A, B`) & Blind Mixed-Order Scoring Plan

| Slot | Condition | Assigned Packet | Saved Verbatim Output | Blind Scorer Shuffle Label |
| --- | --- | --- | --- | --- |
| `01` | **A** | [plain-notes.md](../02-company/plain-notes.md) | `../04-runs/01-run-a1.md` | `blind-02` |
| `02` | **B** | [sourcebook.md](../02-company/sourcebook.md) | `../04-runs/02-run-b1.md` | `blind-04` |
| `03` | **B** | [sourcebook.md](../02-company/sourcebook.md) | `../04-runs/03-run-b2.md` | `blind-01` |
| `04` | **A** | [plain-notes.md](../02-company/plain-notes.md) | `../04-runs/04-run-a2.md` | `blind-06` |
| `05` | **B** | [sourcebook.md](../02-company/sourcebook.md) | `../04-runs/05-run-b3.md` | `blind-07` |
| `06` | **A** | [plain-notes.md](../02-company/plain-notes.md) | `../04-runs/06-run-a3.md` | `blind-03` |
| `07` | **A** | [plain-notes.md](../02-company/plain-notes.md) | `../04-runs/07-run-a4.md` | `blind-08` |
| `08` | **B** | [sourcebook.md](../02-company/sourcebook.md) | `../04-runs/08-run-b4.md` | `blind-05` |

- **Save before scoring:** All eight raw reviewer responses are written verbatim to `04-runs/` before any scoring occurs.
- **Mixed-order unlabeled scoring:** Unlabeled verbatim copies (`blind-01.md`..`blind-08.md` in the predeclared permutation `[03, 01, 06, 02, 08, 04, 05, 07]`, without redacting self-revealing prose inside responses so condition-reveal rates can be audited directly) are passed to a fresh independent `research` scorer subagent alongside the predeclared 8-point rubric, then reconciled item-by-item with a second independent scoring pass to log any scoring disagreements.
- **Rerun log ([01-setup/README.md](README.md#L13)):** Initial Slot `07` (`f7fa9c1d66497960f7310198b3e354d5`, Condition A) completed immediately before a conversation context compaction truncated its unsaved body prior to disk persistence; per [01-setup/README.md](README.md#L13), that loss was logged and Slot `07` was rerun once in a fresh isolated `research` context (`8d9c69601747c686cf66900fe5183ba9`, saved verbatim to [07-run-a4.md](../04-runs/07-run-a4.md)) before any scoring began. No other deviations.
