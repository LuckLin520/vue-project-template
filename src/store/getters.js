export default {
	prolt10: state => state.products.filter(v => v.price < 10),
	prosort: state => state.products.sort(function (a, b){
		return a.price - b.price;
	})
}