import request from '@/utils/request'

// 商品分类数据列表
export const rightsApi = () => {
  return request({
    method: 'get',
    url: '/rights/list'
  })
}
