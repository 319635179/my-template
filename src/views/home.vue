<template>
  <SelectTree v-model="treeData">
    <template #component> 111 </template>
  </SelectTree>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SelectTree from "@/render/treeRender/selectTree.vue";

const treeData = ref([
  { label: "a", disabled: true },
  { label: "b" },
  { label: "c" },
  { label: "d" },
]);
</script>

<style scoped lang="less"></style>
