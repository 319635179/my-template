<template>
  <el-input v-model="data.test"></el-input>
  <el-button @click="openDia">唤出弹窗</el-button>
</template>

<script setup lang="ts">
import { computed, h, ref } from "vue";
import modal from "@/common/modal.ts";
import Test from "@/views/test.vue";

const props = withDefaults(
  defineProps<{
    modelValue: any;
    ttt?: any;
  }>(),
  {
    modelValue: {},
  }
);

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
  emits("update:modelValue", props.modelValue);
  emits("change", props.modelValue);
};
const testData = ref({ test: 333 });
const openDia = () => {
  modal.largeDia(
    "333",
    h(Test, {
      modelValue: testData.value,
      "onUpdate:modelValue": (val) => {
        testData.value = val;
      },
    })
  );
};
init();
</script>

<style scoped lang="less"></style>