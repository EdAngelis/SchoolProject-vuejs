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
    {
      path: '/typography',
      name: 'typography',
      component: () => import('../view/typography')
    },
    {
      path: '/elements-position',
      name: 'elements-position',
      component: () => import('../view/elements-position.vue')
    },
    {
      path: '/forms-adress',
      name: 'forms-adress',
      component: () => import('../view/forms-adress.vue')
    },
    {
      path: '/alerts-snackbar',
      name: 'alerts-snackbar',
      component: () => import('../view/alerts-snackbar.vue')
    },
    {
      path: '/toolbar-menu-navi',
      name: 'toolbar-menu-navi',
      component: () => import('../view/toolbar-menu-navi.vue')
    },
    {
      path: '/layouts',
      name: 'layouts',
      component: () => import('../view/layouts.vue')
    },
    {
      path: '/buttons-icons',
      name: 'buttons-icons',
      component: () => import('../view/buttons-icons.vue')
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import('../view/icons.vue')
    },
    {
      path: '/teste',
      name: 'teste',
      component: () => import('../components/teste.vue')
    }


  ]
})
