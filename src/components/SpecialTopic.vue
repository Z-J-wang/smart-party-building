<template>
  <div class="special-topic">
    <div class="title-name"><slot></slot></div>
  </div>
</template>

<style lang="less" scoped>
.special-topic {
  margin-bottom: 20px;
  border-bottom: 4px solid #e2e2e2;
  height: 50px;

  .title-name {
    display: inline-block;
    border-bottom: 4px solid var(--el-color-primary);
    font-size: 30px;
    font-weight: bold;
    color: var(--el-color-primary);
    line-height: 50px;
  }
}
</style>
