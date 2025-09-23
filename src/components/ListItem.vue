<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: { type: String, default: '' },
  link: { type: String, default: '' },
  content: { type: String, default: '' },
  date: { type: String, default: '' }
})

const datetime = computed(() => {
  const date = new Date(props.date)

  let month = date.getMonth() + 1
  let day = date.getDate()
  return {
    year: date.getFullYear(),
    month: month < 10 ? '0' + month : month,
    day: day < 10 ? '0' + day : day
  }
})
</script>

<template>
  <div class="flex space-x-4">
    <div class="text-center" style="width: 120px">
      <div class="day-font">{{ datetime.day }}</div>
      <div class="year-mouth">{{ datetime.year }}.{{ datetime.month }}</div>
    </div>
    <div class="main w-full">
      <p class="title flex items-center justify-between mb-0">
        <a :href="link" :title="title" class="line-clamp-1 no-underline">{{ title }}</a>
        <RouterLink to="/" class="more no-underline">...</RouterLink>
      </p>
      <p class="ml-2 line-clamp-2" style="line-height: 35px">{{ content }}</p>
    </div>
  </div>
  <el-divider type="dashed"></el-divider>
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

.day-font {
  font-size: 80px;
  color: #c6c6c6;
}

.year-mouth {
  font-size: 24px;
  color: #5e5e5e;
}

.main .title {
  margin-bottom: 15px;
  border-left: 5px solid var(--el-color-primary);
  padding-left: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;

  a {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
  }

  .more {
    font-size: 28px;
    font-weight: bolder;
    color: var(--el-color-primary);
  }
}
</style>
