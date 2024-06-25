import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.js',
                'resources/admin/scss/app.scss',
                'resources/admin/js/app.js',
                'resources/login/js/app.js',
                'resources/login/sass/app.scss',
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            
        },
    },
    server: {
        host: true,
        port: 5173,
    },
});
