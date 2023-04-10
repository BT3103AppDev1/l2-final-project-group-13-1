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
      </table>
    </div>
  </template>

<script>
import firebaseApp from '../firebase.js'
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
const db = getFirestore(firebaseApp)
export default {
   data() {
      return {collectedData: []}
   },


   async mounted() {
    let value = await getDocs(collection(db, "Bookings"))
    let index = 1
    value.forEach((d) => {
          let documentData = d.data()
          let bookingID = d.id
          let userID =  documentData.userID
          if (userID == "E2HEyNJWY5maFTIu6YEs") {
            let branchID = documentData.branchID
            let date = documentData.date
            let time = documentData.startTime
            let numberOfPax = documentData.numberOfPax
            let roomType = documentData.roomType
            //  create rows and cells in the table
            let table = document.getElementById('table')
            let row = table.insertRow(index)
            let cell1 = row.insertCell(0)
            let cell2 = row.insertCell(1)
            let cell3 = row.insertCell(2)
            let cell4 = row.insertCell(3)
            let cell5 = row.insertCell(4)
            let cell6 = row.insertCell(5)
            let cell7 = row.insertCell(6)
            let cell8 = row.insertCell(7)
            cell1.innerHTML = index
            cell2.innerHTML = bookingID
            cell3.innerHTML = branchID
            cell4.innerHTML = date
            cell5.innerHTML = time
            cell6.innerHTML = numberOfPax
            cell7.innerHTML = roomType
            cell8.innerHTML = "More Details"
            index += 1
          }
        })
   }
}



   /* async function :display(userID),{
        let allDocuments = await getDocs(collection(db, 'Bookings'))
        let index = 1
        let tb = document.getElementById('table')
        while (tb.rows.length > 1) {
          tb.deleteRow(1)
        }
        allDocuments.forEach((docs) => {
          let documentData = docs.data()
          let userID = documentData.userID
          if (userID != "E2HEyNJWY5maFTIu6YEs") {
            continue;}
          let name = documentData.name
          let branchID = documentData.branchID
          let date = documentData.date
          let time = documentData.startTime
          let numberOfPax = documentData.numberOfPax
          let roomType = documentData.roomType
          //  create rows and cells in the table
          let table = document.getElementById('table')
          let row = table.insertRow(index)
          let cell1 = row.insertCell(0)
          let cell2 = row.insertCell(1)
          let cell3 = row.insertCell(2)
          let cell4 = row.insertCell(3)
          let cell5 = row.insertCell(4)
          let cell6 = row.insertCell(5)
          let cell7 = row.insertCell(6)
          let cell8 = row.insertCell(7)
          cell1.innerHTML = index
          cell2.innerHTML = name
          cell3.innerHTML = branchID
          cell4.innerHTML = date
          cell5.innerHTML = time
          cell6.innerHTML = numberOfPax
          cell7.innerHTML = roomType
          cell8.innerHTML = "More Details"
          // creating elements and giving class names through javascript
          cell7.className = 'profits'
          let deleteButton = document.createElement('button')
          deleteButton.id = String(coin)
          deleteButton.className = 'bwt'
          deleteButton.innerHTML = 'Delete'
          cell8.appendChild(deleteButton)
          deleteButton.onclick = function () {
            deleteInstrument(coin, useremail)
          }
          index += 1
        }) */
  




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

#test{
  font-family: arial;
  border: 1px solid black;
}
</style>

