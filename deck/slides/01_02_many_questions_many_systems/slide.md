---
layout: default
class: figfull
clicks: 1
section: 1
step: 2
---

<script setup>
// Progressive disclosure. The matrix is the setup; NAMING THE SLICES is what the slide is
// FOR, and the notes say so — "say the words off the card". Landing the vocabulary card with
// the grid means the room reads four new terms while still working out what the grid is.
// Steps are id selectors resolved by deck/components/FigureReveal.vue; `figure.svg` itself
// is untouched. `clicks:` above must equal the number of steps.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② the legend card: its frame and header, then the four named slices. `smp-` does not
  //    catch `rsmp-` — startsWith is a prefix test, so the two blocks stay separable.
  ['leg-', 'obs-', 'pair-', 'smp-', 'rsmp-'],
]" />

<!--
1.2 Evaluation is an inputs × systems matrix: every input run against every
candidate system, and any of it can be re-run (the depth axis). The SUTs are named
by role — A (current), B and C (a change / another change), D (competitor) — not
numbered. B and C are worth a beat: they are unproven, which is the whole reason
the rest of the talk exists.
Two axes carry a count: N inputs and M replications, so total data is N × M and
"more inputs or more re-runs?" is a question you can ask out loud.
The slide is titled Some terminology, and the slice legend on the right is a
card rather than margin text: naming these slices is what this slide does for the
rest of the talk.
SAY, over the grid alone: every input run against every candidate system, and any
of it can be re-run.
[CLICK] the NAMING THE SLICES card arrives — say the words off it: example, paired
example, experiment / sample, replication.
The band is the deck's REFERENCE FLOW — INPUT → SYSTEM UNDER TEST → OUTPUT →
METRIC, with provide / collect / measure on the arrows. The titles name the ROLE,
so the same band covers a judge score, a latency or a cost; the ? and ! glyphs
stay concrete, which is how the slide says "here the input is a question" without
claiming it must be one. Read the axes as "input"; say "question" when talking
about OUR data — in this talk they are the same thing.
§4's formula says plain N and it now IS this N: no translation needed.
Sources of variance driving σ: SUT ability, measurement noise, input difficulty.

VOCABULARY (presenter crib — the four marked ★ are on the slide):

  ⚠ THESE ARE THE AUTHOR'S OWN TERMS, NOT THE CANONICAL ONES. Chosen deliberately:
  presenting vocabulary the presenter actually understands beats presenting more
  accurate vocabulary they don't. "experiment" for a single column is non-standard,
  which is why the slide prints BOTH words — "experiment / sample" — so you can say
  either one and lean on "sample" the moment the talk needs population-vs-sample
  language. The mapping below is what lets you survive a pointed question.

★ example            one cell = one score. The top band shows exactly this, and
                     the legend's first block names it: one input through one
                     SUT to one metric. The band is UNCAPTIONED - say "for one
                     example" out loud, it is no longer printed.
                     Standard term: OBSERVATION (or data point).
★ experiment /       fix SUT + round, vary input -> N metrics (one column).
    sample           This is what §1.3 turns into a distribution; its N IS §4's N.
                     "sample" is the standard term, of size N; both words are on
                     the slide, so use "sample" whenever you want to contrast it
                     with the POPULATION (all inputs you could have used).
★ replication        LEGEND SLICE: fix SUT, vary input AND round -> the
                     N×M block, i.e. the same experiment/sample run again.
                     Standard-ish: a balanced panel / G-study for one system.
                     DEPTH LABEL: "re-runs / replications" is deliberately
                     grain-agnostic — a replication can be one example, one
                     matched pair, one experiment/sample, or a whole round. Say
                     "round" only when you mean the whole table.
                     ⚠ COLLIDES with "cell replicates" below — a replication is
                     the WHOLE repeated experiment/sample; a single cell repeated
                     is a "cell replicate". Keep the adjective for the cell.
  multi-SUT          the entire inputs × systems × replications grid. In DOE
    replicated       terms a fully crossed (factorial) design: factors =
    experiments      input and SUT, replicated M times.
★ paired example     fix input + round, vary SUT -> the same input across
    (matched set)    systems. This is the PAIRING unit: comparing within an
                     input cancels input difficulty, which is why a paired
                     test needs far less data. Say this in §3 if pairing comes up.
                     Standard term: MATCHED SET (or matched pair for two SUTs) —
                     "paired example" is the author's own label, on the figure so
                     §3's pairing has a name established here. The legend draws it
                     as TWO cells in ONE row.
  cell replicates    fix input + SUT, vary round. Their spread is pure measurement/
                     system nondeterminism — no input difficulty in it. Say
                     "cell replicates", not bare "replicates" — see the ⚠ above.
  round              one full pass over the whole table (one layer). §2.3's
                     "repeat the whole run" is repeating a round. The figure
                     counts rounds M.

  If challenged, the honest answer: "I'm using 'experiment' for one system's run
  over all N inputs; the textbook word is 'sample'."
  Avoid: "benchmark" for a slab of results (a benchmark is the INPUT SET, the
  instrument); "run" for one cell (DOE uses it that way, but this deck has already
  bound "run" to a whole-table pass — say "example" for one cell).
  NOTE on §2.3: that figure's printed text says "a single experiment" (one column)
  and "repeated experiments" — under THIS naming those largely AGREE with us. Its
  "cases" and "more runs" wording is still loose; don't correct it live.
-->
