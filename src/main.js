import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mui from 'vue-awesome-mui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.use(Mui);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
