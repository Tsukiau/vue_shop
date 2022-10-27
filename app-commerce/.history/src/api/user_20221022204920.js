import request from '@/utils/request'

export function userApi(){
     return request({
        url:'/login'
     })
}