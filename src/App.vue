<template>
  <a-config-provider :locale="locale">
    <Main/>
  </a-config-provider>
</template>

<script lang="ts" setup>
import Main from './view/pages/main/index.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const locale = zhCN
</script>

<script lang="ts">
</script>