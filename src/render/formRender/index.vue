<!-- 作者： 汪子涵 -->
<!-- 时间： 2023.5.21 -->
<!-- 描述： 表单组件入口 -->
<template>
  <el-form
    :model="form"
    :label-width="formLabelWidth"
    :class="formAttribute.className + ' form-column-' + formAttribute.column"
    :style="formAttribute.style"
  >
    <el-form-item
      v-for="(item, prop, index) in formItems"
      :label="item.label"
      :style="item.style"
      :class="item.className + ' item-column-' + item.column"
      :label-width="item.style?.labelWidth || formLabelWidth"
      :required="item.required"
    >
      <widget :item="item" v-model="form[prop]"></widget>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { FORM_PROPERTIES, FORM_RENDER } from "@/interface/field.ts";
import { computed, onMounted, Ref, ref } from "vue";
import { AnyObject } from "@/interface/util.ts";
import Widget from "@/render/formRender/widget.vue";

const props = defineProps<{
  formAttribute: FORM_RENDER;
  modelValue: AnyObject;
}>();

const emits = defineEmits(["update:modelValue", "change"]);

const formLabelWidth = props.formAttribute.labelWidth || 120;
const formItems: Ref<FORM_PROPERTIES> = ref({
  ...props.formAttribute.properties,
});

const form = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    const data = Object.assign(props.modelValue, val);
    emits("update:modelValue", data);
    emits("change", data);
  },
});

const getDefaultValue = () => {
  Object.keys(formItems.value).forEach((item) => {
    if (form.value[formItems.value[item].prop] === undefined) {
      form.value[formItems.value[item].prop] =
        formItems.value[item].defaultValue;
    }
  });
};
getDefaultValue();

onMounted(() => {});
</script>

<style scoped lang="less"></style>
