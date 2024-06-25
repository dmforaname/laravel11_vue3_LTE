import { createRouter } from 'vue-router'
import loginComponent from '../pages/login.vue' 

const routes = [
    {
      path: '/login',
      component: loginComponent
    },
  ]

export default function (history) {
    return createRouter({
      history,
      routes
    })
  }