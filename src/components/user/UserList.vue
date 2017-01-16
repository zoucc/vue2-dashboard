<template>

  <el-table id="target" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
/**
import { Loading } from 'element-ui';

const options = {
  target: '#target',
  text: '拼命加载中'
};

let loadingInstance = Loading.service(options);
*/

export default {
  props: [
    'tableData',
  ],
}
</script>
