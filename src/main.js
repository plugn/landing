import Vue from 'vue';
import App from 'core/App';

import store from 'store';
import { router } from './router';

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
