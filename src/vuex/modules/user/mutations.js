import {
  AXIOS_USER_SUCCESS}
  from './mutation-type'

const mutations = {
    [AXIOS_USER_SUCCESS] (state, data) {
      state.userList = data
    }
};

export default mutations
