---
layout: default
class: figfull nofooter
# No chapter rail here: this slide runs before the sections are introduced, so naming
# them in the footer would preview an outline the room has not been given yet.
footer: false
clicks: 3
---

<script setup>
// Progressive disclosure. The slide is a handshake in two halves and a punchline: who is
// talking, then who is being talked to, then owning the art. The audience contract is the half
// the room actually cares about, and it reads as a verdict on them — six archetypes with ✗ and ✓
// already on screen invite everyone to find their own row while the speaker is still on their CV.
//
// The divider arrives with the right half: a vertical rule with nothing to its right reads as a
// crop, not a split.
//
// The bottom panel and its promise stand from the start — it is the frame the two halves sit in,
// not a beat — and the aside is last because it is the joke, not the contract. Its own last
// two words get a click of their own: `but more fun` only lands after `more work` has.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② who I hope you are: the divider and the six archetypes with their verdicts
  ['divider', 'title-audience', 'tint-aud', 'robot-aud', 'label-aud', 'aside-aud', 'badge-aud'],
  // ③ owning the generated art
  ['aside-bubble', 'aside-line', 'robot-aside'],
  // ④ the punchline that finishes the sentence
  ['aside-fun', 'robot-fun'],
]" />

<!--
Opening calibration slide: who is talking, and who is being talked to.
Left, in three beats: physics student → software developer → ML engineer. Say it fast — the point
is not the CV, it is the italic line under each: physics is where making maths intuitive became a
habit, the dev years are where you learned which details help a product and which are noise, and
the ML work is where you actually needed the statistics, for evals. That is the whole claim to
speak here. The heading already gives the name and role, so do not read it out.
Right, the audience contract. Read the marks out loud, because they are the promise: ✗ at both
ends — not my grandmother, not five year olds, not real statisticians — and ✓ on the three in the
middle, who the talk IS built for: some AI builders, mostly engineers, some stats savvy.
The italic line under each is the honest bit, and it is what makes the ✓ a warning as well as a
welcome: AI builders are in, but only *wide awake*; for the stats savvy this *should be a breeze*;
the statisticians are out because the rigour is deliberately *low*. If the room is mostly
builders, say the quiet part: this one does not wash over you, you have to follow it.
Land the bottom line as the deal: a TECHNICAL presentation, designed to be ACCESSIBLE. Technical
means the maths is on the slides; accessible means nothing is assumed beyond an average.
Invite the stats-savvy to push back when a simplification goes too far — that invitation is what
keeps them engaged rather than correcting you afterwards.
Do NOT spend time here — this slide is a handshake, not content. Under a minute.
-->
