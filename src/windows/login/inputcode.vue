<template>
    <a-avatar :size="64">
        <template #icon>
            <UserOutlined />
        </template>
    </a-avatar>
    <span class="card-input">
        <input type="text" />
        <span class="suffix">{{ $t('login.verifyCode') }}</span>
    </span>
    <input type="text" />
    <a-button :style="btnCss" type="primary">{{ $t('login.index') }}</a-button>
</template>

<style lang="less" scoped>
input {
    background: none;
    outline: none;
    border: none;
    line-height: 1.5;
    color: #363062;
    font-size: 16px;
}

.card-input {
    margin-top: 16px;
    border: rgba(255, 255, 255, 0.38) 1px solid;
    border-radius: 6px;
    padding: 3px 8px;



    .suffix {
        cursor: pointer;
        font-size: 14px;
        color: rgb(89, 134, 231);
    }

    &:hover {
        border-color: rgb(89, 134, 231);
    }

}
</style>

<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue';

const idCss = {
    backgroundColor: 'transparent',
    marginTop: '16px'
}

const btnCss = {
    marginTop: '16px',
    width: '100%'
}
</script>