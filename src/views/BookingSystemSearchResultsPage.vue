<template>
    <div class="container-center-horizontal">
        <div class="booking-system-search-results-page">
            <desktop-header/>
            <booking-system-search-form/>
            <booking-system-search-results/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import BookingSystemSearchForm from "../components/BookingSystemSearchForm.vue";
import BookingSystemSearchResults from "../components/BookingSystemSearchResults.vue";
import DesktopFooter from '../components/DesktopFooter.vue';
    export default {
        name: "BookingSystemPage",
        components: {
            DesktopHeader,
            BookingSystemSearchForm,
            BookingSystemSearchResults,
            DesktopFooter,
        },
        props: {
            selectedDateTime: {
                type: String,
                required: true,
            },
            selectedDuration: {
                type: String,
                required: true,
            },
            selectedNumPax: {
                type: Number,
                required: true,
            },
            selectedLocation: {
                type: String,
                required: true,
            },
        }
    }
</script>



<style>

    body {
        margin: 0;
        padding: 0;
        left: -35px;
        position: absolute;
    }

    .booking-system-search-results-page {
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