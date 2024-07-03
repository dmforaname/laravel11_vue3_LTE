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
const arrStorageList = script.arrStorageList()
const api_uri = import.meta.env.VITE_API_URL

router.beforeEach((to, from, next) => {

  // Save access token to local storage when user logged in
  if (to.path == "/loggedin" && to.query.token !== undefined) {

    // Remove token if exists
    if (localStorage.getItem('token_ttl')) localStorage.removeItem('token');
    
    // Set axios header
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + to.query.token

    // store vuex data
    store.commit('login', to.query)
    // store.commit('setUserLoaded', true)
    // store.dispatch('getUserInfo')
    return next({ path: (to.query.url) ?? '/admin' })
  }

  // if apps dont have login expired time
  if (!localStorage.getItem('token_ttl')) script.goToLogout();

  // Check login time expired
  if (localStorage.getItem('token_ttl')) {

    const now = new Date().getTime()

    // check if login expired time is valid
    if (now > localStorage.getItem('token_ttl')) {

      script.goToLogout();

    } else {

      let day = (localStorage.getItem('keep_login') === true) ? 30 : 1
      let tokenPayload = script.parseJwt(localStorage.getItem('token'))

      // check if token expired 
      if (now > tokenPayload.exp * 1000) {

        // axios set header
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
            
            localStorage.setItem("token_ttl", now + (day * 60 * 60 * 1000))
            if (!store.getters.getUserLoaded) {
              (async () => {
                let res = await store.dispatch('getUserInfo')
                console.log("err===========", res)
                return next()
              })()
            }

            // if (!store.getters.getUserLoaded) store.dispatch('getUserInfo')
            // return next()
          })

        }).catch(err => {
            console.log("err===========", err)
            script.goToLogout()
            return;
        })
        
      } else {

          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
          localStorage.setItem("token_ttl", now + (day * 24 * 60 * 60 * 1000))
          if (!store.getters.getUserLoaded) {

            (async()=>{
                let res = await store.dispatch('getUserInfo') 
                console.log('>>>>>>>>>>> abc', JSON.stringify(res));

                // store.commit('setUserLoaded', true)
                // store.commit('setLoginProcess',true)
                // store.commit('setUser', res.data.data)
                return next()

            })()
          }
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

app.config.globalProperties.emitter = emitter
app.config.globalProperties.storageList = arrStorageList

app.mount('#app')
