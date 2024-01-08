<template>
    <div class="card">
        <div class="header">
            <Logo :title="$t('message.appName')"></Logo>
        </div>
        <div :class="['content', mode === Mode.QR ? '' : 'over']">
            <div class="item front">
                <QRCode status="active" color="#363062" @refresh="refresh"></QRCode>
            </div>

            <div class="item back">
                <InputCode></InputCode>
            </div>
        </div>
        <div class="footer">
            <span @click="change">{{ modeMemo }}</span>
            <span>|</span>
            <span @click="start">{{ $t('login.visit') }}</span>
        </div>
    </div>
    <!-- <div data-tauri-drag-region class="header">
        <Logo :title="$t('message.appName')"></Logo>
    </div>

    <div class="content">
        <QRCode status="active" color="#363062" @refresh="refresh"></QRCode>
    </div>
    <div class="foot">
        <span @click="change">{{ modeMemo }}</span>
        <span> | </span>
        <span @click="start">{{ $t('login.visit') }}</span>
    </div> -->
</template>
 
<style lang="less" scoped>
.card {
    display: grid;
    flex: 1;
    grid-template-rows: auto 1fr auto;
    width: 100%;

    .header {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    .content {
        position: relative;
        min-height: 240px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        transition: transform 1s;

        .item {
            position: absolute;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .front {
            transform: rotateY(0deg);
        }

        .back {
            transform: rotateY(180deg);
        }
    }

    .over {
        transform: rotateY(180deg);
    }

    .footer {
        min-height:64px;
        font-size: 14px;
        color: #363062;
        display: inline-grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 4px;
        align-items: center;

        span {
            &:nth-child(1) {
                justify-self: end;
            }

            &:nth-child(2) {
                justify-self: center;
            }

            &:nth-child(3) {
                justify-self: start;
            }

        }

    }
}
</style>
<script lang="ts" setup>
import { ref } from 'vue';
import Logo from './logo.vue';
import QRCode from './qrcode.vue';
import InputCode from './inputcode.vue';
import i18n from '@/i18n';

const refresh = () => {
    console.debug(`qr code refresh`)
}
const mode = ref(Mode.QR)
const modeMemo = ref(i18n.global.t(Mode.CODE))
const change = () => {
    if (mode.value === Mode.QR) {
        mode.value = Mode.CODE
        modeMemo.value = i18n.global.t(Mode.QR)
    } else {
        mode.value = Mode.QR
        modeMemo.value = i18n.global.t(Mode.CODE)
    }
    console.debug(`current mode is ${mode.value}`)
}
</script>

<script lang="ts">
enum Mode {
    QR = 'login.withQr',
    CODE = 'login.withCode'
}
</script>
