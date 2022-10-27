import request from '@/utils/request'

// 所有权限列表
export const rights = () => {
  return request({
    method: 'get',
    url: 'menus'
  })
}
