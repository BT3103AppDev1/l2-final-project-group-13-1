import { createRouter, createWebHistory } from 'vue-router'
import BookingSystemPage from '../views/BookingSystemPage.vue'
import BookingSystemSearchResultsPage from '../views/BookingSystemSearchResultsPage.vue'

const routes = [
    {
        path: '/',
        name: 'BookingSystemPage',
        component: BookingSystemPage
    },
    {
        path: '/booking-system-search-results-page',
        name: 'BookingSystemSearchResultsPage',
        component: BookingSystemSearchResultsPage
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router