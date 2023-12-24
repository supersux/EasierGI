<template>
    <a-layout style="min-height: 100vh">
        <SiderBar></SiderBar>
        <a-layout>
            <RouterView></RouterView>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import SiderBar from '../../component/siderBar/index.vue'
import UserInfo from '../../component/userInfo/index.vue'
import { RouterView } from 'vue-router'
import { h, ref } from 'vue'
</script>