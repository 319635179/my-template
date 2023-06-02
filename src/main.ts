import { App, createApp } from "vue";
import MainApp from "./App.vue";
import router from "./router";
import "@/assets/style/main.css";
import pinia from "@/store";
import { initIsFullRouter } from "@/router/fullRouter/config.ts";

initIsFullRouter();
let app: App<Element>;
export const mountApp = () => {
  app = createApp(MainApp);
  app.use(pinia);
  app.use(router);
  app.mount("#app");
};
mountApp();

export const unMountApp = () => {
  app.unmount();
};
