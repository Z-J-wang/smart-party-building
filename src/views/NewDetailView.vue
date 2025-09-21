<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import Mock from 'mockjs'

const detail = Mock.mock({
  'id|+1': 1,
  title: '@ctitle(20, 50)',
  content: Mock.mock({
    'content|3-7': ['<p>' + Mock.mock('@cparagraph(10, 20)') + '</p>']
  }).content.join(''),
  author: '@cname',
  source: '@cname',
  time: '@date'
})
</script>

<template>
  <BaseLayout>
    <main>
      <div class="flex items-center">
        <el-icon size="24px" class="mr-2" color="#DC2913"><LocationFilled /></el-icon>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/news' }">新闻中心</el-breadcrumb-item>
          <el-breadcrumb-item>{{ detail.title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <section class="p-4">
        <h2 class="text-center">{{ detail.title }}</h2>

        <div class="flex justify-between mt-16">
          <div><span>来源：</span>{{ detail.source }}</div>
          <div><span>时间：</span>{{ detail.time }}</div>
          <div><span>作者：</span>{{ detail.author }}</div>
        </div>
        <el-divider border-style="dashed"></el-divider>
        <article class="my-10" v-html="detail.content" />
        <el-divider border-style="dashed"></el-divider>
      </section>
    </main>
  </BaseLayout>
</template>

<style lang="less" scoped>
main {
  margin: auto;
  max-width: 1140px;

  --el-border-color: var(--el-color-primary);

  article {
    font-size: 18px;
    line-height: 2;
    text-indent: 4ch;

    img {
      margin-top: 10px;
      margin-bottom: 10px;
      max-width: 60%;
    }
  }
}
</style>
