---
theme: default
# Selects this deck's entry in deck/outline.ts (section names + slide short-titles).
deck: discovery-order
title: "Should we deploy? And how much data do we need?"
titleTemplate: "%s"
author: Bruno Lannoo
aspectRatio: 16/9
canvasWidth: 980
colorSchema: light
fonts:
  sans: Inter
  mono: JetBrains Mono
# Three appendix slides sit after the close. Each carries `appendix: true` instead of a
# `section:`, and this count is what deck/slide-bottom.vue subtracts from the page
# denominator so the main line reads 1..21 rather than 1..24.
appendixCount: 3
export:
  format: pdf
  dark: false
  withClicks: false
src: ./slides/00_title/slide.md
---

<!--
THE RE-ORGANISED ARC — a selection from the pool in `deck/slides/`.

The arc makes the audience want the statistical frame instead of receiving it: get the data,
decide by the common rule, feel the missing "not sure yet", add error bars and find that plausible overlap
rules disagree, then adopt hypothesis testing as something looked up. Its middle verdict means
"get more data", which is the power-analysis question.

Each `src:` carries its own `section:`/`step:`, which overrides the included slide's own — that is
how a pool slide sits at a different position in every deck. To move a slide here, change the
numbers below, never the slide's frontmatter and never its folder name.

Section names come from `deck/outline.ts` under `discovery-order`.

The last three slides are APPENDICES, after the closing. Each answers one question the deck
deliberately provokes and then declines to answer in the main line, so each is reachable without
spending main-line time. They carry `appendix: true` rather than a `section:`/`step:`, which keeps
them off the footer rail and out of the page count.

  A1  is my data Gaussian?            — the CLT
  A2  what about ρ, the correlation?  — §3.3 says pairing "saves us having to figure out ρ"
  A3  how do α and β trade off?       — ROC, in the audience's own vocabulary

They run in the order the questions arise in the deck (§2, §3, §4), so a question asked mid-talk
is answered by the nearest appendix rather than by hunting. The A-numbers are not decoration:
`deck/slide-bottom.vue` prints `A{page − mainTotal}` in the footer, so the label a slide shows is
its POSITION in this list. Reordering them renumbers them.
-->

---
src: ./slides/00_01_background_and_audience/slide.md
---

---
src: ./slides/00_agenda_new_talk.md
---

---
src: ./slides/01_01_llm_as_judge_pipeline/slide.md
section: 1
step: 1
---

---
src: ./slides/03_00e_rule_and_flip_flop/slide.md
section: 1
step: 2
---

---
src: ./slides/01_98_checkpoint.md
---

---
src: ./slides/01_02_many_questions_many_systems/slide.md
section: 2
step: 1
---

---
src: ./slides/01_03_scores_to_distribution/slide.md
section: 2
step: 2
---

---
src: ./slides/02_02_normal_distribution_mean_sigma/slide.md
section: 2
step: 3
---

---
src: ./slides/02_03_data_vs_average_spread/slide.md
section: 2
step: 4
---

---
src: ./slides/02_98_checkpoint.md
---

---
src: ./slides/03_01a_intervals_rival_rules/slide.md
section: 3
step: 1
---

---
src: ./slides/03_01c_combine_the_intervals/slide.md
section: 3
step: 2
---

---
src: ./slides/03_01e_paired_differences/slide.md
section: 3
step: 3
---

---
src: ./slides/03_02b_delta_verdicts_actions/slide.md
section: 3
step: 4
---

---
src: ./slides/03_98_checkpoint.md
---

---
src: ./slides/03_06a_matrix_plus_test_blend/slide.md
section: 4
step: 1
---

---
src: ./slides/03_07a_two_bars_meet/slide.md
section: 4
step: 2
---

---
src: ./slides/04_01_sample_size_formula/slide.md
section: 4
step: 3
---

---
src: ./slides/04_02_baseline_results_table/slide.md
section: 4
step: 4
---

---
src: ./slides/04_99_closing/slide.md
section: 4
---

---
src: ./slides/02_04_central_limit_theorem/slide.md
appendix: true
---

---
src: ./slides/03_01d_rho_sets_sigma_delta/slide.md
appendix: true
---

---
src: ./slides/04_00_roc_curve_increasing_n/slide.md
appendix: true
---
