import request from '@/utils/request'

// 商品分类数据列表
export const categoriesApi = prameas => {
  return request({
    method: 'get',
    url: 'categories'
  })
}
