import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import router from './router/index'
import SvgIcon  from './components/SvgIcon/index.vue'
import UserIcon  from './components/UserIcon/index.vue'

createApp(App).use(router).component('svg-icon', SvgIcon).component('user-icon', UserIcon).mount("#app");
