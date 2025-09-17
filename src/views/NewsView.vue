<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import ListItem from '@/components/ListItem.vue'

const newList = [
  {
    title:
      '2021年11月22日，中国icusoft公司与IBM公司就IBM Cloud Pak for Integration产品进行合作，共同开发IBM Cloud Pak for Integration for Apache Kafka产品。',
    link: '',
    date: '2021-11-22'
  },
  {
    title:
      '2021年11月22日，中国icusoft公司与IBM公司就IBM Cloud Pak for Integration产品进行合作，共同开发IBM Cloud Pak for Integration for Apache Kaf ka产品。',
    link: '',
    date: '2021-11-22'
  }
]
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

      <section class="pt-4 pb-8 px-8 mt-6">
        <ListItem v-for="({ title, date, link }, i) in newList" :key="i" :title="title" :date="date" :link="link" />
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
    border: solid 1px #d2d2d2;
  }
}
</style>
