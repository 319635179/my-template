import { RouteRecordRaw } from "vue-router";
import Login from "@/views/fullScreen/login.vue";
import { AnyObject } from "@/interface/util.ts";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

export const isFullRouter: AnyObject = {};

export const initIsFullRouter = () => {
  routes.forEach((item) => {
    isFullRouter[item.path] = true;
    if (typeof item.name === "string") {
      isFullRouter[item.name] = true;
    }
  });
};
