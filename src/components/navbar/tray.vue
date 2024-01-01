<template>
    <input :id="id" type="radio" name="radio" @change="checkedEvent" :checked="checked">
    <label class="bar-item" :for="id">
        <div class="icon-box">
            <slot>
                <svg t="1704037125498" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28955" width="1em" height="1em"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#2196F3" p-id="28956"></path><path d="M469.333333 469.333333h85.333334v234.666667h-85.333334z" fill="#FFFFFF" p-id="28957"></path><path d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z" fill="#FFFFFF" p-id="28958"></path></svg>
            </slot>
        </div>
    </label>
</template>

<style lang="less" scoped>
@import '../../common.less';

.bar-item {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    border-radius: 50%;

    .icon-box {
        border: none;
        background-color: transparent;
        font-size: 20px;
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate3d(0px, 0px, 15px) perspective(180px);
        border-radius: 50%;
    }
}

input[type="radio"] {
    display: none;
}

input[type="radio"]:checked {
    &+.bar-item {
        background-color: @bg-color-light-partial;
        background-position: -100px 100px, -100px 100px;
        transform: rotate3d(0.5, 1, 0, 30deg);
        transform: perspective(180px) rotateX(60deg) translateY(2px);
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

        .icon-box {
            width: inherit;
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            // transform: translate3d(0px, 0px, 15px) perspective(180px) rotateX(-60deg) translateY(2px);
            transform: translate3d(0px, 0px, 15px) perspective(180px) rotateX(-60deg) translateY(2px);
            border-radius: 50%;
        }
    }
}
</style>

<script lang="ts" setup>
defineProps<{
    id: string,
    checked?: boolean,
    icon?: string,
    path?: string
}>()

const emits = defineEmits([`checked`])
const checkedEvent = () => {
    emits(`checked`)
}
</script>