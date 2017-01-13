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
        <el-submenu
          :index="menu.name"
          v-for="(menu, index) in menus">
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
      </el-menu>
    </div>

  </div>
</template>

<script>
import menus from '../../nav-config';
import { mapGetters } from 'vuex';

export default {
  name: 'sidebar',
  computed: {
    ...mapGetters({
      isCollapse: 'getLeftNavState',
    })
  },
  data() {
    return {
      currentRoute: this.$router.history.current.fullPath,
      menus,
    }
  }
}
</script>

<style lang="less">
@top-height: 50px;
@sider-width: 224px;
@sider-collapse-width: 64px;
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
  }
}
</style>
