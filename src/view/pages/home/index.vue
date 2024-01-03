<template>
    <div class="display-content" :class="[editMode ? 'mask' : '']">
        <Draggable :card-id="layerCards[0].id" :layer="layerCards[0].layer" title="测试1" @top="onTop">
            <span>11111111</span>
            <span>11111111</span>
            <span>11111111</span>
            <span>11111111</span>
            <span>11111111</span>
            <span>11111111</span>
            <span>11111111</span>
        </Draggable>
        <Draggable :card-id="layerCards[1].id" :layer="layerCards[1].layer" title="测试2" @top="onTop">
            <div style="width: 300px; height: 300px; background-color: yellow;"> </div>
        </Draggable>
        <!-- <Mask></Mask> -->
    </div>
</template>

<style lang="less" scoped>
@import '../../../common.less';

.display-content::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
}

.display-content {
    scrollbar-width: none;
    overflow-y: scroll;
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: @bg-color-light-global;
}

.mask {
    background: rgb(53, 93, 119);
    background-image: linear-gradient(#f5f5f5 1px, transparent 0),
        linear-gradient(90deg, #f5f5f5 1px, transparent 0),
        linear-gradient(hsla(0, 0%, 100%, .3) 1px, transparent 0),
        linear-gradient(90deg, hsla(0, 0%, 100%, .3) 1px, transparent 0);
    background-size: 60px 60px, 60px 60px, 15px 15px, 15px 15px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
const cards = ['card1', 'card2']
const layerCards = ref(registerLayerCards(cards));
console.log(layerCards.value)

const editMode = ref(false)
const onTop = (ele: string, needTop: boolean) => {
    layerCards.value.forEach((item) => {
        if (item.id == ele && needTop) {
            item.layer = 998
        } else {
            item.layer = 'auto'
        }
    })
    console.log(`${JSON.stringify(ele)} on top`)
}
</script>

<script lang="ts">
interface LayerCard {
    id: string;
    layer?: number | 'auto';
}

function registerLayerCards(arr: string[]): LayerCard[] {
    let res: LayerCard[] = []
    arr.forEach((item) => {
        res.push({
            id: item,
            layer: 'auto'
        })
    })
    return res
}
</script>