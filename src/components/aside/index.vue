<template>
  <div :class="'tem-aside ' + (collapse ? 'collapse' : '')">
    <el-button @click="handleCollapse()">切换</el-button>
  </div>
</template>

<script setup lang="ts">
import { collapse, handleCollapse } from "@/components/aside/index.ts";
</script>

<style scoped lang="less"></style>
