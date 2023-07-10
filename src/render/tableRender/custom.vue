<template>
  <el-button @click="handleCustom">+</el-button>
</template>

<script setup lang="ts">
import modal from "@/common/modal.ts";
import CustomTree from "@/render/tableRender/customTree.vue";
import { TABLE_PROPERTIES } from "@/interface/field.ts";
import { h } from "vue";

const props = defineProps<{
  tableAtt: TABLE_PROPERTIES;
  allAtt: TABLE_PROPERTIES;
}>();

const emits = defineEmits(["updateTableAtt"]);

const handleCustom = () => {
  modal.popups(
    "自定义表格列",
    h(CustomTree, {
      value: props.tableAtt,
      allAtt: props.allAtt,
      onUpdateTableAtt: (data) => {
        emits("updateTableAtt", data);
      },
    })
  );
};
</script>

<style scoped lang="less"></style>
