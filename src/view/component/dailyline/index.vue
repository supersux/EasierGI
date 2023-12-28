<template>
    <div :style="rootCss">
        <a-timeline mode="left">
            <a-timeline-item>
                <TimeTitle :style="titleCss"></TimeTitle>
            </a-timeline-item>
            <FlowUnit :state="item.state" v-for="(item, index) in taskArr">
                <TagCard :disabled="isPending(item.state)" :title="item.title" :taskList="item.task"
                    @completed="itemComplete(item, index)"></TagCard>
            </FlowUnit>
            <FlowUnit ref="endTips" style="min-height: 24px; padding-bottom: 0px;" :state="taskState">
                <span :style="titleCss">{{ taskMemo }}</span>
            </FlowUnit>
        </a-timeline>
    </div>
</template>

<script lang="ts" setup>
import { inject, ref, onMounted, onUnmounted,getCurrentInstance } from 'vue'
import { theme } from 'ant-design-vue';
import { ClockCircleOutlined, MinusCircleOutlined } from '@ant-design/icons-vue';
import StateBar from './state.vue'
import { State } from './state.vue'
import TimeTitle from './timetext.vue'
import FlowUnit from './flowunit.vue'
import TagCard from './tagcard.vue'
import { ColorTheme, isDarkTheme, G_COLOR_THEME } from '../../../config.ts';
// 样式定义
const rootCss = ref({
    backgroundColor: '#fff',
    padding: '32px 16px 0px 16px',
    borderRadius: '8px'

})
// 响应式修改主题
const colorTheme = inject(G_COLOR_THEME)
const titleCss = ref({
    color: colorTheme
})

const taskState = ref(State.PENDING)
const taskMemo = ref('工作中...')
const taskArr = ref([{
    title: '任务清单',
    task: ['每日委托', '委托奖励', '探索派遣'],
    state: State.WORKING
},
{
    title: '体力消耗',
    task: ['每日委托', '委托奖励', '探索派遣'],
    state: State.PENDING
}])

const itemComplete = (item, index) => {
    console.log(`${index} has done`);
    item.state = State.DONE
    if (index + 1 < taskArr.value.length) {
        taskArr.value[index + 1].state = State.WORKING
    } else {
        taskState.value = State.DONE
        taskMemo.value = '恭喜完成任务!!'
    }
}
onMounted(() => {
    console.log(`on lines mounted`)
})

onUnmounted(() => {
    console.log(`on lines onUnmounted`)
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
  
  