<template>
    <div class="display-content">
        <DailyLine />
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
import { ref, onMounted, onBeforeMount } from 'vue';

</script>