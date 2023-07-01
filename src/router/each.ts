import { useStore } from "@/store";
import router from "@/router/index.ts";

export const InitRouterEach = () => {
  const store = useStore();

  router.beforeEach((to) => {
    const bread = store.bread;
    const toName: string = <string>to.name;
    if (to.name && !bread.breadList[toName]) {
      bread.addBread({ name: toName, fullPath: to.fullPath });
    }
  });
};
