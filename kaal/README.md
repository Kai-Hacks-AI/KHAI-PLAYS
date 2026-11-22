# KAAL observations

This directory records what we learn by applying KAAL to [KHAI PLAYS delivery](../delivery/README.md). The observations explain which capabilities helped, where we needed repository-specific mechanics, and what evidence would justify switching to an embedded KAAL package. The active delivery rules and checker live in `delivery/`.

## Rigging retrospectives

The agent who performed the work writes one KAAL 4L for each Rigging PR. Capture detours while working and write the retrospective once the PR lands. Store it as `observations/retro-pr-<number>.md`, link the PR in `Account of:`, and link related capability findings where useful. Observation-only Rigging PRs include their own 4L before review, so recording a retrospective does not create a new follow-up each time.

Use [KAAL’s 4L format](https://github.com/Kai-Hacks-AI/KAAL/blob/main/packages/kaal-retro/skills/kaal-retro/references/4l.md). Run `judge-retro.mjs` from the KAAL source checkout to verify the format. Retrospectives record the agent’s observations for the Owner to consider.

- [PR #5 4L](observations/retro-pr-5.md)

## Modes

- **External mode** uses KAAL as a source of delivery knowledge and implements the mechanics independently. Record the reasoning each time we choose an implementation outside KAAL.
- **Embedded mode** uses KAAL packages published to npmjs. Record the package and version, what it handled, and any mechanics that still needed separate implementation. Founding used external mode.

Write observations as soon as there is a finding, including when a delivery check refuses a change. KAAL and contributors can open an observation-only Rigging PR independently of the work being observed. That PR follows the usual review and merge requirements for `main`.

## Record format

Use a Markdown file in `observations/` with a short lowercase hyphenated name. Group related findings by the work that produced them. Record the mode and, for each finding, capture the delivery need, what KAAL offered, the missing mechanic or prerequisite, the implementation used, and the observed result. Link to the source or evidence and state what would justify embedding the relevant package.

- [Founding](observations/founding.md)
