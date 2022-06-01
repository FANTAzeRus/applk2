import Vue from 'vue'
import Vuex from 'vuex'
import applicationModule from '@/store/applicationModule'
import settingModule from '@/store/settingModule'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    applicationModule,
    settings: settingModule,
  }
})
