import Vue from 'vue'

//主界面
import App from './App.vue'

//路由配置
import router from './routers'

// vuex store管理
import store from './vuex/store'

// ui 库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

const app = new Vue({
  router,
  ...App,
  store,
  render: h => h(App)
});

app.$mount('#app');

