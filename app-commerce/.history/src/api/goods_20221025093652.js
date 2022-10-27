import request from '@/utils/request'

// 商品列表数据
export const goodsApi = params => {
  return request({
    method: 'get',
    url: 'goods',
    params
  })
}

// 商品分类数据列表
export const categoriesApi = (params) => {
  return request({
    method: 'get',
    url: 'categories',
    params
  })
}

// 删除商品
export const delCategorie = (params) => {
  return request({
    method: 'get',
    url: 'categories',
    params
  })
}