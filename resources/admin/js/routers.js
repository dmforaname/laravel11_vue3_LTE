import { createRouter } from 'vue-router'
import dashboardComponent from '../pages/dashboard.vue' 
import loggedinComponent from '../pages/loggedin.vue'
import sampleComponent from '../pages/sample.vue'

const routes = [
    {
      path: '/admin',
      component: dashboardComponent,
      name: 'Dashboard',
      alias: '/admin/dashboard',
      meta: {
            
        title : 'Dashboard'
      }
    },
    {
      path: '/loggedin',
      component: loggedinComponent,
      name: 'Loggedin',
      meta: {
            
        title : 'Loggedin'
      }
    },
    {
      path: '/admin/sample',
      component: sampleComponent,
      name: 'Sample',
      meta: {
            
        title : 'Sample Page'
      }
    },
  ]

export default function (history) {
    return createRouter({
      history,
      routes
    })
  }