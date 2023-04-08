import { createRouter, createWebHistory } from 'vue-router'
import BookingSystemPage from '../views/BookingSystemPage.vue'
import BookingSystemSearchResultsPage from '../views/BookingSystemSearchResultsPage.vue'
import CustomerConfirmationPage from '../views/CustomerConfirmationPage.vue'
import PaymentMethodCustomersPage from '../views/PaymentMethodCustomersPage.vue'
import AllExistingBookingsPage from "@/views/AllExistingBookingsPage.vue"
import ExistingBookingDetails from "@/views/ExistingBookingDetails.vue"
import BookingDeletedPage from "@/views/BookingDeletedPage.vue"
import SummaryDetails from "@/views/SummaryDetails.vue"
import LandingPage from "@/views/LandingPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '/customer-booking-system-page',
        name: 'BookingSystemPage',
        component: BookingSystemPage
    },
    {
        // path: '/booking-system-search-results-page/:selectedLocation/:selectedNumPax/:selectedDateTime/:selectedDuration/:roomList',
        path: '/booking-system-search-results-page',
        name: 'BookingSystemSearchResultsPage',
        component: BookingSystemSearchResultsPage,
        props: route => ({ uniqueRoomTypes: route.query.uniqueRoomTypes }),
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