import request from '@/utils/request'

export function userApi({data}){
     return request({
      method:'post',
      url:'/login',
      data

     })
}