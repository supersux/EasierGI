<template>
    <div>
        <p v-for="item in list">{{ item }}</p>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps({
    menu: Array<string>
})
const list = computed(() => {
    let aa: string[] = []
    if (props.menu) {
        props.menu.forEach((iten1) => {
            aa.push(iten1 + 'aa')
        })
    }
    return aa
})
</script>
