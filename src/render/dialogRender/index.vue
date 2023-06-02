<template>
  <el-dialog
    draggable
    :title="title"
    width="30%"
    model-value
    :before-close="handleClose"
  >
    <div>{{ modelValue }}</div>
    <Component :is="com"></Component>
    <el-button @click="handleClose">关闭</el-button>
  </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: any;
  com: any;
  title: any;
  onClose: any;
}>();
const emits = defineEmits(["update:modelValue", "change", "close"]);

const handleClose = () => {
  emits("close");
};
</script>

<style scoped lang="less"></style>
