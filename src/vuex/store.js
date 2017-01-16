import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import app from './modules/app';
import menu from './menu';

// 需 eslint 包
// const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    app,
    menu,
  },
  // strict: debug, //是否开启严格模式
});

export default store
