import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw,
} from "vue-router";

import Home from "../view/pages/home/index.vue";
import Chat from "../view/pages/chat/index.vue";
import Contact from "../view/pages/contact/index.vue";
import Ablum from "../view/pages/ablum/index.vue";
import Setting from "../view/pages/setting/index.vue";
import About from "../view/pages/about/index.vue";

const routes: RouteRecordRaw[] = [
  { path: "/home", name: "Home", component: Home, meta: { transition: 'slide-fade' } },
  { path: "/chat", name: "Chat", component: Chat },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/ablum", name: "Ablum", component: Ablum },
  { path: "/about", name: "About", component: About },
  { path: "/setting", name: "Setting", component: Setting },
];

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};

const router: Router = createRouter(options);

export default router;
