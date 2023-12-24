<template>
    <a-popover placement="rightTop" trigger="click">
        <template #title>
            <a-flex style="line-height: 1; font-weight: 400;" gap="middle">
                <a-avatar src="https://gd-hbimg.huaban.com/0c68d3ec11529096a9910e86d9e76651d5585c3067a78-h7cuzu_fw658webp"
                    :size="64">
                    <template #icon>
                        <UserOutlined />
                    </template>
                </a-avatar>
                <!-- awesome grid layout -->
                <div style="display: inline-grid; grid-gap: 8px; grid-template-columns: auto 1fr auto;">
                    <span style="grid-column-start: 1;
                     grid-column-end: 4; 
                     font-size: 22px; 
                     color: rgba(0, 0, 0, 0.88);">苏苏</span>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">uid</span>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">1234567890</span>
                    <CopyOutlined />
                    <a-tag style="border-radius: 50%;" color="#f50"></a-tag>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">在线</span>
                </div>
            </a-flex>
        </template>
        <template #content>
            <a-flex gap="middle" vertical>
                <div style="display: inline-grid; grid-gap: 8px; grid-template-columns: auto 1fr;">
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.88); font-weight: 500;">等级</span>
                    <LevelLabel :level="60"/>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.88); font-weight: 500;">活跃</span>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">400天</span>
                </div>
                <div style="display: flex;">
                    <a-button style="flex: 1;">编辑资料</a-button>
                    <div style="width: 8px;"></div>
                    <a-button style="flex: 1;" type="primary">召唤派蒙</a-button>
                </div>
            </a-flex>

        </template>
        <a-avatar src="https://gd-hbimg.huaban.com/0c68d3ec11529096a9910e86d9e76651d5585c3067a78-h7cuzu_fw658webp"
            :size="48">
            <template #icon>
                <UserOutlined />
            </template>
        </a-avatar>
    </a-popover>
</template>

<script lang="ts" setup>
import {
    UserOutlined,
    CopyOutlined
} from '@ant-design/icons-vue'
import LevelLabel from "../LevelLabel/index.vue"
import { State } from "../StateLabel/index.vue"
import { Theme } from "../../theme"
import { ref } from "vue";
import { hide } from '@tauri-apps/api/types/app';
let stateMemo = ref<string>("测试2")
let userState = ref<State>(State.ONLINE)

const themeChange = (theme: Theme) => {
    if (theme == Theme.DARK) {

    } else {

    }
}
</script>