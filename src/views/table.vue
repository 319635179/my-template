<template>
  <div>
    <TableRender :table-attribute="test_table" :data="tableData" />
  </div>
</template>

<script setup lang="ts">
import TableRender from "@/render/tableRender/tableRender.vue";
import { TABLE_RENDER } from "@/interface/field.ts";
import { getTableColumn } from "@/common/field.ts";

const test_table: TABLE_RENDER = {
  properties: {
    ...getTableColumn({label: "test1", prop: "test1"}),
    ...getTableColumn({label: "test2", prop: "test2"}),
    ...getTableColumn({label: "test3", prop: "test3"}),
    ...getTableColumn({label: "test4", prop: "test4"}),
  },
};

const tableData = [
  {test1: 1,test2: 2,test3: 1,test4: 1, },
  {test1: 1,test2: 2,test3: 3,test4: 1, },
  {test1: 1,test2: 2,test3: 3,test4: 1, },
  {test1: 1,test2: 2,test3: 3,test4: 4, },
]
</script>

<style scoped lang="less"></style>