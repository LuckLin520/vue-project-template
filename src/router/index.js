import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
     path: '/',
     component: { template: '<div><div>公共页面</div><router-link to="/admin1">取admin1</router-link><router-link to="/boos1">取boos1</router-link></div>' }
   },
   {
     path: '/login',
     name: 'HelloWorld',
     component: HelloWorld
   },
   {
     path: '/admin1',
     meta: {
       roles: ['admin'] //该页面可访问的权限
     },
     component: { template: '<div>admin页面1</div>' }
   },
   {
     path: '/boos1',
     meta: {
       roles: ['boos'] //该页面可访问的权限
     },
     component: { template: '<div>boos页面1</div>' },
   },
   { path: '*', component: { template: '<div>404未找到</div>' } }
 ]
})

  
