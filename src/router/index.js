import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/config/routes';

Vue.use(Router);
export default new Router({
  // mode: 'history',
  base:'healthlog/html/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
