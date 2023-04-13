<template>       
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div class="booking-system-search-results-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <booking-room-cards v-if="uniqueRoomTypes" :uniqueRoomTypes="uniqueRoomTypes"/>
            <desktop-footer/>

        </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import BookingSystemSearchForm from "../components/BookingSystemSearchForm.vue";
import DesktopFooter from '../components/DesktopFooter.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import BookingRoomCard from '../components/BookingRoomCard.vue';
import BookingRoomCards from '../components/BookingRoomCards.vue';
    export default {
        name: "BookingSystemPage",
        components: {
            DesktopHeader,
            BookingSystemSearchForm,
            DesktopFooter,
            DesktopHeaderWelcome,
            BookingRoomCard,
            BookingRoomCards,
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
            uniqueRoomTypes: {
                type: Array,
                required: true,
            }
        },
        data() {
            return {
                BookingRoomCardDetails: [
                { roomType: 'SMALL ROOM', numPax: 4, date: '05 December 2023', time: '10:00 - 11.00', rate: '$13.00', },
                { roomType: 'MEDIUM ROOM', numPax: 6, date: '05 December 2023', time: '10:00 - 11.00', rate: '$15.00', },
                { roomType: 'LARGE ROOM', numPax: 10, date: '05 December 2023', time: '10:00 - 11.00', rate: '$25.00', },
                ],
            }
        },
    }
</script>



<style>

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        overflow-y: auto;
        overflow-x: hidden;
    }

    .booking-system-search-results-page {
        align-items: center;
        background-color: var(--white);
        border: 1px none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        /* width: 100vw; */
        width: 1440px;
        height: 100vh;
        gap: 50px;

    }



</style>