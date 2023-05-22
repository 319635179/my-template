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
      :class="(item.className || '') + ' item-column-' + (item.column || 1)"
      :label-width="item.style?.labelWidth || formLabelWidth"
      :required="item.required"
      :style="{
        display: getHidden(item.hidden) ? 'none' : '',
        ...item.style,
      }"
    >
      <widget
        v-if="item.widget !== 'component'"
        :item="item"
        v-model="form[prop]"
      ></widget>
      <Component
        v-else-if="item.widget === 'component'"
        :is="item.component"
        v-model="form[prop]"
      ></Component>
      <FromRender
        v-if="item.childFrom"
        v-model="form[prop]"
        :form-attritube="item.childFrom"
      ></FromRender>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import FromRender from "@/render/formRender/index.vue";
import { FORM_PROPERTIES, FORM_RENDER } from "@/interface/field.ts";
import { computed, onMounted, Ref, ref, shallowRef } from "vue";
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

const getHiddenFunc = (item: any) => {
  const func = "return " + item;
  return new Function("item", "form", func);
};

const getHidden = (item: any) => {
  return getHiddenFunc(item)(item, form.value);
};

onMounted(() => {});
</script>

<style scoped lang="less"></style>
