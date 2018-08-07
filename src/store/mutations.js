import * as types from './types'
export default {
	[types.USER](state, payload) {
		state.user = payload;
		localStorage.user = JSON.stringify(state.user)
		if(payload === null) {
			localStorage.removeItem('user')
		}
	},
	[types.PRODUCTS](state, payload) {
		state.products = payload;
	}
}