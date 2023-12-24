<template>
    <a-layout-sider class="root-sider-bar" v-model:theme="theme" collapsedWidth="64" collapsed>
        <a-flex style="width: 100%; height: 64px; margin-top: 8px;" align="center" justify="center">
            <UserInfo></UserInfo>
        </a-flex>
        <a-menu :selectedKeys="current" v-model:theme="theme" v-model:items="items" v-on:click="navToPage">
        </a-menu>
        <!-- <a-menu v-model:theme="theme" selectedKeys="home">
            <a-menu-item key="home" v-on:click="navToPage('/')">
                <home-outlined />
                <span>home</span>
            </a-menu-item>
            <a-menu-item key="chat" v-on:click="navToPage('/chat')">
                <message-outlined />
                <span>chat</span>
            </a-menu-item>
            <a-menu-item key="contact" v-on:click="navToPage('/contact')">
                <team-outlined />
                <span>contact</span>
            </a-menu-item>
            <a-menu-item key="ablum" v-on:click="navToPage('/ablum')">
                <picture-outlined />
                <span>ablum</span>
            </a-menu-item>
            <a-menu-item key="setting" v-on:click="navToPage('/setting')">
                <setting-outlined />
                <span>setting</span>
            </a-menu-item>
        </a-menu> -->

        <a-flex style="position: absolute; bottom: 0px; width:100%; marginBottom: 16px;" align="center" justify="center">
            <a-avatar style="background-color: transparent;" size="36">
                <template #icon>
                    <!-- <BulbOutlined /> -->
                    <BulbTwoTone :two-tone-color="theme == 'light' ? 'rgb(0,0,0)' : 'rgb(255, 255, 255)'"
                        v-on:click="changeTheme" />
                </template>
            </a-avatar>
        </a-flex>
    </a-layout-sider>
</template>

<style scoped></style>

<script lang="ts" setup>
import {
    UserOutlined,
    HomeOutlined,
    MessageOutlined,
    TeamOutlined,
    PictureOutlined,
    SettingOutlined,
    BulbTwoTone
} from '@ant-design/icons-vue'
import { h, ref, watch, onMounted } from 'vue'
import { MenuProps } from 'ant-design-vue'
import UserInfo from '../UserInfo/index.vue'
import router from '../../../router'

const theme = ref<string>('light')
const current = ['home']

const items = [
    {
        key: 'home',
        icon: () => h(HomeOutlined),
        label: 'home',
        path: '/home'
    },
    {
        key: 'chat',
        icon: () => h(MessageOutlined),
        label: 'chat',
        path: '/chat'
    },
    {
        key: 'contact',
        icon: () => h(TeamOutlined),
        label: 'contact',
        path: '/contact'
    },
    {
        key: 'ablum',
        icon: () => h(PictureOutlined),
        label: 'ablum',
        path: '/ablum'
    },
    {
        key: 'setting',
        icon: () => h(SettingOutlined),
        label: 'setting',
        path: '/setting'
    }
]

const changeTheme = () => {
    if (theme.value == 'light') {
        theme.value = 'dark'
    } else {
        theme.value = 'light'
    }
}

onMounted(() => {
    router.push({ path: '/home' })
})

const navToPage: MenuProps['onClick'] = (e) => {
    console.debug(`navToPage::${e['key']}`)
    router.push({ path: e['key'] })
};

</script>

<script lang="ts">
// should define items type
</script>