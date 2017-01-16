store.js => vuex 入口文件

modules => 模块化 存放 state

modules {
  index.js : 入口文件  一般存放初始 state
  getters.js: 一般 获取数据 bind 视图上
  actions.js: 主要 发送url 数据到服务器 ajax.get psot ...
  mutations.js: ajax  then success 改变 getter的 state数据 
  mutation-type.js: 类型
}
