import request from '@/utils/request'

export const menusApi = data => {
  return request({
    method: 'post',
    url: 'login',
    data
  })
}
