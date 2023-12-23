<template>
    <div class="root-state-label">
        <div class="dot" v-bind:style="{ '--dotColor': stateColor }"></div>
        <span class="state">{{ memo }}</span>
    </div>
</template>

<style scoped>
@import "./index.less";
</style>

<script lang="ts">
export enum State {
    ONLINE,
    OFFLINE,
    BUSY
}
</script>
<script setup lang="ts">
import { watch, ref } from "vue";

const props = defineProps<{
    state: {
        type: State,
        default: State.OFFLINE,
        required: false
    }
    memo: {
        type: String,
        default: '',
        required: false
    }
}>();

const stateColor = ref(getColor(State.OFFLINE))

watch(
    () => props.state,
    (newProps) => {
        stateColor.value=getColor(newProps)
    }
);

function getColor(state: State) {
    console.log(`getColor ${state}`)
    switch (state) {
        case State.ONLINE:
            return 'green'
        case State.OFFLINE:
            return 'gray'
        default:
            return 'red'
    }
}

</script>