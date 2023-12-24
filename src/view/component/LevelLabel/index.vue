<template>
    <div class="root-level-lable">
        <div class="show-img" v-if="state == LabelState.ICON">
            <svg-icon v-for=" item in icons" :name="item" size="20px"></svg-icon>
        </div>
        <span class="show-text" v-else>{{ level }}</span>

        <div class="toggle" v-on:click="changeMode()">
            <svg-icon name="toggle" size="16px"></svg-icon>
        </div>
    </div>
</template>
<style scoped>
@import "./index.less";
</style>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const enum LabelState {
    TEXT,
    ICON
}

const props = defineProps<{
    level: number
}>();
const state = ref(LabelState.ICON)
const icons = ref(getIcons(Number(0)))

watch(
    () => props.level,
    (newProps) => {
        // icons.value.length = 0
        console.log(icons)
        console.log(`level changed:${newProps}`)
        icons.value = getIcons(Number(newProps))
    }
)

onMounted(() => {
    icons.value = getIcons(props.level)
})

// base as binary base or decimal base
function getIcons(level: number) {
    // a crown is shown for level 60 
    if (level >= 60) {
        return ['level_max']
    }
    const iconArr = ['level_low', 'level_middle', 'level_high', 'level_ultra']
    const base = 3
    let level_copy = level
    let res: string[] = []
    let i: number = 0
    while (1) {
        let next = Math.floor(level_copy / base)
        let remainder = level_copy % base
        for (let j = 0; j < remainder; j++) {
            res.unshift(iconArr[i])
        }
        if (next == 0) {
            break;
        }
        level_copy = next
        i++
    }
    return res
}

const changeMode = () => {
    if (state.value == LabelState.ICON) {
        state.value = LabelState.TEXT
    } else {
        state.value = LabelState.ICON
    }
}

</script>