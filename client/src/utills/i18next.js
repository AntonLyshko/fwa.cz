import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'cz',
    debug: true,
    whitelist: ['en', 'cz', 'ru', 'de', 'uk', 'po'],
    resources: {
      cz: { translation: require('./translations/cz.json') },
      en: { translation: require('./translations/en.json') },
      ru: { translation: require('./translations/ru.json') },
      uk: { translation: require('./translations/uk.json') },
      de: { translation: require('./translations/de.json') },
      po: { translation: require('./translations/po.json') },
    },
  });

export default i18next;
