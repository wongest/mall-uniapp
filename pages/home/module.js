/**
 * @desc homeModule
 */
import * as Api from './api'

const state = {
  count: 20,
  recommendList: [],
  page: {}
}

const mutations = {
  setCount(state, payload) {
    state.count = state.count + payload.count;
  },
  setRecommend(state, payload) {
    state.recommendList = payload.recommendList
    state.page = payload.page
  }

}

const actions = {
  setCount({ commit }, payload) {
    commit('setCount', payload)
  },

  async getRecommend({ state, commit }, payload) {
    const { recommendList } = state
    const { code, data = {} } = await Api.getRecommend(payload)
    if(code === 0) {
      const { recordList, currentPage, pageCount } = data
      recordList.map(item => {
        item.image_url = item.images[0]
        return item
      })
      commit('setRecommend', {
        recommendList: [...recommendList, ...data.recordList],
        page: {
          currentPage, pageCount
        }
      })
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}