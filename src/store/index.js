import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import modal from './modules/modal';
import landing from './modules/landing';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    categories,
    modal,
    landing,
  },
});

export default store;

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept([
    './modules/categories',
    './modules/modal',
    './modules/landing',
  ], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    // eslint-disable-next-line
    const _categories = require('./modules/categories').default;
    // eslint-disable-next-line
    const _modal = require('./modules/modal').default;
    // eslint-disable-next-line
    const _landing = require('./modules/landing').default;
    // swap in the new modules and mutations
    store.hotUpdate({
      modules: {
        categories: _categories,
        modal: _modal,
        landing: _landing,
      },
    });
  });
}
