import { createRouter, createWebHistory } from 'vue-router'
import AssetQuery from '../components/AssetQuery.vue'

const routes = [
  {
    path: '/',
    redirect: '/assets'
  },
  {
    path: '/assets',
    name: 'AssetQuery',
    component: AssetQuery
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 