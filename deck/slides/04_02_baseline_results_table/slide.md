---
layout: default
class: figfull
clicks: 2
section: 4
step: 2
---

<script setup>
// Progressive disclosure. The table already groups itself into three verdict bands — `Clear-cut`,
// `Not clear-cut`, `Clear-cut, but tricky` — and they are three different lessons, not three
// chunks of one list: act on it, go get more data, and the one where the formula bites back.
// Landing the underpowered row last is the point of the slide, and a reader who has the whole
// table from the first frame has already skipped to it.
//
// The first band stands with the scaffolding — title, subtitle, column headers, the table border,
// both footnotes, and the FAKE-NUMBERS ribbon (that one especially: it must never be absent from
// a frame showing any row). Opening on `Clear-cut` means the first frame is already a readable
// table rather than an empty grid, and the two clicks are the two bands that complicate it.
import svg from './figure.svg?raw'
</script>

<FigureReveal :svg="svg" :steps="[
  // ② Not clear-cut — the three that mean “collect more data”
  [{ from: 'g1-bg', to: 'g2-bg' }],
  // ③ Clear-cut, but tricky — significant yet underpowered; re-run and the verdict flips
  [{ from: 'g2-bg', to: 'tborder' }],
]" />

<!-- The full method, end to end. One system in production, one replacement — and these are the situations that comparison can land in. Per scenario: mean Δ, 95% CI, p-value, significance, and the sample size you would have needed. The top band is settled by the 200 examples we ran; the rest are not. Going down the not-clear-cut band they get harder: seems better, seems worse — same advice either way, the sign doesn't change what you do — and then one so small you would need 9,615 examples to resolve it — call those equivalent and decide on cost or latency. And then the last band, on its own: clear-cut, but tricky. That one came out significant, so it looks like the top band — but its needed N is 302 against the 200 we ran, so it is underpowered, so re-run the same comparison and the verdict flips to not-significant. The power there is only 63%, so nearly four times in ten you would miss it. And notice where the watermark sits — over the re-run's needed N. That is the least trustworthy number here: needed N goes as one over delta-squared, so on this row a re-run puts it anywhere from under a hundred to over ten thousand. Read that column as an order of magnitude, never as a budget. Notice too that the intervals are all different widths — the noise in a comparison depends on which two systems you are comparing, not just on how many examples you ran. Small real effects need far more paired questions to confirm.


NOTE: anonymized, illustrative numbers. -->
