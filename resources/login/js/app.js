import './bootstrap';
import { createApp } from 'vue';
import { createWebHistory } from 'vue-router'
import createRouter from './routers'
import App from '../layouts/app.vue';
import CryptoJS from 'crypto-js';
import script from './script'

const router = createRouter(createWebHistory())

router.beforeEach((to, from, next) => { 

    let redirectUrl = '/admin'

    if (to.query.url) redirectUrl = script.decryptText(to.query.url)
    if (localStorage.getItem('token_ttl')) window.location.href = redirectUrl

    next()
})

const app = createApp(App)
app.use(router).mount('#app')