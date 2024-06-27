import { createRouter } from 'vue-router'
import dashboardComponent from '../pages/dashboard.vue' 
import loggedinComponent from '../pages/loggedin.vue'

const routes = [
    {
      path: '/admin',
      component: dashboardComponent,
      name: 'Dashboard'
    },
    {
      path: '/loggedin',
      component: loggedinComponent,
      name: 'Loggedin'
    },
  ]

export default function (history) {
    return createRouter({
      history,
      routes
    })
  }