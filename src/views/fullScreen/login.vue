<template>
<div>
  <el-button @click="login">登录</el-button>
</div>
</template>

<script setup lang="ts">
import { mountApp } from "@/main.ts";
import { unMountApp } from "@/views/fullScreen/index.ts";
import router from "@/router";

const login = () => {
  mountApp()
  unMountApp();
  router.push({name: 'home'});
}
</script>

<style scoped lang="less">

</style>