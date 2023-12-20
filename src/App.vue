<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import GrowthCard from "./view/component/GrowthCard/index.vue"
import menuItem from "./view/component/menu/index.vue"
// 导入插件需要的参数类型

const items = ['aa', 'bb', 'cc']
const selected = (item: string) => {
  console.log(`${item}is clicked`)
}

const showContextMenu = (e) => {
  e.preventDefault()
  console.log(`监听右键菜单`)
}
</script>
<script>

</script>
<template>
  <div class="container" @click.right.native="showContextMenu($event)">
    <h1>Welcome to Tauri111!</h1>
    <GrowthCard name="珊瑚" />
    <div style="display:flex; flex-direction: row;">
      <menuItem style="margin-top:20px;" v-bind:list="items" @selected="selected" />
    </div>

    <!-- <img class="more" src="./assets/more.svg" alt="" /> -->
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
