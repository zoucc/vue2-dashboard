<template>
  <div class="layout">
    <div class="layout-name" :class="{'sider-mini': isCollapse}">
      <router-link class="full" to="/" v-if="!isCollapse">pAdmin</router-link>
      <span class="mini" v-else>P</span>
    </div>
    <div class="layout-menu">
      <el-menu
        theme="dark"
        :unique-opened="true"
        :default-active="currentRoute"
        :router="true">

        <template v-for="(menu, index) in menus">
          <el-menu-item v-if="menu.leaf" :index="menu.path">
            <i v-if="menu.icon" class="fa" :class="'fa-' + menu.icon"></i>
            <span class="nav-next">{{menu.text}}</span>
          </el-menu-item>

          <el-submenu v-if="!menu.leaf"
            :index="menu.name">
            <template slot="title">
              <i v-if="menu.icon" class="fa" :class="'fa-' + menu.icon"></i>
              <span class="nav-next">{{menu.text}}</span>
            </template>
            <el-menu-item
              :index="subMenu.path"
              v-for="(subMenu, subIndex) in menu.children">
              <i v-if="subMenu.icon" class="fa" :class="'fa-' + subMenu.icon"></i>
              <span class="nav-next">{{subMenu.text}}</span>
            </el-menu-item>
          </el-submenu>
        </template>

      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'sidebar',
  computed: {
    ...mapGetters({
      isCollapse: 'getLeftNavState',
      menus: 'menuList'
    })
  },
  data() {
    return {
      currentRoute: this.$router.history.current.fullPath,
    }
  }
}
</script>

<style lang="less">
@top-height: 50px;
@sider-width: 180px;
@sider-collapse-width: 50px;
@transition: all 0.3s ease;
@sider-width: 224px;
@black: #2a323c;
@t-black: #373d41;
@top-height: 50px;
@gray: #d3dce6;

.layout {
  &-name {
    width: @sider-width;
    text-align: center;
    float: left;
    height: @top-height;
    line-height: @top-height;
    background-color: @t-black;
    font-family: Helvetica;
    font-size: 30px;
    transition: @transition;
    &.sider-mini {
      width: @sider-collapse-width;
    }
    .full {
      text-decoration: none;
      color: #ffffff;
    }
    .mini {
      color: #ffffff;
    }
  }
  &-menu {
    position: absolute;
    top: 50px;
    width: 100%;
    .el-menu--dark {
      background-color: #42485b;
    }
    .nav-next {
      padding-left: 10px;
    }
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
      background: #00C1DE;
      color: #fff;
    }
    .el-menu--dark .el-menu-item:hover, .el-menu--dark .el-submenu__title:hover {
      background-color: #00C1DE;
    }
    .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title {
      color: #fff;
    }
    .el-menu-item, .el-submenu__title {
      height: 40px;
      line-height: 40px;
      font-size: 12px;
    }
  }
}
</style>
