<template>
    <div>
        <Child :menu="arr"></Child>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Child from './child.vue'
const arr = ref(['1', '2', '3'])
</script>
