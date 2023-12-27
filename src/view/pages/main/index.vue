<template>
    <a-layout :style="rootCss" hasSide>
        <SiderBar @themeChanged="notifiyChangeTheme"></SiderBar>
        <a-layout style="margin:8px;">
            <RouterView></RouterView>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import { inject, ref, isRef, watch } from 'vue';
import { RouterView } from 'vue-router';
import SiderBar from '../../component/siderbar/index.vue'
import { ColorTheme, isDarkTheme, G_COLOR_THEME } from '../../../config';
import {   } from 'vue';
import {  } from 'vue';

// 通知主题变更
const EVENT_THEME_CHANGED = 'themeChanged'
const emit = defineEmits([EVENT_THEME_CHANGED])
const notifiyChangeTheme = (color: ColorTheme) => {
    emit(EVENT_THEME_CHANGED, color)
}

const rootCss = ref({
    minHeight: '100vh',
    maxHeight: '100vh',
    backgroundColor: '#F7F7F7'
})

// 响应式修改主题
const colorTheme = inject(G_COLOR_THEME)
if (isRef(colorTheme)) {
    watch(colorTheme, (value) => {
        rootCss.value.backgroundColor = isDarkTheme(value) ? '#282A3A' : '#F7F7F7'
    })
}

</script>