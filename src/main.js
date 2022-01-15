import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ApiPlugin from './plugins/api'
import LoadPlugin from './plugins/load'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(LoadPlugin)
Vue.use(ApiPlugin)

new Vue({
  router,
  store,
  ApiPlugin,
  LoadPlugin,
  i18n,
  render: h => h(App)
}).$mount('#app')
