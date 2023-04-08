<template>
    <div class="all-existing-bookings-table">
      <table id="table" class="auto-index">
        <thead>
        <tr>
          <th>No.</th>
          <th>Booking ID</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
          <th>No. of Pax</th>
          <th>Room Type</th>
        </tr>
      </thead>
      <tbody>
        <td>1</td>
        <td>123</td>
        <td>Raffles Hall</td>
        <td>29 Mar 23</td>
        <td>10:00-12:00</td>
        <td>3</td>
        <td>Medium</td>
        <td> <router-link to="/ExistingBookingDetails">More Details</router-link> </td>
      </tbody>
      </table>
    </div>
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

#test{
  font-family: arial;
  border: 1px solid black;
}
</style>