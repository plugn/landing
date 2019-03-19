import Vue from 'vue';
import vueSmoothScroll from 'vue2-smooth-scroll';
import vueLineClamp from 'vue-line-clamp';

import App from '@/components/core/App';

import store from 'store';
import { router } from './router';
import i18n from './i18n';

Vue.config.devtools = true;
// Vue.config.debug = true;

Vue.use(vueSmoothScroll);
Vue.use(vueLineClamp, {
  importCss: true,
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App,
  },
  template: `<App />`,
  router,
  store,
  i18n,
});
