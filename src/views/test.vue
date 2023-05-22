<template>
  <el-input v-model="data.test"></el-input>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: any,
    ttt?: any;
  }>(),
  {
    modelValue: {},
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

const init = () => {
  emits('update:modelValue', props.modelValue);
  emits('change', props.modelValue);
}
init();
</script>

<style scoped lang="less"></style>
