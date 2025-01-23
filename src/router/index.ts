import { createRouter, createWebHistory } from 'vue-router'
import home_view from '@/views/home_view.vue'
import room_view from '@/views/room_view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home_view,
    },
    {
      path: '/room/:id',
      name: 'room',
      component: room_view,
    },
  ],
})

export default router
