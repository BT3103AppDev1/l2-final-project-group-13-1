<template>
    <div class="existing-booking-table">
        <div class="ebt-title">
            <h3 class="ebt-header">Booking Summary | ID {{this.bookingID}}</h3>
        </div>
        <div class = "ebt-date">
            <p class="ebt-header">Date</p>
            <p>{{formattedDate}}</p>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Time</p>
                <p>{{documentData[1]}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Room Type</p>
                <p>{{documentData[2]}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Payment</p>
                <p>{{documentData[3]}}</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Name</p>
                <p>{{documentData[4]}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Location</p>
                <p>{{this.branchLocation}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Phone Number</p>
                <p>{{documentData[5]}}</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Remarks</p>
                <p>{{documentData[6]}}</p>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class="ebt-buttons">
        <button class = "ebt-button" @click = this.deleteBooking>Delete</button>
         <button class = "ebt-button" ><router-link to="/allexistingbookingspage" color="white">Cancel</router-link></button>
    </div>
  </template>

<script>
const db = getFirestore(firebaseApp)
import firebaseApp from "@/firebase.js";
import { getFirestore, doc, getDoc, collection, deleteDoc, query, where, getDocs } from 'firebase/firestore';
export default {
    data() {
        return {
            bookingID:'',
            documentData: [],
            branchLocation:'',
            branchID: 0,
        };
    },

    async mounted() {
        this.bookingID = this.$route.params.bookingID
        console.log(this.bookingID)
        const db = getFirestore(firebaseApp);
        let value = await getDocs(collection(db, "Bookings"))
        value.forEach((d) => {
            let documentData = d.data()
            let id = d.id
            if (id == this.bookingID) {
                let branchID = documentData.branchID
                console.log(branchID)
                this.branchID = branchID
                let date = documentData.date
                this.documentData.push(date)
                let time = documentData.startTime + " - " + documentData.endTime
                this.documentData.push(time)
                let roomType = documentData.roomType
                this.documentData.push(roomType)
                let paymentMethod = documentData.paymentMethod
                this.documentData.push(paymentMethod)
                let name = documentData.name
                this.documentData.push(name)
                let phoneNumber = documentData.phoneNumber
                this.documentData.push(phoneNumber)
                let remarks = documentData.remarks
                this.documentData.push(remarks)
            }
        this.fetchBranchName();
        })

        
    },

    methods: {
    async fetchBranchName() {
      let br = await getDocs(collection(db, "Branch"))
      br.forEach(doc => {
        let documentData = doc.data()
        let id = documentData.branchID
        let name = documentData.branchLocation
        if (id == this.branchID) {
            this.branchLocation = name;
        }
                });
    },
    deleteBooking() {
        console.log('he');
        this.$router.push('/BookingDeletedPage')
        deleteDoc(doc(db, "Bookings", this.bookingID));
        console.log("Document successfully deleted!" );
    },
    
    },

    computed: {
        formattedDate() {
        const date = this.documentData[0];
        return new Date(date).toLocaleDateString("en-SG", {
        day: "numeric",
        month: "long",
        year: "numeric",
        });
        },
        formattedTime() {
            const formatTime = (timeString) => {
                if (!timeString) return '';
                let [hour, minute] = timeString.split(':');
                hour = parseInt(hour, 10);
                const ampm = hour >= 12 ? 'PM' : 'AM';
                hour = hour % 12;
                hour = hour || 12; // the hour '0' should be '12'
                return `${hour}:${minute} ${ampm}`;
            };
            const formattedStartTime = formatTime(this.documentData.startTime);
            const formattedEndTime = formatTime(this.documentData.endTime);
            return `${formattedStartTime} - ${formattedEndTime}`;
        },
    }
}

</script>


<style>
table {
    font-family: poppins;
    color: black;
    border-collapse: collapse;
    width: 100%;
  }

th,
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

.ebt-container{
    display:flex;
    justify-content:space-between;
}

.box{
    width: 35%
}

.ebt-header{
    font-weight: bold;
}

.existing-booking-table{
    border-radius: 10px;
    border: 1px rgb(196, 194, 194);
    border-style: groove;
    padding: 1.5em
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