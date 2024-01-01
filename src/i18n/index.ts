import { createI18n } from "vue-i18n";

import zh from "./chs";
import en from "./en";

const i18n = createI18n({
  locale: localStorage.getItem("locale") || navigator.language.slice(0, 2),
  messages: {
    en,
    zh,
  },
});
export default i18n;
