<template>
  <el-dialog
    draggable
    :title="title"
    :width="width || '450px'"
    model-value
    :before-close="handleClose"
  >
    <Component :is="com"></Component>
    <el-button @click="handleClose">关闭</el-button>
    <template #footer>
      <el-button
        v-for="item in footerBtn"
        @click="item.option()"
        :type="item.type"
        >{{ item.label }}</el-button
      >
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { BUTTON } from "@/interface/util.ts";
import "./index.less";

const props = defineProps<{
  com: any;
  title: any;
  width?: string;
  onClose: any;
  footerBtn?: BUTTON[];
}>();
const emits = defineEmits(["update:modelValue", "change", "close"]);

const handleClose = () => {
  emits("close");
};
</script>

<style scoped lang="less"></style>
