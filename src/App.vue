<template>
  <a-config-provider :locale="globalLocal" :theme="globalTheme">
    <Main @themeChanged="changeTheme" />
    <!-- <Test></Test> -->
  </a-config-provider>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enGB from 'ant-design-vue/es/locale/en_GB'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import Main from './view/pages/main/index.vue'
import Test from './view/pages/test/parent.vue'
import { ColorTheme, G_COLOR_THEME } from './config';
import { onMounted } from 'vue';
import { test, requestUigf, requestMys } from '../src/api/api'

// 主题变更
const globalTheme = ref({
  token: {
    colorPrimary: ColorTheme.BLUE
  }
});
const globalColorTheme = ref(ColorTheme.BLUE)
provide(G_COLOR_THEME, globalColorTheme)
function changeTheme(color: ColorTheme) {
  console.log(`emit by main ${color}`)
  // 更新ANT的主题
  globalTheme.value.token.colorPrimary = color
  // 更新全局注入的参数
  globalColorTheme.value = color
}

// 语言变更
const globalLocal = ref(zhCN);
</script>

<script lang="ts">

</script>