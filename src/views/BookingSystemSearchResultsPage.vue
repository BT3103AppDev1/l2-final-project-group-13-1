<template>
    
    <!-- <div class="container-center-horizontal"> -->
        
        <div class="booking-system-search-results-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <booking-system-search-form/>
            <!-- <div class="booking-room-card-container"> 
                <booking-room-card v-for="(card, index) in BookingRoomCardDetails" :key="index" 
                :room-type="card.roomType"
                :num-pax="card.numPax"
                :date="card.date"
                :time="card.time"
                :rate="card.rate"
                />
            </div> -->
            <!-- <booking-system-search-results/> -->

            <desktop-footer/>
        </div>
    <!-- </div> -->
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import BookingSystemSearchForm from "../components/BookingSystemSearchForm.vue";
import BookingSystemSearchResults from "../components/BookingSystemSearchResults.vue";
import DesktopFooter from '../components/DesktopFooter.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import BookingRoomCard from '../components/BookingRoomCard.vue';
    export default {
        name: "BookingSystemPage",
        components: {
            DesktopHeader,
            BookingSystemSearchForm,
            BookingSystemSearchResults,
            DesktopFooter,
            DesktopHeaderWelcome,
            BookingRoomCard,
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
        },
        data() {
            return {
                BookingRoomCardDetails: [
                { roomType: 'SMALL ROOM', numPax: 4, date: '05 December 2023', time: '10:00 - 11.00', rate: '$13.00', },
                { roomType: 'MEDIUM ROOM', numPax: 6, date: '05 December 2023', time: '10:00 - 11.00', rate: '$15.00', },
                { roomType: 'LARGE ROOM', numPax: 10, date: '05 December 2023', time: '10:00 - 11.00', rate: '$25.00', },
                ]
            }
        }
    }
</script>



<style>

    html, body {
        margin: 0;
        padding: 0;
        /* left: -35px; */
        /* position: absolute; */
        height: 100%;
        min-height: 100vh;
        /* width: 100%; */
        /* min-height: 100vh; */

    }

    .booking-system-search-results-page {
        align-items: center;
        background-color: var(--white);
        border: 1px none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* height: 1276px; */
        /* overflow: hidden; */
        position: relative;
        width: 100vw;
        height: 100vh;
        /* width: 1440px; */
        /* min-height: 100vh; */
    }

    .booking-room-card-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 10px;
        align-items: flex-start;
        /* top: -400px; */
        /* left: -100px; */
    }


</style>