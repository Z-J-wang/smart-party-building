<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import ListItem from '@/components/ListItem.vue'
import SpecialTopic from '@/components/SpecialTopic.vue'
import Mock from 'mockjs'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const rawNewList = Mock.mock({
  'list|10': [
    {
      'id|+1': 1,
      title: '@ctitle(20, 50)',
      content: '@cparagraph(10, 20)',
      date: '@date'
    }
  ]
}).list

const router = useRouter()

const newList = computed(() => {
  return rawNewList.map((item: { id: string; date: string }) => {
    return {
      ...item,
      link: router.resolve({ name: 'NewDetail', params: { id: item.id } }).href
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
          <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <section class="pt-4 pb-8 px-8 mt-6 mb-10">
        <SpecialTopic>新闻中心</SpecialTopic>
        <ListItem
          v-for="({ title, date, link, content }, i) in newList"
          :key="i"
          :title="title"
          :date="date"
          :link="link"
          :content="content"
        />
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </section>
    </main>
  </BaseLayout>
</template>

<style lang="less" scoped>
main {
  margin: auto;
  max-width: 1140px;
}
</style>
