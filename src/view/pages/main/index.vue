<template>
    <div class="main">
        <Draggable>
            <div style="width: 300px; height: 300px; "> </div>
        </Draggable>
        <Draggable>
            <div style="width: 300px; height: 300px; background-color: yellow;"> </div>
        </Draggable>
        <NavBar class="nav-bar" />
        <!-- <UserIcon class="user-icon" draggable="true"/> -->
    </div>
</template>

<style scoped lang="less">
@import '../../../common.less';

.main {
    position: relative;
    display: flex;
    background-color: @bg-color-light-global;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
<script lang="ts" setup>
import NavBar from '../../../components/navbar/index.vue'
import UserIcon from '../../../components/card/usericon/index.vue'
import Draggable from '../../../components/card/draggable/index.vue'
</script>