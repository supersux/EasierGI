
<template>
    <div :style="[cardPositionCss, { resize: cardFixed || !contentVisiable ? 'none' : 'both' }]" class="content"
        :draggable="!cardFixed" ref="cardDraggable" v-if="cardVisiable" @dragstart="dragStart" @dragend="dragEnd"
        @contextmenu="contextMenu" @click="onclick" @focus="onfocus">
        <ToolBar title="测试" @minimize="minimize" @save="onSave" @close="closeCard" @affix="fixCard">
        </ToolBar>
        <div id="closablebox_content" v-show="contentVisiable">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: 12px;
    background: rgba(217, 217, 217, 0.58);
    border: 1px solid #fff;
    transition: all 0.5s;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    }

    &:active {
        transform: scale(1);
    }
}

#closablebox_content {
    display: flex;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import ToolBar from './toobar.vue'
import { computed } from 'vue';

const cardPositionCss = computed(() => {
    return {
        left: storedCss.value.offsetX + 'px',
        top: storedCss.value.offsetY + 'px',
        width: storedCss.value.width,
        height: storedCss.value.height
    }
})

const cardDraggable = ref<Element | undefined>(undefined)
const contentVisiable = ref(true)
const cardVisiable = ref(true)
const cardFixed = ref(false)

// 状态要统一管理，否则会乱序
const storedCss = ref<Size>({
    offsetX: 20,
    offsetY: 20,
    width: undefined,
    height: undefined
})

let startX = 0
let startY = 0

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
    storedCss.value.offsetX += e.clientX - startX
    storedCss.value.offsetY += e.clientY - startY
    startX = 0
    startY = 0
    onSave()
}

const contextMenu = (ev: MouseEvent) => {
    console.log(`contextMenu`)
    ev.preventDefault();
}

const onclick = () => {
    console.log(`card is clicked`);

}

const onfocus = () => {
    console.log(`card is onfocus`);
}

const minimize = (e: boolean) => {
    console.debug(`card minimize ${e}`)
    contentVisiable.value = e
    if (e) {
        cardPositionCss.value.height = storedCss.value.height
    } else {
        onSave()
        cardPositionCss.value.height = undefined
    }
}

const onSave = () => {
    console.debug(`card saved`)
    storedCss.value.width = computeSize().width
    storedCss.value.height = computeSize().height
}

const closeCard = () => {
    cardVisiable.value = false
}

const fixCard = (e: boolean) => {
    console.debug(`card fixed:${e}`)
    cardFixed.value = e
    if (contentVisiable.value) {
        onSave()
    }
}

function computeSize() {
    let ele = cardDraggable.value ? window.getComputedStyle(cardDraggable.value) : undefined
    return {
        width: ele?.width,
        height: ele?.height
    }
}
</script>

<script lang="ts">
interface Size {
    offsetX: number,
    offsetY: number,
    width: string | undefined
    height: string | undefined
}
</script>