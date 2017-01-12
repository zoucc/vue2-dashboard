<template class="p-layout">
  <div class="p-layout-panel">
    <div class="p-layout-content">
      <div class="p-layout-container">
        <div class="p-layout-breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="p-layout-inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main'
  }
</script>

<style lang="less">
@transition: all 0.3s ease;

.p-layout {
  &-panel,
  &-content {
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
    margin: -15px -15px 0 -15px;
  }
}
</style>
