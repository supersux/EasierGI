<template>
    <div :style="boxCss" class="qrcode-box">
        <div class="mask" :style="{display: status == 'expired' ? 'flex' : 'none'}">
            <span>{{ $t('login.loadingTips') }}</span>
            <div class="refresh">
                <svg t="1704659262743" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4217"
                    width="16" height="16" @click="refresh">
                    <path
                        d="M772.010667 795.008c-58.026667 52.053333-123.861333 84.053333-197.546667 96-73.642667 11.989333-145.792 2.986667-216.490667-27.008-70.656-32-126.506667-79.36-167.466666-141.994667-40.96-62.72-61.824-132.693333-62.506667-210.048h64c0.682667 67.328 19.157333 127.658667 55.466667 180.992 36.352 53.333333 85.845333 92.330667 148.522666 116.992 62.72 24.021333 125.525333 28.672 188.501334 14.037334 63.018667-14.677333 117.504-46.677333 163.498666-96h-93.013333a31.146667 31.146667 0 0 1-22.997333-8.96 30.506667 30.506667 0 0 1-8.96-22.528c0-9.002667 2.986667-16.512 8.96-22.485334a34.986667 34.986667 0 0 1 23.04-10.026666h148.992a33.792 33.792 0 0 1 22.016 10.026666c5.973333 5.973333 9.344 13.354667 10.026666 22.016v148.992a34.730667 34.730667 0 0 1-10.026666 22.997334 30.592 30.592 0 0 1-22.485334 8.96 30.592 30.592 0 0 1-22.528-8.96 30.976 30.976 0 0 1-8.96-23.04v-50.005334l-0.042666 0.042667zM276.010667 296.021333h93.013333a31.146667 31.146667 0 0 1 22.997333 8.96c5.973333 5.973333 8.96 13.525333 8.96 22.528 0 8.96-2.986667 16.469333-8.96 22.485334a34.986667 34.986667 0 0 1-23.04 10.026666H219.989333a33.792 33.792 0 0 1-22.016-10.026666 33.792 33.792 0 0 1-9.984-22.016V178.986667a34.730667 34.730667 0 0 1 9.984-23.04 30.592 30.592 0 0 1 22.528-8.96c8.96 0 16.469333 2.986667 22.485334 8.96 5.973333 6.016 9.002667 13.653333 8.96 23.04v50.005333c58.026667-52.010667 123.861333-84.010667 197.546666-96 73.642667-11.946667 146.133333-2.986667 217.472 27.008 70.698667 32 126.336 79.36 167.04 142.037333C874.666667 364.714667 895.317333 434.730667 896 512h-64c-0.64-67.328-19.157333-127.658667-55.466667-180.992-36.352-53.333333-85.845333-92.330667-148.522666-116.992-62.72-24.021333-125.525333-28.672-188.501334-14.037333-63.018667 14.677333-117.504 46.677333-163.498666 96z"
                        fill="#1296db" fill-opacity=".96" p-id="4218"></path>
                </svg>

                <span @click="refresh">
                    {{ $t('login.refreshTips') }}
                </span>
            </div>
        </div>
        <div class="mask" :style="{display: status == 'loading' ? 'flex' : 'none'}">
            <div class="spinner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="qrcode">
            <Qrcode :size="size - 12" background="transparent" :foreground="color" level="M" :value="value"></Qrcode>
        </div>
    </div>

    <span class="qr-tips">{{ $t('login.scanTips') }}</span>
</template>

<style lang="less" scoped>
.qrcode-box {
    display: flex;
    position: relative;
    align-items: center;

    .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.88);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4px;

        .refresh {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
        }

        span {
            &:nth-child(1) {
                color: rgb(240, 74, 32);
            }

            &:nth-child(2) {
                font-size: 14px;
                color: #1296db;
            }
        }


        .spinner {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;

            span {
                background: #1296db;
                width: 4px;
                height: 16px;
                animation: grow 1s ease-in-out infinite;

                &:nth-child(2) {
                    animation: grow 1s ease-in-out 0.15s infinite;
                }

                &:nth-child(3) {
                    animation: grow 1s ease-in-out 0.3s infinite;
                }

                &:nth-child(4) {
                    animation: grow 1s ease-in-out 0.475s infinite;
                }
            }

            @keyframes grow {

                0%,
                100% {
                    transform: scaleY(1);
                }

                50% {
                    transform: scaleY(1.8);
                }
            }
        }
    }

    .qrcode {
        padding: 6px;
    }
}

.qr-tips {
    color: #363062;
    margin-top: 16px;
}
</style>

<script lang="ts" setup>
import Qrcode from 'qrcode.vue';
const props = withDefaults(defineProps<{
    size?: number
    color?: string
    value?: string,
    status: 'active' | 'expired' | 'loading'
}>(), {
    size: 160,
    value: 'power by sux'
})

const emits = defineEmits(['refresh'])
const boxCss = {
    width: props.size + 'px',
    height: props.size + 'px'
}

const refresh = () => {
    emits('refresh')
}
</script>