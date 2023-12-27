<template>
    <div class="display-content">
        <p v-for="item in list">this is chat page</p>
    </div>
</template>

<style scoped>
.display-content::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
}

.display-content {
    scrollbar-width: none;
    max-height: 100%;
    /* Firefox */
    overflow-y: scroll;
    /* IE 10+ */
    -ms-overflow-style: none;
}
</style>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const root = ref<any>(null)
const list = ref<Array<any>>([])
onMounted(() => {
    console.log(`chat onMounted`)
    console.log(root)
    list.value = new Array(10)
})

// let scroll = new BScroll(wrapper)
</script>