<template>
  <SelectTree :treeData="treeData">
    <template #component>
      111
    </template>
  </SelectTree>
  <el-button @click="openDia">唤出弹窗</el-button>
</template>

<script setup lang="ts">
import { computed, h, ref } from "vue";
import modal from "@/common/modal.ts";
import Test from "@/views/test.vue";
import SelectTree from "@/render/treeRender/selectTree.vue";

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
  modal.popups(
    "title",
    h(Test, {
      modelValue: testData.value,
      "onUpdate:modelValue": (val) => {
        testData.value = val;
      },
    })
  );
};
init();
const treeData = [
  {label: 'a', disabled: true},
  {label: 'b'},
  {label: 'c'},
  {label: 'd'},
]
</script>

<style scoped lang="less"></style>