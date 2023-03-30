<template>
    <div class="container-center-horizontal">
        <div class="existing-booking-details">
            <desktop-header/>
            <br>
            <p class="poppins-bold-black-24px">Your Booking Details</p>
            <existing-booking-table/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import ExistingBookingTable from '../components/ExistingBookingTable.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
    export default {
        name: "ExistingBookingDetails",
        components: {
            DesktopHeader,
            ExistingBookingTable,
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

    .existing-booking-details {
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