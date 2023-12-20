<template>
    <div class="card" v-bind:class="[isMultiple ? shadowMultiple : shadowSingle]">
        <div class="header">
            <img class="icon" src="" alt="" />
            <span class="name">{{ name }}</span>
        </div>
        <div class="more">
            <capsule @turn-left="turnLeft" @turn-right="turnRight"/>
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
@import "./index.less";
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
const name = '珊瑚宫心海'
const isMultiple = false
const shadowSingle = 'card-single'
const shadowMultiple = 'card-multiple'

const turnLeft = () => {
    console.log(`parent turnLeft`)
}

const turnRight = () => {
    console.log(`parent turnRight`)
}

</script>