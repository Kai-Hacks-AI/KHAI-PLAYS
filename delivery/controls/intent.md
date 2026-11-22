# delivery/I1 Move one Solution folder

Deliver each Play or playmaking unit independently, while giving agents feedback early and keeping the merge decision on GitHub.

## Requirements

- A Solution change stays within one `plays/<play>/` or `playmaking/<unit>/` folder. Any npm manifest and lockfile travel with that folder.
- Rehearsal and Opening use the repertoire derived from that folder. Delivery infrastructure moves separately through Rigging.
- GitHub requires the Delivery route verdict and approval for merges into protected targets. Missing merge evidence cannot pass the check.

## Architecture

The [route definitions](../README.md#routes) state the ownership rules. The [checker](../check.mjs) evaluates the folder and route. The [pre-push hook](../hooks/pre-push) gives local guidance, and the [Delivery workflow](../../.github/workflows/delivery.yml) checks GitHub's proposed merge using the accepted target checker. The existing GitHub rulesets enforce the verdict and approval. The [fixture cases](../check.test.mjs) exercise the shared scope logic.
