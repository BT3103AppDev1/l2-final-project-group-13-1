<template>
    <div class="container-center-horizontal">
        <div class="booking-system-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <booking-system-search-form/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import BookingSystemSearchForm from "../components/BookingSystemSearchForm.vue";
// import BookingSearchResults
import DesktopFooter from '../components/DesktopFooter.vue';
    export default {
        name: "BookingSystemPage",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            BookingSystemSearchForm,
            // BookingSearchResults,
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

    .booking-system-page {
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