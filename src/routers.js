import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';//页面顶部进度条 js 插件
import 'nprogress/nprogress.css';

Vue.use(Router);

const routes = [
];

const router = new Router({
  // mode: 'history', /* del url query # */
  routes: routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(transition => {
  NProgress.done();
});

export default router
