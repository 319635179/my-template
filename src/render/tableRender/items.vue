<template>
  <el-table-column fixed="left" v-if="selection" type="selection" width="55" />
  <el-table-column
    v-for="column in columns"
    :class-name="column.className"
    :prop="column.prop"
    :label="column.label"
    :width="column.width || column.style?.width || 200"
    :min-width="column.style?.minWidth || 120"
  >
    <template #default="scope" v-if="column.widget === 'component'">
      <component :is="scope.row[column.prop]" />
<!--      {{ scope.row[column.prop] }}-->
    </template>
  </el-table-column>
  <el-table-column v-if="option?.open !== false" fixed="right" label="操作" :min-width="option?.minWidth || 120" :width="option?.width || 120">
    <slot name="opt"></slot>
  </el-table-column>
</template>

<script setup lang="ts">
import { TABLE_OPTIONS, TABLE_PROPERTIES } from "@/interface/field.ts";

const props = defineProps<{
  columns: TABLE_PROPERTIES;
  selection?: boolean;
  option?: TABLE_OPTIONS;
}>();
</script>

<style scoped lang="less"></style>
