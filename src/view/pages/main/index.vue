<template>
    <div :class="['main', isVertival ? 'main-v' : 'main-h']">
        <div class="place-v" v-if="isVertival"></div>
        <router-view v-slot="{ Component }">
            <transition :name="isVertival ? 'scale-slide-v' : 'scale-slide-h'">
                <component :is="Component" />
            </transition>
        </router-view>
        <div class="place-h" v-if="!isVertival"></div>
        <NavBar :vertical="isVertival" class="nav-bar" @home-checked="onHomeChecked" @chat-checked="onChatChecked"
            @album-checked="onAlbumChecked" @setting-checked="onSettingChecked" @info-checked="onInfoChecked" />
    </div>
</template>

<style scoped lang="less">
@import '../../../common.less';

.main {
    position: relative;
    display: flex;
    background-color: @bg-color-light-global;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .place-v {
        width: 64px;
        height: 100%;
    }

    .place-h {
        width: 100%;
        height: 64px;
    }

}

.main-v {
    flex-direction: row;
}

.main-h {
    flex-direction: column;
}

.scale-slide-h-enter-active,
.scale-slide-h-leave-active {
    position: absolute;
    transition: all 0.75s ease;
}

.scale-slide-h-enter-from {
    left: -100%;
}

.scale-slide-h-enter-to {
    left: 0%;
}

.scale-slide-h-leave-from {
    transform: scale(1);
}

.scale-slide-h-leave-to {
    transform: scale(0.8);
}


.scale-slide-v-enter-active,
.scale-slide-v-leave-active {
    position: absolute;
    transition: all 0.75s ease;
}

.scale-slide-v-enter-from {
    top: 100%;
}

.scale-slide-v-enter-to {
    top: 0%;
}

.scale-slide-v-leave-from {
    transform: scale(1);
}

.scale-slide-v-leave-to {
    transform: scale(0.8);
}
</style>
<script lang="ts" setup>
import { ref } from 'vue';
import NavBar from '../../../components/navbar/index.vue'

const isVertival = ref(false)
navTo('/home')

const onHomeChecked = () => {
    navTo('/home')
}
const onChatChecked = () => {
    navTo('/chat')
}
const onAlbumChecked = () => {
    navTo('/album')
}
const onSettingChecked = () => {
    navTo('/setting')
}
const onInfoChecked = () => {

}
</script>

<script lang="ts">
import router from '@/router';

function navTo(path: string) {
    router.replace(path)
}

</script>