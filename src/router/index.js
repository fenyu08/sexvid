import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import videoPlay from '../views/videoPlay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videoPlay',
    name: 'videoPlay',
    component:videoPlay
  }
]

const router = new VueRouter({
  routes
})

export default router
