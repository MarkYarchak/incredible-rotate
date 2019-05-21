import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './components/MainPage';
import EnjoyPage from './components/EnjoyPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'MainPage',
      component: MainPage,
      path: '/',
    },
    {
      name: 'EnjoyPage',
      component: EnjoyPage,
      path: '/enjoy',
    },
  ],
});
