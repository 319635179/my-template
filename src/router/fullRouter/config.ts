import { RouteRecordRaw } from "vue-router";
import Login from "@/views/fullScreen/login.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]