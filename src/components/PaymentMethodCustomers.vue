<template>
    <div class="existing-booking-table">
        <div class="ebt-title">
            <h3 class="ebt-header" style="color:black">Booking Summary</h3>
        </div>
        <div class = "ebt-date">
            <p class="ebt-header">Date</p>
            <p>{{formattedDate}}</p>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Time</p>
                <p>{{formattedTime}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Room Type</p>
                <p>{{selectedRoomType}}</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Name</p>
                <p>{{name}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Location</p>
                <p>{{branchLocation}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Phone Number</p>
                <p>{{phoneNumber}}</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Remarks</p>
                <p>{{remarks}}</p>               
            </div>
        </div>
        <div class = "ebt-container">
            <div class = "box">
                <span class="poppins-bold-black-10px"><br></span>
                <span class="poppins-bold-black-20px">Total Amount<br></span>
            </div>
            <div class = "box2">
                <span class="poppins-bold-black-10px"><br></span>
                <span class="poppins-bold-black-20px">SGD${{ totalPrice.toFixed(2) }}<br></span>
                
            </div>
        </div>
    
    </div>

    <div  class = 'payment-table'>
        <div class = 'payment'>
            <span class="poppins-bold-black-20px">Payment Method<br></span>
            <span class="poppins-bold-black-10px"><br></span> 
            
            <div class="cash-logo">
                <button class= "image-button" v-on:click="" style:>
                    <img class="icon" src="../assets/cash.jpg"  style="width: 30px; height:30px;">
                </button> 
            </div>
            <div class = 'payment-method'>
                <span class="poppins-bold-black-10px"><br></span> 
                <span class="poppins-bold-black-20px">Payment in Store<br></span> 
            </div>
            <div class="ewallet-logo">
                <button class= "image-button" v-on:click="" style:>
                    <img class="icon" src="../assets/ewallet.jpg"  style="width: 30px; height: 20px;;">
                </button> 
            </div>
            <div class = 'payment-method'>
                <span class="poppins-bold-black-10px"><br></span> 
                <span class="poppins-bold-black-20px">TEOHENG Wallet Credits<br></span> 
            </div>
            <div class="paynow-logo">
                <button class= "image-button" v-on:click="" style:>
                    <img class="icon" src="../assets/paynow.jpg"  style="width: 50px; height: auto;">
                </button> 
            </div>
            <div class = 'payment-method'>
                <span class="poppins-bold-black-10px"><br></span> 
                <span class="poppins-bold-black-20px">PayNow/PayLah<br></span>
            </div>
        </div>  
        <div class = "radio-button">
            <input type="radio" name= "option1" value="option1" v-model="selectedOption">
        </div> 
        <div class = "radio-button2">
            <input type="radio" name="option2" value="option2" v-model="selectedOption">
        </div>
        
        <div class = "radio-button3">                    
            <input type="radio" name = "option3" value="option3" v-model="selectedOption">
        </div>   
        
        <div class= "next-button">
            <button v-on:click="" style:>Next</button> 
        </div>
        <div class ="back-button">
            <button style="font-size:17px;color:white;" @click="goBack">Back</button>
        </div>
        
    </div>
    
  </template>

<script>
import firebaseApp from "@/firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where} from "firebase/firestore";
import router from "@/router/router"
    export default {
        data() {
            return {
                name: '',
                phoneNumber: '',
                email: '',
                branchLocation: ''
            }
        },

        created() {
            this.name = sessionStorage.getItem('name') || '';
            this.phoneNumber = sessionStorage.getItem('phoneNumber') || '';
            this.email = sessionStorage.getItem('email') || '';
            this.date = sessionStorage.getItem('date') || '';
            this.startTime = sessionStorage.getItem('startTime') || '';
            this.endTime = sessionStorage.getItem('endTime') || '';
            this.selectedRoomType = sessionStorage.getItem('selectedRoomType') || '';
            this.noOfPax = parseFloat(sessionStorage.getItem('noOfPax')) || 0;
            this.price = sessionStorage.getItem('price') || 0;
            this.duration = parseFloat(sessionStorage.getItem('duration')) || 0;
            this.location = parseFloat(sessionStorage.getItem('location')) || 0;
            this.totalPrice = parseFloat(sessionStorage.getItem('totalPrice')) || 0;
            this.remarks = sessionStorage.getItem('remarks') || '';
            this.fetchBranchName();
    
        },


        methods: {
        goBack() {
            this.$router.go(-1);
        },

        async fetchBranchName() {
            const db = getFirestore(firebaseApp);
            const branchID = this.location;

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
    },

    computed: {

    formattedDate() {
    const date = this.date;
    return new Date(date).toLocaleDateString("en-SG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    },

    formattedPrice() {
        if (this.price == 13 || this.price == 15 || this.price == 17) {
            return `Happy Hour $${parseFloat(this.price).toFixed(2)} w/GST`;
        } else if (this.price == 19 || this.price == 22 || this.price == 25) {
            return `Peak Hour $${parseFloat(this.price).toFixed(2)} w/GST`;
        }
    },

    formattedTime() {
    const formatTime = (timeString) => {
      let [hour, minute] = timeString.split(':');
      hour = parseInt(hour, 10);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12;
      hour = hour || 12; // the hour '0' should be '12'
      return `${hour}:${minute} ${ampm}`;
    };

    const formattedStartTime = formatTime(this.startTime);
    const formattedEndTime = formatTime(this.endTime);

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
        font-size:12px;
    }
    .box{
        width: 100%
    }
    .box2{
        width:40%
    }
    .ebt-header{
        font-weight: bold;
    }
    .existing-booking-table{
        border-radius: 10px;
        border: 1px solid black;
        border-style: groove;
        padding: 1.5em
    }

    .payment-table {
        background-color: white;
        color:  black;
        border: 1px solid black;
        font-family: Arial;
        border-radius:10px;
        padding: 10px 20px;
        height: 200px;
        width: 375px;
        margin-top: 15px;
        margin-left: 0px;
        font-size: 19px;
        text-align:center;
    }

    .payment {
        text-align: left;
        margin-top: -5px;
    }

    .payment-method{
        margin-left: 50px;
        margin-top: -40px;
    }

    .image-button{
        border:2px solid rgba(0, 0, 0, 0.2) ;
        border-radius: 20px;
        width:50px;
        height: 40px;
        margin-top: -0px;
        margin-left:-25px;
    }
    .cash-logo {
        width:1000px;
        height:10px;
        margin-left:20px;
        margin-top:-20px;
    }

    .ewallet-logo {
        width:1000px;
        height:10px;
        margin-left:20px;
        margin-top:20px;
    }


    .paynow-logo {
        width:1000px;
        height:10px;
        margin-left:20px;
        margin-top:20px;
        align-content:center;
    }

    .radio-button{
        margin-left: 320px;
        margin-top:-140px;
    }

    .radio-button2{
        margin-left: 320px;
        margin-top: 25px;
    }

    .radio-button3{
        margin-left: 320px;
        margin-top: 20px;
    }

    .next-button {
        margin-top: 26px;
        margin-left: -125px;
        font-family: 'Arial';
        width: 250px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        font-size: 200px ;
        color: white;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    .back-button {
        margin-top: -50px;
        margin-left: 200px;
        font-family: 'Arial';
        width: 250px;
        background-color: orange;
        border: none;
        border-radius: 20px;
        font-size: 200px ;
        color: white;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

</style>