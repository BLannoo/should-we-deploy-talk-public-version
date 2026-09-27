---
layout: default
class: figfull
clicks: 2
section: 4
step: 5
---

<script setup>
// Progressive disclosure. The middle column — N, where the two thresholds land on the same Δ and
// exactly one option works — stands from the start, and the two failure modes bracket it: N/2 on
// the left, where the red threshold sits ABOVE the amber one and nothing works, then 2N on the
// right, where they have crossed and many thresholds do. Answer first, then why it is the answer.
// Revealing column by column keeps each card's verdict line from being read ahead of its case.
//
// Ranges rather than prefixes: this figure suffixes its per-card ids (`hd0`/`hd1`), and `ov10l`
// defeats a suffix rule too, so a card is addressed as the run from its rect to the next one.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② N / 2 — the thresholds are in the wrong order, so no option works
  [{ from: 'card0', to: 'card1' }],
  // ③ 2N — they have crossed, and a whole range of thresholds works
  [{ from: 'card2' }],
]" />

<!--
The same decision axis at three sample sizes, each column drawn TWICE: the traditional overlaid
view on top, the stacked view of the previous slide below. Same numbers both ways, which is why
every vertical runs through both: the two means μ₀ and μ₁, and TWO thresholds, not one, each
cutting its own band.
The columns arrive ANSWER FIRST: N alone, then the two sizes that fail it.
SAY IF ASKED WHY TWO ROWS: "Same data, two ways of drawing it — take whichever you read faster."

ASK THE TITLE OUT LOUD: "We can't control α and β independently, right?" — and let it land, because
with the threshold as your only knob that is true; that is the see-saw from the previous slide.
SAY: "The red line is the threshold α = 5% demands: to call a win, the measured Δ must beat
1.645 σΔ. The amber line is the threshold β = 20% demands: if the effect is real, 80% of runs come
in above effect − 0.842 σΔ. Two different thresholds, and nothing says they line up."
The legend up top is the only place the two lines are named — point at it once, then never again.
Read the column that is up — N — first: the two thresholds land on the SAME Δ. Exactly one
threshold satisfies both demands. That is what "the right N" means, and it is the whole slide.
[CLICK] N/2, on the left: half the data, wider curves, and the red line has moved ABOVE the amber
one. The order has flipped. There is no threshold that buys 5% and 20% at once — the band between
them is dead, and no amount of choosing gets you out of it.
[CLICK] 2N, on the right: narrower still, the two have crossed, and now a whole RANGE of
thresholds works — you are paying for data you did not need.
THE POINT, reading the counts left to right now that all three are up: none, exactly one, many.
N is not a knob you tune after picking a threshold — N is what decides whether any threshold
works at all.
DON'T SAY THE FORMULA HERE. Writing the middle card down gives σΔ = effect ÷ (1.645 + 0.842),
which is the sample-size formula — and that is the NEXT slide's whole subject. Land on
"exactly one option" and let §4.1 do the algebra.
-->
