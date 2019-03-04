import Vue from 'vue';
import App from 'core/App';

import store from 'store';
import { router } from './router';

Vue.config.devtools = true;
Vue.config.debug = true;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App,
  },
  template: `<App />`,
  router,
  store,
});
