import { App, createApp } from "vue";
import MainApp from "./App.vue";
import router from "./router";
import "@/assets/style/main.css";
import pinia from "@/store";
import { initIsFullRouter } from "@/router/fullRouter/config.ts";

let app: App<Element>;
export const mountApp = () => {
  app = createApp(MainApp);
  app.use(router);
  app.use(pinia);
  app.mount("#app");
};
mountApp();
initIsFullRouter();

export const unMountApp = () => {
  app.unmount();
};
