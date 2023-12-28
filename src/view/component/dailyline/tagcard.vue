<template>
    <a-divider :style="lineCss" orientation="left">{{ title }}</a-divider>
    <div>
        <a-tag color="success" v-for="item in taskDoneList" closeIcon>
            <template #icon>
                <check-circle-outlined />
            </template>
            {{ item }}
        </a-tag>
        <a-tag color="processing" v-for="(item, index) in taskTodoList" @click="changeList(index)" bordered>
            <template #icon>
                <sync-outlined :spin="true" />
            </template>
            {{ item }}
        </a-tag>
    </div>
</template>
<style lang="less" scoped></style>
<script lang="ts" setup>
import {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons-vue';
import { inject, ref, onMounted, watch, computed } from 'vue'
import { State } from './state.vue'
import { ColorTheme, isDarkTheme, G_COLOR_THEME } from '../../../config'

// 响应式修改主题
const colorTheme = inject(G_COLOR_THEME)
const lineCss = ref({
    margin: '4px 0px',
    fontSize: '16px',
    color: colorTheme
})

const props = defineProps<{
    title: string,
    taskList: string[],
    disabled: boolean
}>()

const emits = defineEmits(['completed'])

const taskTodoList = computed(() => {
    let res: string[] = []
    res.push(...props.taskList)
    return res
})

const taskDoneList = ref<string[]>([])

const changeList = (index) => {
    if (props.disabled) {
        return
    }
    let value = taskTodoList.value.splice(index, 1)
    if (value) {
        taskDoneList.value.push(...value)
    }
    if (taskDoneList.value.length == props.taskList.length) {
        emits('completed')
    }
}
</script>

<script lang="ts">
function getState() {

}
</script>