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
export const usersStateApi = (row) => {
  return request({
    method: 'put',
    url: `users/${row.id}/state/${row.mg_state}`
  })
}

// 添加用户
export const addUsersApi = data => {
  return request({
    method: 'post',
    url: 'users',
    data
  })
}

//  根据 ID 查询用户信息
export const examineUsersApi = id => {
  return request({
    method: 'get',
    url: `users/${id}`
  })
}

// 编辑用户提交
export const editUsersStateApi = (data) => {
  return request({
    method: 'put',
    url: `users/${data.id}`
  })
}
