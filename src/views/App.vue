<template>
  <div>
    <app-header></app-header>
    <div
      class="p-layout-body"
      :class="{
        'sider-full': !isCollapse,
        'sider-mini': isCollapse
      }">
      <app-sidebar></app-sidebar>
      <app-main>
        <app-content></app-content>
      </app-main>
    </div>
    <app-foot></app-foot>
  </div>

</template>

<script>
import Hello from '../components/Hello';
import Header from '../components/layout/Header';
import Content from '../components/layout/Content';
import Main from '../components/layout/Main';
import Sidebar from '../components/layout/Sidebar';
import Foot from '../components/layout/Foot';

export default {
  components: {
    'app-header': Header,
    'app-content': Content,
    'app-main': Main,
    'app-sidebar': Sidebar,
    'app-foot': Foot,
  },
  data() {
    return {
      isCollapse: false,
    }
  }
}
</script>

<style lang="less">
  @top-height: 50px;
  @sider-width: 224px;
  @sider-collapse-width: 64px;

  @import "../../node_modules/font-awesome/less/font-awesome.less";
  html, body, #app {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, "Microsoft YaHei";
  }

  .p-layout-body {
    position: absolute;
    width: 100%;
    top: @top-height;
    bottom: 0;
    z-index: 100;
    &.sider-full {
      .p-layout-panel {
        left: @sider-width;
      }
    }
    &.sider-mini {
      .p-layout-panel {
        left: @sider-collapse-width;
      }
      .p-layout-sider {
        width: @sider-collapse-width;
      }
      .p-layout-user {
        display: none;
      }
      .el-menu {
        .el-submenu__icon-arrow,
        .nav-next {
          display: none;
        }
        &-item {
          padding: 0 !important;
        }
        .el-submenu {
          text-align: center;
        }
      }
    }
  }
</style>
