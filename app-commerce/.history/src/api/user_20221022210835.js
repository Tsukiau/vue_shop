import request from '@/utils/request'

export const userApi = (data){
     return request({
      method:'post',
      url:'/login',
      data


     })
}