<template>
    <div class="container-center-horizontal">
        <div class="summary-booking-details">
            <desktop-header/>
            <desktop-header-welcome/>
            <br>
            <p class="poppins-bold-black-24px">Your Booking Has Been Confirmed!</p><br>
            <summary-table/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import SummaryTable from '../components/SummaryTable.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
    export default {
        name: "SummaryDetails",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            SummaryTable,
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

    .summary-booking-details {
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

</style>