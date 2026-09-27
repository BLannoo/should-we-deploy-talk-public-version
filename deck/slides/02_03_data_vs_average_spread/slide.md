---
layout: default
class: figfull
clicks: 2
section: 2
step: 2
---

<script setup>
// Progressive disclosure. The slide's whole job is that TWO spreads exist and they are not the
// same number, so the two curves must not arrive together — the wide one is the spread the room
// already believes in, and the narrow one only means something as a comparison against it.
//
// The banner is last because it is a question with its own answer: `But which one do we care
// about?` … `So we need σ_mean!`. Visible from the start, it hands over the conclusion before
// either curve has been read, and this is the slide that earns σ/√N for the rest of the deck.
//
// Both curves keep their painted order — the filled areas are authored before the axes and the
// strokes after, so the reveal selects `narrow` (matching `narrow-area` and `narrow`) rather
// than a document range, and each contiguous run is wrapped where it already sits.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② the distribution of the average: narrower by √N
  ['narrow', 'ann-avg', 'ann-se-span'],
  // ③ which one do we care about — and the answer
  ['summary-box'],
]" />

<!--
2.2 σ = spread of individual scores; σ/√N (standard error) = uncertainty in the average. Only the second shrinks with more data.
-->
