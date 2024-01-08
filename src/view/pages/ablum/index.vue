<template>
    <div>
        <p>this is ablum page</p>
    </div>
</template>

<script lang="ts" setup>
import { WebviewWindow } from '@tauri-apps/api/window';
const main = WebviewWindow.getByLabel('main')
console.log(`main window ${main}`)
const attach = WebviewWindow.getByLabel('attach')
console.log(`attach window ${attach}`)
</script>