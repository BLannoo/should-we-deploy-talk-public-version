# Should we deploy? And how much data do we need?
### Applied hypothesis testing & power analysis for AI engineers

A talk about deciding — rigorously — whether a new AI system is actually better than the
one you have, and how many evaluation examples you need before you can tell. Two questions
carry the whole thing:

1. **Should we deploy?** Is the difference real, or is it noise? → *hypothesis testing*
2. **How much data do we need?** → *power analysis*, and the N→reject sample-size formula

It is built for engineers rather than statisticians: the maths is on the slides, and nothing
is assumed beyond an average.

## Read it

**[▶ Read it in your browser](https://blannoo.github.io/should-we-deploy-talk-public-version/)**
— the deck as it is presented, steps and all. Nothing to install.

**[📄 `should-we-deploy-talk.pdf`](should-we-deploy-talk.pdf)** — the same 24 slides as one
file, for offline or printing.

The QR on the closing slide points at the hosted version, so if you saw this talk in a room,
that is where you landed.

## Present it

```bash
npm install --prefix deck
npm run dev --prefix deck        # → http://localhost:3030
```

- <kbd>space</kbd> or click advances; several slides reveal in steps
- <kbd>o</kbd> opens the slide overview
- **<http://localhost:3030/presenter>** has the speaker notes — read these before
  presenting, they carry what to say and what to skip when time is short

Needs [Node](https://nodejs.org) ≥ 20. The deck is [Slidev](https://sli.dev).
`npm run build --prefix deck` produces a static site;
`npm run export --prefix deck` re-makes the PDF.

**Three appendix slides** sit after the closing slide, numbered A1–A3. Each answers a
question the talk provokes and then declines, so none of them costs main-line time: the
Central Limit Theorem (*is my data Gaussian?*), correlation (*what about ρ?*), and the ROC
trade-off (*how do α and β trade off?*). Reach them by continuing past the end.

## Adapt it

Please do. It was written for a particular room, and yours is different.

- **The footer attribution** is one line: `--deck-footer-mark` in
  [`deck/brand.css`](deck/brand.css). Put your own name there.
- **The palette** is the rest of that same file — six tokens, no rules. Nothing else needs
  editing to restyle the deck.
- **Section names** live in [`deck/outline.discovery-order.ts`](deck/outline.discovery-order.ts),
  in one place, so the footer rail, the agenda and the "Where we are" checkpoints can never
  disagree with each other.
- **Dropping a slide** is deleting its `src:` block from
  [`deck/discovery-order.md`](deck/discovery-order.md). Reordering is moving the block and
  fixing the `section:`/`step:` numbers next to it — a slide's position lives in that file,
  not in the slide.
- **Figures are plain SVG** with real `<text>` elements, so labels are editable in Inkscape
  or any editor. No figure depends on the deck's stylesheet.

If you give the talk, I would genuinely like to hear how it went.

## About this repository

**It is generated.** The deck is authored in a private repository and this one is written
out from it by a script, so **commits made here are overwritten by the next export.** That
makes forking the right move rather than a compromise: fork it, change it, present it. It
also means a pull request against this repo cannot survive — if you spot a mistake, please
open an issue instead, or send the correction upstream.

Upstream is <https://github.com/BLannoo/presentation-hypothesis-testing-and-power-analysis>.
**That repository is private, so the link will not open for almost anyone** — it is here for
provenance rather than as an invitation. It holds the authoring side: a pool of slides that
several differently-ordered decks are selected from, per-slide design notes recording why
each slide exists, the figure-generation pipeline, and the architecture decision records.

## Notes on the numbers

The method and the reporting style come out of real evaluation work, built on the
open-source **SWE-QA-Bench** benchmark.

**Every number in the results tables is fake.** They are anonymised, illustrative
regenerations — system names are relabelled and the values are invented, which is what the
`NUMBERS FAKE FOR ILLUSTRATIVE PURPOSES` watermark on those slides is telling you. They are
there to show the shape of the analysis. Do not read real performance into them, and do not
quote them as results.
