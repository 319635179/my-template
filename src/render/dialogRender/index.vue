<template>
  <el-dialog
    draggable
    :title="title"
    width="30%"
    model-value
    :before-close="onClose"
  >
    <div>{{ modelValue }}</div>
    <Component :is="com"></Component>
    <el-button @click="onClose">关闭</el-button>
  </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: any;
  com: any;
  title: any;
  onClose: any;
}>();
</script>

<style scoped lang="less"></style>
