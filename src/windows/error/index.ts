import { createApp } from "vue";
import i18n from "@/i18n";
import "../styles.css";
import App from "./index.vue";

const app = createApp(App);
app.use(i18n).mount("#app");
