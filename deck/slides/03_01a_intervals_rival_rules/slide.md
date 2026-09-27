---
layout: default
class: figfull
clicks: 3
section: 3
step: 3
---

<script setup>
// Progressive disclosure, paired across the two halves of the figure.
//
// The five panels are a SPECTRUM: panel 1 (each mean inside the other's) and panel 5 (intervals
// disjoint) are the limiting cases where all three rules agree, so both stand from the start and
// frame the question. The three contested cases arrive one per click, and each one brings its own
// error bar into the top half at the same moment — the panels are footnoted by situation
// (`only rule 1 says "different" — S1`), so S1/S2/S3 up top and RULE 1/2/3 below are the same
// three facts drawn twice. Revealing them together is what makes that legible; revealing all the
// bars up front lets the room read ahead and breaks the pairing.
//
// Rows are numbered in visual order, 1..6 top to bottom. Rows 1, 2 and 6 (current SUT and the
// two limiting cases) stand from the start alongside panels 1 and 5; rows 3, 4 and 5 arrive with
// their rule panel.
//
// The verdict braces stand from the start, with the question that asks for them: the slide's
// job is to leave the room with `Significant or not? Depends which rule you pick.` unresolved,
// and the braces are the frame that makes each rule land as one more case that does not settle
// it — not a punchline to withhold.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② S1 — new mean outside current's
  [{ from: 'b3-tag2', to: 'b3-card3' }, 'b2-bar3', 'b2-dot3'],
  // ③ S2 — current mean outside new's
  [{ from: 'b3-tag3', to: 'b3-card4' }, 'b2-bar4', 'b2-dot4'],
  // ④ S3 — means outside, intervals still overlapping (rule 3 fires for none of them)
  [{ from: 'b3-tag4', to: 'b3-card5' }, 'b2-bar5', 'b2-dot5'],
]" />

<!--
Every score is an estimate — add error bars, and every candidate's interval overlaps the current
system's. So is any of them significantly different? It depends which overlap rule you pick, and
three plausible rules disagree.
READ THE THREE RULES OUT — they are only on the panels now, as badges plus a caption: rule 1,
the new mean falls outside the current interval; rule 2, the current mean falls outside the new
one; rule 3, the intervals don't overlap at all.
SAY (left off the canvas on purpose): "Which rule? Eyeballing the overlap isn't a decision
procedure — we need a test."
Worth saying out loud: rule 3 (no overlap at all) fires for NONE of the three, so under the
strictest rule nothing is significant.
End on the unanswered question. Do NOT resolve which rule wins — §4.1 is the pivot that does.
NOTE: illustrative numbers — invented so each candidate is exactly one of the three rules, NOT anonymized run results.
-->
