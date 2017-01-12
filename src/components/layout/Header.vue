<template class="p-layout">
  <div class="p-layout-topbar">
    <div class="p-layout-name" :class="{'sider-mini': isCollapse}">
      <router-link class="full" to="/" v-if="!isCollapse">pAdmin</router-link>
      <span class="mini" v-else>P</span>
    </div>
    <div class="p-layout-collapse" @click="toggleSider"><i class="fa fa-bars"></i></div>
    <div class="p-layout-nav">
      <el-dropdown @command="handleDropdown">
        <span class="el-dropdown-link">
          <i class="fa fa-user"></i>
          <span>admin</span>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',

  data() {
    return {
      isCollapse: false
    }
  },

  methods: {
    toggleSider () {
      this.isCollapse = !this.isCollapse
    },
    handleDropdown (cmd) {
      console.log(cmd)
    }
  }


}
</script>

<style lang="less">
  @black: #2a323c;
  @light-black: #324057;
  @t-black: #373d41;;
  @blue: #03a9f4;
  @gray: #d3dce6;
  @sider-width: 224px;
  @top-height: 50px;
  @sider-collapse-width: 64px;
  @transition: all 0.3s ease;

  .p-layout {
    &-topbar {
      position: fixed;
      margin-top: 2px;
      width: 100%;
      height: @top-height;
      line-height: @top-height;
      background-color: @t-black;
      z-index: 101;
      color: #fff;

      a {
        color: @gray;
      }
      .el-dropdown-link {
        color: #fff;
      }
    }
    &-name {
      width: @sider-width;
      text-align: center;
      float: left;
      background-color: @black;
      font-family: Helvetica;
      font-size: 30px;
      transition: @transition;
      &.sider-mini {
        width: @sider-collapse-width;
      }
      .full {
        text-decoration: none;
      }
      .mini {
      }
    }
    &-collapse {
      float: left;
      width: @top-height;
      cursor: pointer;
      background-color: rgba(255, 255, 255, .1);
      text-align: center;
      color: #fff;
    }
    &-nav {
      float: right;
      padding-right: 10px;
      background-color: rgba(255, 255, 255, .1);
      cursor: pointer;
      width: 90px;
      text-align: center;
      font-size: 12px;
    }
  }
</style>
