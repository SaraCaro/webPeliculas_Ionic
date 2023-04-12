import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import peliculas from '../views/peliculas.vue'
import inicio from '../views/inicio.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/inicio'
  },
  {
    path: '/peliculas',
    name: 'peliculas',
    component: peliculas
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: inicio
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

