import './bootstrap';
import { createApp } from 'vue';
import { createWebHistory } from 'vue-router'
import createRouter from './routers'
import App from '../layouts/app.vue';
import store from './store';
import script from './script'
import mitt from 'mitt';


const emitter = mitt();
const router = createRouter(createWebHistory())
const arrStorageList = [
  'token',
  'token_ttl',
  'keep_login'
]

router.beforeEach((to, from, next) => {

  // Save access token to local storage when user logged in
  if (to.path == "/loggedin" && to.query.token !== undefined) {

    // Remove token if exists
    if (localStorage.getItem('token_ttl')) localStorage.removeItem('token');

    store.commit('login', to.query.token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + to.query.token
    return next({ path: (to.query.url) ?? '/admin' })
  }

  if (!localStorage.getItem('token_ttl')) {

    arrStorageList.forEach(item => localStorage.removeItem(item))
    localStorage.clear();
    script.goToLogout();
  }

  return next()
})

const app = createApp(App)
app.use(store)
app.use(router)

// app.config.globalProperties.emitter = emitter
app.config.globalProperties.storageList = arrStorageList

app.mount('#app')
