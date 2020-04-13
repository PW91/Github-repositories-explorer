import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

const otherLanguages = []

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'pl',
    fallbackLng: 'pl',
    otherLanguages,
    load: 'currentOnly',
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    backend: {
      loadPath: '/public/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      wait: true,
      useSuspense: false,
    }
  })

export default i18n
