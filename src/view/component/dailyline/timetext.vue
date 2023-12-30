<template>
    <span :style="rootCss">{{ title }}</span>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps<{
    color: string | undefined,
    textSize: number
}>()

const rootCss = {
    fontWeight: 500
}

const title = ref('时间读取中...')

let timer: NodeJS.Timeout | string | number | undefined = undefined

onMounted(() => {
    timer = setInterval(updateTitle, 1000)
})

onUnmounted(() => {
    clearInterval(timer)
})

const updateTitle = () => {
    title.value = updateTime()
}


</script>

<script lang="ts">
function updateTime() {
    const week = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    const sysDate = new Date()
    const year = formatDate(sysDate.getFullYear()) + '-'
    const month = formatDate(sysDate.getMonth() + 1) + '-'
    const dayOfMonth = formatDate(sysDate.getDate()) + ' '
    const Hour = formatDate(sysDate.getHours(), true) + ':'
    const Minute = formatDate(sysDate.getMinutes(), true) + ' '
    const dayOfWeek = week[sysDate.getDay() % 7]
    return year + month + dayOfMonth + Hour + Minute + dayOfWeek;
}

function formatDate(time: number, needFormat?: boolean) {
    if (needFormat && (time > 0 && time < 10)) {
        return '0' + time
    } else {
        return '' + time
    }
}
</script>