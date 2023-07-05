<template>
  <el-table :data="tableData" @selection-change="handleSelectionChange">
    <items :selection="tableAttribute.select" :columns="tableAttribute.properties" :option="tableAttribute.option" >
      <template #opt>
          <slot name="opt" />
      </template>
    </items>
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

const handleSelectionChange = (val) => {
  console.log(val);
}
</script>

<style scoped lang="less"></style>
