import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = {
  isCollapse: false,
  loading: false
};

export default{
  state,
  actions,
  getters,
  mutations
}
