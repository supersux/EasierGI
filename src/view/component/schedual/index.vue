<template>
    <CardBox :style="rootCss">
        <a-tabs>
            <a-tab-pane key="1" tab="角色养成">
            </a-tab-pane>
            <a-tab-pane key="2" tab="天赋培养">
                Content of Tab Pane 2
            </a-tab-pane>
            <a-tab-pane key="3" tab="武器突破">
                <Weapons :meterails="mockData" />
            </a-tab-pane>
<!-- 
            <template #renderTabBar="{ DefaultTabBar, ...props }">
                <a-affix :offset-top="8">
                    <component :is="DefaultTabBar" v-bind="props" />
                </a-affix>
            </template> -->
        </a-tabs>
    </CardBox>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import CardBox from '../cardbox/index.vue'
import Weapons from './weapons.vue'

// 样式定义
const rootCss = ref({
    padding: '0px 16px 16px 16px'
})

const tabBarCss = ref({
    backgroundColor: '#fff'
})

const mockData = [{
    icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
    title: '[自由]的哲学',
    list: [{
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }]
}, {
    icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
    title: '[自由]的哲学',
    list: [{
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }]

}, {
    icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
    title: '[自由]的哲学',
    list: [{
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }]

}, {
    icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
    title: '[自由]的哲学',
    list: [{
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }]

}, {
    icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
    title: '[自由]的哲学',
    list: [{
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }, {
        icon: 'https://api.ambr.top/assets/UI/UI_ItemIcon_104303.png?vh=2023122001',
        name: '[自由]的哲学',
        level: 4
    }]

}]
</script>