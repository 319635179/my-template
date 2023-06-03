import { RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];
