import request from '@/utils/request'

// 所有权限列表
export const rightsApi = () => {
  return request({
    method: 'get',
    url: '/rights/list'
  })
}

// 角色列表
export const rolesApi = () => {
  return request({
    method: 'get',
    url: '/roles'
  })
}

// 所有权限列表
export const rightsApi = () => {
  return request({
    method: 'get',
    url: '/rights/list'
  })
}
