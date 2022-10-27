import axios from 'axios'
import store from '@/store'

const request = axios.create({
  // baseURL: 'http://127.0.0.1:8888/api/private/v1/'
  baseURL: 'https://lianghj.top:8888/api/private/v1/'
})

// 拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = store.state.user.token
  return 
})

export default request
