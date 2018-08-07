import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './types'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
export default new Vuex.Store({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
})