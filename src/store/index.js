import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import modal from './modules/modal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
    modal,
  },
});
