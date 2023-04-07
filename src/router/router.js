import { createRouter, createWebHistory } from 'vue-router'
import BookingSystemPage from '../views/BookingSystemPage.vue'
import BookingSystemSearchResultsPage from '../views/BookingSystemSearchResultsPage.vue'
import CustomerConfirmationPage from '../views/CustomerConfirmationPage.vue'
import PaymentMethodCustomersPage from '../views/PaymentMethodCustomersPage.vue'

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
    {
        path: '/customer-confirmation-page',
        name: 'CustomerConfirmationPage',
        component: CustomerConfirmationPage
    },
    {
        path: '/customer-payment-page',
        name: 'PaymentMethodCustomersPage',
        component: PaymentMethodCustomersPage
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router