import './bootstrap';
import { createApp } from 'vue';
import { createWebHistory } from 'vue-router'
import createRouter from './routers'
import App from '../layouts/app.vue';

const router = createRouter(createWebHistory())

const app = createApp(App)
app.use(router).mount('#app')