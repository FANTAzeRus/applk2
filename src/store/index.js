import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryMenuShow: true,
    categorysList: [
      {
        name:"Пиццерия",
        selected: false,
      },
      {
        name:"Пиццы",
        selected: false,
      },
      {
        name:"Роллы",
        selected: false,
      },
      {
        name:"Пироги",
        selected: false,
      },
    ],
    selCategory: {}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
