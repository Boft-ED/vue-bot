import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import './style.css';
import App from './App.vue';

import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
import Basket from './pages/Basket.vue'
import Search from './pages/Search.vue'
import ProductPage from './pages/ProductPage.vue'

const app = createApp(App)

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/favorites', name: 'Favorites', component: Favorites },
    { path: '/basket', name: 'Basket', component: Basket },
    { path: '/search', name: 'Search', component: Search },
    { path: '/product/:id', name: 'ProductPage', component: ProductPage, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app');
