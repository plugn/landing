import Vue from 'vue';
import Router from 'vue-router';

import pageLayout from 'components/hocs/pageLayout';

const Home = () => import('pages/Home/Home');

Vue.use(Router);

export default new Router({
  browserHistory: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: pageLayout(Home),
    },
  ],
});
