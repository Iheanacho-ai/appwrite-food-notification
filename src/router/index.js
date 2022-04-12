import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Notification from '@/views/Notifications'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/notification-page',
        name: 'Notification',
        component: Notification
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
