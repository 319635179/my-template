<template>
  <main class="tem-header">
    <div class="header-name">
      <div class="logo"></div>
      <span>系统名称</span>
    </div>
    <div class="flex-grow"></div>
    <div><el-button @click="goLogin">登出</el-button></div>
  </main>
</template>

<script setup lang="ts">
import {mountApp} from "@/index.ts";
import {unMountApp} from "@/main.ts";
import fullRouter from "@/router/fullRouter";

const goLogin = () => {
  mountApp();
  unMountApp();
  fullRouter.push({name: 'login'})
}
</script>

<style scoped lang="less">
.flex-grow {
  flex-grow: 1;
}
</style>
