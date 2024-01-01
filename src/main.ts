import { createApp } from "vue";
import i18n from './i18n'
import "./styles.css";
import App from "./App.vue";
import router from "./router/index";
import SvgIcon from "./components/SvgIcon/index.vue";
import UserIcon from "./components/UserIcon/index.vue";

const app = createApp(App);

app
  .use(router)
  .use(i18n)
  .component("svg-icon", SvgIcon)
  .component("user-icon", UserIcon)
  .mount("#app");
