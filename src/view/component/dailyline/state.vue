<template #dot v-if="state != State.DONE">
    <ClockCircleOutlined style="font-size: 16px; background-color: transparent;" v-if="state == State.WORKING" />
    <MinusCircleOutlined style="font-size: 16px;" v-if="state == State.PENDING" />
</template>
<script lang="ts" setup>
import { ClockCircleOutlined, MinusCircleOutlined } from '@ant-design/icons-vue';
defineProps<{
    state: State
}>()
</script>

<script lang="ts">
export enum State {
    // 进行中
    WORKING,
    // 等待中
    PENDING,
    // 已结束
    DONE
}
</script>