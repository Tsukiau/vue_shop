import request from '@/utils/request'

// 商品分类数据列表
export const goodsApi = params => {
  return request({
    method: 'get',
    url: 'goods',
    params
  })
}
