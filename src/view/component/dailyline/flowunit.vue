<template>
    <a-timeline-item :color="isPending(state) ? 'gray' : undefined">
        <template #dot v-if="!isDone(state)">
            <StateBar :state="state"></StateBar>
        </template>
        <slot></slot>
    </a-timeline-item>
</template>

<script lang="ts" setup>
import StateBar from './state.vue'
import { State } from './state.vue'

withDefaults(defineProps<{
    state: State
}>(), {
    state: State.DONE
})
</script>

<script lang="ts">
function isDone(arg: State) {
    return arg == State.DONE
}

function isPending(arg: State) {
    return arg == State.PENDING
}
</script>