<template>
    <div class="existing-booking-table">
        <div class="ebt-title">
            <h3 class="ebt-header">Booking Summary | ID SC12345</h3>
        </div>
        <div class = "ebt-date">
            <p class="ebt-header">Date</p>
            <p>15 December 2023</p>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Time</p>
                <p>10:00-12:00</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Room Type</p>
                <p>Small</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Payment</p>
                <p>TEOHENG Wallet Credits</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Name</p>
                <p>Bryan Tan</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Location</p>
                <p>Raffles Hall</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Phone Number</p>
                <p>12345666</p>
            </div>
        </div>
        <br>
        <div class = "ebt-container">
            <div class = "box">
                <p class="ebt-header">Remarks</p>
                <p>I'm retarded</p>               
            </div>
        </div>
        <div class = "ebt-container">
            <div class = "box">
                <span class="poppins-bold-black-10px"><br></span>
                <span class="poppins-bold-black-20px">Total Amount<br></span>
            </div>
            <div class = "box2">
                <span class="poppins-bold-black-10px"><br></span>
                <span class="poppins-bold-black-20px">SGD$13.00<br></span>
                
            </div>
        </div>
    
    </div>

    <div  class = 'payment-table'>
        <div class = 'payment'>
            <span class="poppins-bold-black-20px">Payment Method<br></span>
            <span class="poppins-bold-black-10px"><br></span> 
            
            <div class="cash-logo">
                <button class= "image-button" v-on:click="" style:>
                    <img class="icon" src="../assets/cash.jpg"  style="width: 40px; height: auto;">
                </button> 
            </div>
            <div class = 'payment-method'>
                <span class="poppins-bold-black-10px"><br></span> 
                <span class="poppins-bold-black-10px">Payment in Store<br></span> 
            </div>
    
        </div>      
        <div class= "next-button">
            <button v-on:click="">Next</button> 
        </div>
        <div class ="back-button">
            <button style="font-size:17px;color:white;" @click="goBack()">Back</button>
        </div>
        
    </div>
    
  </template>


<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc } from "firebase/firestore";
import { collection, addDoc, updateDoc, getDocs, doc} from "firebase/firestore";
import firebaseApp from "@/firebase.js";

const db = getFirestore(firebaseApp); 
const customerRef = collection(db, "User"); 
const auth = getAuth(firebaseApp)  
import router from "@/router/router"

export default {
    data() {
        
    },

    mounted() {
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
        goBack() {
            this.$router.go(-1);
        }
    }
}

</script>

<style>
    table {
        font-family: poppins;
        color: black;
        border-collapse: collapse;
        width: 200%;
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
        width: 100%
    }
    .box2{
        width:30%
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
        height: 125px;
        width: 400px;
        margin-top: 25px;
        margin-left: 0px;
        font-size: 19px;
        text-align:center;
    }

    .payment {
        text-align: left;
    }

    .payment-method{
        margin-left: 120px;
        margin-top: -52px;
    }

    .image-button{
        border:2px solid rgba(0, 0, 0, 0.2) ;
        border-radius: 20px;
        width:70px;
        height: 50px;
        margin-top: -80px;
    }
    .cash-logo {
        width:1000px;
        height:10px;
        margin-left:20px;
    }

    .next-button {
        margin-top: 50px;
        margin-left: -150px;
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
        margin-left: 250px;
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