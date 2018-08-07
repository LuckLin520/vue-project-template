// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  // var user = localStorage.user ? JSON.parse(localStorage.user) : '';
  var user = store.state.user;
  if (user && user.token) { // 判断是否有token
    if (to.meta.roles && to.meta.roles.indexOf(user.role) === -1) {//页面有权限要求但用户不符合
    	alert('403')
    	if(from.path == '/login'){
    		next('/')
    	}else{
    		next({path: from.path})
    	}
    } else {//页面没有权限要求就直接访问
    	next()
    }
  } else if(to.path != '/login'){//没有token的话让跳转到登录页，并传递当前准备访问的路由
      next({path:'/login', query: {redirect: to.fullPath}})
  } else{
  	next()
  }
})