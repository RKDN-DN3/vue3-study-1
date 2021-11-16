import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/Demo',
        name: 'Demo',
        component: Demo
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
