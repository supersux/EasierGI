<template>
    <div class="root">
        <label class="item" v-bind:class="[idx + 1 < list.length ? itemLine : '']" v-for="(item, idx) in list"
            @click="buttonClick(item, idx)">{{ item }} </label>
    </div>
</template>

<style>
@import "./index.less";
</style>

<script setup lang="ts">
import { defineProps } from 'vue'

const itemLine = 'item-line'

defineProps<{
    list: string[]
}>()
const emit = defineEmits<{
    selected: [item: string, idx: number]
}>()

function buttonClick(item: string, idx: number) {
    emit('selected', item, idx)
}
</script>