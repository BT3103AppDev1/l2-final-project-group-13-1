<template>
    <div class="container-center-horizontal">
        <div class="existing-booking-details">
            <desktop-header/>
            <desktop-header-welcome/>
            <br>
            <p class="poppins-bold-black-24px">Your Booking Details</p>
            <existing-booking-table/>
            <div class="ebt-buttons">
                <button class = "ebt-button" @click = this.deleteBooking>Delete</button>
                <button class = "ebt-button" ><router-link to="/allexistingbookingspage" color="white">Cancel</router-link></button>
            </div>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import ExistingBookingTable from '../components/ExistingBookingTable.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
const db = getFirestore(firebaseApp)
import firebaseApp from "@/firebase.js";
import { getFirestore, doc, getDoc, collection, deleteDoc, query, where, getDocs } from 'firebase/firestore';
    export default {
        name: "ExistingBookingDetails",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            ExistingBookingTable,
            DesktopFooter,
        },
        async created() {
            this.bookingID = this.$route.params.bookingID;
        },
        methods: {
            deleteBooking() {
            this.$router.push('/BookingDeletedPage/' + this.bookingID)
            deleteDoc(doc(db, "Bookings", this.bookingID));
            console.log("Document successfully deleted!" );
    },
        }
    }
</script>

<style>

    body {
        margin: 0;
        padding: 0;
        /* left: -35px; */
        /* position: absolute; */
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
        justify-content: space-between;
    }

    .ebt-buttons{
    width:45%;
    text-align: center;
    color: white;
    display: flex;
    justify-content:space-between;

}

.ebt-button{
    background-color: var(--flamingo);
    width: 32%;
    padding: 0.2em;
    font-family: poppins;
    display: inline-block;
    border-radius: 8px;
    color: white
}
</style>