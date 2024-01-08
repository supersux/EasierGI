import { createApp } from "vue";
import i18n from '../i18n'
import "./styles.css";
import App from "./App.vue";
import router from "../router/index";

const app = createApp(App);

app
  .use(router)
  .use(i18n)
  .mount("#app");
