import { createI18n } from "vue-i18n";

import zh from "./chs";
import en from "./en";

localStorage.setItem("locale", "zh")
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("locale") || navigator.language.slice(0, 2),
  messages: {
    en,
    zh,
  },
});
export default i18n;
