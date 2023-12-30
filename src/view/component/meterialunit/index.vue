<template>
    <div class="root">
        <div class="header" :style="imgBgCss">
            <img :src="src" alt="icon">
        </div>
        <!-- 星星展示 -->
        <div></div>
        <div class="footer">
            <span>{{ name }}</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.root {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(0deg, #e9e5dc, 10rem, transparent);
    border-radius: 8px;
    margin-inline-end: 8px;
    margin-top: 8px;

    .header {
        border-bottom-right-radius: 16px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        img {
            width: 84px;
            height: 84px;
        }
    }

    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 0px;

        span {
            color: #c09228;
            font-size: 12px;
            font-weight: 600;
        }
    }
}
</style>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const props = defineProps<{
    src: string,
    level: number,
    name: string
}>()

const imgBgColor = computed(() => {
    if (props.level) {
        switch (props.level) {
            case 5:
                return 'rgba(200,124,36,1)'
            case 4:
                return 'rgba(148,112,187,1)'
            case 3:
                return 'rgba(89,135,173, 1)'
            case 2:
                return 'rgba(90,151,122,1)'
            case 1:
                return 'rgba(129,132,134,1)'
            default:
                break
        }
    }
    return 'transparent'
})

const imgBgCss = ref({
    backgroundColor: imgBgColor
})
</script>