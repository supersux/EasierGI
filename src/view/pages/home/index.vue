<template>
    <div class="display-content">
        <DailyLine />
        <!-- <Draggable>
            <div style="width: 300px; height: 300px; "> </div>
        </Draggable>
        <Draggable>
            <div style="width: 300px; height: 300px; background-color: yellow;"> </div>
        </Draggable> -->
        <!-- <Schedual/> -->
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
    flex: 1;
    background-color: red;
    overflow: hidden;
}
</style>

<script lang="ts" setup>
import DailyLine from '../../component/dailyline/index.vue';
import Schedual from '../../component/schedual/index.vue';
import { ref, onMounted, onBeforeMount } from 'vue';

import { theme } from 'ant-design-vue';
const { useToken } = theme;
const { token } = useToken();
onMounted(() => {
    console.log(token)
})

</script>