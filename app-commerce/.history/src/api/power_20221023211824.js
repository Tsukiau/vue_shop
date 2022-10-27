import request from '@/utils/request'

// 所有权限列表
export const rightsApi = () => {
  return request({
    method: 'rights/:type',
    url: 'menus'
  })
}
