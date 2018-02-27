import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import test from '@/components/test'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     component: home
    },
    {
        path: '/test',
        component: test
    },
    {
        path: '/login',
        component: login
    }
  ]
})
