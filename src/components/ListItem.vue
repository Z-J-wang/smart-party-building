<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex items-center justify-between flex-nowrap space-x-10" style="height: 48px">
    <a :href="link" :title="title" class="line-clamp-1"><span class="disc"></span> {{ title }}</a>
    <div class="text-gray-400 flex-shrink-0">{{ date }}</div>
  </div>
</template>

<style lang="less" scoped>
div {
  font-size: 18px;
}

.disc {
  display: inline-block;
  margin-right: 8px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #dc2913;
}
</style>
