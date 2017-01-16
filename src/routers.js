import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';//页面顶部进度条 js 插件
import 'nprogress/nprogress.css';

Vue.use(Router);

// view components
import App from './views/Appv2';
import test from './views/test';
import User from './views/User';
import Error from './views/Error';

const routes = [
  {
    path: '/',
    name: '',
    component: App,
    children: [
      {
        path: '/dashboard',
        component: test,
        name: '首页'
      },
    ]
  },
  {
    path: '/',
    name: '演示',
    component: App,
    children: [
      {
        path: '/user',
        component: User,
        name: '用户管理',
      },
      {
        path: '*',
        component: Error,
        name: 'not found'
      }
    ]
  }
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
