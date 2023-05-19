<template>
<div>home</div>
  <el-button type="primary">111</el-button>
</template>

<script setup lang="ts">
import modal from "../common/modal.ts";
import {Post} from "@/common/request.ts";

modal.warning("111")

Post("/login").then(resp => {
  console.log(resp)
})
</script>

<style scoped lang="less">

</style>