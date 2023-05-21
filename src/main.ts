import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/main.css";
import pinia from "@/store";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
