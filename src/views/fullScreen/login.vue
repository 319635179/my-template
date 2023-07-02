<template>
  <div>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { mountApp } from "@/main.ts";
import { unMountApp } from "@/full.ts";
import { routerPush } from "@/router/option.ts";

const login = () => {
  mountApp();
  unMountApp();
  routerPush({ name: "主页" });
};
</script>

<style scoped lang="less"></style>
