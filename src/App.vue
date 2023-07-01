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
            <el-header class="tem-bread"><Bread /></el-header>
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
import Bread from "@/components/bread/index.vue";
import { InitRouterEach } from "@/router/each.ts";

InitRouterEach();
</script>

<style scoped></style>
