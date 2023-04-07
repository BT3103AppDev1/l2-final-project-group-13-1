<template>
    <div class="summary-booking-table">
        <div class="sbt-title">
            <h3 class="sbt-header">Booking Summary | ID SC12345</h3>
        </div>
        <div class = "sbt-date">
            <p class="sbt-header">Date</p>
            <p>15 December 2023</p>
        </div>
        <br>
        <div class = "sbt-container">
            <div class = "box">
                <p class="sbt-header">Time</p>
                <p>10:00-12:00</p>
            </div>
            <div class = "box">
                <p class="sbt-header">Room Type</p>
                <p>Small</p>
            </div>
            <div class = "box">
                <p class="sbt-header">Payment</p>
                <p>TEOHENG Wallet Credits</p>
            </div>
        </div>
        <br>
        <div class = "sbt-container">
            <div class = "box">
                <p class="sbt-header">Name</p>
                <p>Bryan Tan</p>
            </div>
            <div class = "box">
                <p class="sbt-header">Location</p>
                <p>Raffles Hall</p>
            </div>
            <div class = "box">
                <p class="sbt-header">Phone Number</p>
                <p>12345666</p>
            </div>
        </div>
        <br>
        <div class = "sbt-container">
            <div class = "box">
                <p class="sbt-header">Remarks</p>
                <p>I'm retarded</p>
            </div>
        </div>
    </div>
    <br>
    <br>
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

</style>