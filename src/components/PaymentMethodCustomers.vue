<template>
    <div class="existing-booking-table">
        <div class="ebt-title">
            <h3 class="ebt-header" style="color:black">Booking Summary</h3>
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
                <p>{{name}}</p>
            </div>
            <div class = "box">
                <p class="ebt-header">Location</p>
                <p>Raffles Hall</p>
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
import router from "@/router/router"
    export default {
        data() {
            return {
                name: '',
                phoneNumber: '',
                email: ''
            }
        },

        created() {
        this.name = sessionStorage.getItem('name') || '';
        this.phoneNumber = sessionStorage.getItem('phoneNumber') || '';
        this.email = sessionStorage.getItem('email') || '';
    
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