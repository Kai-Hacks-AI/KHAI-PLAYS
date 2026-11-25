# Research lookup for Patterns and Plays

Build a shared index from the source-use records in each Pattern’s and Play’s Sourcebook. The author owns the record of what their work takes from a source. Generate the index from those records so a correction to LORE can flow into lookup results.

## Source and use

A source record identifies the underlying work, the edition or translation actually consulted when relevant, and the passage or section used when known. Use a stable identifier such as a DOI or edition URI where available. Preserve the citation and access status when a source cannot be inspected. Keep uncertain identity matches available for review.

A use record links the source to the Pattern or Play. Record what the author takes from it, the limits on the use, and where it becomes an authored choice. A Pattern can use several works and one work can support several Patterns. A Play can adapt an episode or motif from a source and can also use several Patterns. Those Patterns have their own Sourcebooks.

For a composed Pattern, record the constituent Pattern links and any direct sources that support the added relationship. For a Play, record direct source adaptations and the Patterns it uses. Derived results should identify the intervening Pattern so a reviewer can tell whether the Playwright consulted the underlying work firsthand.

## Look up coverage

- From a source, list the Patterns and Plays that use it, the passage or episode each uses, and the corresponding LORE and authored choices.
- From a Pattern or Play, show its recorded sources and the sources reached through its dependencies, with the path.
- From a claim, theme, episode, or motif, suggest related treatments and explain why they might overlap. Exact source identity and passage matches are computable. Judging whether two treatments cover the same idea remains an authoring decision.

Run the lookup before committing to a new work. Record which prior work the author would reuse or extend, or what a distinct treatment would add. Shared sources can support distinct treatments. An empty lookup result means the indexed records yielded no candidate.

Keep the first rehearsal independent of a storage format or search service. Derive a small lookup table from the fixture Sourcebooks and use it to test which relationships and distinctions have to survive any later implementation.
