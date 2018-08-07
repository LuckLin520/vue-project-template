import axios from 'axios'
import store from './store'
import * as types from './store/types'
import router from './router'

// axios 配置
axios.defaults.timeout = 4000
axios.defaults.baseURL = 'https://api.github.com'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.user) {
      config.headers.Authorization = `token ${store.state.user.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.USER, null)
          
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
            router.replace({
              path: 'login',
              query: { redirect: router.currentRoute.path },
            })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response)
  },
)

export default axios