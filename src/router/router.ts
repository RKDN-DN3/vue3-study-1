import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import TodoApp from '../views/TodoApp.vue'

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
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/todoapp',
        name: 'TodoApp',
        component: TodoApp
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
