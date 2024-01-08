<template>
    <div data-tauri-drag-region class="root" @contextmenu.prevent>
        <WaveEffect></WaveEffect>
        <TitleBar data-tauri-drag-region :server-list="serverList" @toggle="serverToggle"></TitleBar>
        <GenshinCN></GenshinCN>
    </div>
</template>

<style lang="less" scoped>
@import '../../common.less';

.root {
    position: relative;
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: @atom-corner-trible;
}
</style>
<script lang="ts" setup>
import TitleBar from './titlebar.vue';
import WaveEffect from './wave.vue';

import GenshinCN from './genshincn.vue';
import { ref, onMounted } from 'vue';
import { PRAmberClient } from '../../network/client';

const serverList = ref(['原神国服', '原神国际服'])

// let client = new PRAmberClient();
// console.log(11)
// onMounted(async () => {
//     console.log(21221)
//     let res = await client.request('/en/avatar?vh=43F4').catch((err) => {
//         console.log(err)
//     })
//     console.log(res)
// })

const serverToggle = (index:number, item: string) => {
    console.debug(`server toggle to ${index} :: ${item}`)
}

const refresh = () => {
    console.debug(`qr code refresh`)
}
</script>

<script lang="ts">

</script>