---
layout: default
class: figfull
clicks: 2
---

<script setup>
// Progressive disclosure. The slide is an equation spoken in three beats: "This is a confusion matrix. This is
// hypothesis testing. Blend them." The clicks are the three terms.
// Steps are id selectors resolved by deck/components/FigureReveal.vue; `figure.svg` itself
// is untouched. `clicks:` above must equal the number of steps.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② '+' and the hypothesis test
  ['op-plus', 'b-', 'cap-b'],
  // ③ '=' the blend: robot, arrows, continuous matrix, legend
  ['hero-illustration', 'fl-', 'c-', 'legend'],
]" />

<!--
The whole analogy on one canvas, laid out as a circuit: the two inputs on the top row, the robot
blending them bottom-left, the result bottom-right — a bare confusion matrix, two sampling
distributions cut by one threshold, and the two blended into one stacked picture with the same
four names.
SAY: "This is a confusion matrix. This is hypothesis testing. Blend them and you get the same four
outcomes as four pieces of one shape — the bar made them."
The matrix's red divider IS the threshold: the same line appears in all three panels, which is what
makes the three pictures one picture. The robot with the blender is the slide's "=".
Read the blend by band, not across it: each band is one whole probability, H₀ below and H₁ riding
on top. β is the H₁ area left short of the bar, which is why it needs an effect size to exist.
No numbers here on purpose — α, β and Power get their values on the next slides.
-->
