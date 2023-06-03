import router from "@/router/index.ts";
import { AnyObject } from "@/interface/util.ts";
import { isFullRouter } from "@/router/fullRouter/config.ts";
import fullRouter from "@/router/fullRouter";

export interface ROUTER_PUSH_ITEM {
  name?: string;
  path?: string;
}
export const routerPush = (obj: ROUTER_PUSH_ITEM) => {
  if (obj.name) {
    if (isFullRouter[obj.name]) {
      fullRouter.push({ name: obj.name });
    } else {
      router.push({ name: obj.name });
    }
  } else if (obj.path) {
    const p = obj.path.split("?");
    const path = p[0];
    const query: AnyObject = {};
    if (p.length > 1) {
      const paramsArr = p[1].split("&");
      if (paramsArr.length) {
        paramsArr.forEach((item) => {
          const params = item.split("=");
          query[params[0]] = params[1];
        });
      }
    }
    if (isFullRouter[path]) {
      fullRouter.push({ path, query });
    } else {
      router.push({ path, query });
    }
  }
};
