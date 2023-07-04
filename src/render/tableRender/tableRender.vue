<template>
  <el-table :data="tableData">
    <items :columns="tableAttribute.properties" />
  </el-table>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Items from "@/render/tableRender/items.vue";
import { TABLE_RENDER } from "@/interface/field.ts";

const props = defineProps<{
  tableAttribute: TABLE_RENDER;
  data: any;
}>();

const tableData = computed(() => props.data);
</script>

<style scoped lang="less"></style>
