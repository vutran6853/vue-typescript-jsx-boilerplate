import Vue from 'vue';
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex';

Vue.use(Vuex)

interface RootState {}

const state: RootState = {}
const getters: GetterTree<any, RootState> = {}
const actions: ActionTree<any, RootState> = {}
const mutations: MutationTree<RootState> = {}

const store = new Vuex.Store({
  modules: {},
  state,
  getters,
  actions,
  mutations
})

export default store