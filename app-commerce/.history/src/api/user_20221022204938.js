import request from '@/utils/request'

export function userApi(){
     return request({
      method:'post'
        url:'/login'
     })
}