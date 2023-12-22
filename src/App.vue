<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import GrowthCard from "./view/component/GrowthCard/index.vue"
// import menuItem from "./view/component/menu/index.vue"
// import Test from "./view/component/test/index.vue"
import TitleBar from "./view/component/titleBar/index.vue"
import SiderBar from "./view/component/siderbar/index.vue"
import router from "./router";
// 导入插件需要的参数类型

// const items = ['aa', 'bb', 'cc']
// const selected = (item: string) => {
//   console.log(`${item}is clicked`)
// }

// const showContextMenu = (e) => {
//   e.preventDefault()
//   console.log(`监听右键菜单`)
// }

const navTopList = [
  { path: '/', icon: '' },
  { path: '/chat', icon: '' },
  { path: '/contact', icon: '' },
  { path: '/ablum', icon: '' }
]

const navBottom = [
  { path: '/setting', icon: '' }
]

const src = '/src/assets/vue.svg'
</script>
<script>

</script>
<template>
  <div class="container">
    <SiderBar :icon="src" :nav-top="navTopList" :nav-bottom="navBottom"/>
    <router-view></router-view>
    <!-- <div style="width: 100%;">
      <TitleBar/>
    </div> -->
    <!-- <h1>Welcome to Tauri!</h1> -->
    <!-- <div style="display: flex;">
      <GrowthCard name="珊瑚" />
      <div style="display:flex; flex-direction: row;">
        <menuItem style="margin-top:20px;" v-bind:list="items" @selected="selected" />
      </div>
    </div> -->
    <!-- <siderBar/> -->
    <!-- <Test style="margin-left:16px"></Test>
    <h1>Welcome to Tauri!</h1> -->
    <!-- <img class="more" src="./assets/more.svg" alt="" /> -->
  </div>
</template>

<style scoped>
@import "./style.less";
</style>
