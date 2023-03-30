<template>
  <all-existing-bookings-page/>
  <router-view/>
</template>

<script>
import BookingSystemPage from "@/views/BookingSystemPage.vue";
import DesktopHeader from './components/DesktopHeader.vue';
import DesktopFooter from './components/DesktopFooter.vue';
import AllExistingBookingsPage from './views/AllExistingBookingsPage.vue';


  export default {
    name: "App",
    components: {
        AllExistingBookingsPage
    }
  }

</script>
