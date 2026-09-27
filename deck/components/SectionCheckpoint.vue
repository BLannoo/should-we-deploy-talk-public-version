<script setup lang="ts">
// The "Where we are" list, rendered from deck/outline.ts so the checkpoints, the footer
// rail and the agenda can never disagree about the sections. Uses each section's `long`
// name (the checkpoints have room); the rail and agenda use `short`.
//
// `current` is the section being entered: earlier ones are ✓, it is ▶ and bold, later
// ones are plain. Omit it on the closing slide to mark every section done.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { outlineFor } from '../outline'

const { $slidev } = useSlideContext()
const outline = computed(() => outlineFor(($slidev as any)?.configs?.deck))

const props = defineProps<{ current?: number }>()

function state(n: number) {
  if (props.current === undefined || n < props.current) return 'done'
  return n === props.current ? 'current' : 'todo'
}
</script>

<template>
  <ul class="section-checkpoint">
    <li v-for="s in outline" :key="s.n" :class="`is-${state(s.n)}`">
      <span class="section-checkpoint__mark">{{ state(s.n) === 'done' ? '✓' : state(s.n) === 'current' ? '▶' : '' }}</span>
      <span>Section {{ s.n }} — {{ s.long }}</span>
    </li>
  </ul>
</template>
