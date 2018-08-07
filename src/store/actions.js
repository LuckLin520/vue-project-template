import * as types from './types'
import axios from '../axios'

export default {
	[types.PRODUCTS]({commit}) {
		axios.get('https://www.easy-mock.com/mock/5ae417e4985d63275b55e177/luckLin/mockDrink').then(res => {
			console.log(res)
			if(res.status === 200){
				commit(types.PRODUCTS, res.data.data)
			}
		})
	}
}