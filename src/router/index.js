import Vue from 'vue'
import Router from 'vue-router'
import vFor_vIf_vShow from '../view/vFor_vIf_vShow.vue'
import restApi from '../view/rest-api.vue'
import dashboard from '../view/dashboard.vue'
import registerUser from '../modules/register-login-module/register-view.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/rest-api',
      name: 'rest-api',
      component: restApi
    },
    {
      path: '/vFor_vIf_vShow',
      name: 'vFor_vIf_vShow',
      component: vFor_vIf_vShow
    },
    {
      path: '/register-user',
      name: 'register-user',
      component: registerUser
    },
  ]
})
