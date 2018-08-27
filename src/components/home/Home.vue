<template>
  <div class="home">
		<div class="header " id="header" :class="{fixed: isFixed}">
		     <div class=" fixed-width clearfix">
		     	<div><i class="iconfont icon-dingwei"></i></div>
		        <div class="header-title fl">我是顶部</div>
		        <div class="header-buy fr"  >我也是顶部</div>
		     </div>
		</div>
		<div class="content">
			<div class="banner"></div>
			<div class="animate-box slide">
				<h2 class="animate text-h2" data-ani="fadeInUpBig">LuckLin520 Written in Chengdu</h2>
				<p class="animate text-p" data-ani="rollIn" data-delay="1000">Thank you for reading and I will continue to work hard! —————2018/08/08</p>
			</div>
			<div class="animate-box bounce">
				<div class="animate yellow" data-ani="bounceInLeft"></div>
				<div class="animate red" data-ani="bounceInRight"></div>
				<div class="animate green" data-ani="bounceInLeft"></div>
				<div class="animate blue" data-ani="bounceInRight"></div>
			</div>
			<div class="animate-box slide">
				<h2 class="animate text-h2" data-ani="fadeInUpBig">做真实的自己，一切都会好起来的</h2>
				<p class="animate text-p" data-ani="slideInRight" data-delay="1000">Be true to yourself and everything will be fine</p>
			</div>
			<div class="animate-box zoom">
				<div class="animate one" data-ani="bounceInLeft"></div>
				<div class="animate two" data-ani="bounceInRight"></div>
				<div class="animate three" data-ani="bounceInLeft"></div>
				<div class="animate four" data-ani="bounceInRight"></div>
			</div>
		</div>
  </div>
</template>

<script>
	export default {
	  data () {
	    return {
	    	isFixed: 0,
	    }
	  },
	  methods: {
	  	handleScroll() {
	  		let top = pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	  		if(top > 250){
	  			this.isFixed = 1;
	  		}else if(top < 200){
	  			this.isFixed = 0;
	  		}
	  	},
	  	handleAnimate() {
	  		let top = pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	  		let vh = document.documentElement.clientHeight;
	  		let dom = document.querySelectorAll(".animate");
	  		[].slice.call(dom).forEach(v => {
	  			if(top + vh > v.offsetTop){
	  				var delay = v.dataset.delay;
	  				if(delay){
	  					setTimeout(() => {
	  						v.style.opacity = 1;
		  					v.classList.add(v.dataset.ani)
		  				}, delay)
	  				}else{
	  					v.style.opacity = 1;
	  					v.classList.add(v.dataset.ani)
	  				}
	  			}else{
	  				v.classList.remove(v.dataset.ani)
	  				v.style.opacity = 0;
	  			}
	  		})

	  	}
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  		this.handleAnimate()//初始化第一次加载时在视口内就执行动画
	  		addEventListener('scroll', this.handleScroll);
	  		addEventListener('scroll', this.handleAnimate);

	  	})
	  	
	  },
	  destroyed() {
	  	removeEventListener('scroll', this.handleScroll);//避免影响其他页面
	  	removeEventListener('scroll', this.handleAnimate);
	  }
	}
</script>

<style scoped lang="scss">
	.header{
		background: green;
		height: 50px;
	}
	.fixed{
        position: fixed;
        top: 0px;
        z-index: 4;
        width: 100%;
        animation: slideInDown .5s;
    }
    .content{
    	// height: 2000px;
    	// background: pink;
    	overflow: hidden;
    	.banner{
			width: 80%;
			height: 400px;
			background:orange;
			margin: 80px auto;
    	}
    	.slide{
    		font-size: initial;
    		height: 100px;
    	}
    	.bounce{
    		width: 80%;
    		margin:0 auto 80px;
    		display: flex;
    		flex-wrap: wrap;
    		justify-content: space-between;
    		&>div{
    			height: 120px;
    			float: left;
    			width: 45%;
    		}
    		.yellow{
    			background:yellow;
    			margin-bottom: 40px;
    		}
    		.red{
    			background:red;
    		}
    		.green{
    			background:green;
    		}
    		.blue{
    			background:blue;
    		}
    	}
    	.zoom{
    		width: 80%;
    		margin:0 auto;
    		display: flex;
    		justify-content: space-between;
    		&>div{
    			width: 23%;
    			height: 263px;
    		}
    		.one{
    			background:url(http://www.codingke.com/themes/codingnew-1/img/study/python/python_block1_img1.jpg) no-repeat center/100%;
    		}
    		.two{
    			background:url(http://www.codingke.com/themes/codingnew-1/img/study/python/python_block1_img2.jpg) no-repeat center/100%;
    		}
    		.three{
    			background:url(http://www.codingke.com/themes/codingnew-1/img/study/python/python_block1_img3.jpg) no-repeat center/100%;
    		}
    		.four{
    			background:url(http://www.codingke.com/themes/codingnew-1/img/study/python/python_block1_img4.jpg) no-repeat center/100%;
    		}
    	}
    }

 //animate classs
 .animate{
 	opacity: 0;
 }
 .fadeInUpBig{
 	animation: fadeInUpBig 1s;
 }
 .rollIn{
 	animation: rollIn 1s;
 }
 .slideInRight{
 	animation: slideInRight 1s;
 }
 .bounceInLeft{
	animation: bounceInLeft 2s ease-in;
 }
 .bounceInRight{
	animation: bounceInRight 2s ease-in;
 }
</style>
