<template>
  <el-container class="m-tem">
    <el-header>
      <Header />
    </el-header>
    <el-main class="tem-main">
      <el-container>
        <el-aside>
          <Aside />
        </el-aside>
        <el-main>
          <el-container>
            <el-header class="tem-bread">bread</el-header>
            <el-main class="tem-main-body">
              <div class="router-view">
                <div class="main-view">
                  <router-view></router-view>
                </div>
              </div>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Header from "@/components/header/index.vue";
import Aside from "@/components/aside/index.vue";
</script>

<style scoped></style>
