import router from "@/router/index.ts";
import { AnyObject } from "@/interface/util.ts";

export interface ROUTER_PUSH_ITEM {
  name?: string;
  path?: string;
}
export const routerPush = (obj: ROUTER_PUSH_ITEM) => {
  if (obj.name) {
    router.push({ name: obj.name });
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
    router.push({ path, query });
  }
};
