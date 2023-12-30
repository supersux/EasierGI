<template>
    <div class="root-schedual-domains">
        <div class="header">
            <a-avatar shape="square" :size="32" :src="icon">
                <template #icon>
                    <UserOutlined />
                </template>
            </a-avatar>
            <span class="title">{{ title }}</span>
        </div>
        <div class="content">
            <Unit :src="item.icon" :level="item.level" :name="item.name" v-for="item in list"/>
        </div>
    </div>
</template>

<style scoped lang="less">
.root-schedual-domains {
    display: flex;
    flex-direction: column;
    padding: 8px 0px;

    .header {
        display: flex;
        align-items: flex-end;

        .title {
            font-size: 16px;
            font-weight: bold;
            margin-inline-start: 8px;
        }
    }

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>

<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue';
import { G_COLOR_THEME } from '../../../config.ts';
import { inject, ref } from 'vue'
import Unit from '../meterialunit/index.vue'

// 响应式修改主题
// const colorTheme = inject(G_COLOR_THEME)
// const titleCss = ref({
//     color: colorTheme
// })

defineProps<{
    icon: string,
    title: string,
    list: Array<Weapon>
}>()
</script>

<script lang="ts">
export interface Weapon {
    name: string,
    icon: string,
    level: number
}
</script>
  
  