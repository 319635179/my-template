<template>
  <div :class="'tem-aside ' + (collapse ? 'collapse' : '')">
    <el-button @click="handleCollapse">切换</el-button>
    <div class="footer" @click="handleCollapse">
      <span class="iconfont icon-collapse"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { collapse, handleCollapse } from "@/components/aside/index.ts";
</script>

<style scoped lang="less">
.footer {
  transition: 200ms;
  width: var(--aside-width);
  height: 30px;
  font-size: 20px;
  text-align: center;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
  position: absolute;
  bottom: 0;
}
</style>
