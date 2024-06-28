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

    store.commit('login', to.query)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + to.query.token
    return next({ path: (to.query.url) ?? '/admin' })
  }

  if (!localStorage.getItem('token_ttl')) {

    arrStorageList.forEach(item => localStorage.removeItem(item))
    localStorage.clear();
    script.goToLogout();
  }

  // Check login time expired
  if (localStorage.getItem('token_ttl')) {

    const now = new Date().getTime()

    if (now > localStorage.getItem('token_ttl')) {

      arrStorageList.forEach(item => localStorage.removeItem(item))
      localStorage.clear();
      goToLogout()
    } else {

      
      let day = (localStorage.getItem('keep_login') === true) ? 30 : 1
      store.commit('setUserLoaded', true)

      let tokenPayload = script.parseJwt(localStorage.getItem('token'))

      console.log(tokenPayload.exp * 1000)

      if (now > tokenPayload.exp * 1000) {

        const api_uri = import.meta.env.VITE_API_URL

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

        axios.get(`${api_uri}/refresh`)
          .then(res => {

            async function f() {

              let newRes = res.data.data
              localStorage.setItem('token', newRes['token'])
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + newRes['token']
              return true
            }

            f().then(i => {

              console.log('then')
              localStorage.setItem("token_ttl", now + (day * 60 * 60 * 1000))
              return next()
            })

          }).catch(err => {
            console.log("err===========", err)

            arrStorageList.forEach(item => localStorage.removeItem(item))
            localStorage.clear();
            goToLogout()
            // return;
          })
      } else {
        localStorage.setItem("token_ttl", now + (day * 24 * 60 * 60 * 1000))
        return next()
      }

    }
  } else {
    return next()
  }

  // return next()
})

const app = createApp(App)
app.use(store)
app.use(router)

// app.config.globalProperties.emitter = emitter
app.config.globalProperties.storageList = arrStorageList

app.mount('#app')
