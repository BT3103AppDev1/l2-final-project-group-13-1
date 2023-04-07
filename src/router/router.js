import { createRouter, createWebHistory } from 'vue-router'
import BookingSystemPage from '../views/BookingSystemPage.vue'
import BookingSystemSearchResultsPage from '../views/BookingSystemSearchResultsPage.vue'
import CustomerConfirmationPage from '../views/CustomerConfirmationPage.vue'
import PaymentMethodCustomersPage from '../views/PaymentMethodCustomersPage.vue'
import AllExistingBookingsPage from "@/views/AllExistingBookingsPage.vue"
import ExistingBookingDetails from "@/views/ExistingBookingDetails.vue"
import BookingDeletedPage from "@/views/BookingDeletedPage.vue"
import SummaryDetails from "@/views/SummaryDetails.vue"

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
    { path: '/allexitingbookingspage', 
      name: 'AllExistingBookingsPage', 
      component: AllExistingBookingsPage 
    },
    { path: '/ExistingBookingDetails', 
    name: 'ExistingBookingDetails', 
    component: ExistingBookingDetails
    },
    {path:'/BookingDeletedPage',
    name: 'BookingDeletedPage',
    component: BookingDeletedPage},

    { path: '/BookingSummary', 
    name: 'BookingSummary', 
    component: SummaryDetails
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router