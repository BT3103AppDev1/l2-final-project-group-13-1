<template>
    <div class="existing-booking-table">
        <div class="ebt-title">
            <h3 class="ebt-header">Booking Summary | ID {{this.bookingID}}</h3>
        </div>
        <div class = "ebt-date">
            <p class="ebt-header">Date</p>
            <p style="color: black;">{{this.date}}</p>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Time</p>
                <p>{{this.time}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Room Type</p>
                <p>{{this.room}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Payment</p>
                <p>{{this.pay}}</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Name</p>
                <p>{{this.name}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Location</p>
                <p>{{this.location}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Phone Number</p>
                <p>{{this.number}}</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Remarks</p>
                <p>{{this.remarks}}</p>
            </div>
        </div>
    </div>
    <br>
    <br>
  </template>

<script>
const db = getFirestore(firebaseApp)
import firebaseApp from "@/firebase.js";
import { getFirestore, doc, getDoc, collection, deleteDoc, query, where, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
var bookingDetails = []

export default {
    data() {
        return {
            bookingID:'',
            documentData: [],
            branchLocation:'',
            branchID: 0,
            details: [],
            date: '',
            time: '',
            room: '',
            pay: '',
            name: '',
            location: '',
            number: '',
            remarks: ''
        };
    },

    async created() {
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

        })
        await this.fetchBranchName();
        const date = this.formattedDate
        this.details.push(date)
        const time = this.documentData[1]
        this.details.push(time)
        const room = this.documentData[2]
        this.details.push(room)
        const pay = this.documentData[3]
        this.details.push(pay)
        const name = this.documentData[4]
        this.details.push(name)
        const location = this.branchLocation
        this.details.push(location)
        const number = this.documentData[5]
        this.details.push(number)
        const remarks = this.documentData[6]
        this.details.push(remarks)
        console.log(this.details)
        if (this.details[1] != null) {
            sessionStorage.setItem('date', this.details[0])
            sessionStorage.setItem('time', this.details[1])
            sessionStorage.setItem('room', this.details[2])
            sessionStorage.setItem('pay', this.details[3])
            sessionStorage.setItem('name', this.details[4])
            sessionStorage.setItem('location', this.details[5])
            sessionStorage.setItem('number', this.details[6])
            sessionStorage.setItem('remarks', this.details[7])
        }
        this.date = sessionStorage.getItem('date')
        this.time = sessionStorage.getItem('time')
        this.room = sessionStorage.getItem('room')
        this.pay = sessionStorage.getItem('pay')
        this.name = sessionStorage.getItem('name')
        this.location = sessionStorage.getItem('location')
        this.number = sessionStorage.getItem('number')
        this.remarks = sessionStorage.getItem('remarks')
        
    },

    async mounted() {
            const auth = getAuth(firebaseApp)
            onAuthStateChanged(auth, (user) => {
                if (!user) {
            // Redirect to login page or any other page
                this.$router.push('/logIn'); // Replace '/login' with the desired route
                return;
            }
            else if (user) {
                console.log(user)
                this.user = user
                this.useremail = user.email
            }

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
    },

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
    color: black;
}

.box{
    width: 35%
}

.ebt-header{
    font-weight: bold;
    color: black;
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