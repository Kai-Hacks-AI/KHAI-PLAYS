---
id: delivery/CTL2
title: verify Scope
description: Identify which folders a proposed change touches and whether it uses the matching repertoire route.
type: detective
status: implemented
has: [delivery/I1]
evidence: [fixture:1, merge:1, provoked:1:fail]
---

# verify Scope

The [checker](../../check.mjs) evaluates the proposed merge. The [pre-push hook](../../hooks/pre-push) gives guidance from local commits. Run the [fixture cases](../../check.test.mjs) before seeking live evidence on the new playmaking route.

