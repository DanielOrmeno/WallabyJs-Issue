// tslint:disable:quotemark
import Vue from 'vue';
import VueI18n from 'vue-i18n';

import EnLocale from '~/assets/locales/en.ts';
import EsLocale from '~/assets/locales/es.ts';

Vue.use(VueI18n);

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    fallbackLocale: 'en',
    locale: store.state.locale,
    messages: {
        en: EnLocale,
        es: EsLocale,
    },
  });

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }

    return `/${app.i18n.locale}/${link}`;
  };
};
