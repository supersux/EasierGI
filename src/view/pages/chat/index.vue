<template>
    <div ref="root" style="max-height: 100%; overflow-y: scroll;">
        <p v-for="item in list">this is chat page</p>
    </div>
</template>

<script lang="ts" setup>
import BScroll from '@better-scroll/core'
import { ref, onMounted } from 'vue';
const root = ref<any>(null)
const list = ref<Array<any>>([])
onMounted(() => {
    console.log(`chat onMounted`)
    console.log(root)
    let scroll = new BScroll(root.value)
    list.value = new Array(100)
})

// let scroll = new BScroll(wrapper)
</script>