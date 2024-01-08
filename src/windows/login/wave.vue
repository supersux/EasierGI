<template>
    <div class="e-card playing">
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</template>

<style lang="less" scoped>
@import '../../common.less';

.e-card {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: @atom-corner-trible;
    overflow: hidden;
    z-index: -1;
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);

    .wave {
        position: absolute;
        width: 560px;
        height: 720px;
        opacity: 0.6;
        left: 0;
        top: 0;
        margin-left: -20%;
        margin-top: -60%;
        border-radius: 45%;
        background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
        animation: wave 3s infinite linear;

        &:nth-child(1) {
            top: 250px;
            animation-duration: 4s;
        }

        &:nth-child(2) {
            top: 260px;
            animation-duration: 3s;
        }
    }
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>