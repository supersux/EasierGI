<template>
  <div class="display-content">
    <p v-for="item in list">this is chat page</p>
  </div>
</template>

<style lang="less" scoped>
@import "../../../common.less";
.display-content::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

.display-content {
  scrollbar-width: none;
  overflow-y: scroll;
  position: relative;
  display: flex;
  background-color: @bg-color-light-global;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const root = ref<any>(null);
const list = ref<Array<any>>([]);
onMounted(() => {
  console.log(`chat onMounted`);
  console.log(root);
  list.value = new Array(10);
});

// let scroll = new BScroll(wrapper)
</script>
