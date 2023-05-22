<template>
  <form-render :form-attribute="test_form" v-model="formData"></form-render>
  <el-button type="primary" @click="handleSubmit">{{
    userStore.name
  }}</el-button>
</template>

<script setup lang="ts">
import FormRender from "@/render/formRender/index.vue";
import { Post } from "@/common/request.ts";
import { useUserStore } from "@/store/user.ts";
import { FORM_RENDER, META_ITEM } from "@/interface/field.ts";
import { getFormItem } from "@/common/field.ts";
import { onMounted, ref } from "vue";

const userStore = useUserStore();
const test: META_ITEM = {
  label: "test",
  prop: "test",
  type: "string",
};
const test_form: FORM_RENDER = {
  labelWidth: 100,
  className: "test-class",
  column: 3,
  properties: {
    ...getFormItem(test, {
      className: "test-children-class",
      style: {
        labelWidth: 100,
      },
      column: 2,
      required: true,
    }),
    ...getFormItem(
      { label: "ccc", prop: "ccc" },
      {
        widget: "number",
        defaultValue: 111,
        disabled: true,
      }
    ),
    ...getFormItem(
      { label: "ddd", prop: "ddd" },
      {
        widget: "slider",
        limit: {
          min: 20,
          max: 40,
        },
        defaultValue: 26,
        column: 3,
      }
    ),
    ...getFormItem(
      { label: "eee", prop: "eee" },
      {
        widget: "select",
        options: [
          { label: "a", key: 1 },
          { label: "b", key: 2 },
        ],
        defaultValue: 2,
      }
    ),
  },
};

const formData = ref({});

const handleSubmit = () => {
  console.log(formData.value);
};
Post("/login").then((resp) => {
  if (resp.success) {
    userStore.updateUser({
      ...resp.data,
      isLogin: true,
    });
  }
});

onMounted(() => {});
</script>

<style scoped lang="less"></style>
