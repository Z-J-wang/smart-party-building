<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import ListItem from '@/components/ListItem.vue'
import Mock from 'mockjs'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SpecialTopic from '@/components/SpecialTopic.vue'

const rawNewList = Mock.mock({
  'list|9': [
    {
      'id|+1': 1,
      title: '@ctitle(20, 50)',
      img: '@image(250x250)',
      date: '@date'
    }
  ]
}).list

const router = useRouter()

const newList = computed(() => {
  return rawNewList.map((item: { id: string }) => {
    return {
      ...item,
      link: router.resolve({ name: 'PublicityDetail', params: { id: item.id } }).href
    }
  })
})
</script>

<template>
  <BaseLayout>
    <main>
      <div class="flex items-center">
        <el-icon size="24px" class="mr-2" color="#DC2913"><LocationFilled /></el-icon>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>宣传中心</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <section class="pt-4 pb-8 mt-6">
        <SpecialTopic>宣传中心</SpecialTopic>

        <div class="grid grid-cols-3 gap-4 mt-8">
          <div v-for="value in newList" :key="value.id">
            <img :src="value.img" class="w-full" />
            <div class="mt-2 title">
              <a class="line-clamp-1 no-underline" :href="value.link">{{ value.title }}</a>
            </div>
          </div>
        </div>

        <el-divider direction="horizontal" content-position="left"></el-divider>
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </section>
    </main>
  </BaseLayout>
</template>

<style lang="less" scoped>
main {
  margin: auto;
  max-width: 1140px;

  section {
    .title {
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
    }
  }
}
</style>
