import Vue from 'vue';
import vueSmoothScroll from 'vue2-smooth-scroll';

import App from './components/core/App';

import store from './store';
import { router } from './router';

Vue.use(vueSmoothScroll);

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
