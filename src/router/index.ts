import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/main/articles',
                name: 'Articles',
                component: () => import('../views/Articles.vue')
            },
            {
                path: '/main/projects',
                name: 'Projects',
                component: () => import('../views/Projects.vue')
            },
            {
                path: '/main/message',
                name: 'Message',
                component: () => import('../views/Message.vue')
            },
            {
                path: '/main/about',
                name: 'About',
                component: () => import('../views/About.vue')
            }
        ]
    }
]
type Route = {}
type Position = { x: number; y: number }
type PositionResult = Position | { selector: string; offset?: Position } | void
function scrollBehavior (to: Route, from: Route, savedPosition: Position | void): PositionResult | Promise<PositionResult> | undefined | null {
    if (savedPosition) {
        return savedPosition
    } else {
        return {x: 0, y: 0}
    }
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior
})

export default router
