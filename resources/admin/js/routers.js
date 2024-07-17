import { createRouter } from 'vue-router'
import dashboardPage from '../pages/dashboard.vue' 
import loggedinPage from '../pages/loggedin.vue'
import samplePage from '../pages/sample.vue'
import userPage from '../pages/user.vue'

// function checkTokenTTL(to,from) {
//   if (!localStorage.getItem('token_ttl')) return false
// }
const siteName = import.meta.env.VITE_APP_NAME

const routes = [
    {
      path: '/admin',
      component: dashboardPage,
      name: 'Dashboard',
      alias: '/admin/dashboard',
      meta: {
            
        title : `Dashboard | ${siteName}`
      },
      // beforeEnter: [checkTokenTTL],
    },
    {
      path: '/loggedin',
      component: loggedinPage,
      name: 'Loggedin',
      meta: {
            
        title : `Loggedin | ${siteName}`
      }
    },
    {
      path: '/admin/sample',
      component: samplePage,
      name: 'Sample',
      meta: {
            
        title : `Sample | ${siteName}`
      },
      // beforeEnter: [checkTokenTTL],
    },
    {
      path: '/admin/users',
      component: userPage,
      name: 'User Manager',
      meta: {
            
        title : `Users | ${siteName}`
      },
    },
  ]

export default function (history) {
    return createRouter({
      history,
      routes
    })
  }