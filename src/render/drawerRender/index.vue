<template>
  <el-drawer model-value :title="title" width="30%" :before-close="handleClose">
    <div>{{ modelValue }}</div>
    <Component :is="com"></Component>
    <el-button @click="handleClose">关闭</el-button>
  </el-drawer>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: any;
  com: any;
  title: any;
}>();

const emits = defineEmits(["update:modelValue", "change", "close"]);

const handleClose = () => {
  emits("close");
};
</script>

<style scoped lang="less"></style>
