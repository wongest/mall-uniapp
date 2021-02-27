import { post } from '../../utils/request'

export const getRecommend = param => post('/api/user/goods/recommend', param)