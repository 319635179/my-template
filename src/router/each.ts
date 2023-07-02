import { useStore } from "@/store";
import router from "@/router/index.ts";
import { LocalStorageName, setLocalStorage } from "@/common/storage.ts";
import { BREAD_ITEM } from "@/store/bread.ts";

export const InitRouterEach = () => {
  const store = useStore();

  router.beforeEach((to) => {
    const bread = store.bread;
    const toName: string = <string>to.name;
    const item: BREAD_ITEM = { name: toName, fullPath: to.fullPath };
    if (to.name && !bread.breadList[toName]) {
      bread.addBread(item);
    }
    bread.changeFocusBread(item);
    setLocalStorage(LocalStorageName.focusBread, to.name);
  });
};
