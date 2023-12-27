<template>
    <a-popover placement="rightTop" trigger="click">
        <context-holder />
        <template #title>
            <a-flex style="line-height: 1; font-weight: 400; user-select: none;" gap="middle">
                <a-avatar v-model:src="userInfos.icon" :size="64">
                    <template #icon>
                        <UserOutlined />
                    </template>
                </a-avatar>
                <!-- awesome grid layout -->
                <div style="display: inline-grid; grid-gap: 8px; grid-template-columns: auto 1fr auto;">
                    <span style="grid-column-start: 1;
                     grid-column-end: 4; 
                     font-size: 22px; 
                     color: rgba(0, 0, 0, 0.88);">{{ userInfos.name }}</span>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">uid</span>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">{{ userInfos.id }}</span>
                    <CopyOutlined v-on:click="copyId(userInfos.id)" />
                    <a-tag style="border-radius: 50%;" color="green"></a-tag>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">在线</span>
                </div>
            </a-flex>
        </template>
        <template #content>
            <a-flex style="user-select: none;" gap="middle" vertical>
                <div style="display: inline-grid; grid-gap: 8px; grid-template-columns: auto 1fr;">
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.88); font-weight: 500;">等级</span>
                    <LevelLabel v-model:level="userInfos.level" />
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.88); font-weight: 500;">活跃</span>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">{{ userInfos.active }}</span>
                </div>
                <div style="display: flex;">
                    <a-button style="flex: 1;">编辑资料</a-button>
                    <div style="width: 8px;"></div>
                    <a-button style="flex: 1;" type="primary">召唤派蒙</a-button>
                </div>
            </a-flex>

        </template>
        <a-avatar v-model:src="userInfos.icon" :size="48">
            <template #icon>
                <UserOutlined />
            </template>
        </a-avatar>
    </a-popover>
</template>

<style scoped>
#user-info-header #user-info-content {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>

<script lang="ts" setup>
import {
    UserOutlined,
    CopyOutlined
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue';
import LevelLabel from "../levellabel/index.vue"
import { writeText } from '@tauri-apps/api/clipboard';
import { ref } from 'vue';

// const userInfo = ref<UserInfoProps>({
//     icon: '',
//     name: '--',
//     id: 0,
//     level: 1,
//     active: 0
// })

import { theme } from 'ant-design-vue';
const { useToken } = theme;
const { token } = useToken();
console.log(token.value)

defineProps<{
    userInfos: UserInfoProps
}>()

const [messageApi, contextHolder] = message.useMessage();

const copyId = (e: string | number) => {
    let txt: string = e.toString()
    console.log(`start copy ${txt}`)
    let copyResult = writeText(txt)
    
    copyResult.then(() => {
        messageApi.success({
            content: `复制成功`,
            duration: 1
        });
    })
}

</script>

<script lang="ts">
export interface UserInfoProps {
    icon: string,
    name: string,
    id: number | string,
    level: number,
    active: number
}
</script>