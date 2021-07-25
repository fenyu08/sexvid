import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import axios from 'axios'
import filters from './fliters/fliters'
Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.use(VideoPlayer);
Vue.config.productionTip = false
for(let k in filters){
  Vue.filter(k,filters[k]);
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
