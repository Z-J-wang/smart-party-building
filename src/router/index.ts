import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/data-center',
      name: 'DataCenter',
      component: () => import('../views/DataCenterView.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/:id',
      name: 'NewDetail',
      component: () => import('../views/NewDetailView.vue')
    },
    {
      path: '/publicity',
      name: 'Publicity',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/publicity/:id',
      name: 'PublicityDetail',
      component: () => import('../views/NewDetailView.vue')
    }
  ]
})

export default router
