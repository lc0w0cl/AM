<script setup lang="ts">
import { Document } from '@element-plus/icons-vue'
</script>

<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical">
          <el-menu-item index="/assets">
            <el-icon><Document /></el-icon>
            <span>资产查询</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.app-container {
  height: 100vh;
}

.el-container {
  height: 100%;
}

.el-aside {
  background-color: #304156;
}

.el-menu {
  border-right: none;
}

.el-main {
  padding: 20px;
  background-color: #f0f2f5;
}
</style>
