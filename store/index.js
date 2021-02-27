import Vue from 'vue'
import Vuex from 'vuex'
import { post } from '../utils/request'
import { apiUrl } from '../utils/keys'

import home from '../pages/home/module'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state:{
      //存放的键值对就是所要管理的状态
      name:'helloVueX'
  },

  mutations:{
    setName(state, payload = {}){
      console.log('setName', payload)
        state.name = payload
    }
  },

  getters:{
    nameInfo(state){
        return "姓名:"+state.name
    },
    fullInfo(state,getters){
        return getters.nameInfo+'年龄:'+state.age
    }  
  },

  actions:{
    aEdit(context,payload){
      console.log('aEdit', payload)
        setTimeout(()=>{
            context.commit('setName',payload.name)
        },2000)
    },

    async test(context, payload) {
      console.log('post...')
      const { code, data = {} } = await post(`${apiUrl}/api/users/test`, payload)
      console.log(code, data)
    }
  },

  modules: {
    home,
  }
})

export default store