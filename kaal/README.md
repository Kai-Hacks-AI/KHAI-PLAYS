# KAAL observations

KHAI PLAYS is the Solution. KAAL supplies delivery knowledge and mechanics. This directory records what helped us implement KHAI PLAYS and what we learned about the delivery mechanics KAAL would need to provide.

- **External mode** uses KAAL as a source of delivery knowledge and implements the mechanics independently. Record the reasoning each time we choose an implementation outside KAAL.
- **Embedded mode** uses KAAL packages published to npmjs. Record the package and version, what it handled, and any mechanics that still needed separate implementation. Founding used external mode.

Write observations as soon as there is a finding, including when a delivery check refuses a change. KAAL and contributors can open an observation-only Rigging PR independently of the work being observed. That PR follows the usual review and merge requirements for `main`.

## Record format

Use a Markdown file in `observations/` with a short lowercase hyphenated name. Group related findings by the work that produced them. Record the mode and, for each finding, capture the delivery need, what KAAL offered, the missing mechanic or prerequisite, the implementation used, and the observed result. Link to the source or evidence and state what would justify embedding the relevant package.

- [Founding](observations/founding.md)
