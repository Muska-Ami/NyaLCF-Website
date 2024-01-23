import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('@/views/DownloadView.vue')
    },
    {
      path: '/credits',
      name: 'credits',
      component: () => import('@/views/CreditsView.vue')
    }
  ]
})

export default router
