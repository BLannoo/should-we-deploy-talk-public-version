# Asset credits

Third-party and generated assets used by the deck's figures.

This file is **attribution only**, and it ships verbatim to the public repo — which is why
it carries no tooling paths, crop sizes or element ids. How these assets are prepared, and
why each sits where it does, is in `tools/figures/README.md` under "Asset preparation".

It documents the whole slide pool, so a deck selected from the pool may not contain every
figure listed below.

## Icons — Noto Emoji

Decorative icons are **Noto Emoji** PNGs, inlined as base64 `<image>` elements.

- Source: <https://github.com/googlefonts/noto-emoji>, pinned to tag **v2.034**
- Copyright: © Google Inc.
- License: **Apache License 2.0** — <https://www.apache.org/licenses/LICENSE-2.0>

Embedded glyphs, by figure:

| Figure | Glyph(s) |
|---|---|
| `01_01_llm_as_judge_pipeline` | ✅ U+2705, 🧩 U+1F9E9, 💡 U+1F4A1, 🎯 U+1F3AF, 🧠 U+1F9E0, 🏆 U+1F3C6, ⏱ U+23F1, 💰 U+1F4B0, 🧪 U+1F9EA, 👍 U+1F44D |
| `01_02_many_questions_many_systems` | 🏆 U+1F3C6 |
| `02_04_central_limit_theorem` | ⚠ U+26A0 |
| `03_00c_metrics_comparison_table` | ✅ U+2705, 🧩 U+1F9E9, 💡 U+1F4A1, 🎯 U+1F3AF, 🧠 U+1F9E0, 🏆 U+1F3C6 |
| `03_07a_two_bars_meet` | 🤔 U+1F914 |

Add a row when you embed a new glyph. To check the list against the figures, count the
`data:image/png;base64` blobs in each and compare: a figure's icon rasters are its blobs
minus any illustration listed below.

## Illustrations

Generated images, not third-party assets — a provenance note rather than an attribution.
All were generated with **ChatGPT**, and every pose after the first was generated from the
same character so the deck reads as one hand.

| Figure | What it is | Generated |
|---|---|---|
| `deck/assets/figures/robot.png`, `factory.png` | the judge, and the system under test. The only two shared by more than one figure, so the only two in `deck/assets/figures/`; embedded by `01_01` (both) and `01_02` (the factory). | 2026-08-19 |
| `00_01_background_and_audience` | twelve poses: three career stages, six audience archetypes, the waving hero, and the aside — the last two from later sheets | 2026-09-20, 2026-09-24 |
| `02_03_data_vs_average_spread` | the character thinking under two question marks, and answering under a lit bulb, at the two ends of one banner | 2026-09-19 |
| `03_00d_averages_move_on_rerun` | the character spinning a fairground prize wheel | 2026-09-07 |
| `03_00e_rule_and_flip_flop` | a byte-identical copy of `03_00d`'s wheel | 2026-09-07 |
| `03_01c_combine_the_intervals` | the character juggling three labelled cubes — μ, ρ and σ, the symbols its card names | 2026-09-19 |
| `03_01e_paired_differences` | the character pairing up answers | 2026-09-19 |
| `03_06a_matrix_plus_test_blend` | the character presenting a blender, the gesture pointing at the blended result | 2026-09-20 |
| `04_01_sample_size_formula` | the character stacking bricks under the formula that says how many | 2026-09-19 |
| `04_99_closing` | the character waving off at a laptop. The deck's only illustration referenced as a file rather than inlined, because the closing slide is markdown rather than a figure. | 2026-09-19 |

Two figures are **whole generated images** rather than vector drawings with an
illustration in them: `03_00b_missing_third_answer` and `03_01b_robot_reads_textbook`
(ChatGPT, 2026-09-06). Both are provisional — a vector redraw is wanted for each, and when
one lands, its PNG and its mention here both go.

## Fonts

Referenced by name, not embedded:

- **Inter** — the figures' sans. SIL Open Font License 1.1.
- The deck's monospace face is likewise referenced by name under the SIL Open Font
  License 1.1.

## Everything else

The slides, figures and speaker notes are the author's own work. The terms are in
`LICENSE` and `LICENSE-CONTENT` at the repository root.
