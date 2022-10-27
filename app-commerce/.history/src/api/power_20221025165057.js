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
    url: `roles/${role.id}/rights/${id}`
  })
}

// 所有权限列表
export const rightListApi = (tree) => {
  return request({
    method: 'get',
    url: `/rights/${tree}`
  })
}

// 所有权限列表
export const addFormApi = (tree) => {
  return request({
    method: 'post',
    url: `/rights/${tree}`
  })
}
