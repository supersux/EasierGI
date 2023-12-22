<template>
    <div data-tauri-drag-region class="root-component">
        <div class="header">
            <img :src="icon" alt="icon" />
        </div>
        <div class="content">
            <div class="item-top" v-for="item in navTop" @click="navToPage(item.path)">
            <img src="" alt="icon" />
            <!-- <a>{{item}}</a> -->
        </div>
        </div>
        <div class="footer">
            <div class="item-bottom" v-for="item in navBottom" @click="navToPage(item.path)">
                <img src="" alt="icon" />
                <!-- <a>{{item}}</a> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "./index.less";
</style>

<script lang="ts" setup>
import router from '/src/router';

defineProps({
    icon: String,
    navTop: Array<any>,
    navBottom: Array<any>
})

function navToPage(path: String) {
    console.log(`nav to ${path}`)
    router.push(path)
}
</script>