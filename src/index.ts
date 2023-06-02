import { App, createApp } from "vue";
import FullApp from "@/views/fullScreen/index.vue";
import "@/assets/style/main.css";
import pinia from "@/store";
import fullRouter from "@/router/fullRouter";

let app:App<Element>;
export const mountApp = () => {
  app = createApp(FullApp);
  app.use(pinia);
  app.use(fullRouter)
  app.mount("#full");
}

export const unMountApp = () => {
  app.unmount();
}
