<template>
  <form-render :form-attribute="test_form" v-model="formData"></form-render>
  <el-button type="primary">{{ userStore.name }}</el-button>
</template>

<script setup lang="ts">
import FormRender from '@/render/formRender/index.vue';
import { Post } from "@/common/request.ts";
import { useUserStore } from "@/store/user.ts";
import { FORM_RENDER, META_ITEM, META_TYPE } from "@/interface/field.ts";
import { getFormItem } from "@/common/field.ts";
import { ref } from "vue";

const userStore = useUserStore();
const test: META_ITEM = {
  label: "test",
  prop: "test",
  type: "string",
}
const test_form: FORM_RENDER = {
  labelWidth: 200,
  className: "test-class",
  properties: {
    ...getFormItem(test, {
      className: "test-children-class",
      style: {
        labelWidth: 100,
      },
      required: true,
    }),
    ...getFormItem({label: "ccc", prop: 'ccc'}, {
      widget: "number",
      defaultValue: 1,
      disabled: true,
    }),
  }
}

const formData = ref({test: "aaa"})

Post("/login").then((resp) => {
  if (resp.success) {
    userStore.updateUser({
      ...resp.data,
      isLogin: true,
    });
  }
});
</script>

<style scoped lang="less">
</style>
