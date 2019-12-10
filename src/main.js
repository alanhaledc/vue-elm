import Vue from 'vue'
import axios from 'axios'
import VueCompositionApi from '@vue/composition-api'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './assets/styles/index.scss'

Vue.use(VueCompositionApi)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
