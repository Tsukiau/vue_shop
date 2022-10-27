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

// 修改用户状态
export const usersStateApi = ({id,mg_state}) => {
  return request({
    method: 'put',
    url: `users/${id}/state/${mg_state}`
  })
}
