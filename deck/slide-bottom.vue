<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext, useNav } from '@slidev/client'
import { outlineFor, CIRCLED } from './outline'

// slide-bottom.vue is instantiated per slide (unlike global-bottom.vue), so its
// per-slide context ($frontmatter, $page) is correct in BOTH the dev server and
// export/print mode — where all slides render at once and nav state is not per-slide.
const { $frontmatter, $page, $slidev } = useSlideContext()
const { total } = useNav()

const section = computed<number | undefined>(() => ($frontmatter as any)?.section)
const step = computed<number | undefined>(() => ($frontmatter as any)?.step)
const isCover = computed(() => ($frontmatter as any)?.layout === 'cover')
// `footer: false` suppresses the whole strip. It exists for slides that run BEFORE the
// sections are introduced: a rail of chapter names the room has not been shown yet reads
// as a promise the slide is not making. Cover-like suppression, but opt-in per slide, so
// a pool slide can carry it into every deck that selects it.
const hideFooter = computed(() => ($frontmatter as any)?.footer === false)
// Appendix slides sit after the closing and belong to no section: they show neither rail
// nor slide list, and they are excluded from the page denominator so the main line counts
// 1..N. `appendixCount` is the entry's headmatter, so each deck states its own.
const isAppendix = computed(() => !!($frontmatter as any)?.appendix)
const appendixCount = computed(() => Number(($slidev as any)?.configs?.appendixCount ?? 0))
const mainTotal = computed(() => total.value - appendixCount.value)
// Appendix slides get their own A-series number rather than none: they still need to be
// citable ("go to A1") without implying a position in the counted run. Appendices are the
// tail of the deck, so the index is however far past the main line this page sits.
const appendixNo = computed(() => `A${$page.value - mainTotal.value}`)
// Which deck this is rendering: the entry's `deck:` headmatter picks its outline, so one
// footer component serves every deck built from the shared slide pool.
const outline = computed(() => outlineFor(($slidev as any)?.configs?.deck))
const curSection = computed(() => outline.value.find(s => s.n === section.value))
// Line 2 (slide list) shows on any slide that belongs to a section: content slides
// highlight their current step; the "Where we are" / closing slides preview the section's
// slides with none highlighted. Hidden on the cover and the agenda (no section).
const showList = computed(() => !isAppendix.value && !!curSection.value)
</script>

<template>
  <footer v-if="!isCover && !hideFooter" class="deck-footer">
    <div class="deck-footer__row">
      <span v-if="!isAppendix" class="deck-footer__rail">
        <span
          v-for="s in outline"
          :key="s.n"
          class="deck-footer__sec"
          :class="{ 'is-current': s.n === section }"
        >{{ CIRCLED[s.n] }} {{ s.short }}</span>
      </span>
      <span v-if="isAppendix" class="deck-footer__rail">
        <span class="deck-footer__sec is-current">Appendix</span>
      </span>
      <span class="deck-footer__grow" />
      <span class="deck-footer__no">{{ isAppendix ? appendixNo : `${$page} / ${mainTotal}` }}</span>
    </div>

    <div v-if="showList || isAppendix" class="deck-footer__row">
      <span v-if="showList && curSection" class="deck-footer__list">
        <template v-for="(t, i) in curSection.slides" :key="i">
          <span :class="{ 'is-current': step === i + 1 }">{{ t }}</span><span
            v-if="i < curSection.slides.length - 1"
            class="deck-footer__sep"
          > · </span>
        </template>
      </span>
      <span class="deck-footer__grow" />
      <!-- The attribution text comes from `--deck-footer-mark` in the brand layer, so
           swapping the palette swaps the mark with it and this component stays neutral. -->
      <span class="deck-footer__brand" />
    </div>
  </footer>
</template>

<style>
.deck-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--deck-footer-h);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.15em;
  padding: 0.3em 1.1em 0.25em;
  font-size: 0.6rem;
  line-height: 1.25;
  background: rgba(255, 255, 255, 0.9);
  border-top: 3px solid transparent;
  border-image: var(--deck-gradient) 1;
}
.deck-footer__row { display: flex; align-items: baseline; }
.deck-footer__grow { flex: 1; }
.deck-footer__rail { display: flex; gap: 1.1em; min-width: 0; }
.deck-footer__list { min-width: 0; }
.deck-footer__sec,
.deck-footer__no,
.deck-footer__brand,
.deck-footer__list { color: #9ca3af; white-space: nowrap; }
.deck-footer__sec.is-current,
.deck-footer__list span.is-current { color: var(--deck-primary); font-weight: 700; }
.deck-footer__sep { color: #d1d5db; }
/* The footer attribution. A token rather than markup, so an alternate palette can
   change it in one line without editing this component. */
.deck-footer__brand::after { content: var(--deck-footer-mark, ""); }
</style>
