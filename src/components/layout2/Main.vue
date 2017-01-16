<template class="layout">
    <div class="layout-content">
      <div class="layout-container">
        <div class="layout-breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >{{currentRouteParent}}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="currentRoute!='' && currentRoute!='首页'">{{currentRoute}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="layout-inner">
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'main',
  computed: {
    ...mapGetters({
      menus: 'menuList',
    })
  },
  data() {
    return {
      /*currentRoute: this.$router.history.current.fullPath,*/
      currentRoute: this.$router.history.current.name,
      currentRouteParent: this.$router.history.current.matched[0].name,
    }
  },
  watch: {
		'$route' (to, from) {//监听路由改变
			this.currentRoute=to.name;
			this.currentRouteParent=to.matched[0].name;
		}
	},
}
</script>

<style lang="less">
@transition: all 0.3s ease;

.layout {
  &-content {
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background: #f5f5f5;
    transition: @transition;
    width: auto;
  }
  &-content {
    overflow-y: auto;
  }
  &-container {
    padding: 15px;
  }
  &-inner {
    padding: 10px;
    background: #fff;
    border-radius: 3px;
    margin-top: 10px;
  }
  &-breadcrumb {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    padding: 25px 15px;
    background-color: #fff;
    height: 0;
    margin: -24px -15px 0 -15px;
  }
}
</style>
