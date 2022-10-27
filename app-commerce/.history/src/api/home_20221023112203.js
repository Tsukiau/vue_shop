import request from '@/utils/request'

export const menusApi = () => {
  return request({
    method:'get',
    url: 'menus'
  })
}
