<template>
    <div class="container-center-horizontal">
        <div class="all-existing-bookings-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <br>
            <p class="poppins-bold-black-24px">Your Existing Bookings</p>
            <all-existing-bookings-table/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import AllExistingBookingsTable from '../components/AllExistingBookingsTable.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
    export default {
        name: "AllExistingBookingsPage",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            AllExistingBookingsTable,
            DesktopFooter,
        },
    }
</script>



<style>

    body {
        margin: 0;
        padding: 0;
        left: -35px;
        position: absolute;
    }

    .all-existing-bookings-page {
        align-items: center;
        background-color: var(--white);
        border: 1px none;
        display: flex;
        flex-direction: column;
        height: 1276px;
        overflow: hidden;
        position: relative;
        width: 1440px;
    }

</style>