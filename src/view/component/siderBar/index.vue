<template>
    <div data-tauri-drag-region class="root-component">
        <div class="header">
            <img :src="icon || userIcon" alt="icon" />
        </div>
        <div class="content">
            <div class="item-box" v-for="item in navTop" @click="navToPage(item.path, item['icon'])">
                <div class="img-press">
                    <svg-icon :name="item['icon']" />
                </div>
            </div>
        </div>
        <div class="content">
            <div class="item-box" v-for="item in navBottom" @click="navToPage(item.path, item['icon'])">
                <div class="img-press">
                    <svg-icon :name="item['icon']" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "./index.less";
</style>

<script lang="ts" setup>

import router from '../../../router';
import { ref } from 'vue'

interface NavItem {
    icon: string | URL,
    path: string
}


interface Props {
    icon: {
        type: string | URL,
        default: '../../../assets/svg/user.svg'
    },
    navTop: {
        type: NavItem[],
        default: []
    },
    navBottom: {
        type: NavItem[],
        default: []
    }
}

defineProps<Props>()
// const userIcon = 
const userIcon = '/user.svg'

function navToPage(path: string, test: string) {
    console.log(`nav to ${path}, icon:${test}`)
    router.push({ path: path })
}
</script>