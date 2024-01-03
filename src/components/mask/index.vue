<template>
    <div class="root"></div>
</template>

<style lang="less" scoped>
@import '../../common.less';

.root {
    width: 100%;
    flex: 1;
    background:rgb(53, 93, 119);
    background-image: linear-gradient(#f5f5f5 1px, transparent 0),
        linear-gradient(90deg, #f5f5f5 1px, transparent 0),
        linear-gradient(hsla(0, 0%, 100%, .3) 1px, transparent 0),
        linear-gradient(90deg, hsla(0, 0%, 100%, .3) 1px, transparent 0);
    background-size: 60px 60px, 60px 60px, 15px 15px, 15px 15px;
}
</style>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount } from 'vue'

</script>