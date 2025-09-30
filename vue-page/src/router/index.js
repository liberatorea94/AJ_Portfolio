// https://www.google.com/search?q=github+pages+vue+subdirectory+404&sca_esv=f3826a3017f5c801&sxsrf=AE3TifNf3ElB5Vy8L3ziUmIyMSpU7IK37w%3A1759261438018&ei=_jLcaP9yl6vk2g-RhoahCQ&ved=0ahUKEwj_6dHIn4GQAxWXFVkFHRGDIZQQ4dUDCBA&uact=5&oq=github+pages+vue+subdirectory+404&gs_lp=Egxnd3Mtd2l6LXNlcnAiIWdpdGh1YiBwYWdlcyB2dWUgc3ViZGlyZWN0b3J5IDQwNDIIECEYoAEYwwRIjy1QkRpYwCtwA3gBkAEAmAGIAaAB5wOqAQMzLjK4AQPIAQD4AQGYAgigAvoDwgIKEAAYsAMY1gQYR8ICChAjGIAEGCcYigXCAgsQABiABBiGAxiKBcICBRAAGO8FwgIIEAAYgAQYogTCAgcQIxiwAhgnwgIKECEYoAEYwwQYCpgDAIgGAZAGCJIHAzYuMqAHzhuyBwMzLjK4B_IDwgcDMi42yAcM&sclient=gws-wiz-serp
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Resume from '../views/Resume.vue'

const router = createRouter( {

    // history: createWebHistory('/AJ_Portfolio/'),
    history: createWebHashHistory('/AJ_Portfolio/'),

    routes: [
        // {path: '/home', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/experience', name: 'Experience', component: Experience},
        {path: '/projects', name: 'Projects', component: Projects},
        {path: '/resume', name: 'Resume', component: Resume},
        { path: '/:pathMatch(.*)*', redirect: '/about' },
    ]
} )

export default router
