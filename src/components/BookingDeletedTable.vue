<template>
    <div class="booking-deleted-table">
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
    </div>
    <br>
    <br>
         <button class = "bdt-button" style="color: white;"><router-link to="/" color="white">Back to Home</router-link></button>
  </template>

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

.bdt-button{
    background-color: var(--flamingo);
    width: 20%;
    padding: 0.2em;
    font-family: poppins;
    border-radius: 8px;
    color: white
}
</style>