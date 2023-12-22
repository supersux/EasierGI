<template>
    <div></div>
</template>

<style scoped>
div {
    width: 24px;
    height: 24px;
    transform: rotate(30deg) skewY(30deg) scaleX(0.866);
    border: 1px solid #000;
    border-radius: 20%;
}

div::before,
div::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
}
div::before {
    border-radius: 20% 20% 20% 55%;
    transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%) skewX(30deg) scaleY(0.866) translateX(-24%);
    background: red;
}
div::after {
    border-radius: 20% 20% 55% 20%;
    background: blue;
    transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%) skewX(-30deg) scaleY(0.866) translateX(24%);
}
</style>