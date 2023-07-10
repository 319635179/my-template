<template>
  <el-row>
    <el-col class="table-header-left" :span="12"
      ><slot name="header-left"
    /></el-col>
    <el-col class="table-header-right" :span="12">
      <slot name="header-right" />
      <Custom
        v-if="tableAttribute.custom"
        :tableAtt="displayTableAtt"
        :allAtt="tableAttribute.properties"
        @updateTableAtt="changeDisplayTable"
      />
    </el-col>
  </el-row>
  <el-table :data="tableData" @selection-change="handleSelectionChange">
    <items
      :selection="tableAttribute.select"
      :columns="displayTableAtt"
      :option="tableAttribute.option"
    >
      <template #opt>
        <slot name="opt" />
      </template>
    </items>
  </el-table>
</template>

<script setup lang="ts">
import { computed, onMounted, Ref, ref } from "vue";
import Items from "@/render/tableRender/items.vue";
import { TABLE_PROPERTIES, TABLE_RENDER } from "@/interface/field.ts";
import "./index.less";
import { getObjMapByNumLimit } from "@/util";
import { maxDisNum } from "@/render/tableRender/index.ts";
import Custom from "@/render/tableRender/custom.vue";

const props = defineProps<{
  tableAttribute: TABLE_RENDER;
  data: any;
}>();

const tableData = computed(() => props.data);

const displayTableAtt: Ref<TABLE_PROPERTIES> = ref({});

const handleSelectionChange = (val) => {
  console.log(val);
};

const initDisplayTable = () => {
  displayTableAtt.value = getObjMapByNumLimit(
    props.tableAttribute.properties,
    maxDisNum
  );
};

const changeDisplayTable = (data) => {
  displayTableAtt.value = data;
};

onMounted(() => {
  initDisplayTable();
});
</script>

<style scoped lang="less">
.table-header-right {
  text-align: right;
}
</style>
