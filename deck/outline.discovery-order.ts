import type { Section } from './outline'

// The discovery-order arc: the ideas arrive in the order you would actually hit them, so no
// concept appears before the problem it solves. Decisions are made by the common rule first,
// break under their own weight, and only then is hypothesis testing adopted. The CLT slide is an
// appendix reachable after the close: it carries no `section:`, so it appears in no section's
// slide list.
const SECTIONS: Section[] = [
  { n: 1, short: 'The problem',        long: 'What we do today — and the problem with it',   slides: ['scoring', 'the common rule'] },
  { n: 2, short: 'Admitting noise',    long: 'What the noise looks like, and how we measure it', slides: ['some terminology', 'generating distributions', 'anatomy of a distribution', 'distribution of data vs average'] },
  { n: 3, short: 'Hypothesis testing', long: 'Should we deploy?',                            slides: ['which rule?', 'the actual rule', 'pairing and delta', 'the balanced rule'] },
  { n: 4, short: 'Power analysis',     long: 'How much data do we need?',                    slides: ['continuous confusion matrix', 'varying N', 'power analysis', 'example'] },
]

export default SECTIONS
