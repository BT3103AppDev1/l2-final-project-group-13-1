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
  const currentUser = await this.getCurrentUser(getAuth(firebaseApp));
  let value = await getDocs(collection(db, "Bookings"));
  let index = 1;
  value.forEach((d) => {
    let documentData = d.data();
    let bookingID = d.id;
    let userID = documentData.userID;
    if (userID == currentUser.uid) {
      let branchID = documentData.branchID;
      let date = documentData.date;
      let time = documentData.startTime + " - " + documentData.endTime;
      let numberOfPax = documentData.numberOfPax;
      let roomType = documentData.roomType;
      this.fetchBranchLocation(branchID).then(location => {
        // create rows and cells in the table
        let table = document.getElementById('table');
        let row = table.insertRow(index);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        cell1.innerHTML = index;
        cell2.innerHTML = bookingID;
        cell3.innerHTML = location;
        cell4.innerHTML = date;
        cell5.innerHTML = time;
        cell6.innerHTML = numberOfPax;
        cell7.innerHTML = roomType;
        cell8.innerHTML = `<a style="background-color: transparent;" class="details-link" href="/ExistingBookingDetails/${bookingID}">More Details</a>`;
        index += 1;
      });
    }
  });
},

async fetchBranchLocation(branchID) {
  const branchCollection = collection(db, 'Branch');
  const branchQuery = query(branchCollection, where('branchID', '==', parseInt(branchID)));
  const branchSnapshot = await getDocs(branchQuery);
  const branchData = branchSnapshot.docs[0].data();
  return branchData.branchLocation;
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
    async getCurrentUser(auth) {
      return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
        }, reject);
      });
    },

    async fetchBranchLocation(branchID) {
      const branchCollection = collection(db, 'Branch');
      const branchQuery = query(branchCollection, where('branchID', '==', parseInt(branchID)));
      const branchSnapshot = await getDocs(branchQuery);
      const branchData = branchSnapshot.docs[0].data();
      return branchData.branchLocation;
    }
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

