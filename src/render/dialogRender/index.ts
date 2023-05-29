import { AnyObject } from "@/interface/util.ts";
import { createApp } from "vue";
import Dialog from "./index.vue"


export const $dialog = (title: string, com: any, options?: AnyObject) => {
  const dialog = createApp(Dialog, {
    title,
    com,
    onClose: () =>{
      unmount();
    },
    onConfirm: () => {
      options?.confirm();
      unmount();
    }
  });

  const mount = () =>{
    unmount();
    dialog.mount("#popper");
  }

  const unmount = () =>{
    dialog.unmount();
  }
  mount();
}