<template>
    <div class="summary-booking-table">
        <div class="sbt-title">
            <h3 class="sbt-header">Booking Summary | ID {{bookingID}}</h3>
        </div>
        <div class = "sbt-date">
            <p class="sbt-header">Date</p>
            <p>{{formattedDate}}</p>
        </div>
        <br>
        <div class = "sbt-container">
            <div class = "box">
                <p class="sbt-header">Time</p>
                <p>{{timeRange}}</p>
            </div>
            <div class = "box">
                <p class="sbt-header">Room Type</p>
                <p>{{bookingData.roomType}}</p>
            </div>
            <div class = "box">
                <p class="sbt-header">Payment</p>
                <p>{{bookingData.paymentMethod}}</p>
            </div>
        </div>
        <br>
        <div class = "sbt-container">
            <div class = "box">
                <p class="sbt-header">Name</p>
                <p>{{bookingData.name}}</p>
            </div>
            <div class = "box">
                <p class="sbt-header">Location</p>
                <p>{{branchLocation}}</p>
            </div>
            <div class = "box">
                <p class="sbt-header">Phone Number</p>
                <p>{{bookingData.phoneNumber}}</p>
            </div>
        </div>
        <br>
        <div class = "sbt-container">
            <div class = "box">
                <p class="sbt-header">Remarks</p>
                <p>{{bookingData.remarks}}</p>
            </div>
        </div>
    </div>
    <br>

    <button class="back-to-home" @click="navigateToHomeByUser">Back to Home</button>
  </template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc } from "firebase/firestore";
import { collection, addDoc, updateDoc, getDocs, doc, query, where} from "firebase/firestore";
import firebaseApp from "@/firebase.js";
const db = getFirestore(firebaseApp); 
const customerRef = collection(db, "User"); 
const auth = getAuth(firebaseApp)  

export default {
    data(){
        return {
            bookingID :'',
            bookingData: {},
            branchLocation:'',
            selectedDuration:'',
            selectedDateTime:null,
        };
    },

    mounted() {

            const selectedDuration = sessionStorage.getItem('duration');
            const selectedDateTime = sessionStorage.getItem('dateTime');
            this.selectedDuration = selectedDuration;
            this.selectedDateTime = selectedDateTime;

            sessionStorage.clear();

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

    async created() {
        this.bookingID = this.$route.params.bookingID;
        const db = getFirestore(firebaseApp);
        const bookingDocRef = doc(db, 'Bookings', this.bookingID);
        try {
            const docSnap = await getDoc(bookingDocRef);
            if (docSnap.exists()) {
            // Set the bookingData object in your component data
            this.bookingData = docSnap.data();
            await this.fetchBranchName();
            } else {
            console.log('No such document');
            }
        } catch (error) {
            console.error('Error getting document:', error);
        }
    },

    methods: {
    async fetchBranchName() {
            const db = getFirestore(firebaseApp);
            const branchID = this.bookingData.branchID;

            try {
                const branchCollection = collection(db, 'Branch');
                const branchQuery = query(branchCollection, where('branchID', '==', parseInt(branchID)));
                const querySnapshot = await getDocs(branchQuery);

                if (!querySnapshot.empty) {
                querySnapshot.forEach(doc => {
                    this.branchLocation = doc.data().branchLocation;
                });
                } else {
                console.log('No such document!');
                }
            } catch (error) {
                console.log('Error getting document:', error);
            }
        },

    navigateToHomeByUser() {    
                const db = getFirestore(firebaseApp);
                const employeeRef = collection(db, "Employees");
                // const customerRef = collection(db, "User");

                const email = this.useremail;

                const queryEmployee = query(employeeRef, where('email', '==', email))
                //Might change based on collection name changes
                // const queryCustomer = query(customerRef, where('email', '==', email))

                if (this.useremail == "") {
                    this.$router.push("/");
                }

               getDocs(queryEmployee)
                .then((QuerySnapshot) => {
                    if (QuerySnapshot.docs.length === 1) {
                        this.$router.push("/employee-home");
                    } else {
                        // getDocs(queryEmployee)
                            // .then((QuerySnapshot) => {
                                // if (QuerySnapshot.docs.length === 1) {
                        this.$router.push("/customer-home");
                    }
                })
            },
        },

    computed: {

        formattedDate() {
        const date = this.bookingData.date;
        return new Date(date).toLocaleDateString("en-SG", {
        day: "numeric",
        month: "long",
        year: "numeric",
        });
        },

        timeRange() {
            if (this.selectedDateTime && this.selectedDuration) {
                const startDateTime = new Date(this.selectedDateTime);
                const endDateTime = new Date(startDateTime);
                endDateTime.setHours(endDateTime.getHours() + parseInt(this.selectedDuration));
                
                const options = {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                    };
                
                const startTime = startDateTime.toLocaleString("en-UK", options);
                const endTime = endDateTime.toLocaleString("en-UK", options);

                const formatTime = (timeString) => {
                    let [hour, minute] = timeString.split(':');
                    hour = parseInt(hour, 10);
                    const ampm = hour >= 12 ? 'PM' : 'AM';
                    hour = hour % 12;
                    hour = hour || 12; // the hour '0' should be '12'
                    return `${hour}:${minute} ${ampm}`;
                };

                const formattedStartTime = formatTime(startTime);
                const formattedEndTime = formatTime(endTime);

                return `${formattedStartTime} - ${formattedEndTime}`;

                }
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

.sbt-container{
    display:flex;
    justify-content:space-between;
}

.box{
    width: 35%
}

.sbt-header{
    font-weight: bold;
}

.summary-booking-table{
    border-radius: 10px;
    border: 1px rgb(196, 194, 194);
    border-style: groove;
    padding: 1.5em
}

.back-to-home {
    font-family: poppins;
    color: white;
    background-color: var(--flamingo);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

</style>