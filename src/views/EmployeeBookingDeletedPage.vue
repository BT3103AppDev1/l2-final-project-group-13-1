<template>
    <div class="container-center-horizontal">
        <div class="booking-deleted-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <br>
            <p class="poppins-bold-black-24px">Booking Deleted!</p>
            <existing-booking-table/>
            <a class = 'dbt-button' href="/branchexistingbooking" >Back to Home</a>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import ExistingBookingTable from '../components/ExistingBookingTable.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
    export default {
        name: "ExistingBookingDetails",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            ExistingBookingTable,
            DesktopFooter,
        },
    }
</script>

<style>

    body {
        margin: 0;
        padding: 0;
        /* left: -35px; */
        /* position: absolute; */
    }

    .booking-deleted-page {
        align-items: center;
        background-color: var(--white);
        border: 1px none;
        display: flex;
        flex-direction: column;
        height: 1276px;
        overflow: hidden;
        position: relative;
        width: 1440px;
        justify-content: space-between;
    }

    .dbt-button:not(.nohover){
    background-color: var(--flamingo);
    width: 20%;
    padding: 0.2em;
    font-family: poppins;
    display: inline-block;
    border-radius: 8px;
    color: white;
    text-align: center;
    pointer-events: default;
}
</style>