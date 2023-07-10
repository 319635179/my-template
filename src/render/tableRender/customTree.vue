<template>
  <SelectTree :model-value="treeData">
    <template #component>
      <el-checkbox
        v-for="item in allAtt"
        :label="item.label"
        v-model="checkValue[item.label]"
      ></el-checkbox>
    </template>
  </SelectTree>
</template>

<script setup lang="ts">
import { TABLE_PROPERTIES } from "@/interface/field.ts";
import SelectTree from "@/render/treeRender/selectTree.vue";
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  value: TABLE_PROPERTIES;
  allAtt: TABLE_PROPERTIES;
}>();

const emits = defineEmits(["updateTableAtt"]);

const checkValue = ref({});

const treeData = ref([]);

const changeTreeData = (obj, isInitCheck?: boolean) => {
  const objStr = Object.keys(obj);
  if (isInitCheck) {
    checkValue.value = {};
  }
  treeData.value = objStr.map((item) => {
    if (isInitCheck) {
      checkValue.value[item] = true;
    }
    return { label: obj[item].label };
  });
};

onMounted(() => {
  changeTreeData(props.value, true);
  watch(
    () => checkValue,
    () => {
      const checkStr = Object.keys(checkValue.value);
      const data = {};
      checkStr.forEach((item) => {
        if (checkValue.value[item]) {
          data[item] = props.allAtt[item];
        }
      });
      changeTreeData(data);
      emits("updateTableAtt", data);
    },
    {
      deep: true,
    }
  );
});
</script>

<style scoped lang="less"></style>
