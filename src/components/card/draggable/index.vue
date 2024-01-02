<template>
    <div :style="[
        cardPositionCss,
        { resize: cardFixed || !contentVisiable ? 'none' : 'both', zIndex: layer || 'auto' }
    ]" class="content" :draggable="!cardFixed" ref="cardDraggable" v-if="cardVisiable" @dragstart="dragStart"
        @dragend="dragEnd" @contextmenu="contextMenu">
        <ToolBar :title=title @minimize="onMinimize" @top="onTop" @close="closeCard" @affix="fixCard">
        </ToolBar>
        <div id="closablebox_content" v-show="contentVisiable">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "../../../common.less";

.content {
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: @atom-space-double;
    background-color: rgba(232, 232, 232, 0.68);
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
import { ref, computed } from "vue";
import ToolBar from "./toobar.vue";
const props = defineProps<{
    cardId: string,
    layer?: number | "auto",
    title: string
}>();

const emits = defineEmits([`top`])

const cardPositionCss = computed(() => {
    return {
        left: storedCss.value.offsetX + "px",
        top: storedCss.value.offsetY + "px",
        width: storedCss.value.width,
        height: storedCss.value.height,
    };
});

const cardDraggable = ref<Element | undefined>(undefined);
const contentVisiable = ref(true);
const cardVisiable = ref(true);
const cardFixed = ref(false);
const cardNeedTop = ref(false);

// 状态要统一管理，否则会乱序
const storedCss = ref<Size>({
    offsetX: 20,
    offsetY: 20,
    width: undefined,
    height: undefined,
});

let startX = 0;
let startY = 0;

const dragStart = (ev: DragEvent) => {
    // 记录初始位置
    startX = ev.clientX;
    startY = ev.clientY;
    if (ev.dataTransfer) {
        ev.dataTransfer.dropEffect = "copy";
        // ev.dataTransfer.setDragImage()
        // ev.dataTransfer();
    }
};

const dragEnd = (e: DragEvent) => {
    storedCss.value.offsetX += e.clientX - startX;
    storedCss.value.offsetY += e.clientY - startY;
    startX = 0;
    startY = 0;
    onSave();
};

const contextMenu = (ev: MouseEvent) => {
    console.log(`contextMenu`);
    ev.preventDefault();
};

const onMinimize = (e: boolean) => {
    console.debug(`card minimize ${e}`);
    onSave();

    if (e) {
        cardPositionCss.value.height = storedCss.value.height;
    } else {
        cardPositionCss.value.height = undefined;
    }
    contentVisiable.value = e;
};

const onSave = () => {
    console.debug(`card saved`);
    storedCss.value.width = computeSize(cardDraggable.value).width;
    if (contentVisiable.value) {
        storedCss.value.height = computeSize(cardDraggable.value).height;
    } else {
        storedCss.value.height = undefined;
    }
};

const onTop = () => {
    console.debug(`card ${props.cardId} request on top`);
    cardNeedTop.value = !cardNeedTop.value
    emits(`top`, props.cardId, cardNeedTop.value)
};

const closeCard = () => {
    cardVisiable.value = false;
};

const fixCard = (e: boolean) => {
    console.debug(`card fixed:${e}`);
    cardFixed.value = e;
    onSave();
};
</script>

<script lang="ts">
interface Size {
    offsetX: number;
    offsetY: number;
    width: string | undefined;
    height: string | undefined;
}

function computeSize(card: Element | undefined) {
    let ele = card ? window.getComputedStyle(card) : undefined;
    return {
        width: ele?.width,
        height: ele?.height,
    };
}
</script>
