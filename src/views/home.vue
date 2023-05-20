<template>
  <div>home</div>
  <el-button type="primary">{{ userStore.name }}</el-button>
</template>

<script setup lang="ts">
import { Post } from "@/common/request.ts";
import { useUserStore } from "@/store/user.ts";

const userStore = useUserStore();

Post("/login").then((resp) => {
  if (resp.success) {
    userStore.updateUser({
      ...resp.data,
      isLogin: true,
    });
  }
});
</script>

<style scoped lang="less">
</style>
