---
layout: default
class: figfull
clicks: 2
section: 1
step: 2
---

<script setup>
// Progressive disclosure. The notes tell this as a sequence — the rule and the two clear-cut
// cases, then the near-ties that are the slide's actual argument, then "we re-ran it" — and
// the flip-flop is a punchline that a visible bottom band gives away early. The clear-cut
// pair is NOT a click: it is the setup the near-ties contradict, so it stands from frame one.
// Steps are id selectors resolved by deck/components/FigureReveal.vue; `figure.svg` itself
// is untouched. `clicks:` above must equal the number of steps.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② the near-ties fill the two middle slots, and the gut-feel brace arrives with them.
  //    Range form, not a 'B2-' prefix: the prefix would claim the panel rect too, and the two
  //    empty outlines have to stand from the first frame so the row reads as four slots and
  //    does not reflow when they fill.
  [{ from: 'B2-tag', to: 'B3-panel' }, { from: 'B3-tag', to: 'B4-panel' }, 'tie-'],
  // ③ the flip-flop: re-run, and the winner swaps
  ['b5-'],
]" />

<!--
The common rule and its own failure, on one slide: compare the two averages, deploy the higher one —
and then watch a re-run swap the winner.
SAY, over the rule and the two clear-cut cases: "One SUT in production, one candidate. Four
averages that same candidate could have come out at. Clearly behind — don't deploy. Clearly
ahead — deploy. Easy."
[CLICK] the near-ties fill the two middle slots: "And these two. Four hundredths of a point
apart, opposite answers. Unless your gut says that's too small to act on. Hold that thought, we
come back to it."
[CLICK] the bottom band, told as a sequence, not a table: "We shipped B. Then, being diligent, we
re-ran the eval to double-check. And now the rule says ship A back."
Ask it out loud — the question is NOT on the slide any more: "Wait, do we ship the old one back?"
Let the room answer. Most say no. Ask why not — that hesitation IS the statistics, arrived at by
instinct: the gap does not feel real.
Name it: "That is flip-flopping." It covers both endings — actually rolling back to A, and getting
the recommendation and quietly declining. The second is what most of the room has done.
Point at the wheel for the close: "That is the rule we are using today."
Do NOT hint that these numbers are estimates, and do NOT mention variance, noise, sampling,
distributions or confidence. Do NOT state a third verdict ("not sure yet") — that is earned later,
with p and α. This slide only buys agreement that the systems are chance machines.
NOTE: illustrative numbers — the current SUT's 80.0 and Scenario B4's 82.5 match §3.3's table;
B1–B3 and the re-run pair are hypothetical, NOT anonymized run results.
-->
