import { AnyObject, BUTTON } from "@/interface/util.ts";
import { createApp } from "vue";
import Dialog from "./index.vue";

let isMounted = false;
export const $dialog = (title: string, com: any, options?: AnyObject) => {
  const footerBtn: BUTTON[] = [
    {
      label: "取消",
      option: () => {
        unmount();
      },
    },
    {
      label: "确定",
      option: () => {
        options?.confirm();
        unmount();
      },
      type: "primary",
    },
  ];
  const dialog = createApp(Dialog, {
    title,
    com,
    footerBtn,
    width: options?.width,
    onClose: () => {
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
