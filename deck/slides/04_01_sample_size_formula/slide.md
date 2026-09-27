---
layout: default
class: figfull
clicks: 4
section: 4
step: 1
---

<script setup>
// Progressive disclosure. The figure numbers its own inputs ①–④ and the talk unpacks them in that
// order, so the reveal is the numbering — one input per click, α and the power separately because
// they are two different questions ("how often will I tolerate a false alarm?" / "how often must
// I catch a real difference?") that happen to share a panel.
//
// All three CONTAINERS stand from the start: the two panel frames with their headers, and the
// `YOUR CALL` card with its own. `item4`'s frame is its first three children (`i4card`, `i4hdr`,
// `i4ht`), mirroring `lp`/`lp-hdr`/`lp-ht`, so the range starts at `b4-cl` — the element after
// them — and the card is furniture like the panels rather than something that materialises late.
// The formula and its caption stand from the start too: the clicks fill the inputs in, they do
// not build the equation.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② YOU CHOOSE: α — how often will I tolerate a false alarm?
  ['item1'],
  // ③ YOU CHOOSE: the power — how often must I catch a real difference?
  ['item2'],
  // ④ YOU MEASURE: σ_Δ, the noise
  ['item3'],
  // ⑤ YOUR CALL: |Δ|, the effect size, which is either
  [{ from: 'b4-cl' }],
]" />

<!-- N = ((z_{α/2} + z_{1−β})·σ_Δ / |Δ|)² — two levers you choose (α via z_{α/2}, power via z_{1−β}) and two you measure (noise σ_Δ, effect size |Δ|).


PAUSE — take questions. -->
