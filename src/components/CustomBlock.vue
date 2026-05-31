<template>
  <div :class="['fbd-node', (data.category === 'input' || data.category === 'constant') ? 'is-small' : '', ['AOUT', 'DOUT', 'MOUT', 'AOUT_REL', 'DOUT_REL', 'MOUT_REL', 'OUT'].includes(data.label) ? 'is-out' : '', selected ? 'is-selected' : '']">
    <div :class="['node-header', `header-${data.category}`]">[{{ data.id }}] {{ data.label }}</div>
    
    <!-- Constant Settings -->
    <div v-if="data.category === 'constant'" class="node-content custom-var-content nodrag" style="display: flex; gap: 2px; align-items: center; padding: 4px 2px; position: relative;">
      <select v-model="data.varType" :disabled="currentMode === 'monitoring'" class="selector" style="flex: 1; margin-bottom: 0; padding: 0 1px;">
        <option value="constant-int">Int</option>
        <option value="constant-bool">Bool</option>
        <option value="constant-float">Real</option>
      </select>
      <input v-model="data.varValue" :disabled="currentMode === 'monitoring'" placeholder="Val" class="var-input" style="flex: 1; margin-bottom: 0; padding: 1px; margin-right: 6px;"/>
      <Handle type="source" :position="Position.Right" :id="data.outputs[0]" style="top: 50%; right: -4px; transform: translateY(-50%); margin: 0;" />
      <span v-if="currentMode === 'monitoring' && realtimeData?.[data.id]?.OUT?.[0] !== undefined" class="port-rt-val-node rt-out" style="top: -12px; right: -4px;">{{ realtimeData[data.id].OUT[0] }}</span>
    </div>

    <!-- Input Settings -->
    <div v-if="data.category === 'input'" class="node-content custom-var-content nodrag" style="display: flex; align-items: center; padding: 4px 2px; position: relative;">
      <input v-model="data.varValue" :disabled="currentMode === 'monitoring'" placeholder="Input Name..." class="var-input" style="margin-bottom: 0; margin-right: 6px; flex: 1;"/>
      <Handle type="source" :position="Position.Right" :id="data.outputs[0]" style="top: 50%; right: -4px; transform: translateY(-50%); margin: 0;" />
      <span v-if="currentMode === 'monitoring' && realtimeData?.[data.id]?.OUT?.[0] !== undefined" class="port-rt-val-node rt-out" style="top: -12px; right: -4px;">{{ realtimeData[data.id].OUT[0] }}</span>
    </div>



    <div class="node-body" v-if="data.category !== 'constant' && data.category !== 'input'">
      <div class="ports-side">
        <div v-for="(input, index) in data.inputs" :key="input" class="port-item">
          <Handle type="target" :position="Position.Left" :id="input" />
          <span class="port-text">{{ input }}</span>
          <span v-if="currentMode === 'monitoring' && realtimeData?.[data.id]?.IN?.[index] !== undefined" class="port-rt-val-node rt-in">{{ realtimeData[data.id].IN[index] }}</span>
        </div>
      </div>
      <div class="ports-side align-right">
        <div v-for="(output, index) in data.outputs" :key="output" class="port-item">
          <span v-if="currentMode === 'monitoring' && realtimeData?.[data.id]?.OUT?.[index] !== undefined" class="port-rt-val-node rt-out">{{ realtimeData[data.id].OUT[index] }}</span>
          <span class="port-text">{{ output }}</span>
          <Handle type="source" :position="Position.Right" :id="output" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Handle, Position } from '@vue-flow/core'
import { inject } from 'vue'
defineProps(['data', 'selected'])

const currentMode = inject('currentMode')
const realtimeData = inject('realtimeData')
</script>

<style scoped>
.fbd-node { background: #fff; border: 1.5px solid #222; border-radius: 3px; min-width: 80px; transition: border-color 0.2s ease, box-shadow 0.2s ease; }
.fbd-node.is-selected { border-color: #ff007f; box-shadow: 0 0 0 4px rgba(255, 0, 127, 0.4); outline: none; z-index: 1000; }
.fbd-node.is-small { width: 75px; min-width: 75px; max-width: 75px; font-size: 10px; }
.fbd-node.is-out { width: 100px; min-width: 100px; max-width: 100px; }
.fbd-node.is-small .node-body { padding: 4px 0; }
.fbd-node.is-small .node-content { padding: 4px 2px 0 2px; }
.fbd-node.is-small .selector, .fbd-node.is-small .var-input { font-size: 9px; padding: 1px; margin-bottom: 2px; }
.fbd-node.is-small .port-item { height: 16px; padding: 0 8px; }
.fbd-node.is-small .port-text { font-size: 8px; }

.node-header { background: #444; color: white; padding: 2px 4px; font-size: 9px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.header-input { background: #28a745; }
.header-constant { background: #dc3545; }
.header-block { background: #007bff; }
.header-udfb { background: #555555; }
.node-body { display: flex; justify-content: space-between; padding: 6px 0; }
.ports-side { display: flex; flex-direction: column; gap: 3px; position: relative; }
.port-item { display: flex; align-items: center; height: 14px; position: relative; padding: 0 8px; }
.port-text { font-size: 8px; color: #333; }
.align-right { align-items: flex-end; }
:deep(.vue-flow__handle) { width: 8px; height: 8px; background: #555; border: 1px solid white; }

.node-content { padding: 6px 8px 0 8px; }
.selector { width: 100%; font-size: 10px; margin-bottom: 4px; border: 1px solid #ccc; border-radius: 2px; }
.var-input { width: 100%; font-size: 10px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 2px; padding: 2px; }
.port-rt-val-node { position: absolute; top: -7px; font-size: 7px; color: #155724; background-color: rgba(255, 255, 255, 0.85); box-shadow: 0 0 2px rgba(0,0,0,0.1); padding: 0 3px; border-radius: 2px; font-weight: bold; font-family: monospace; white-space: nowrap; pointer-events: none; z-index: 10; }
.rt-in { left: -6px; transform: translateX(-50%); }
.rt-out { right: -6px; transform: translateX(50%); }
</style>