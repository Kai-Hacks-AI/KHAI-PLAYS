---
id: delivery/CTL5
title: restore Folders
description: Restore affected folders through their own delivery routes.
type: corrective
status: designed
has: [delivery/I1]
---

# restore Folders

If an out-of-scope change reaches `main`, revert the affected changes through separate PRs, one per folder. If a repertoire is contaminated, preserve the intended changes on a recovery ref, recreate the repertoire from `main`, and rehearse again.

