import { createStore } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

// Create a new store instance.
export default createStore({
  state,
  mutations,
  actions,
  getters,
});
