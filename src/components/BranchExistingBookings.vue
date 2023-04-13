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
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const db = getFirestore(firebaseApp)
export default {
 data() {
    return {branchID: [], branchLocation: [], bookingData: {}};
 },

 async created() {
  this.fetchBranchName();
  const currentUser = await this.getCurrentUser(getAuth(firebaseApp));
  const branchQuerySnapshot = await getDocs(query(collection(db, 'Branch'), where('email', '==', currentUser.email)));
  const branchSnapshot = branchQuerySnapshot.docs[0];
  const branchData = branchSnapshot.data();
  const branchID = branchData.branchID;
  console.log(branchID);
  const bookingQuerySnapshot = await getDocs(collection(db, 'Bookings'));
  let index = 1;
  bookingQuerySnapshot.forEach((d) => {
    const documentData = d.data();
    const bookingID = d.id;
    const userID = documentData.userID;
    if (documentData.branchID === branchID) {
      const date = documentData.date;
      const time = documentData.startTime + ' - ' + documentData.endTime;
      const numberOfPax = documentData.numberOfPax;
      const roomType = documentData.roomType;
      const location = this.branchLocation;
      //  create rows and cells in the table
      const table = document.getElementById('table');
      const row = table.insertRow(index);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
      const cell7 = row.insertCell(6);
      const cell8 = row.insertCell(7);
      cell1.innerHTML = index;
      cell2.innerHTML = bookingID;
      cell3.innerHTML = location[branchID - 1];
      cell4.innerHTML = date;
      cell5.innerHTML = time;
      cell6.innerHTML = numberOfPax;
      cell7.innerHTML = roomType;
      cell8.innerHTML = `<a class="details-link" href="/ExistingBookingDetails/${bookingID}">More Details</a>`;
      index += 1;
    }
  });
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
              console.log(this.useremail)
          }

      })
  
 },

 methods: {
  async getCurrentUser(auth) {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  },

  async fetchBranchName() {
    let br = await getDocs(collection(db, "Branch"))
    br.forEach(doc => {
      let documentData = doc.data()
      let id = documentData.branchID
      let name = documentData.branchLocation

      this.branchID.push(id);
      this.branchLocation.push(name);
              });
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

#cell8{
text-decoration: underline;
}

#test{
font-family: arial;
border: 1px solid black;
}

.details-link {
color: black;
text-decoration: underline;
}


</style>

