import { createPinia } from "pinia";
import { useUserStore } from "@/store/user.ts";
import { useBreadStore } from "@/store/bread.ts";

const pinia = createPinia();
export default pinia;

export let store = {
  user: useUserStore(pinia),
  bread: useBreadStore(pinia),
};

export const useStore = () => {
  return store;
};
