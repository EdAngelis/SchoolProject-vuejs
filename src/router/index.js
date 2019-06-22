import Vue from 'vue'
import Router from 'vue-router'
import restApi from '../view/rest-api.vue'
import dashboard from '../view/dashboard.vue'
import registerUser from '../modules/register-login-module/register-view.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: dashboard
    },
    {
      path: '/Home',
      name: 'Home',
      component: dashboard
    },
    {
      path: '/rest-api',
      name: 'rest-api',
      component: restApi
    },
    {
      path: '/register-user',
      name: 'register-user',
      component: registerUser
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../view/grid.vue')
    },
    {
      path: '/responsive-layout',
      name: 'responsive-layout',
      component: () => import('../view/responsive-layout.vue')
    },
    
  ]
})
