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
import CustomerPostLoginPage from "@/views/CustomerPostLoginPage.vue"
import EditProfilePage from "@/views/EditDetailsPage.vue"
import WalletDetailsPage from "@/views/WalletDetailsPage.vue"
import CheckProfileAndWalletPage from "@/views/CheckProfileWalletPage.vue"
import EmployeePostLoginPage from "@/views/EmployeePostLoginPage.vue"
import EmployeeSearchBookingPage from "@/views/EmployeeBookingSystemPage.vue"
import TopUpWalletPage from "@/views/TopUpWalletPage.vue"
import BranchExistingBookingsPage from "@/views/BranchExistingBookingsPage.vue"
import EmployeeBookingDetails from "@/views/EmployeeBookingDetails.vue"
import EmployeeBookingDeletedPage from "@/views/EmployeeBookingDeletedPage.vue"

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
        path: '/customer-home',
        name: 'CustomerPostLoginPage',
        component: CustomerPostLoginPage
    },
    {
        path: '/employee-home',
        name: 'EmployeePostLoginPage',
        component: EmployeePostLoginPage
    },
    {
        path: '/employee-booking-system-page',
        name: 'EmployeeSearchBookingPage',
        component: EmployeeSearchBookingPage
    },
    {
        path: '/check-details',
        name: 'CheckProfileAndWalletPage',
        component: CheckProfileAndWalletPage
    },
    {
        path: '/edit-profile',
        name: 'EditProfilePage',
        component: EditProfilePage
    },
    {
        path: '/wallet',
        name: 'WalletDetailsPage',
        component: WalletDetailsPage
    },
    {
        path: '/booking-system-page',
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
    { path: '/allexistingbookingspage', 
      name: 'AllExistingBookingsPage', 
      component: AllExistingBookingsPage 
    },
    { path: '/ExistingBookingDetails/:bookingID', 
    name: 'ExistingBookingDetails', 
    component: ExistingBookingDetails
    },
    {path:'/BookingDeletedPage/:bookingID',
    name: 'BookingDeletedPage',
    component: BookingDeletedPage},

    { path: '/BookingSummary/:bookingID', 
    name: 'BookingSummary', 
    component: SummaryDetails
    },

    { path: '/top-up-wallet', 
    name: 'TopUpWallet', 
    component: TopUpWalletPage
    },

    { path: '/branchexistingbooking', 
      name: 'BranchExistingBookingsPage', 
      component: BranchExistingBookingsPage 
    },
    { path: '/EmployeeBookingDetails/:bookingID',
    name: 'EmployeeBookingDetaiils',
    component: EmployeeBookingDetails
    },
    { path: '/EmployeeBookingDeletedPage/:bookingID',
    name: 'EmployeeBookingDeletedPage',
    component: EmployeeBookingDeletedPage
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router