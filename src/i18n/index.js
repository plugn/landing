import Vue from 'vue';
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

import { LANG } from '@/constants';

Vue.use(VueI18Next);

i18next.init({
  lng: LANG,
});

const i18n = new VueI18Next(i18next);

export default i18n;
