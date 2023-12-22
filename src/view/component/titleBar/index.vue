<template>
    <div class="root-component" data-tauri-drag-region>
        <div class="titlebar-button" id="titlebar-minimize">
            <img src="https://api.iconify.design/mdi:window-minimize.svg" alt="minimize" />
        </div>
        <div class="titlebar-button" id="titlebar-maximize">
            <img src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize" />
        </div>
        <div class="titlebar-button" id="titlebar-close">
            <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
    </div>
</template>

<style scoped>
@import "./index.less";
</style>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'
import { onMounted, onUnmounted } from 'vue'

const minimize = () => {
    appWindow.minimize()
}

const maximize = () => {
    appWindow.toggleMaximize()
}

const close = () => {
    appWindow.close()
}

onMounted(() => {
    document.getElementById('titlebar-minimize').addEventListener('click', minimize)
    document.getElementById('titlebar-maximize').addEventListener('click', maximize)
    document.getElementById('titlebar-close').addEventListener('click', close)
})

onUnmounted(() => {
    document.getElementById('titlebar-minimize').removeEventListener('click', minimize)
    document.getElementById('titlebar-maximize').removeEventListener('click', maximize)
    document.getElementById('titlebar-close').removeEventListener('click', close)
})
</script>
