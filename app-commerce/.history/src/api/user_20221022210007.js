import request from '@/utils/request'

export function userApi({name,password}){
     return request({
      method:'post',
      url:'/login',
      data

     })
}