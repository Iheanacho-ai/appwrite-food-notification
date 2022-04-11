import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Notification from '../components/notification'

Vue.use(VueRouter)

export default new Router({
    routes: [
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
})