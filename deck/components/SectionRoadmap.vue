<script setup lang="ts">
// Renders the presentation's sections from deck/outline.ts — the same source the
// footer rail uses (deck/slide-bottom.vue), so the agenda can never drift from it.
// Which deck's sections to show comes from the entry's `deck:` headmatter.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { outlineFor, CIRCLED } from '../outline'

const { $slidev } = useSlideContext()
const outline = computed(() => outlineFor(($slidev as any)?.configs?.deck))
</script>

<template>
  <ol class="section-roadmap">
    <li v-for="s in outline" :key="s.n">
      <span class="section-roadmap__no">{{ CIRCLED[s.n] }}</span> {{ s.short }}
    </li>
  </ol>
</template>
