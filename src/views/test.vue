<template>
  <el-input v-model="data.test"></el-input>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: { test: string },
  }>(),
  {
    modelValue: {test: ''},
  }
);
console.log(props);

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
</script>

<style scoped lang="less"></style>
