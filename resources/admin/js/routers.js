import { createRouter } from 'vue-router'
import dashboardComponent from '../pages/dashboard.vue' 

const routes = [
    {
      path: '/admin',
      component: dashboardComponent
    },
  ]

export default function (history) {
    return createRouter({
      history,
      routes
    })
  }