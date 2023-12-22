<template>
    <svg :class="svgClass" aria-hidden="true" v-on="$attrs" :style="{ color: props.color }">
        <use :xlink:href="iconName" />
    </svg>
</template>
<script lang="ts">
export default {
    name: 'SvgIcon'
}
</script>
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    name: {
        type: string,
        required: true
    },
    color: {
        type: string,
        default: ''
    }
}

const props = defineProps<Props>()
const iconName = computed((): string => `#icon-${props.name}`)
const svgClass = computed((): string => {
    if (props['className']) {
        return `svg-icon icon-${props.name}`
    } else {
        return 'svg-icon'
    }
})
</script>
  
<style scoped lang="less">
@import '../../common.less';

.svg-icon {
    width: 32px;
    height: 32px;
    vertical-align: -0.15em;
    fill: @text-color-light-thick;
    overflow: hidden;
}
</style>