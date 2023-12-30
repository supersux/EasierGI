
<template>
    <div :style="{ left: offset.x + 'px', top: offset.y + 'px' }" class="content" draggable="true" @dragstart="dragStart"
        @dragend="dragEnd" @contextmenu="contextMenu">
        <!-- <div class="toolbar">
            <div class="left">
                <div class="btn move"></div>
                <div class="btn min"></div>
                <div class="btn max"></div>
            </div>
            <div class="btn exit"></div>
        </div> -->
        <ToolBar></ToolBar>
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
.content {
    position: absolute;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import ToolBar from './toobar.vue'

const offset = ref({
    x: 20,
    y: 20
})

const shown = ref(true)
let startX = 0
let startY = 0
const image = new Image();
image.src = '/tauri.svg';
const dragStart = (ev: DragEvent) => {
    // 记录初始位置
    startX = ev.clientX
    startY = ev.clientY
    if (ev.dataTransfer) {
        ev.dataTransfer.dropEffect = "copy"
        // ev.dataTransfer.setDragImage()
        // ev.dataTransfer();
    }
}

const dragEnd = (e: DragEvent) => {
    offset.value.x += e.clientX - startX
    offset.value.y += e.clientY - startY
    startX = 0
    startY = 0
    shown.value = true
}

const contextMenu = () => {
    console.log(`contextMenu`)
}
</script>