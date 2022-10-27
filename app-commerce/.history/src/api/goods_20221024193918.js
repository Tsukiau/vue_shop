import request from '@/utils/request'

// 商品分类数据列表
export const goods = params => {
  return request({
    method: 'get',
    url: 'goods',
    params
  })
}
