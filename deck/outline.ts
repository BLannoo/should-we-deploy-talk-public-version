// Section names + slide short-titles for this deck.
//
// `deck/slides/` is a pool of slides and this deck's entry file is a selection from it,
// declaring which outline it uses via a `deck:` key in its headmatter. A slide's position
// is supplied at the `src:` include site, so slides carry no deck-specific ordering.
//
//   short - the terse label for the footer rail (deck/slide-bottom.vue) and the agenda
//           roadmap (deck/components/SectionRoadmap.vue), where horizontal space is tight.
//   long  - the fuller phrasing for the "Where we are" checkpoints
//           (deck/components/SectionCheckpoint.vue), which have room for a sentence.
//
// This repo ships one deck, so this index imports one outline module. The authoring repo
// it is generated from carries several and registers each the same way.

export type Section = { n: number; short: string; long: string; slides: string[] }

import DISCOVERY_ORDER from './outline.discovery-order'

// The deck an unknown or missing `deck:` key falls back to.
export const DEFAULT_DECK = 'discovery-order'

export const OUTLINES: Record<string, Section[]> = {
  'discovery-order': DISCOVERY_ORDER,
}

// Resolve a `deck:` headmatter value to its outline. An unknown or missing key falls back
// rather than rendering an empty footer, which would look like a styling bug rather than
// the configuration mistake it is.
export function outlineFor(deck?: string): Section[] {
  return (deck && OUTLINES[deck]) || OUTLINES[DEFAULT_DECK]
}

export const CIRCLED = ['', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨']
