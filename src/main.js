import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Tareas from '@/components/Tareas.vue'

import '@/assets/style.css'

Vue.config.productionTip = false

Vue.component('Tareas', Tareas)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
