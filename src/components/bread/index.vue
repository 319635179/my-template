<template>
  <div class="bread">
    <span
      class="item"
      v-for="(item, name, i) in store.bread.breadList"
      :class="item.name === store.bread.focusBread ? 'is-focus' : ''"
      @click="routerGo(item)"
    >
      {{ name }}
      <span class="iconfont icon-close" @click.stop="removeItem(i)"></span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { store } from "@/store";
import { routerPush } from "@/router/option.ts";
import { BREAD_ITEM } from "@/store/bread.ts";

const routerGo = (item: BREAD_ITEM) => {
  store.bread.changeFocusBread(item);
  routerPush({ path: item.fullPath });
};

const removeItem = (i: number) => {
  store.bread.deleteBread(i);
};
</script>

<style scoped lang="less">
.item {
  margin-right: var(--margin-small-1);
  line-height: 30px;
  padding: var(--padding-small) var(--padding-mid);
  border-radius: 2px;
  box-shadow: 1px 1px 3px var(--gray-mid-1);
  background: var(--cyan-light-1);
  transition: 200ms;
}

.is-focus {
  background: var(--cyan-light-blue-1);
  color: var(--blue-dark-1);
}
</style>
