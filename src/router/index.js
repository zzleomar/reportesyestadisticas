import Vue from 'vue'
import Router from 'vue-router'
import INICIO from '@/components/reportes/Inicio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: INICIO
    }
  ]
})
