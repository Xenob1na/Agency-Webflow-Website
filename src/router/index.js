import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutPage from '../views/AboutPage.vue'
import WorkPage from '../views/WorkPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/Work',
      name: 'work',
      component: WorkPage
    }
  ]
})

export default router
