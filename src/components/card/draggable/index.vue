<template>
    <div :style="[
        cardPositionCss,
        { resize: cardFixed || !contentVisiable ? 'none' : 'both', zIndex: layer || 'auto' }
    ]" class="content" :draggable="!cardFixed" ref="cardDraggable" v-if="cardVisiable" @dragstart="onDragStart"
        @dragend="onDragEnd" @contextmenu="onContextMenu">
        <ToolBar :title=title @minimize="onMinimize" @top="onTop" @close="onClose" @affix="onFixed">
        </ToolBar>
        <div :class="contentVisiable ? 'closable-content-show' : 'closable-content-hidden'">
            <div class="closable-content-flex">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "../../../common.less";

.content {
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: @atom-space-trible;
    background-color: @bg-card-translucent;
    border: 1px solid @border-color-card;
    transition: all @animation-duration;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    }

    &:active {
        transform: scale(1);
    }

    .closable-content {
        display: grid;
        transition: @animation-duration;
    }

    .closable-content-show {
        .closable-content();
        grid-template-rows: 1fr;
    }

    .closable-content-hidden {
        .closable-content();
        grid-template-rows: 0fr;
    }

    .closable-content-flex {
        display: flex;
        min-height: 0;
        flex-direction: column;
    }
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

const onDragStart = (ev: DragEvent) => {
    console.debug(`card ${props.cardId} drag start`);
    startX = ev.clientX;
    startY = ev.clientY;
};

const onDragEnd = (e: DragEvent) => {
    console.debug(`card ${props.cardId} drag end`);
    storedCss.value.offsetX += e.clientX - startX;
    storedCss.value.offsetY += e.clientY - startY;
    startX = 0;
    startY = 0;
    onSave();
};

const onContextMenu = (ev: MouseEvent) => {
    console.debug(`card ${props.cardId} onContextMenu`);
    ev.preventDefault();
};

const onMinimize = (e: boolean) => {
    console.debug(`card ${props.cardId} collapse ${e}`);
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

const onClose = () => {
    console.debug(`card ${props.cardId} close`);
    cardVisiable.value = false;
};

const onFixed = (e: boolean) => {
    console.debug(`card ${props.cardId} fixed ${e}`);
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
