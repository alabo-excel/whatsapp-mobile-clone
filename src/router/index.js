import Vue from 'vue'
import VueRouter from 'vue-router'
import Chats from '../views/chats.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Chats',
        component: Chats
    },
    {
        path: '/calls',
        name: 'calls',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/calls.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router