const menu = [
  {
    name: 'dashboard',
    text: '首页',
    icon: 'desktop',
    path: '/dashboard',
    leaf: true
  },
  {
    name: 'user',
    text: '用户管理',
    icon: 'user',
    path: '/user',
    leaf: true
  },
  {
    name: 'demo',
    text: '演示',
    icon: 'gear',
    path: '/user',
    children: [
      {
        name: 'user',
        path: '/userx',
        icon: 'user',
        text: '用户管理'
      }, {
        name: 'editor',
        path: '/editor',
        icon: 'file',
        text: '富文本'
      }
    ]
  }
];

const state = {
  menu: menu,
};

// getters
const getters = {
  menuList: state => state.menu
};

export default {
  state,
  getters
}
