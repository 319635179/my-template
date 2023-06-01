import { AnyObject } from "@/interface/util.ts";
import { createApp } from "vue";
import Drawer from './index.vue'

let isMounted = false;
export const $drawer = (title: string, com: any, options?: AnyObject) => {
  const drawer = createApp(Drawer, {
    title,
    com,
    onClose: () => {
      unmount();
    },
    onConfirm: () => {
      options?.confirm();
      unmount();
    },
  });

  const mount = () => {
    if (isMounted) {
      unmount();
    }
    isMounted = true;
    drawer.mount("#drawer");
  };

  const unmount = () => {
    isMounted = false;
    drawer.unmount();
  };
  mount();
};
