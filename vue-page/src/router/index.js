
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter( {

    history: createWebHistory(),

    routes: [
        {path: '/home', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        { path: '/:pathMatch(.*)*', redirect: '/home' },
    ]
} )

export default router
