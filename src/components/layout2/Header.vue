<template class="layout">
  <div class="layout-topbar">
    <div class="layout-hover">
      <div class="layout-collapse" @click="toggleSider"><i class="fa fa-bars"></i></div>
    </div>

    <div class="layout-hover">
      <div class="layout-nav">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'header',

  computed: {
    ...mapGetters({
      isCollapse: 'getLeftNavState'
    })
  },

  methods: {
    toggleSider () {
      this.$store.dispatch('changeLeftNavState')
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

  .layout {
    &-topbar {
      position: fixed;
      margin-top: 0;
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
      background: #4a5064;
      color: #aeb9c2;
      text-align: center;
      border-left: 1px solid #2a2f32;
      border-right: 1px solid #2a2f32;
    }
    &-nav {
      position: fixed;
      right: 0;
      padding: 0 18px;
      background: @t-black;
      border-left: 1px solid #2a2f32;
      cursor: pointer;
      text-align: center;
      font-size: 12px;
    }
    &-hover {
      :hover {
        background-color: #2a2f32;
      }
    }
  }
</style>
