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

// 删除角色指定权限
export const delRightsApi = (role, id) => {
  return request({
    method: 'delete',
    url: 'roles/:roleId/rights/:rightId'
  })
}
