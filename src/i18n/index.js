import { createI18n } from "vue-i18n";
import en from "@/i18n/locales/en.json";
import pl from "@/i18n/locales/pl.json";

export default createI18n({
  locale: "pl",
  fallbackLocale: "pl",
  legacy: false,
  globalInjection: true,
  messages: { en, pl },
  runtimeOnly: false,
});
