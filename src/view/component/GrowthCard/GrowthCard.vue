<template>
    <div class="card" v-bind:class="[isMultiple ? shadowMultiple : shadowSingle]">
        <div class="header">
            <img class="icon" :src="icon" alt="" />
            <span class="name">{{ name }}</span>
        </div>
        <div class="more">
            <capsule />
        </div>
        
        <div class="content">
            <div class="content-column" v-for="item in [[1, 2, 3], [1, 3]]">
                <div v-for="childItem in item">
                    <img src="">
                    <span>
                        <span>大英雄的经验</span>
                        <span>x</span>
                        <span>{{ childItem }}</span>
                        <span>/</span>
                        <span>2</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@import "./GrowthCard.less";
</style>

<script setup lang="ts">
import capsule from "../capsule/index.vue"
console.log(111)
// 材料类型定义
// interface Metarials {
//     name: String,
//     icon?: string,
//     need: number,
//     have?: number
// }

const props = defineProps({
    icon: String,
    name: String,
    metarials: Array
})
const emit = defineEmits(['change', 'delete'])
const isMultiple = false
const shadowSingle = 'card-single'
const shadowMultiple = 'card-multiple'

</script>