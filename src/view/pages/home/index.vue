<template>
    <div class="display-content">
        <DailyLine />
        <!-- <Schedual/> -->
    </div>
</template>

<style scoped>
.display-content::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
    scrollbar-width: none;
}

.display-content {
    scrollbar-width: none;
    max-height: 100%;
    overflow-y: scroll;
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