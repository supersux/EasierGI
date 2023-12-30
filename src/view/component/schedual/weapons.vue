<template>
    <div class="root-schedual-weapons">
        <Domain :icon="item.icon" :title="item.title" :list="item.list" v-for="item in meterails"/>
    </div>
</template>

<script lang="ts" setup>
import Domain from './domains.vue'
import { Weapon } from './domains.vue'
defineProps<{
    meterails: Meterails[]
}>()
</script>

<script lang="ts">
interface Meterails {
    icon: string,
    title: string,
    list: Weapon[]
}
</script>

