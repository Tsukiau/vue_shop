import request from '@/utils/request'

export function userApi({name}){
     return request({
      method:'post',
      url:'/login',
      data

     })
}