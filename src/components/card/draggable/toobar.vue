<template>
    <div class="toolbar" :style="{ borderWidth: isExpand ? '2px' : '0px' }">
        <div class="left-side">
            <div class="btn close" @click="closeEv">
                <svg t="1703926993694" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="21528" width="32" height="32">
                    <path
                        d="M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z"
                        fill="#2c2c2c" p-id="21529"></path>
                </svg>
            </div>
            <div class="btn min" @click="minEv">
                <svg t="1703927035373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="22746" width="200" height="200">
                    <path
                        d="M853.333333 554.666667H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666667z"
                        fill="#2c2c2c" p-id="22747"></path>
                </svg>
            </div>
            <div class="btn save" @click="saveEv">
                <svg t="1703960877746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="4237" width="200" height="200">
                    <path
                        d="M906.666667 298.666667L725.333333 117.333333c-14.933333-14.933333-32-21.333333-53.333333-21.333333H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V349.866667c0-19.2-8.533333-38.4-21.333333-51.2zM652.8 864H371.2V648.533333h281.6v215.466667z m211.2-10.666667c0 6.4-4.266667 10.666667-10.666667 10.666667h-140.8V618.666667c0-17.066667-12.8-29.866667-29.866666-29.866667H341.333333c-17.066667 0-29.866667 12.8-29.866666 29.866667v245.333333H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h140.8V320c0 17.066667 12.8 29.866667 29.866666 29.866667h277.333334c17.066667 0 29.866667-12.8 29.866666-29.866667s-12.8-29.866667-29.866666-29.866667H371.2V160h302.933333c2.133333 0 6.4 2.133333 8.533334 2.133333l179.2 179.2c2.133333 2.133333 2.133333 4.266667 2.133333 8.533334V853.333333z"
                        fill="#2c2c2c" p-id="4238"></path>
                </svg>
            </div>
            <span class="title">{{ title }}</span>
        </div>
        <div class="right-side" @click="fixEv">
            <svg t="1703927170882" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="30593" width="20" height="20">
                <path
                    d="M149.333333 896c-6.4 0-10.666667-2.133333-14.933333-6.4-8.533333-6.4-8.533333-19.2-2.133333-27.733333l238.933333-326.4-149.333333-149.333334c-4.266667-4.266667-6.4-8.533333-6.4-14.933333s2.133333-10.666667 6.4-14.933333c55.466667-55.466667 125.866667-64 206.933333-23.466667l243.2-134.4-12.8-89.6c-2.133333-8.533333 4.266667-17.066667 10.666667-21.333333 8.533333-4.266667 17.066667-2.133333 25.6 4.266666l236.8 236.8c6.4 6.4 8.533333 17.066667 4.266666 25.6-4.266667 8.533333-12.8 12.8-21.333333 10.666667l-89.6-12.8-134.4 243.2c27.733333 59.733333 46.933333 136.533333-23.466667 206.933333-8.533333 8.533333-21.333333 8.533333-29.866666 0l-149.333334-149.333333L162.133333 891.733333c-4.266667 2.133333-8.533333 4.266667-12.8 4.266667z m119.466667-522.666667l145.066667 145.066667c6.4 6.4 8.533333 19.2 2.133333 27.733333l-166.4 226.133334 226.133333-166.4c8.533333-6.4 21.333333-6.4 27.733334 2.133333l147.2 147.2c29.866667-40.533333 27.733333-85.333333-4.266667-151.466667-2.133333-6.4-2.133333-12.8 0-19.2l147.2-266.666666c4.266667-8.533333 12.8-12.8 21.333333-10.666667l40.533334 6.4-145.066667-145.066667 6.4 40.533334c2.133333 8.533333-2.133333 17.066667-10.666667 21.333333l-266.666666 147.2c-6.4 4.266667-14.933333 4.266667-21.333334 0-59.733333-34.133333-106.666667-36.266667-149.333333-4.266667z"
                    :fill="isFixed ? '#3b82f6' : '#2c2c2c'" p-id="30594"></path>
            </svg>
        </div>
    </div>
</template>

<style lang="less" scoped>
.toolbar {
    height: 36px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 2px solid red;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    justify-content: space-between;
    padding: 2px 8px;
    gap: 8px;

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 8px;
        height: 16px;
        width: 16px;
        padding: 2px;
        box-sizing: border-box;
        border: none;
        border-radius: 100%;
        text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
        box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.280);
    }

    .item-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }

    .left-side {
        .item-box();

        .btn:hover {
            cursor: pointer;
        }

        .btn:focus {
            outline: none;
        }

        .close {
            background-color: #ff605c;
        }

        .min {
            background-color: #ffbd44;
        }

        .save {
            background-color: #00ca4e;
        }

        .title {
            font-size: 16px;
        }

    }

    .right-side {
        .item-box();
    }

    .right-side:hover {
        cursor: pointer;
    }

}
</style>

<script lang="ts" setup>
import { ref } from 'vue';

const isFixed = ref(false);
const isExpand = ref(true);

withDefaults(defineProps<{
    title: string
}>(), {
    title: '--'
})
const emits = defineEmits([`close`, `minimize`, `save`, `affix`])
const closeEv = () => {
    emits(`close`)
}
const minEv = () => {
    isExpand.value = !isExpand.value;
    emits(`minimize`, isExpand.value)
}
const saveEv = () => {
    emits(`save`)
}
const fixEv = () => {
    isFixed.value = !isFixed.value
    emits(`affix`, isFixed.value)
}
// const toolbarCss = ref({

// })
</script>