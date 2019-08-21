import Vue from 'vue'
import App from './views/magic8ballpage.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
