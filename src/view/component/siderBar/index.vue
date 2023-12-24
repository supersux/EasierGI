<template>
    <a-layout-sider class="root-sider-bar" v-model:theme="theme" collapsedWidth="64" collapsed>
        <a-flex style="width: 100%; height: 64px; margin-top: 8px;" align="center" justify="center">
            <UserInfo v-model:user-infos="userInfo"></UserInfo>
        </a-flex>
        <a-menu v-model:selectedKeys="selectedKeys" v-model:theme="theme" :items="items" v-on:click="navToPage">
        </a-menu>
        <a-flex style="position: absolute; bottom: 0px; width:100%; marginBottom: 16px;" align="center" justify="center">
            <a-avatar style="background-color: transparent;" size="36">
                <template #icon>
                    <BulbTwoTone :two-tone-color="theme == 'light' ? 'rgb(0,0,0)' : 'rgb(255, 255, 255)'"
                        v-on:click="changeTheme" />
                </template>
            </a-avatar>
        </a-flex>
    </a-layout-sider>
</template>

<style scoped></style>

<script lang="ts" setup>
import { h, ref, onBeforeMount, reactive } from 'vue'
import { MenuProps } from 'ant-design-vue'
import {
    HomeOutlined,
    MessageOutlined,
    TeamOutlined,
    PictureOutlined,
    SettingOutlined,
    BulbTwoTone
} from '@ant-design/icons-vue'
import UserInfo from '../UserInfo/index.vue'
import { UserInfoProps } from '../UserInfo/index.vue'
import router from '../../../router'

const emit = defineEmits(['themeChanged'])

const theme = ref<string>('light')
const selectedKeys = ref<String[]>(['home']);
// should remove label, the label caused memory leak
const items = ref<MenuProps['items']>([
    {
        key: 'home',
        icon: () => h(HomeOutlined)
    },
    {
        key: 'chat',
        icon: () => h(MessageOutlined)
    },
    {
        key: 'contact',
        icon: () => h(TeamOutlined)
    },
    {
        key: 'ablum',
        icon: () => h(PictureOutlined)
    },
    {
        key: 'setting',
        icon: () => h(SettingOutlined)
    }
])

const changeTheme = () => {
    // to root view and then distributed by root view
    // emit('themeChanged', toThemeEnum(theme.value))
    userInfo.level = 60
    userInfo.name = '周周'
}

onBeforeMount(() => {
    router.push({ path: '/home', replace: true })
    selectedKeys.value = ['home']
})

const navToPage: MenuProps['onClick'] = (e) => {
    console.debug(`navToPage::${e['key']}`)
    router.push({ path: e['key'], replace: true })
};

// mock data
const userInfo = reactive<UserInfoProps>({
    icon: 'https://gd-hbimg.huaban.com/0c68d3ec11529096a9910e86d9e76651d5585c3067a78-h7cuzu_fw658webp',
    name: '苏苏',
    id: 4564564564,
    level: 58,
    active: 520
})


</script>

<script lang="ts">
</script>