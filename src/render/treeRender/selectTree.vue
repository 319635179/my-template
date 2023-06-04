<template>
  <el-container class="select">
    <el-aside class="aside">
      <tree-render :items="treeData" :draggable="true"></tree-render></el-aside>
    <el-main>
      <slot name="component" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import TreeRender from "@/render/treeRender/treeRender.vue";
import { TreeData } from "@/interface/field.ts";

const props = defineProps<{
  treeData: TreeData[];
}>()
</script>

<style scoped lang="less">
.select {
  border: 1px solid rgba(169, 169, 169, 0.4);

  .aside {
    width: 30%;
    border-right: 1px solid rgba(169, 169, 169, 0.4);
  }
}
</style>