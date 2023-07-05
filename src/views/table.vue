<template>
  <div>
    <TableRender :table-attribute="test_table" :data="tableData">
      <template #opt>
        <div>111</div>
      </template>
    </TableRender>
  </div>
</template>

<script setup lang="ts">
import TableRender from "@/render/tableRender/tableRender.vue";
import { TABLE_DATA, TABLE_RENDER } from "@/interface/field.ts";
import { getTableColumn } from "@/common/field.ts";
import Home from "@/views/home.vue";

const test_table: TABLE_RENDER = {
  select: true,
  option: {
    // open: false,
    width: 200,
  },
  properties: {
    ...getTableColumn({label: "test1", prop: "test1"}),
    ...getTableColumn({label: "test2", prop: "test2"}, {
      widget: 'component'
    }),
    ...getTableColumn({label: "test3", prop: "test3"}),
    ...getTableColumn({label: "test4", prop: "test4"}),
  },
};

const tableData: TABLE_DATA[] = [
  {test1: 1,test2: Home,test3: 1,test4: 1, },
  {test1: 1,test2: Home,test3: 3,test4: 1, },
  {test1: 1,test2: Home,test3: 3,test4: 1, },
  {test1: 1,test2: Home,test3: 3,test4: 4, },
]
</script>

<style scoped lang="less"></style>