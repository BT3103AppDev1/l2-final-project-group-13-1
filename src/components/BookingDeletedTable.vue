
<template>
    <div class="booking-deleted-table">
        <div class="ebt-title">
            <h3 class="ebt-header">Booking Summary | ID {{this.bookingID}}</h3>
        </div>
        <div class = "ebt-date">
            <p class="ebt-header">Date</p>
            <p>{{this.bookingDetails[0]}}</p>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Time</p>
                <p>{{this.details[1]}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Room Type</p>
                <p>{{this.details[2]}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Payment</p>
                <p>{{this.details[3]}}</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Name</p>
                <p>{{this.details[4]}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Location</p>
                <p>{{this.details[5]}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Phone Number</p>
                <p>{{this.details[6]}}</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Remarks</p>
                <p>{{this.details[7]}}</p>
            </div>
        </div>
    </div>
    <br>
    <br>
    <button class = "dbt-button" style="color: ;"><router-link to="/allexistingbookingspage" color="white">Back to Home</router-link></button>
  </template>

<script>
const db = getFirestore(firebaseApp)
import firebaseApp from "@/firebase.js";
import { getFirestore, doc, getDoc, collection, deleteDoc, query, where, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export default {

    data() {
        return {
            bookingID:'',
            documentData: [],
            branchLocation:'',
            branchID: 0,
        };
    },

    async created() {
        this.bookingID = this.$route.params.bookingID;
        console.log(this.bookingDetails)
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

.booking-deleted-table{
    border-radius: 10px;
    border: 1px rgb(196, 194, 194);
    border-style: groove;
    padding: 1.5em
}

.dbt-button{
    background-color: var(--flamingo);
    width: 20%;
    padding: 0.2em;
    font-family: poppins;
    display: inline-block;
    border-radius: 8px;
    color: white
}
</style>