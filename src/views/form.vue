<template>
  <form-render :form-attribute="test_form" v-model="formData"></form-render>
  <el-button type="primary" @click="handleSubmit">{{
    userStore.name
  }}</el-button>
  {{ testData.test }}
</template>

<script setup lang="ts">
import FormRender from "@/render/formRender/formRender.vue";
import { FORM_RENDER, META_ITEM } from "@/interface/field.ts";
import { getFormItem } from "@/common/field.ts";
import Test from "@/views/test.vue";
import { h, ref } from "vue";
import modal from "@/common/modal.ts";
import { useUserStore } from "@/store/user.ts";
import { Post } from "@/common/request.ts";

Post("/login").then((resp) => {
  if (resp.success) {
    userStore.updateUser({
      ...resp.data,
      isLogin: true,
    });
  }
});
const userStore = useUserStore();
const test: META_ITEM = {
  label: "ip",
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
      format: "ip",
      rules: [
        {
          validator: (rule, value, callback) => {
            if (value === "11.11.11.11") {
              callback("不能这样写");
            } else {
              callback();
            }
          },
        },
      ],
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
        // options: [
        //   { label: "a", key: 1 },
        //   { label: "b", key: 2 },
        // ],
        // optionsApi: {
        //   api: "/aaa",
        //   type: "post",
        //   params: "ddd",
        // },
        optionsSelect: {
          getFunc: (data) => {
            if(data === 26) return [
              { label: "a", key: 1 },
              { label: "b", key: 2 },
            ]; else  return [
              { label: "c", key: 1 },
              { label: "d", key: 2 },
            ]
          },
          params: 'ddd'
        },
        defaultValue: 2,
        // hidden: "form.ddd === 26",
      }
    ),
    ...getFormItem(
      { label: "fff", prop: "fff" },
      {
        widget: "component",
        column: 2,
        component: Test,
        attribute: {
          ttt: { label: "ttt", key: "t1", value: "t2" },
        },
        hidden: "form.ddd === 26",
      }
    ),
    ...getFormItem(
      { label: "ggg", prop: "ggg" },
      {
        column: 1,
        child: {
          labelWidth: 100,
          column: 1,
          properties: {
            ...getFormItem({ label: "test0", prop: "test1" }),
            ...getFormItem({ label: "test1", prop: "test2" }),
            ...getFormItem({ label: "test2", prop: "test3" }),
          },
        },
      }
    ),
  },
};

const formData = ref({});
const testData = ref({ test: 222 });
const handleSubmit = () => {
  console.log(formData.value);
  modal.drawer(
    "222",
    h(Test, {
      modelValue: testData.value,
      "onUpdate:modelValue": (val) => {
        testData.value = val;
      },
    })
  );
};
</script>

<style scoped lang="less"></style>
