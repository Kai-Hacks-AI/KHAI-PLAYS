---
format: 4L
---
Account of: I implemented the one-folder delivery controls, the local hook, and the control inventory in [Rigging PR #5](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/pull/5).

## Liked
- subject: Candidate fixture tests on the Rigging PR
  keeps: The workflow exercised the candidate checker while the accepted checker still judged the Rigging merge. The [run](https://github.com/Kai-Hacks-AI/KHAI-PLAYS/actions/runs/45054914643) gave us evidence for both steps within the Delivery route job.

## Learned
- subject: Lockfiles belong to an npm project root
  source: [npm’s lockfile documentation](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json/) explains that a package-lock file applies at its project root. Independently installed projects can each own a lockfile in the same Git repository.

## Lacked
- subject: A convention for deriving shared Solution routes
  decision-point: I was deciding how the Dramaturgy package should reach main.
  cost: I first proposed registering the package individually, then suggested a direct route to main. The Owner corrected both directions before we settled on deriving a repertoire branch from the folder and keeping both merge steps.
  findable: no
  address: Skill

## Longed For
None raised.

Decisions: none made, the owner decides.
