<template>
    <div class="title-bar-root">
        <a-dropdown>
            <div class="title">
                <div class="dot"></div>
                <span>{{ server }}</span>
            </div>
            <template #overlay>
                <a-menu style="background-color: rgba(255, 255, 255, 0.88);">
                    <a-menu-item v-for="(item, index) in serverList" :key="index" @click="select(index, item)">
                        <span>{{ item }}</span>
                    </a-menu-item>
                </a-menu>
            </template>

        </a-dropdown>
        <div class="button-box">
            <div class="button button-left" @click="minimize">
                <svg t="1704646224550" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="16385" width="24" height="24">
                    <path d="M204.8 477.87008h614.4v68.27008H204.8z" fill="#363062" p-id="16386"></path>
                </svg>
            </div>
            <div class="button button-right" @click="close">
                <svg t="1704645607701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="13834" width="24" height="24">
                    <path
                        d="M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z"
                        fill="#363062" p-id="13835"></path>
                </svg>
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
@import '../../common.less';

.title-bar-root {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
        margin-left: 8px;
        display: flex;
        gap: 8px;
        align-items: center;
        overflow: visible;

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #0ed159;
            animation: breath infinite 0.5s ease;
        }

        span {
            color: #363062;
            font-size: 14px;
        }

        @keyframes breath {

            0%,
            100% {
                opacity: 1;
            }

            50% {
                opacity: 0;
            }
        }
    }

    .button-box {
        display: flex;

        .button {
            height: 24px;
            padding: 2px 4px;
        }

        .button-left {
            border-bottom-left-radius: @atom-corner-trible;
            cursor: pointer;
        }

        .button-right {
            border-top-right-radius: @atom-corner-trible;
            border-bottom-left-radius: @atom-corner-trible;

            &:hover {
                background-color: #d33737;
            }
        }
    }
}
</style>

<script lang="ts" setup>
import { appWindow, WebviewWindow } from '@tauri-apps/api/window';
import { onMounted, ref } from 'vue';

const props = defineProps<{
    serverList?: string[]
}>()
const emits = defineEmits(['toggle'])

const server = ref('')

const minimize = () => {
    appWindow.minimize()
}

const close = () => {
    const mainWindow = WebviewWindow.getByLabel('main');
    mainWindow?.close()
    appWindow.close()
}

const select = (index:number, item: string) => {
    server.value = item
    emits('toggle', index, item)
}

onMounted(() => {
    server.value = props.serverList && props.serverList[0] || ''
})
</script>