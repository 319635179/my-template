<template>
  <el-table-column v-for="column in columns" :prop="column.prop" :label="column.label"></el-table-column>
</template>

<script setup lang="ts">
import { TABLE_PROPERTIES } from "@/interface/field.ts";

const props = defineProps<{
  columns: TABLE_PROPERTIES;
}>();
</script>

<style scoped lang="less"></style>