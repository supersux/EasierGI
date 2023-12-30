<template>
    <div class="toobar">
        <div class="left-side">
            <div class="btn close"></div>
            <div class="btn min"></div>
            <div class="btn max"></div>
            <span class="title"></span>
        </div>
        <div class="rightside">
        </div>
    </div>
</template>

<style lang="less" scoped>
.toobar {
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    width: 300px;
    border-bottom: 2px solid red;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    justify-content: space-between;

    .left-side {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            font-size: 8px;
            height: 12px;
            width: 12px;
            box-sizing: border-box;
            border: none;
            border-radius: 100%;
            text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
            box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.280);
        }

        .btn:hover {
            cursor: pointer;
        }

        .btn:focus {
            outline: none;
        }

        .close {
            background-color: #ff605c;
        }

        .min {
            background-color: #ffbd44;
        }

        .max {
            background-color: #00ca4e;
        }


    }

    .right-side {

        
    }

}
</style>

<script lang="ts" setup>
import { ref } from 'vue';

// const toolbarCss = ref({

// })
</script>