<script setup lang="ts">
import { useNav } from '@/composables/useNav'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const { nav } = useNav()
const router = useRoute()

const activeMenu = computed(() => {
  return router.path
})
</script>

<template>
  <el-container>
    <el-header class="header">
      <el-menu :default-active="activeMenu" class="header-menu" mode="horizontal" router>
        <el-menu-item v-for="({ text, path }, i) in nav" :key="i" :index="path">{{ text }}</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
    <el-footer>
      <section class="h-full flex justify-center items-center gap-4 text-nowrap">
        <div><span>主办：</span></div>
        <div><span>地点：</span></div>
        <div><span>邮编：</span></div>
      </section>
    </el-footer>
  </el-container>
</template>

<style lang="less">
.header {
  background: url('../assets/img/header.bg.png') center no-repeat;
  background-size: cover;

  .header-menu {
    --el-menu-item-font-size: 18px;
    --el-menu-bg-color: transparent;
    --el-menu-text-color: white;
    --el-menu-active-color: white;
    --el-menu-hover-text-color: white;

    .el-menu-item {
      &:hover {
        background: linear-gradient(to top, #ae1214, #de2913);
      }

      &.is-active {
        border: none;
        background: linear-gradient(to top, #ae1214, #de2913);
      }
    }
  }
}

.el-main {
  min-height: calc(100vh - 120px);
}

.el-footer {
  font-size: 16px;
  color: white;
  background-color: var(--el-color-primary);
}
</style>
