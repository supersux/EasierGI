<template>
    <a-layout style="max-height: 100vh; min-height: 100vh;" hasSide>
        <SiderBar></SiderBar>
        <a-layout style="margin:8px;" class="display-content">
            <RouterView></RouterView>
        </a-layout>
    </a-layout>
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
import SiderBar from '../../component/siderBar/index.vue'
import UserInfo from '../../component/userInfo/index.vue'
import { RouterView } from 'vue-router'
import { h, ref } from 'vue'
</script>