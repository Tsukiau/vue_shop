import request from '@/utils/request'

export const menusApi = () => {
  return request({
    method: 'get',
    url: 'menus'
  })
}

// 用户数据列表
export const usersApi = params => {
  return request({
    method: 'get',
    url: 'users',
    params
  })
}
