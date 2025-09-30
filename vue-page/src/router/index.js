
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Resume from '../views/Resume.vue'

const router = createRouter( {

    history: createWebHistory('/AJ_Portfolio/'),

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
