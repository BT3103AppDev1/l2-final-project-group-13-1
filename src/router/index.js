
import { createRouter, createWebHistory } from 'vue-router'
import BookingSystemPage from "@/views/BookingSystemPage.vue"
import AllExistingBookingsPage from "@/views/AllExistingBookingsPage.vue"
import ExistingBookingDetails from "@/views/ExistingBookingDetails.vue"
import BookingDeletedPage from "@/views/BookingDeletedPage.vue"

const routes = [
    { path: '/', 
      name: 'AllExistingBookingsPage', 
      component: AllExistingBookingsPage 
    },
    { path: '/ExistingBookingDetails', 
    name: 'ExistingBookingDetails', 
    component: ExistingBookingDetails
    },
    {
      path: '/BookingSystemPage',
      name: 'BookingSystemPage',
      component: BookingSystemPage
    },
    {path:'/BookingDeletedPage',
    name: 'BookingDeletedPage',
    component: BookingDeletedPage}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router