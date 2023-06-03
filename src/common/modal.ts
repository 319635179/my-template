import "element-plus/es/components/message/style/css";
// @ts-ignore
import { ElMessage } from "element-plus";
import { AnyObject } from "@/interface/util.ts";
import { $dialog } from "@/render/dialogRender/index.ts";
import { $drawer } from "@/render/drawerRender/index.ts";

const modal = {
  warning: (mes: string) => {
    ElMessage({
      message: mes,
      type: "warning",
    });
  },
  success: (mes: string) => {
    ElMessage({
      message: mes,
      type: "success",
    });
  },
  error: (mes: string) => {
    ElMessage({
      message: mes,
      type: "error",
    });
  },
  dialog: (title: string, com: any, options?: AnyObject) => {
    $dialog(title, com, options);
  },
  popups: (title: string, com: any, options?: AnyObject) => {
    options = {};
    options.width = '675px';
    $dialog(title, com, options);
  },
  largeDia: (title: string, com: any, options?: AnyObject) => {
    options = {};
    options.width = '900px';
    $dialog(title, com, options);
  },
  drawer: (title: string, com: any, options?: AnyObject) => {
    $drawer(title, com, options);
  },
};

export default modal;
