import { AnyObject } from "@/interface/util.ts";
import { createApp } from "vue";
import Dialog from "./index.vue";

let isMounted = false;
export const $dialog = (title: string, com: any, options?: AnyObject) => {
  const dialog = createApp(Dialog, {
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
    dialog.mount("#dialog");
  };

  const unmount = () => {
    isMounted = false;
    dialog.unmount();
  };
  mount();
};
