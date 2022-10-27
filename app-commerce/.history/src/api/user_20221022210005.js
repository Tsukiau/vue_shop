import request from '@/utils/request'

export function userApi({name,pass}){
     return request({
      method:'post',
      url:'/login',
      data

     })
}