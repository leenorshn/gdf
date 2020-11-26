import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import( '../views/Users.vue')
  },
  {
    path: '/dossiers/:id',
    name: 'DetailDossier',
    component: () => import( '../views/Detail_Dossier.vue')
  },
  {
    path: '/finances',
    name: 'Finances',
    component: () => import( '../views/Finances.vue')
  },
  {
    path: '/dossiers',
    name: 'Dossiers',
    component: () => import( '../views/Dossiers.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import( '../views/Map.vue')
  },
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
