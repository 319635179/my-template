<template>
  <el-tree
    :allow-drop="allowDrop"
    :allow-drag="allowDrag"
    :data="data"
    :draggable="draggable"
    default-expand-all
    @node-drag-end="handleDragEnd"
    node-key="id"
    :icon="CloseIcon"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TreeData } from "@/interface/field.ts";
import "./index.less";
import CloseIcon from "@/components/icon/close.vue";

const props = defineProps<{
  modelValue: TreeData[];
  draggable?: boolean;
}>();

const emits = defineEmits(["update:modelValue", "change"]);

const data = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    const data = Object.assign(props.modelValue, val);
    emits("update:modelValue", data);
    emits("change", data);
  },
});

const allowDrop = (node) => {
  return !node.disabled;
};

const allowDrag = (draggingNode, dropNode, type) => {
  return !draggingNode.disabled;
};

const handleDragEnd = () => {
  data.value = data.value.map((item) => {
    return {
      label: item.label,
      disabled: item.disabled,
      children: item.children,
    };
  });
  emits("update:modelValue", data.value);
  emits("change", data.value);
};
</script>

<style scoped lang="less"></style>
