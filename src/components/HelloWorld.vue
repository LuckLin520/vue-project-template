<template>
  <div class="login">
    <p>选择登录身份：</p>
    <button @click="login('user')">user</button><button @click="login('admin')">admin</button>
    <br/><br/>
	<button @click="logout">退出登录</button>
    <br/>
	<button @click="getpro">products</button>
	<br/>
	<div v-for="p in this.$store.getters.prosort">{{p.price}}</div>


	<div id="container">
		<ul class="list">
			<li class="border-tb-1px">啊啵啵啵啵啵啵啵啵啵宝宝</li>
			<li class="border-tb-1px">啊啵啵啵啵啵啵啵啵啵宝宝</li>
			<li class="border-lr-1px">啊啵啵啵啵啵啵啵啵啵宝宝</li>
			<li class="border-lr-1px">啊啵啵啵啵啵啵啵啵啵宝宝</li>
		</ul>
		<div class="section text-center">
			<p class="text-left inline-block">是否发顺丰是打发时光申达股份十多个似懂非懂付所多过过过过过不不不不不不不不不不不不不不不不不不不所盗过上等碎骨过过过过过过过过噶所所所所所所所所所所所和嘎嘎嘎所得到的多多多多多多多多多多多多多多多多多多多多多多付</p>
		</div>
	</div>
  </div>
</template>

<script>
import * as types from '@/store/types'
export default {
  data () {
    return {
    }
  },
  methods: {
  	login(u) {
  		let payload = {name: 'qqq', role: u, token: 'ncbnv'}
  		this.$store.commit(types.USER, payload)
  		var path = this.$route.query.redirect ? this.$route.query.redirect : '/';//登陆后判断是否有之前要访问的页面
  		this.$router.replace(path)
  	},
  	getpro() {
  		this.$store.dispatch(types.PRODUCTS);
  	},
  	logout() {
  		this.$store.commit(types.USER, null)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#container{
		.list{
			li:nth-child(1){
				@include border_top1px(purple, dotted);
			}
			li:nth-child(2){
				@include border_bot1px(orange, solid);
			}
			li:nth-child(3){
				@include border_lef1px(green, dashed);
			}
			li:nth-child(4){
				@include border_rig1px(blue, double);
			}
		}
		.section{
			p{
				// height: 30px;
				@include overflow-more(2)
			}
		}
	}
</style>
