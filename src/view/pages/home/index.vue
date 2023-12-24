<template>
    <div class="display-content">
        <a-collapse v-model:activeKey="activeKey" :bordered="true">
            <template #expandIcon="{ isActive }">
                <caret-right-outlined :rotate="isActive ? 90 : 0" />
            </template>
            <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="4" header="This is panel header 1" :style="customStyle" draggable="true">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="5" header="This is panel header 2" :style="customStyle">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="6" header="This is panel header 3" :style="customStyle">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="7" header="This is panel header 1" :style="customStyle" draggable="true">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="8" header="This is panel header 2" :style="customStyle">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="9" header="This is panel header 3" :style="customStyle">
                <p>{{ text }}</p>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<style scoped>
.display-content::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
    scrollbar-width: none;
}

.display-content {
    scrollbar-width: none;
    max-height: 100%;
    overflow-y: scroll;
}
</style>

<script lang="ts" setup>
import { CaretRightOutlined } from '@ant-design/icons-vue';
import { ref, onMounted, onBeforeMount } from 'vue';

const activeKey = ref(['1']);
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const customStyle =
    'background: #fff;border-radius: 8px;margin-bottom: 24px;border: 0;overflow: hidden';

const root = ref<any>(null)

onMounted(() => {
    console.log(root.value)
})

</script>