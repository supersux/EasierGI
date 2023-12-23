<!-- 胶囊菜单模板 -->
<template>
    <div class="root-capsule">
        <img class="icon-left" src="/arrow-left-filling.svg" alt="" @click="turnLeft"/>
        <div class="split"></div>
        <img class="icon-right" src="/arrow-right-filling.svg" alt="" @click="turnRight" />
    </div>
</template>

<style scoped lang="less">
@import "./index.less";
</style>

<script setup lang="ts">
// 定义事件
const emit = defineEmits(['turn-left', 'turn-right'])
const turnLeft = () => {
    // console.log(`child turnLeft`)
    emit('turn-left')
}

const turnRight = () => {
    // console.log(`turnRight`)
    emit('turn-right')
}
</script>