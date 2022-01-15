import Vue from 'vue'
import Vuex from 'vuex'
import applicationModule from '@/store/applicationModule'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    applicationModule
  }
})
