<template>
  <el-container class="select">
    <el-aside class="aside">
      <tree-render v-model="data" :draggable="true"></tree-render></el-aside>
    <el-main>
      {{ data }}
      <slot name="component" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import TreeRender from "@/render/treeRender/treeRender.vue";
import { TreeData } from "@/interface/field.ts";
import { computed, onMounted, watch } from "vue";

const props = defineProps<{
  modelValue: TreeData[];
}>()

const emits = defineEmits(['update:modelValue', 'change'])

const data = computed({
  get() {
    return props.modelValue;
  }, set(val) {
    console.log(val);
    const data = Object.assign(props.modelValue, val);
    emits("update:modelValue", data);
    emits("change", data);
  }
})

onMounted(() => {
  watch(
    () => data.value,
    () => {
      console.log(data.value);
    }
  )
})
</script>

<style scoped lang="less">
.select {
  border: 1px solid rgba(169, 169, 169, 0.4);

  .aside {
    width: 30%;
    border-right: 1px solid rgba(169, 169, 169, 0.4);
  }
}
</style>