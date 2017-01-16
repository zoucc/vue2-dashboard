<template class="app">
  <div class="app-body"
       :class="{
        'sider-full': !isCollapse,
        'sider-mini': isCollapse
      }">
    <aside class="app-sider">
      <app-sidebar></app-sidebar>
    </aside>
    <div class="app-panel">
      <app-header></app-header>
      <app-main>
        <app-content></app-content>
      </app-main>
      <app-foot></app-foot>
    </div>

  </div>


</template>

<script>
import Header from '../components/layout2/Header';
import Content from '../components/layout2/Content';
import Main from '../components/layout2/Main';
import Sidebar from '../components/layout2/Sidebar';
import Foot from '../components/layout2/Foot';

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isCollapse: 'getLeftNavState',
    })
  },
  components: {
    'app-header': Header,
    'app-content': Content,
    'app-main': Main,
    'app-sidebar': Sidebar,
    'app-foot': Foot,
  },
}
</script>

<style lang="less">
  @top-height: 50px;
  @sider-width: 180px;
  @sider-collapse-width: 50px;
  @transition: all 0.3s ease;
  @black: #2a323c;

  @import "../../node_modules/font-awesome/less/font-awesome.less";
  html, body, #app {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, "Microsoft YaHei";
  }

  .app {
    &-body {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      z-index: 100;
      &.sider-full {
        .app-panel {
          left: @sider-width;
        }
      }
      &.sider-mini {
        .app-panel {
          left: @sider-collapse-width;
        }
        .app-sider {
          width: @sider-collapse-width;
        }
        .el-menu {
          .el-submenu__icon-arrow,
          .nav-next {
            display: none;
            padding-left: 10px;
          }
          &-item {
            padding: 0 !important;
          }
          .el-menu-item{
            text-align: center;
          }
          .el-submenu {
            text-align: center;
          }
        }
      }
    }
    &-sider {
      width: @sider-width;
      background-color: @black;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      transition: @transition;
      z-index: 102;
      overflow-x: hidden;
    }
    &-panel {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      overflow: hidden;
      background: #f5f5f5;
      transition: @transition;
      width: auto;
    }
  }

</style>
