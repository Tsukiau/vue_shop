import axios from 'axios'

const request = axios.create({
   baseURL: 'http://47.108.251.106:8881/api/private/v1/'
   //baseURL: 'https://lianghj.top:8888/api/private/v1/'
}) 
export default request