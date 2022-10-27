import request from '@/utils/request'

export const menusApi = data => {
  return request({
    method: 'get',
    url: 'menus',
    data
  })
}
