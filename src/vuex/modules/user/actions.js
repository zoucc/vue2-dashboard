import Config from '../../../service/config';
import Vue from 'vue';
import 'whatwg-fetch';

// export const _getUser = ({ commit }, page, count) => {
//   return Vue.axios.get(Config.api + '/api/a.json',{'X-Custom-Header': 'foobar'}).then((response) => {
//     console.log(response.data);
//     return commit('AXIOS_USER_SUCCESS', response.data)
//   })
// };


export const _getUser = ({ commit }, page, count) => {
  fetch(Config.api+ '/api/a.json',{'mode': 'no-cors'})
    .then(function(response) {
      // return response.json()
      return {}
    }).then(function(json) {
    const data = [
      {
        "date": "2016-05-02",
        "name": "王小虎",
        "address": "上海市普陀区金沙江路 1518 弄"
      }, {
        "date": "2016-05-04",
        "name": "王小虎",
        "address": "上海市普陀区金沙江路 1517 弄"
      }, {
        "date": "2016-05-01",
        "name": "王小虎",
        "address": "上海市普陀区金沙江路 1519 弄"
      }, {
        "date": "2016-05-03",
        "name": "王小虎",
        "address": "上海市普陀区金沙江路 1516 弄"
      }
    ];
    return commit('AXIOS_USER_SUCCESS', data)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
};
