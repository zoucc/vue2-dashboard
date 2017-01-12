<template class="p-layout">
  <aside class="p-layout-sider">
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
  </aside>
</template>

<script>
import menus from '../../nav-config'

export default {
  name: 'sidebar',

  data() {
    return {
      isCollapse: false,
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

.p-layout {
  &-sider {
    width: @sider-width;
    background-color: @black;
    position: fixed;
    top: @top-height;
    left: 0;
    height: 100%;
    transition: @transition;
    z-index: 102;
    overflow-x: hidden;
  }
}
</style>
