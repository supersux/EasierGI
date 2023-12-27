<template>
    <a-popover :trigger="['click']" placement="rightBottom">
        <slot></slot>
        <template #content>
            <!-- <a-select placement="topleft">
                <a-select-option  v-for="item in menuArr">{{ item }}</a-select-option>
            </a-select> -->
        </template>
    </a-popover>
</template>

<script lang="ts" setup>
import { computed, ref, watch, VueElement } from 'vue';
import { ItemType } from 'ant-design-vue';

const props = defineProps({
    menuArr: Array<string>
})

// function getItem(
//     label: VueElement | string,
//     key: string,
//     icon?: any,
//     children?: ItemType[],
//     type?: 'group',
// ): ItemType {
//     return {
//         key,
//         icon,
//         children,
//         label,
//         type,
//     } as ItemType;
// }
</script>
