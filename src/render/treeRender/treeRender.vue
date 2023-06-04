<template>
  <el-tree
    :allow-drop="allowDrop"
    :allow-drag="allowDrag"
    :data="items"
    :draggable="draggable"
    default-expand-all
    @node-drag-end="handleDragEnd"
    node-key="id"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  items: any[];
  draggable?: boolean;
}>();
console.log(props.draggable);
const allowDrop = (node) => {
  return !node.disabled;
};

const allowDrag = (draggingNode, dropNode, type) => {
  console.log(draggingNode, dropNode);
  return !draggingNode.disabled;
};

const handleDragEnd = () => {
  console.log(props.items);
};
</script>

<style scoped lang="less"></style>
