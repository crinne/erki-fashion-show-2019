import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next/hooks';

i18n
  // load translation using xhr -> see /public/locales
  .use(Backend)
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    // lng: "en",
    fallbackLng: 'en', // use en if detected lng is not available

    //keySeparator: false, // we do not use keys in form messages.welcome
    //debug: false,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
