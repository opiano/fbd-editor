<script setup>
import { BaseEdge, getSmoothStepPath } from '@vue-flow/core'
import { computed } from 'vue'

const props = defineProps({
  id: String,
  sourceX: Number,
  sourceY: Number,
  targetX: Number,
  targetY: Number,
  sourcePosition: String,
  targetPosition: String,
  data: Object,
  markerEnd: String,
  style: Object,
  selected: Boolean,
})

const path = computed(() => {
  // Extract number from id to create a consistent offset for this specific edge
  const edgeIdNum = parseInt(props.id) || 0
  // Generate a staggered offset, e.g. -24, -12, 0, 12, 24
  const offset = ((edgeIdNum % 5) - 2) * 15

  const midX = (props.sourceX + props.targetX) / 2
  // Only apply offset if nodes are reasonably apart horizontally to prevent weird routing when close
  const adjustedCenterX = Math.abs(props.targetX - props.sourceX) > 40 ? midX + offset : midX

  const [edgePath] = getSmoothStepPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    sourcePosition: props.sourcePosition,
    targetX: props.targetX,
    targetY: props.targetY,
    targetPosition: props.targetPosition,
    centerX: adjustedCenterX,
    borderRadius: 8,
  })
  return edgePath
})
</script>

<template>
  <BaseEdge
    :id="id"
    :path="path"
    :marker-end="markerEnd"
    :style="{
      ...style,
      strokeWidth: selected ? '3px' : '1.5px',
      stroke: selected ? '#ff007f' : (style?.stroke || '#555'),
      transition: 'stroke-width 0.2s, stroke 0.2s'
    }"
  />
</template>
