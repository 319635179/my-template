import { RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Form from "@/views/form.vue";
import Table from "@/views/table.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "主页",
    component: Home,
  },
  {
    path: "/form",
    name: "表单",
    component: Form,
  },
  {
    path: "/table",
    name: "表格",
    component: Table,
  },
];
