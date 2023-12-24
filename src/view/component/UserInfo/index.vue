<template>
    <a-popover placement="rightTop" trigger="click">
        <template #title>
            <a-flex style="line-height: 1; font-weight: 400;" gap="middle">
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
                    <CopyOutlined />
                    <a-tag style="border-radius: 50%;" color="green"></a-tag>
                    <span style="font-size: 16px; color: rgba(0, 0, 0, 0.68);">在线</span>
                </div>
            </a-flex>
        </template>
        <template #content>
            <a-flex gap="middle" vertical>
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

<script lang="ts" setup>
import {
    UserOutlined,
    CopyOutlined
} from '@ant-design/icons-vue'
import LevelLabel from "../LevelLabel/index.vue"
import { ref } from "vue";

// const userInfo = ref<UserInfoProps>({
//     icon: '',
//     name: '--',
//     id: 0,
//     level: 1,
//     active: 0
// })

defineProps<{
    userInfos: UserInfoProps
}>()
</script>

<script lang="ts">
export interface UserInfoProps {
    icon?: string,
    name: string,
    id: number | string,
    level: number,
    active: number
}
</script>