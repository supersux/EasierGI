<template>
  <div class="root">
    <a-row :gutter="[{ xs: 8, sm: 16, md: 16, lg: 24 }, { xs: 16, sm: 16, md: 24, lg: 24 }]">
      <a-col :span="8">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card hoverable title="Card title">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<style scope>
.root {
  background-color: #ececec;
  padding: 20px;
  /* 这个可以让滚动平滑 */
  scroll-behavior: smooth;
  /* 一行展示，多余出现滚动条 */
  overflow-y: scroll;
  /* 隐藏滚动条 */
  /* Firefox */
  /* -ms-overflow-style: none; */
  /* IE 10+ */
}

.root::-webkit-scrollbar-button {
  display: none;
}
</style>


