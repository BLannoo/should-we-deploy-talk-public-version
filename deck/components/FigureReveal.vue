<script setup lang="ts">
// Progressive disclosure for a figure slide.
//
// `figure.svg` is NEVER edited for this. A reveal is a presentation concern, so the step
// definition lives at the include site: generator drift stays at zero and adding a split
// needs no `figure-redraw` pass.
//
// `steps` lists the layers that arrive AFTER the first. Step 1 is implicit — everything no
// later layer claims — so only the reveals are spelled out. The slide's frontmatter must
// declare `clicks: <steps.length>`, otherwise the last click walks to the next slide.
//
// A layer selects elements two ways, mixable within one layer:
//   'b5-'                 every element whose id starts with this
//   { from: 'card1', to: 'card2' }   siblings in document order, `from` inclusive,
//                                    `to` exclusive (omit `to` to run to the end)
// The range form exists because not every figure prefixes by band: `03_07a` suffixes its
// per-card ids (`hd0`/`hd1`, but also `ov10l`), where no prefix can separate the columns.
//
// WHY WRAP RATHER THAN SET OPACITY PER ELEMENT: several figures set `opacity` or
// `fill-opacity` on individual elements (`03_06a`'s faint conditional probabilities), and
// writing an inline opacity onto those would erase the authored value on reveal. So each
// maximal contiguous run of a layer's elements is wrapped in a `<g>` and the fade applies
// to the wrapper. Inserting the `<g>` at the run's first position preserves paint order
// exactly — which matters, because these figures rely on z-order for their overlaps.
//
// The SVG goes into a SHADOW ROOT, not the light DOM. Both reasons are load-bearing: the
// figures' internal <style> blocks use bare element selectors (`text { fill: #14203a }`)
// that would otherwise restyle the whole deck, and their ids repeat across figures, so
// `url(#ah-ink)` marker refs would cross-link between slides mounted at the same time.
import { onMounted, ref, shallowRef, watchEffect } from 'vue'
import { useSlideContext } from '@slidev/client'

type Sel = string | { from: string; to?: string }

const props = withDefaults(defineProps<{
  svg: string
  steps: Sel[][]
  /** Fade duration in ms. 0 disables the transition and reveals instantly. */
  fade?: number
}>(), { fade: 300 })

const { $clicks } = useSlideContext()
const host = ref<HTMLElement | null>(null)
const root = shallowRef<ShadowRoot | null>(null)
const layers = shallowRef<SVGGElement[][]>([])

function select(svg: SVGSVGElement, sels: Sel[]): Element[] {
  const hit = new Set<Element>()
  for (const sel of sels) {
    if (typeof sel === 'string') {
      for (const el of svg.querySelectorAll('[id]'))
        if ((el.getAttribute('id') || '').startsWith(sel)) hit.add(el)
    } else {
      const start = svg.querySelector(`#${CSS.escape(sel.from)}`)
      if (!start) { console.warn(`[FigureReveal] no element id="${sel.from}"`); continue }
      const stop = sel.to ? svg.querySelector(`#${CSS.escape(sel.to)}`) : null
      for (let el: Element | null = start; el && el !== stop; el = el.nextElementSibling)
        hit.add(el)
    }
  }
  return [...hit]
}

/** Wrap each maximal contiguous run of `els` (per parent) in a <g>, preserving paint order. */
function wrap(els: Element[]): SVGGElement[] {
  const byParent = new Map<Element, Set<Element>>()
  for (const el of els) {
    if (!el.parentElement) continue
    if (!byParent.has(el.parentElement)) byParent.set(el.parentElement, new Set())
    byParent.get(el.parentElement)!.add(el)
  }
  const groups: SVGGElement[] = []
  for (const [parent, set] of byParent) {
    const kids = [...parent.children]
    let i = 0
    while (i < kids.length) {
      if (!set.has(kids[i])) { i++; continue }
      let j = i
      while (j + 1 < kids.length && set.has(kids[j + 1])) j++
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      g.setAttribute('class', 'reveal-layer')
      parent.insertBefore(g, kids[i])
      for (let k = i; k <= j; k++) g.appendChild(kids[k])
      groups.push(g)
      i = j + 1
    }
  }
  return groups
}

onMounted(() => {
  const sr = host.value!.attachShadow({ mode: 'open' })
  sr.innerHTML =
    `<style>:host{display:block;width:100%;height:100%}
     svg{width:100%;height:100%;display:block}</style>` + props.svg
  const svg = sr.querySelector('svg') as SVGSVGElement
  // RESOLVE EVERY LAYER BEFORE WRAPPING ANY OF THEM. `wrap()` moves elements into new
  // <g>s, which rewrites the sibling chain a `{from, to}` range walks; resolving a later
  // step against an already-wrapped DOM makes it miss its `to` and silently swallow the
  // rest of the figure. Resolving up front against the pristine DOM also makes the step
  // list order-independent, which is what the authoring model implies.
  const picked = props.steps.map(sels => select(svg, sels))
  const claimed = new Map<Element, number>()
  picked.forEach((els, i) => els.forEach(el => {
    if (claimed.has(el))
      console.warn(`[FigureReveal] id="${el.getAttribute('id')}" is claimed by steps `
        + `${claimed.get(el)! + 1} and ${i + 1}; the later one wins`)
    else claimed.set(el, i)
  }))
  layers.value = picked.map(els => {
    const gs = wrap(els)
    for (const g of gs) {
      // Hide before the transition is armed, so the first paint is the step-1 state
      // rather than the whole figure fading out.
      g.style.opacity = '0'
      g.style.pointerEvents = 'none'
    }
    if (props.fade)
      requestAnimationFrame(() => {
        for (const g of gs) g.style.transition = `opacity ${props.fade}ms ease`
      })
    return gs
  })
  root.value = sr
})

watchEffect(() => {
  const clicks = $clicks.value
  layers.value.forEach((gs, i) => {
    for (const g of gs) g.style.opacity = clicks > i ? '1' : '0'
  })
})
</script>

<template>
  <div ref="host" class="figure-reveal" />
</template>
