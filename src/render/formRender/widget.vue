<template>
  <el-input
    v-if="item.widget === 'text' || !item.widget"
    v-model="data"
    :disabled="item.disabled"
  ></el-input>
  <el-input-number
    v-if="item.widget === 'number'"
    v-model="data"
    :disabled="item.disabled"
  ></el-input-number>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FORM_ITEM } from "@/interface/field.ts";

const props = defineProps<{
  item: FORM_ITEM;
  modelValue: any;
}>();
console.log(props.item.widget === "text" || !props.item.widget);
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
