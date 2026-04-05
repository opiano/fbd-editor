<template>
  <div v-if="!isAuthenticated" class="login-container">
    <div class="login-box">
      <div class="login-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      </div>
      <h2>FBD Editor</h2>
      <p class="login-subtitle">접근 권한이 필요합니다.</p>
      
      <div class="input-group">
        <input type="text" v-model="loginId" placeholder="아이디" @keyup.enter="handleLogin" autocomplete="username" />
      </div>
      <div class="input-group">
        <input type="password" v-model="loginPw" placeholder="비밀번호" @keyup.enter="handleLogin" autocomplete="current-password" />
      </div>
      
      <div v-if="loginError" class="login-error">{{ loginError }}</div>
      
      <button @click="handleLogin" class="login-btn">로그인</button>
    </div>
  </div>

  <div v-else class="editor-container">
    <aside class="sidebar">
      <div class="var-toolbar-actions">
        <button class="icon-btn var-btn" title="Input 블록 추가" @click="addNode({ type: 'Input', category: 'input', inputs: [], outputs: ['OUT'] })">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="4" width="8" height="16" rx="1" /><path d="M2 12h10"/><path d="m8 8 4 4-4 4"/></svg>
          <span>IN</span>
        </button>
        <button class="icon-btn var-btn" title="Constant 블록 추가" @click="addNode({ type: 'Constant', category: 'constant', inputs: [], outputs: ['OUT'] })">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="12" height="16" rx="2" ry="2"></rect><path d="M16 12h6"></path><path d="M8 9l2 -2v8"></path></svg>
          <span>C</span>
        </button>
        <button class="icon-btn var-btn" title="사용자 정의 펑션 블록 추가" @click="openUdfbModal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="16" rx="2" ry="2"></rect><path d="M2 8h4"></path><path d="M2 16h4"></path><path d="M18 12h4"></path></svg>
          <span>UDFB</span>
        </button>
      </div>
      <hr style="margin-bottom:15px;" />

      <div class="category-section" v-for="category in menuCategories" :key="category.name">
        <h3 class="category-title" @click="category.isOpen = !category.isOpen" style="cursor: pointer; user-select: none;">
          {{ category.isOpen ? '▼' : '▶' }} {{ category.name }}
        </h3>
        
        <div v-show="category.isOpen" class="category-content">
          <!-- 서브 그룹이 없는 단일 아이템들 (Input, Variable 등) -->
          <template v-if="category.items">
            <div v-for="item in category.items" :key="item.type" 
                 class="menu-item" @click="addNode(item)">
              {{ item.type }}
            </div>
          </template>

          <!-- 서브 그룹들이 있는 경우 (Blocks 등) -->
          <template v-if="category.subGroups">
            <div class="subgroup-section" v-for="subGroup in category.subGroups" :key="subGroup.name">
              <h4 class="subgroup-title" @click="subGroup.isOpen = !subGroup.isOpen" style="cursor: pointer; user-select: none;">
                {{ subGroup.isOpen ? '▼' : '▶' }} {{ subGroup.name }}
              </h4>
              <div v-show="subGroup.isOpen" class="subgroup-items">
                <div v-for="item in subGroup.items" :key="item.type" 
                     class="menu-item subgroup-item" @click="addNode(item)">
                  {{ item.type }}
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <hr />
      <div class="toolbar-actions">
        <button class="icon-btn" style="color: #dc3545;" title="화면 지우기" @click="clearScreen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
        <button class="icon-btn" style="color: #ffc107;" title="FBD 검증" @click="verifyFBD"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></button>
        <button class="icon-btn" style="color: #6f42c1;" title="META INFO 확인" @click="exportDownloadInfo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
        <button class="icon-btn" style="color: #28a745;" title="JSON 확인" @click="exportJson"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg></button>
        <button class="icon-btn" style="color: #007bff;" title="파일로 저장" @click="downloadFile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg></button>
        <button class="icon-btn" style="color: #17a2b8;" title="파일 불러오기" @click="triggerFileUpload"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2z"></path></svg></button>
      </div>
      <input type="file" ref="fileInput" style="display: none" accept=".json" @change="handleFileUpload" />
    </aside>

    <main class="canvas-area">
      <div class="fbd-info-panel">
        <div class="fbd-info-row"><label>Inst:</label><input type="number" v-model="diagramInfo.inst" /></div>
        <div class="fbd-info-row"><label>Name:</label><input type="text" v-model="diagramInfo.name" /></div>
        <div class="fbd-info-row"><label>Desc:</label><input type="text" v-model="diagramInfo.desc" /></div>
        <div class="fbd-info-row"><label>Period:</label><input type="number" v-model="diagramInfo.period" /></div>
      </div>

      <VueFlow v-model="elements" :node-types="nodeTypes" :fit-view-on-init="true">
        <Background pattern-color="#aaa" :gap="16" />
        <Controls />
      </VueFlow>
    </main>

    <aside v-if="selectedNode" class="properties-panel">
      <div class="panel-header">
        <h3>{{ selectedNode.data.label }} 속성</h3>
        <button class="close-panel-btn" @click="selectedElementId = null">×</button>
      </div>
      <div class="panel-content">
        <div class="prop-section" v-if="selectedNode.data.inputs && selectedNode.data.inputs.length > 0">
          <h4>입력 단자 (Inputs)</h4>
          <div v-for="input in selectedNode.data.inputs" :key="input" class="prop-row">
            <span class="prop-name">{{ input }}</span>
            <span class="prop-type">{{ BlockDefinitions[selectedNode.data.label] ? BlockDefinitions[selectedNode.data.label].inputs.find(i => i.name === input)?.dataType || 'ANY' : 'ANY' }}</span>
          </div>
        </div>

        <div class="prop-section" v-if="selectedNode.data.outputs && selectedNode.data.outputs.length > 0">
          <h4>출력 단자 (Outputs)</h4>
          <div v-for="output in selectedNode.data.outputs" :key="output" class="prop-row">
            <span class="prop-name">{{ output }}</span>
            <span class="prop-type">{{ BlockDefinitions[selectedNode.data.label] ? BlockDefinitions[selectedNode.data.label].outputs.find(o => o.name === output)?.dataType || 'ANY' : 'ANY' }}</span>
          </div>
        </div>

        <div class="prop-section" v-if="selectedNode.data.parameters && selectedNode.data.parameters.length > 0">
          <h4>파라미터 (Parameters)</h4>
          <div v-for="(param, i) in selectedNode.data.parameters" :key="'param'+i" class="prop-row param-row-compact">
            <span class="prop-name" style="width: 50px; text-align: left;">{{ param.name.replace('Parameter', 'Para') }}</span>
            <input type="number" step="any" v-model="param.value" class="param-input-compact" placeholder="값..." />
            <span class="prop-type" style="width: 40px; text-align: center;">{{ param.dataType }}</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- JSON 모달 팝업 추가 -->
    <div v-if="showJsonModal" class="modal-overlay" @click.self="showJsonModal = false">
      <div class="modal-content">
        <h3>JSON 데이터</h3>
        <textarea readonly :value="jsonOutput" class="json-textarea"></textarea>
        <button class="close-btn" @click="showJsonModal = false">닫기</button>
      </div>
    </div>

    <!-- META INFO 모달 팝업 추가 -->
    <div v-if="showDownloadModal" class="modal-overlay" style="background: rgba(0, 0, 0, 0.1);" @click.self="closeDownloadModal">
      <div class="modal-content" :style="{ transform: `translate(${ddcModalX}px, ${ddcModalY}px)` }">
        <h3 @mousedown="startDragDdc" style="cursor: grab; user-select: none;">META INFO <span style="font-size: 0.6em; font-weight: normal; color: #666;">(드래그하여 이동)</span></h3>
        <textarea readonly :value="downloadOutput" class="json-textarea"></textarea>
        <div class="modal-actions">
          <button class="copy-btn" @click="copyToClipboard(downloadOutput)">복사</button>
          <button class="close-btn" @click="closeDownloadModal">닫기</button>
        </div>
      </div>
    </div>

    <!-- UDFB 모달 팝업 추가 -->
    <div v-if="showUdfbModal" class="modal-overlay" @click.self="showUdfbModal = false">
      <div class="modal-content" style="width: 300px; max-width: 90vw;">
        <h3>Add UDFB</h3>
        <div style="margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
          <label style="font-weight:bold; white-space: nowrap;">Name:</label>
          <input type="text" v-model="udfbName" placeholder="Block name" style="width:100px; padding:6px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;" />
        </div>
        <div style="margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
          <label style="font-weight:bold; white-space: nowrap;">Inputs:</label>
          <input type="number" v-model="udfbInCount" min="0" style="width:100px; padding:6px; border: 1px solid #ccc; border-radius: 4px;" />
        </div>
        <div style="margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
          <label style="font-weight:bold; white-space: nowrap;">Outputs:</label>
          <input type="number" v-model="udfbOutCount" min="0" style="width:100px; padding:6px; border: 1px solid #ccc; border-radius: 4px;" />
        </div>
        <div class="modal-actions" style="justify-content: flex-end; gap: 10px;">
          <button style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;" @click="showUdfbModal = false">Cancel</button>
          <button style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;" @click="confirmUdfb">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, markRaw, onMounted, onUnmounted } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import CustomBlock from './components/CustomBlock.vue'
import { initialMenuCategories } from './data/blocksMenu'
import { BlockDefinitions } from './data/blockDefs'

// App.vue의 script setup 부분에 추가
import { ConnectionLineType } from '@vue-flow/core'

// VueFlow 컴포넌트 속성에 추가
//<VueFlow :connection-line-type="ConnectionLineType.Step">

// 1. 커스텀 노드 타입 등록
const nodeTypes = { fbd: markRaw(CustomBlock) }
const { toObject, onConnect, addEdges, onEdgeClick, onNodeClick, onPaneClick, onNodesChange, onEdgesChange } = useVueFlow()

// 선택된 요소를 추적하여 삭제 키 이벤트에 대응
const selectedElementId = ref(null)
const copiedNode = ref(null) // 복사된 노드 저장용

const selectedNode = computed(() => {
  if (!selectedElementId.value) return null
  return elements.value.find(el => el.id === selectedElementId.value && el.type === 'fbd') || null
})

const isAuthenticated = ref(localStorage.getItem('fbd_auth') === 'true')
const loginId = ref('')
const loginPw = ref('')
const loginError = ref('')

const handleLogin = () => {
  if (loginId.value === 'admin' && loginPw.value === 'fbdeditor1234') {
    isAuthenticated.value = true
    localStorage.setItem('fbd_auth', 'true')
    loginError.value = ''
  } else {
    loginError.value = '아이디 또는 비밀번호가 일치하지 않습니다.'
  }
}

const isVerified = ref(false)

const showUdfbModal = ref(false)
const udfbName = ref('')
const udfbInCount = ref(2)
const udfbOutCount = ref(1)

const openUdfbModal = () => {
  udfbName.value = ''
  udfbInCount.value = 2
  udfbOutCount.value = 1
  showUdfbModal.value = true
}

const confirmUdfb = () => {
  const inCount = Math.max(0, parseInt(udfbInCount.value) || 0)
  const outCount = Math.max(0, parseInt(udfbOutCount.value) || 0)
  
  const inputs = Array.from({ length: inCount }, (_, i) => `IN${i + 1}`)
  const outputs = Array.from({ length: outCount }, (_, i) => `OUT${i + 1}`)
  
  const typeName = udfbName.value.trim() ? `UDFB, ${udfbName.value.trim()}` : 'UDFB'
  addNode({ type: typeName, category: 'udfb', inputs, outputs })
  showUdfbModal.value = false
}

onNodesChange(() => { isVerified.value = false })
onEdgesChange(() => { isVerified.value = false })

let nodeCounter = 0 // 노드의 생성 순서를 저장할 카운터 변수

const clearScreen = () => {
  if (confirm('화면의 모든 내용을 지우시겠습니까?')) {
    elements.value = []
    nodeCounter = 0
    diagramInfo.value = { inst: '', name: '', desc: '', period: '' }
  }
}

onEdgeClick(({ edge }) => {
  selectedElementId.value = edge.id
})

onNodeClick(({ node }) => {
  selectedElementId.value = node.id
})

onPaneClick(() => {
  selectedElementId.value = null
})

const handleKeyDown = (e) => {
  if (e.key === 'Delete') {
    if (selectedElementId.value) {
      elements.value = elements.value.filter(el => el.id !== selectedElementId.value)
      selectedElementId.value = null
    }
  } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
    if (selectedElementId.value) {
      const nodeToCopy = elements.value.find(el => el.id === selectedElementId.value && el.type === 'fbd')
      if (nodeToCopy) {
        copiedNode.value = JSON.parse(JSON.stringify(nodeToCopy))
        // 선택 상태 해제하지 않음 (사용자가 복사했는지 알기 위해 선택 유지)
      }
    }
  } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'v') {
    if (copiedNode.value) {
      const nextId = nodeCounter++

      // 복사된 노드 정보 바탕으로 새 노드 생성
      const newNode = JSON.parse(JSON.stringify(copiedNode.value))
      newNode.id = String(nextId)
      newNode.data.id = nextId
      // 위치를 살짝 이동 (겹치지 않게)
      newNode.position.x += 20
      newNode.position.y += 20

      elements.value.push(newNode)
      
      // 새로 붙여넣은 노드를 선택 상태로 만들고, 다음 붙여넣을 때도 이동되도록 업데이트
      selectedElementId.value = newNode.id
      copiedNode.value = newNode
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

// 2. 사이드바 메뉴 카테고리 정의 (접기/펴기 상태 포함을 위해 ref 사용)
const menuCategories = ref(initialMenuCategories)

const elements = ref([]) // 현재 화면의 노드와 선(Edge)들

const diagramInfo = ref({
  inst: '',
  name: '',
  desc: '',
  period: ''
})

const showJsonModal = ref(false)
const jsonOutput = ref('')
const showDownloadModal = ref(false)
const downloadOutput = ref('')

const ddcModalX = ref(0)
const ddcModalY = ref(0)
let isDraggingDdc = false
let dragStartX = 0
let dragStartY = 0

const startDragDdc = (e) => {
  isDraggingDdc = true
  dragStartX = e.clientX - ddcModalX.value
  dragStartY = e.clientY - ddcModalY.value
  window.addEventListener('mousemove', onDragDdc)
  window.addEventListener('mouseup', stopDragDdc)
}

const onDragDdc = (e) => {
  if (!isDraggingDdc) return
  ddcModalX.value = e.clientX - dragStartX
  ddcModalY.value = e.clientY - dragStartY
}

const stopDragDdc = () => {
  isDraggingDdc = false
  window.removeEventListener('mousemove', onDragDdc)
  window.removeEventListener('mouseup', stopDragDdc)
}

const closeDownloadModal = () => {
  showDownloadModal.value = false
  ddcModalX.value = 0
  ddcModalY.value = 0
}

// 2. 중요: 사용자가 핀과 핀을 연결했을 때 실행될 로직
onConnect((params) => {
  console.log('연결 시도:', params)
  const currentId = nodeCounter++
  const newEdge = {
    ...params,
    originalId: params.id || `vueflow__edge-${params.source}${params.sourceHandle||''}-${params.target}${params.targetHandle||''}`,
    id: String(currentId),
    label: String(currentId),
    data: { id: currentId }
  }
  addEdges([newEdge]) // 이 코드가 있어야 화면에 선이 그려집니다!
})

// 3. 노드 추가 함수
const addNode = (template) => {
  const currentId = nodeCounter++ // 0번부터 계속 증가
  const id = String(currentId) // Vue Flow에서 요소를 구분할 고유 문자열 ID

  let parameters = []
  const blockDef = BlockDefinitions[template.type]
  if (blockDef && blockDef.parameters) {
    parameters = JSON.parse(JSON.stringify(blockDef.parameters)) // 깊은 복사로 인스턴스 독립성 보장
  } else if (template.category === 'udfb' || template.category === 'block') {
    // UDFB나 새로 정의되지 않은 Block의 경우 기본 param 생성
    parameters = (template.inputs || []).map((_, idx) => ({
      name: `Para${idx + 1}`,
      dataType: "REAL",
      value: 1.0
    }))
  }

  elements.value.push({
    id,
    type: 'fbd',
    position: { x: Math.random() * 200 + 50, y: Math.random() * 200 + 50 },
    data: { 
      id: currentId, // 화면 표출용 ID
      label: template.type, 
      category: template.category,
      inputs: template.inputs, 
      outputs: template.outputs,
      parameters,
      varType: template.category === 'constant' ? 'constant-int' : null,
      varValue: '' 
    }
  })
}

const getProcessedData = () => {
  const data = toObject()
  let hasChanges = false

  data.edges = data.edges.map(edge => {
    if (isNaN(Number(edge.id))) {
      hasChanges = true
      const currentId = nodeCounter++
      return {
        ...edge,
        originalId: edge.id,
        id: String(currentId),
        label: String(currentId),
        data: { ...edge.data, id: currentId }
      }
    }
    edge.label = String(edge.id)
    return edge
  })

  if (hasChanges) {
    elements.value = elements.value.map(el => {
      if (el.source && el.target) {
        const edgeData = data.edges.find(e => e.originalId === el.id || e.id === el.id)
        if (edgeData) return { ...el, originalId: edgeData.originalId, id: edgeData.id, label: edgeData.label, data: edgeData.data }
      }
      return el
    })
  }

  data.diagramInfo = diagramInfo.value
  return data
}

// FBD 유효성 검증
const verifyFBD = () => {
  const data = toObject()
  const errors = []

  // 0. ID 중복 검사
  const idMap = new Map()
  const allElements = [...(data.nodes || []), ...(data.edges || [])]
  allElements.forEach(el => {
    const idToCheck = String(el.data?.id ?? el.id)
    if (idMap.has(idToCheck)) {
      errors.push(`구성 요소의 ID가 중복되었습니다. (중복 ID: ${idToCheck})`)
    } else {
      idMap.set(idToCheck, true)
    }
  })

  // 1. varValue 누락 검사 (Input, Constant, Outputs)
  const outputLabels = ['AOUT', 'DOUT', 'MOUT', 'AOUT_REL', 'DOUT_REL', 'MOUT_REL', 'OUT']
  data.nodes.forEach(node => {
    if (!node.data) return
    const isInput = node.data.category === 'input'
    const isConstant = node.data.category === 'constant'
    const isOutput = outputLabels.includes(node.data.label)

    if (isInput || isConstant || isOutput) {
      const valStr = node.data.varValue === undefined || node.data.varValue === null ? '' : String(node.data.varValue).trim()
      
      if (valStr === '') {
        const typeName = isInput ? 'Input' : (isConstant ? 'Constant' : 'Output')
        errors.push(`[${node.data.id ?? node.id}] ${node.data.label} 블록(${typeName})의 값을 입력해주세요.`)
      } else if (isInput || isOutput) {
        const formatRegex = /^\s*[+-]?\d+(?:\.\d+)?\s*,\s*[^,]+\s*,\s*[+-]?\d+(?:\.\d+)?\s*$/
        if (!formatRegex.test(valStr)) {
          const typeName = isInput ? 'Input' : 'Output'
          errors.push(`[${node.data.id ?? node.id}] ${node.data.label} 블록(${typeName})의 입력값 형식이 올바르지 않습니다. (형식: 숫자,문자,숫자)`)
        }
      }
    }
  })

  // 2. 펑션 블록 연결 검사
  const fbNodes = data.nodes.filter(node => node.data && node.data.category !== 'input' && node.data.category !== 'constant')

  if (fbNodes.length === 0) {
    errors.push("펑션 블록(FB)이 최소 1개 이상 배치되어야 합니다.")
  }

  fbNodes.forEach(fb => {
    if (fb.data.inputs && fb.data.inputs.length > 0) {
      fb.data.inputs.forEach(inputName => {
        const connectedEdges = data.edges.filter(edge => String(edge.target) === String(fb.id) && edge.targetHandle === inputName)

        if (connectedEdges.length === 0) {
          errors.push(`[${fb.data.id ?? fb.id}] ${fb.data.label} 블록의 '${inputName}' 포트가 연결되지 않았습니다.`)
        } else if (connectedEdges.length > 1) {
          errors.push(`[${fb.data.id ?? fb.id}] ${fb.data.label} 블록의 '${inputName}' 포트에 2개 이상의 소스가 연결되었습니다.`)
        }
      })
    }
  })

  if (errors.length > 0) {
    isVerified.value = false
    alert("FBD 검증 실패:\n\n" + errors.join("\n"))
  } else {
    isVerified.value = true
    
    let inputCount = 0
    let constantCount = 0
    let fbCount = 0

    data.nodes.forEach(node => {
      if (!node.data) return
      if (node.data.category === 'input') inputCount++
      else if (node.data.category === 'constant') constantCount++
      else fbCount++
    })

    const linkCount = data.edges ? data.edges.length : 0
    const summary = `- Input: ${inputCount}개\n- Constant: ${constantCount}개\n- FB: ${fbCount}개\n- Link: ${linkCount}개`

    alert(`FBD 검증 완료!\n\n모든 펑션 블록이 정상적으로 연결되어 있습니다.\n\n[구성 요소 정보]\n${summary}`)
  }
}

// 4. JSON 데이터 추출
const exportJson = () => {
  if (!isVerified.value) {
    alert("아직 FBD 검증이 완료되지 않았습니다.\n먼저 'FBD 검증' 버튼을 눌러주세요.")
    return
  }
  const data = getProcessedData()
  jsonOutput.value = JSON.stringify(data, null, 2)
  showJsonModal.value = true
}

// 4.5. Download Info 데이터 추출
const exportDownloadInfo = () => {
  if (!isVerified.value) {
    alert("아직 FBD 검증이 완료되지 않았습니다.\n먼저 'FBD 검증' 버튼을 눌러주세요.")
    return
  }
  const data = getProcessedData()
  let outputLines = []

  // Extract Nodes
  if (data.nodes) {
    data.nodes.forEach(node => {
      const id = node.data?.id ?? node.id
      let nodeType = ''
      let nodeContent = ''

      if (node.data.category === 'input' || node.data.category === 'constant') {
        nodeType = 'var'
        if (node.data.category === 'input') {
          nodeContent = `"${node.data.varValue || ''}"`
        } else {
          let typeChar = 'R'
          if (node.data.varType === 'constant-int') typeChar = 'I'
          else if (node.data.varType === 'constant-bool') typeChar = 'B'
          nodeContent = `"${typeChar},${node.data.varValue || ''}"`
        }
      } else {
        nodeType = 'fb'
        let fbName = node.data.label
        
        let inputLinks = []
        if (node.data.inputs && node.data.inputs.length > 0) {
          node.data.inputs.forEach(inputPort => {
            const connectedEdge = (data.edges || []).find(e => String(e.target) === String(node.id) && e.targetHandle === inputPort)
            inputLinks.push(connectedEdge ? connectedEdge.id : '')
          })
        }
        
        nodeContent = `${fbName},"${inputLinks.join(',')}"`

        const outputLabels = ['AOUT', 'DOUT', 'MOUT', 'AOUT_REL', 'DOUT_REL', 'MOUT_REL', 'OUT']
        if (outputLabels.includes(node.data.label)) {
          nodeContent += `,"${node.data.varValue || ''}"`
        }
      }

      outputLines.push(`${id},${nodeType}=${nodeContent}`)
    })
  }

  // Extract Edges
  if (data.edges) {
    data.edges.forEach(edge => {
      const sourceNode = data.nodes.find(n => n.id === edge.source)
      const targetNode = data.nodes.find(n => n.id === edge.target)

      if (!sourceNode || !targetNode) return

      let sourceStr = ''
      let targetStr = ''

      if (sourceNode.data.category === 'input' || sourceNode.data.category === 'constant') {
        sourceStr = `${sourceNode.data.id}`
      } else {
        const outIndex = sourceNode.data.outputs ? sourceNode.data.outputs.indexOf(edge.sourceHandle) : 0
        sourceStr = `"${sourceNode.data.id},1,${Math.max(0, outIndex)}"`
      }

      if (targetNode.data.category === 'input' || targetNode.data.category === 'constant') {
        targetStr = `${targetNode.data.id}`
      } else {
        const inIndex = targetNode.data.inputs ? targetNode.data.inputs.indexOf(edge.targetHandle) : 0
        targetStr = `"${targetNode.data.id},0,${Math.max(0, inIndex)}"`
      }

      outputLines.push(`${edge.id},link=${sourceStr},${targetStr}`)
    })
  }

  if (data.nodes) {
    const fbNodes = data.nodes.filter(node => node.data && node.data.category !== 'input' && node.data.category !== 'constant')
    const fbIds = new Set(fbNodes.map(node => node.data?.id ?? node.id))
    
    const inDegree = {}
    const adjList = {}
    fbIds.forEach(id => {
      inDegree[id] = 0
      adjList[id] = []
    })

    if (data.edges) {
      data.edges.forEach(edge => {
        const sourceNode = data.nodes.find(n => n.id === edge.source)
        const targetNode = data.nodes.find(n => n.id === edge.target)
        if (sourceNode && targetNode) {
          const sId = sourceNode.data?.id ?? sourceNode.id
          const tId = targetNode.data?.id ?? targetNode.id
          if (fbIds.has(sId) && fbIds.has(tId)) {
            adjList[sId].push(tId)
            inDegree[tId]++
          }
        }
      })
    }

    const queue = []
    fbIds.forEach(id => {
      if (inDegree[id] === 0) queue.push(id)
    })

    const sortedIds = []
    while (queue.length > 0) {
      const curr = queue.shift()
      sortedIds.push(curr)
      adjList[curr].forEach(neighbor => {
        inDegree[neighbor]--
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor)
        }
      })
    }

    // 순환 참조 등으로 포함되지 못한 남은 블록을 마지막에 추가 (펑션 블록 총 개수 유지)
    fbIds.forEach(id => {
      if (!sortedIds.includes(id)) {
        sortedIds.push(id)
      }
    })

    if (sortedIds.length > 0) {
      outputLines.unshift(`order=${sortedIds.join(',')}`)
    }
  }

  const prefixLines = [
    `Inst=${diagramInfo.value.inst}`,
    `Name=${diagramInfo.value.name}`,
    `Desc=${diagramInfo.value.desc}`,
    `Period=${diagramInfo.value.period}`
  ]
  outputLines = [...prefixLines, ...outputLines]

  downloadOutput.value = outputLines.map(line => {
    const eqIndex = line.indexOf('=')
    if (eqIndex !== -1) {
      return line.slice(0, eqIndex).toUpperCase() + line.slice(eqIndex)
    }
    return line
  }).join('\n')
  ddcModalX.value = 0
  ddcModalY.value = 0
  showDownloadModal.value = true
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('클립보드에 복사되었습니다.')
  } catch (err) {
    alert('복사에 실패했습니다.')
    console.error(err)
  }
}

// 5. 파일 저장 및 불러오기
const fileInput = ref(null)

const downloadFile = () => {
  if (!isVerified.value) {
    alert("아직 FBD 검증이 완료되지 않았습니다.\n먼저 'FBD 검증' 버튼을 눌러주세요.")
    return
  }
  const data = getProcessedData()
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  const instValue = diagramInfo.value.inst || 'data'
  const nameValue = diagramInfo.value.name ? `-${diagramInfo.value.name}` : ''
  a.download = `fbd-${instValue}${nameValue}.json`
  a.click()
  URL.revokeObjectURL(url)
}

const triggerFileUpload = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result)
      if (parsed.diagramInfo) {
        diagramInfo.value = parsed.diagramInfo
      } else {
        diagramInfo.value = { inst: '', name: '', desc: '', period: '' }
      }

      if (parsed.nodes && parsed.edges) {
        const processedEdges = parsed.edges.map(edge => ({
          ...edge,
          label: String(edge.id)
        }))
        elements.value = [...parsed.nodes, ...processedEdges]
        
        let maxId = -1
        parsed.nodes.forEach(node => {
          if (node.data && typeof node.data.id === 'number') {
            if (node.data.id > maxId) maxId = node.data.id
          } else if (!isNaN(Number(node.id))) {
            if (Number(node.id) > maxId) maxId = Number(node.id)
          }
        })
        parsed.edges.forEach(edge => {
          if (edge.data && typeof edge.data.id === 'number') {
            if (edge.data.id > maxId) maxId = edge.data.id
          } else if (!isNaN(Number(edge.id))) {
            if (Number(edge.id) > maxId) maxId = Number(edge.id)
          }
        })
        nodeCounter = maxId + 1
      } else {
        alert('지원하지 않는 파일 형식입니다. (nodes나 edges가 없습니다)')
      }
    } catch (err) {
      alert('파일을 읽는 도중 오류가 발생했습니다.')
      console.error(err)
    }
    event.target.value = ''
  }
  reader.readAsText(file)
}
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';

/* 로그인 화면 스타일 */
.login-container { display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw; background: #f0f2f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.login-box { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); width: 100%; max-width: 360px; text-align: center; }
.login-icon { background: #007bff; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 20px; }
.login-icon svg { width: 30px; height: 30px; }
.login-box h2 { margin: 0 0 10px; color: #333; font-size: 24px; }
.login-subtitle { color: #666; margin-bottom: 25px; font-size: 14px; }
.input-group { margin-bottom: 15px; }
.input-group input { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box; transition: border-color 0.2s; }
.input-group input:focus { outline: none; border-color: #007bff; }
.login-error { color: #dc3545; font-size: 13px; margin-bottom: 15px; text-align: left; }
.login-btn { width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background 0.2s; }
.login-btn:hover { background: #0056b3; }

.editor-container { display: flex; height: 100vh; width: 100vw; font-family: sans-serif; overflow: hidden; }
.sidebar { width: 230px; border-right: 1px solid #ccc; padding: 15px; background: #f9f9f9; overflow-y: auto; flex-shrink: 0; }
.category-section { margin-bottom: 10px; }
.category-title { margin: 0 0 10px 0; font-size: 14px; color: #333; border-bottom: 2px solid #ddd; padding-bottom: 5px; text-transform: uppercase; transition: color 0.2s; }
.category-title:hover { color: #007bff; }
.category-content { margin-top: 10px; }
.subgroup-section { margin-top: 5px; }
.subgroup-title { margin: 0 0 5px 0; font-size: 13px; color: #555; padding-left: 5px; transition: color 0.2s; }
.subgroup-title:hover { color: #007bff; }
.subgroup-items { padding-left: 10px; border-left: 2px solid #ddd; margin-left: 8px; margin-bottom: 10px; padding-top: 5px; }
.menu-item { padding: 8px; border: 1px solid #ddd; margin-bottom: 8px; cursor: pointer; background: white; text-align: center; font-size: 13px; border-radius: 3px; }
.subgroup-item { margin-bottom: 5px; padding: 6px; }
.menu-item:hover { background: #e0e0e0; }
.canvas-area { flex-grow: 1; position: relative; background: #eee; }

.toolbar-actions { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 10px 0; }
.var-toolbar-actions { display: flex; gap: 8px; justify-content: space-between; padding-bottom: 5px; }
.var-btn { flex: 1; gap: 6px; font-weight: bold; font-size: 13px; color: #444; border-color: #bbb; }
.var-btn svg { width: 18px; height: 18px; color: #555; }
.icon-btn { background: #fff; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; padding: 8px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; color: #333; }
.icon-btn:hover { background: #e0e0e0; border-color: #999; }
.icon-btn svg { width: 22px; height: 22px; }

.fbd-info-panel { position: absolute; top: 10px; left: 10px; z-index: 10; background: rgba(255, 255, 255, 0.9); padding: 10px; border-radius: 5px; border: 1px solid #ccc; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 5px; }
.fbd-info-row { display: flex; align-items: center; justify-content: space-between; }
.fbd-info-row label { font-size: 12px; margin-right: 5px; width: 50px; font-weight: bold; color: #333; }
.fbd-info-row input { width: 100px; padding: 4px; font-size: 12px; border: 1px solid #ccc; border-radius: 3px; }

/* 모달 팝업 스타일 */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 1000; }
.modal-content { background: white; padding: 20px; border-radius: 8px; width: 600px; max-width: 90vw; display: flex; flex-direction: column; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.modal-content h3 { margin-top: 0; }
.json-textarea { width: 100%; height: 400px; max-height: 60vh; font-family: monospace; margin-bottom: 15px; padding: 10px; resize: vertical; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
.modal-actions { align-self: flex-end; display: flex; gap: 10px; }
.close-btn { padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.close-btn:hover { background: #c82333; }
.copy-btn { padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.copy-btn:hover { background: #218838; }

/* 우측 속성 패널 스타일 */
.properties-panel { width: 260px; border-left: 1px solid #ccc; background: #f9f9f9; display: flex; flex-direction: column; overflow-y: auto; flex-shrink: 0; }
.panel-header { padding: 15px; background: #eee; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; align-items: center; }
.panel-header h3 { margin: 0; font-size: 15px; color: #333; }
.close-panel-btn { background: none; border: none; font-size: 20px; cursor: pointer; color: #666; padding: 0 5px; }
.close-panel-btn:hover { color: #dc3545; }
.panel-content { padding: 15px; }
.prop-section { margin-bottom: 20px; }
.prop-section h4 { margin: 0 0 10px 0; font-size: 13px; color: #007bff; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; }
.prop-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 12px; }
.prop-name { color: #333; font-weight: bold; }
.prop-type { color: #6c757d; background: #e9ecef; padding: 2px 6px; border-radius: 4px; font-size: 11px; }
.param-row-compact { flex-direction: row; align-items: center; gap: 8px; margin-bottom: 8px; border-bottom: 1px dashed #eee; padding-bottom: 6px; }
.param-input-compact { flex: 1; min-width: 0; width: 100%; border: 1px solid #ccc; padding: 4px 6px; border-radius: 4px; font-size: 11px; box-sizing: border-box; text-align: right; transition: border-color 0.2s; }
.param-input-compact:focus { outline: none; border-color: #007bff; }

</style>