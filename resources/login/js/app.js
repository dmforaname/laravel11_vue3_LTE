import './bootstrap';
import { createApp } from 'vue';
import { createWebHistory } from 'vue-router'
import createRouter from './routers'
import App from '../layouts/app.vue';

const router = createRouter(createWebHistory())

router.beforeEach((to, from, next) => { 

    if (localStorage.getItem('token_ttl')) window.location.href = '/admin'

    next()
})

const app = createApp(App)
app.use(router).mount('#app')