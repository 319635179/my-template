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
      :prop="item.prop"
      :rules="getRules(item)"
      :style="{
        display: getHidden(item.hidden) ? 'none' : '',
        ...item.style,
      }"
    >
      <widget
        v-if="item.widget !== 'component' && !item.child"
        :item="item"
        v-model="form[prop]"
      ></widget>
      <Component
        v-else-if="item.widget === 'component'"
        :is="item.component"
        v-model="form[prop]"
        v-bind="item.attribute"
      ></Component>
      <FormRender
        class="form-child"
        v-if="item.child"
        :form-attribute="item.child"
        v-model="form[prop]"
      ></FormRender>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { FORM_PROPERTIES, FORM_RENDER, META_VALUE } from "@/interface/field.ts";
import { computed, defineComponent, onMounted, Ref, ref, watch } from "vue";
import { AnyObject } from "@/interface/util.ts";
import Widget from "@/render/formRender/widget.vue";
import "./index.less";
import { getRules } from "@/common/field.ts";
import { Get, Post } from "@/common/request.ts";

defineComponent({
  name: "FormRender",
});

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
    const data = Object.assign(props.modelValue || {}, val);
    emits("update:modelValue", data);
    emits("change", data);
  },
});

const getDefaultValue = () => {
  Object.keys(formItems.value).forEach((item) => {
    if (form.value[formItems.value[item].prop] === undefined) {
      form.value[formItems.value[item].prop] =
        formItems.value[item].defaultValue;
      if (formItems.value[item].child) {
        form.value[formItems.value[item].prop] = {};
      }
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

const getOptionsByApi = async (api) => {
  let ans: META_VALUE[] = [];
  if (api.type === "post") {
    await Post(api.api, { [api.params]: form.value[api.params] }).then((res) => {
      ans = res.data;
    });
  } else {
    await Get(api.api, { [api.params]: form.value[api.params] }).then((res) => {
      ans = res.data;
    })
  }
  return ans;
};

const getOptionsWatchByApi = (obj, key) => {
  watch(
    () => form.value[obj.optionsApi?.params],
    () => {
      getOptionsByApi(obj.optionsApi).then((res) => {
        formItems.value[key].options = res;
      });
    }, {
      deep: true
    }
  )
}

const getOptionsWatchBySelect = (obj, key) => {
  watch(
    () => form.value[obj.optionsSelect?.params],
    () => {
      formItems.value[key].options = obj.optionsSelect.getFunc(form.value[obj.optionsSelect.params]);
    }, {
      deep: true
    }
  )
}

const getOptions = () => {
  for (let key in formItems.value) {
    const obj = formItems.value[key];
    if (obj.widget === "select" || obj.widget === "radio") {
      if (obj.optionsApi) {
        getOptionsWatchByApi(obj, key);
        getOptionsByApi(obj.optionsApi).then((res) => {
          formItems.value[key].options = res;
        });
      } else if(obj.optionsSelect) {
        getOptionsWatchBySelect(obj, key);
        formItems.value[key].options = obj.optionsSelect.getFunc(form.value[obj.optionsSelect.params]);
      }
    }
  }
};
getOptions();

onMounted(() => {
});
</script>

<style scoped lang="less"></style>
