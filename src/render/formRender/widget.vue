<!-- 作者： 汪子涵 -->
<!-- 时间： 2023.5.21 -->
<!-- 描述： 表单组件最小粒度 -->
<template>
  <!--  String类型  -->
  <el-input
    v-if="item.widget === 'text' || !item.widget"
    v-model="data"
    :disabled="item.disabled"
    :placeholder="item.placeholder"
  ></el-input>
  <el-radio-group
    v-else-if="item.widget === 'radio'"
    v-model="data"
    :placeholder="item.placeholder"
  >
    <el-radio v-for="opt in item.options" :label="opt.value || opt.key">{{
      opt.label
    }}</el-radio>
  </el-radio-group>
  <el-select
    v-else-if="item.widget === 'select'"
    v-model="data"
    :placeholder="item.placeholder"
  >
    <el-option
      v-for="opt in item.options"
      :label="opt.label"
      :value="opt.value || opt.key"
    ></el-option>
  </el-select>
  <!--  Number类型  -->
  <el-input-number
    :placeholder="item.placeholder"
    v-else-if="item.widget === 'number'"
    v-model="data"
    :disabled="item.disabled"
  ></el-input-number>
  <el-slider
    v-else-if="item.widget === 'slider'"
    v-model="data"
    :min="item.limit?.min"
    :max="item.limit?.max"
  ></el-slider>
  <!--  Boolean类型  -->
  <el-switch v-else-if="item.widget === 'switch'" v-model="data"></el-switch>
  <!--  Object类型  -->
  <!--  Date类型-->
  <el-time-picker
    :placeholder="item.placeholder"
    v-else-if="item.widget === 'time'"
    v-model="data"
  ></el-time-picker>
  <el-date-picker
    :placeholder="item.placeholder"
    v-else-if="item.widget === 'date'"
    v-model="data"
  ></el-date-picker>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FORM_ITEM } from "@/interface/field.ts";
import "./widget.less";

const props = defineProps<{
  item: FORM_ITEM;
  modelValue: any;
}>();
const emits = defineEmits(["update:modelValue", "change"]);
const data = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
    emits("change", val);
  },
});
</script>

<style scoped lang="less"></style>
