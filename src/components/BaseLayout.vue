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
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="less">
.header {
  background: url('../assets/img/header.bg.png') center no-repeat;

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
</style>
