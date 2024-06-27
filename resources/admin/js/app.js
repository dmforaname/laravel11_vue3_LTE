import './bootstrap';
import { createApp } from 'vue';
import { createWebHistory } from 'vue-router'
import createRouter from './routers'
import App from '../layouts/app.vue';


const router = createRouter(createWebHistory())

router.beforeEach((to,from,next) => {

    // Save access token to local storage when user logged in
    if (to.path == "/loggedin" && to.query.token !== undefined) {

        // Remove token if exists
        // if (localStorage.getItem('token_ttl')) {
  
        //   localStorage.removeItem('token');
        // }
    
        //const now = new Date()
        // store.commit('login', to.query.token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + to.query.token
        return next({ path: (to.query.url) ?? '/admin' })
      }

    return next()
})

const app = createApp(App)
app.use(router).mount('#app')
