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

// 添加角色列表
export const addFormApi = (data) => {
  return request({
    method: 'post',
    url: 'roles',
    data
  })
}

// 删除角色指定权限
export const delFormApi = (id) => {
  return request({
    method: 'delete',
    url: `roles/${id}`
  })
}

//  根据 ID 查询角色
export const exaFormApi = (id) => {
  return request({
    method: 'get',
    url: `roles/${id}`
  })
}

// 编辑提交角色
export const comFormApi = (id, {roleName, roleDesc }) => {
  return request({
    method: 'put',
    url: `roles/${id}`,
    data: {
      roleName: 
    }
  })
}
