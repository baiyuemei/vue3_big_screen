import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BigScreenView from "../views/BigScreenView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/big-screen',
      name: 'home',
      component: HomeView
    },
    {
      path: '/big-screen',
      name: 'big-screen',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:BigScreenView
    }
  ]
})

export default router
