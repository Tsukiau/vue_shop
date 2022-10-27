import request from '@/utils/request'

export function userApi(val){
     return request({
      method:'post',
      url:'/login',
      data: {
         val
      }
     })
}