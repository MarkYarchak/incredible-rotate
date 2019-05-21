import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enjoy: false,
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    enjoy: state => state.enjoy,
  },
});
