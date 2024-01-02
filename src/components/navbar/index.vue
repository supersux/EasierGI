<template>
    <div :class="['bar-root', vertical ? 'bar-root-vertical' : 'bar-root-horizontal']">
        <Tray id="home" checked @checked="onHomeChecked">
            <svg t="1704036689024" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="16381" width="1em" height="1em">
                <path
                    d="M281.92 398.507l197.333-197.334c9.6-9.6 22.294-14.4 34.88-14.4 12.694 0 25.28 4.8 34.88 14.4l198.08 198.08 207.04 207.04c2.027 2.027 5.44 1.387 6.614-1.173 8.426-19.093 12.906-39.893 12.906-61.333 0-40.64-15.786-78.72-44.48-107.414L621.547 128.64c-59.307-59.2-155.627-59.2-214.934 0L99.093 436.267C70.4 464.96 54.613 503.04 54.613 543.68c0 21.44 4.48 42.347 12.907 61.333 1.173 2.56 4.587 3.2 6.613 1.174l207.787-207.68z"
                    fill="#1296db" p-id="16382"></path>
                <path
                    d="M180.907 569.813a30.597 30.597 0 0 0-8.96 21.654v246.08c0 57.92 46.933 104.853 104.853 104.853h110.187c11.093 0 20.16-8.96 20.16-20.16V684.267c0-12.16 15.04-17.6 25.813-17.6h162.453c12.374 0 25.814 6.72 25.814 17.6V922.24c0 11.093 8.96 20.16 20.16 20.16h110.186c57.92 0 104.854-47.04 104.854-104.853v-246.08c0-8.107-3.2-15.894-8.96-21.654l-320.534-320.32a18.091 18.091 0 0 0-25.706 0l-320.32 320.32z"
                    fill="#1296db" p-id="16383"></path>
            </svg>
        </Tray>
        <Tray id="chat" @checked="onChatChecked">
            <svg t="1704036985190" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="25616" width="1em" height="1em">
                <path
                    d="M511.3 98.2c-230.8 1-415.3 188.2-413 419 0.7 67.2 17.3 130.7 46.3 186.6l-36.1 191.4c-2.4 12.5 8.6 23.5 21.2 21.1l190.4-36c57.5 30.3 123 47.5 192.5 47.6C741.7 928.3 927 744.2 928 515c1-230.6-186.1-417.8-416.7-416.8z m0.7 477.9c0 17.5-14.3 31.9-31.9 31.9H351.9c-17.5 0-31.9-14.3-31.9-31.9 0-17.5 14.3-31.9 31.9-31.9h128.2c17.6 0 31.9 14.4 31.9 31.9z m192.1-127.9c0 17.6-14.4 32-32 32h-320c-17.6 0-32-14.4-32-32s14.4-32 32-32h320.1c17.5 0 31.9 14.4 31.9 32z"
                    fill="#1296db" p-id="25617"></path>
            </svg>
        </Tray>
        <Tray id="album" @checked="onAlbumChecked">
            <svg t="1704041389286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="6144" width="1em" height="1em">
                <path
                    d="M842.688 128 181.312 128C116.64 128 64 180.64 64 245.312l0 533.376C64 843.36 116.64 896 181.312 896l661.376 0C907.36 896 960 843.36 960 778.688L960 245.312C960 180.64 907.36 128 842.688 128zM288 288c35.36 0 64 28.64 64 64s-28.64 64-64 64c-35.328 0-64-28.64-64-64S252.672 288 288 288zM832 736c0 17.696-14.304 31.488-32 31.488L225.92 768c-0.128 0-0.224 0-0.352 0-10.08 0-19.616-4.288-25.664-12.384-6.112-8.192-7.936-18.56-4.896-28.352 2.304-7.488 58.272-183.552 180.064-183.552 38.08 0.896 67.424 9.824 95.776 18.336 35.712 10.72 70.528 19.936 109.664 13.76 20.448-3.296 28.896-23.808 43.328-69.952 19.04-60.8 47.808-152.736 174.656-152.736 17.536 0 31.776 14.08 32 31.616L832 511.616 832 736z"
                    fill="#1296db" p-id="6145"></path>
            </svg>
        </Tray>
        <Tray id="setting" @checked="onSettingChecked">
            <svg t="1704036908850" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="20914" width="1em" height="1em">
                <path
                    d="M922.88 472a98.24 98.24 0 0 1-80.96-64l-9.92-26.88a98.24 98.24 0 0 1 18.88-100.48 77.44 77.44 0 0 0-4.48-108.48 464.32 464.32 0 0 0-47.36-39.04 77.44 77.44 0 0 0-107.52 16.96 98.24 98.24 0 0 1-96 38.72l-29.76-4.8a98.24 98.24 0 0 1-77.76-66.56 77.44 77.44 0 0 0-96-50.24 464.32 464.32 0 0 0-57.28 22.08A77.44 77.44 0 0 0 295.68 192a98.24 98.24 0 0 1-14.08 100.48l-19.2 23.36a98.24 98.24 0 0 1-96 33.92 77.44 77.44 0 0 0-91.52 58.24q-3.52 15.04-6.08 32t-3.84 32a77.44 77.44 0 0 0 68.8 83.84 98.24 98.24 0 0 1 80.96 64l10.88 28.16a98.24 98.24 0 0 1-18.88 100.48 76.16 76.16 0 0 0 4.48 106.56 464.32 464.32 0 0 0 48.32 40 77.44 77.44 0 0 0 107.52-16.96 98.24 98.24 0 0 1 96-38.72l29.76 4.8a98.24 98.24 0 0 1 77.76 66.56 77.44 77.44 0 0 0 96 50.24 464.32 464.32 0 0 0 57.28-22.08 77.44 77.44 0 0 0 38.4-101.44 98.24 98.24 0 0 1 13.76-101.44l19.2-23.36a98.24 98.24 0 0 1 96-33.92 77.44 77.44 0 0 0 91.52-58.24q3.52-15.04 6.08-32t3.84-32a77.44 77.44 0 0 0-69.76-84.48z m-265.6 58.56a130.56 130.56 0 1 1-108.16-149.76 130.56 130.56 0 0 1 108.48 150.08z"
                    fill="#1296db" p-id="20915"></path>
            </svg>
        </Tray>
        <Tray id="info" @checked="onInfoChecked">
        </Tray>
    </div>
</template>

<style lang="less" scoped>
@import '../../common.less';

.bar-root-vertical {
    width: 64px;
    height: 100%;
    left: 0px;
    flex-direction: column;
    justify-content: start;
    padding-top: 12px;
}

.bar-root-horizontal {
    height: 64px;
    width: 100%;
    bottom: 0px;
    flex-direction: row;
    justify-content: center;
}

.bar-root {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 99;
    backdrop-filter: blur(10px);
    background-color: @bg-color-light-global;

    .bar-item {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-style: preserve-3d;
        transition: all @animation-duration ease-in-out;
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
            transform: translate3d(0px, 0px, 15px) perspective(180px) rotateX(-60deg) translateY(2px);
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
                transform: translate3d(0px, 0px, 15px) perspective(180px) rotateX(-60deg) translateY(2px);
                border-radius: 50%;
            }
        }
    }
}
</style>

<script lang="ts" setup>
import Tray from './tray.vue';
defineProps<{
    vertical?: boolean
}>()
const emits = defineEmits([`homeChecked`, `chatChecked`, `settingChecked`, `albumChecked`, `infoChecked`])
const onHomeChecked = () => {
    emits(`homeChecked`)
}
const onChatChecked = () => {
    emits(`chatChecked`)
}
const onSettingChecked = () => {
    emits(`settingChecked`)
}
const onAlbumChecked = () => {
    emits(`albumChecked`)
}
const onInfoChecked = () => {
    emits(`infoChecked`)
}
</script>