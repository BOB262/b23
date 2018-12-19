import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 路由懒加载 有两种方式
 * const Layout = () => import('@/components/Layout')
 * //or
 * const Layout = resolve => require(['@/pages/layout/Layout'], resolve)
 */

const Layout = () => import('@/pages/layout/Layout')
const index = () => import('@/pages/home/index')

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: home
    // },
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      name: 'index',
      children: [
        {
          path: 'index',
          component: index
        }
      ]
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/404',
      component: () => import('@/pages/404')
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/demo',
      component: () => import('@/components/card/card')
    },
    {
      path: '/demo1',
      component: () => import('@/pages/home/components/eventInfo')
    }
    // {
    //   path: '/map',
    //   name: 'map',
    //   component: () => import('@/pages/home/components/map')
    // }
  ]
})
