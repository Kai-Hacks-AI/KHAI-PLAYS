# Founding

**Mode** External

KHAI PLAYS needed a delivery policy that keeps delivery infrastructure independent of Play changes and moves one Play at a time. Founding used KAAL guidance and implemented enforcement with repository code and GitHub.

| Delivery need | KAAL capability or gap | Founding decision and evidence |
| --- | --- | --- |
| Define the control and prove it works | Controls distinguishes the directive, detective check, preventive gate and corrective action. Engineering CTL2 illustrates testing a pass and a deliberate refusal. | The repository checker reports the verdict and GitHub requires it. GitHub blocked [the deliberate mixed Delivery and Play PR](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/2). |
| Evaluate a change with accepted policy | MOVE describes using accepted policy to judge proposed changes. Guard can load designated trusted files from the base commit. | GitHub Actions runs the checker from the accepted target after Founding. Founding uses its proposed checker under Owner review because the initial base has no checker. |
| Verify the Opening source and proposed merge | Guard documents the candidate commit, base commit and base ref. Its documented inputs omit the PR source ref and the source and target repository identities needed to recognise this repository's matching repertoire. | GitHub Actions reads the PR event directly. The checker verifies the expected parents of GitHub's proposed merge and checks its delta against the base. Before embedding Guard, verify that it can supply those facts and run the check against the same merge candidate. |
| Enforce the verdict | Guard can run a check and report a verdict. GitHub owns the merge decision. | GitHub rulesets require approval and the Actions check on both Rehearsal and Opening. The failed required check on PR #2 demonstrated enforcement on `main`. Keep GitHub as the enforcement point when evaluating a KAAL runner. |
| Establish that Rehearsal happened | Opening needs provenance if prior Rehearsal becomes an enforced precondition. The current check establishes the source ref, repository identity and Play scope. | Starting the repertoire at current `main` and rehearsing before Opening are working conventions. A future control would need evidence that the candidate passed a merged Rehearsal for that Play. |
| Assess shared Solution package impact | Change isolation assesses the supplied ownership and dependency model. KHAI PLAYS has yet to define that model for shared Solution packages. | Founding checks paths and routes. Evaluate change isolation when shared packages and their dependencies are represented. |

Embedded evaluation is pending availability of the relevant KAAL packages on npmjs.

[Controls](https://github.com/Kai-Hacks-AI/KAAL/blob/main/packages/kaal-controls/skills/kaal-controls/SKILL.md) · [Engineering CTL2](https://github.com/Kai-Hacks-AI/KAAL/blob/main/engineering/14-operations/controls/CTL2-verify-layout/CTL2.md) · [MOVE](https://github.com/Kai-Hacks-AI/KAAL/blob/main/engineering/MOVE.md) · [Guard](https://github.com/Kai-Hacks-AI/KAAL/blob/main/packages/kaal-guard/README.md) · [Change isolation](https://github.com/Kai-Hacks-AI/KAAL/blob/main/packages/kaal-change/README.md)
