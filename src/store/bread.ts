import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { min } from "@/util";
import { routerPush } from "@/router/option.ts";

export interface BREAD_ITEM {
  fullPath: string;
  name: string;
}
export const useBreadStore = defineStore("bread", () => {
  const breadList: Ref<{ [key: string]: BREAD_ITEM }> = ref({});
  const focusBread = ref("主页");

  breadList.value["主页"] = { name: "主页", fullPath: "/home" };
  breadList.value["表单"] = { name: "表单", fullPath: "/form" };
  breadList.value["表格"] = { name: "表格", fullPath: "/table" };
  let breadNames: string[] = Object.keys(breadList.value);

  const changeFocusBread = (item: BREAD_ITEM) => {
    focusBread.value = item.name;
  };

  const addBread = (item: BREAD_ITEM) => {
    breadList.value[item.name] = item;
    changeFocusBread(item);
    breadNames = Object.keys(breadList.value);
  };

  const deleteBread = (i: number) => {
    if (
      breadNames.length > 1 &&
      breadNames.length > i &&
      breadList.value[breadNames[i]]
    ) {
      const item = breadList.value[breadNames[i]];
      if (item.name === focusBread.value) {
        focusBread.value = breadNames[min(i + 1, breadNames.length - 1)];
        routerPush({ path: breadList.value[focusBread.value].fullPath });
      }
      delete breadList.value[item.name];
      breadNames = Object.keys(breadList.value);
    }
  };

  return {
    breadList,
    focusBread,
    changeFocusBread,
    addBread,
    deleteBread,
  };
});
