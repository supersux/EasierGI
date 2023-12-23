<template>
    <div class="root-user-info">
        <div class="header">
            <img class="icon" src="" alt="">
            <div class="header-info">
                <span class="title">苏苏</span>
                <div class="memo">
                    <span>uid</span>
                    <span style="margin-left:8px;">123456789</span>
                    <div class="copy">
                        <svg-icon name="copy" size="12px"></svg-icon>
                    </div>
                </div>
                <div class="memo">
                    <StateLabel v-model:state="userState" v-model:memo="stateMemo" />
                </div>
            </div>
        </div>
        <div class="info">
            <span class="level-text">等级</span>
            <LevelLabel v-model:level="level"></LevelLabel>
            <span class="level-text">活跃</span>
            <span>424天</span>
        </div>

        <div>
            <span>编辑资料</span>
            <span>召唤派蒙</span>
        </div>

        <div style="width:100px; height:30px; background-color: green" @click="change"></div>
    </div>
</template>

<style scoped>
@import "./index.less";
</style>

<script setup lang="ts">
import StateLabel from "../StateLabel/index.vue"
import LevelLabel from "../LevelLabel/index.vue"
import { State } from "../StateLabel/index.vue"
import { ref } from "vue";

let stateMemo = ref("测试2")
let userState = ref(State.ONLINE)
let level = ref(53)

function change() {
    console.log(`perform click`)
    if (stateMemo.value === '在线') {
        stateMemo.value = "忙碌"
        userState.value = State.BUSY
        level.value = 54
    } else {
        stateMemo.value = "在线"
        userState.value = State.ONLINE
        level.value = 60
    }
    console.log(`stateMemo ${stateMemo}`)

}
</script>
    