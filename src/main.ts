import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./styles.css";
import App from "./App.vue";
import router from "./router/index";
import SvgIcon from "./components/SvgIcon/index.vue";
import UserIcon from "./components/UserIcon/index.vue";

const i18n = createI18n({
});

const app = createApp(App);

app
  .use(router)
  .use(i18n)
  .component("svg-icon", SvgIcon)
  .component("user-icon", UserIcon)
  .mount("#app");
