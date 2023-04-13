<template>
    <div class = "wallet-balance">
        <div class = "teoheng-wallet">
            <span class="poppins-bold-black-16px"><strong>Your TEOHENG Wallet Balance</strong><br></span>
        </div>
        <div class = "value">
            <span class="poppins-bold-black-16px">${{ walletBalance }}<br></span>
        </div>
        <div class = "Top-Up-options">
            <router-link to="/top-up-wallet">
                <button class="poppins-medium-white-16px" style="color:white; background-color:transparent;">Top-Up</button>
            </router-link>
        </div>

        <div class = "back-options">
            <router-link to="/check-details" class='poppins-medium-white-16px' style="color:white;background-color:transparent;">Back</router-link> 
        </div>  
    </div>

    <div class = "wallet-history">
        <label>
            <span class="poppins-bold-black-24px">Wallet History<br></span>
        </label>
    </div>

    <div class="rectangle">
    </div>
    <div class="rectangle-date" style="color: black">
        <p class="poppins-bold-black-24px">Date</p>
    </div>
    <div class="rectangle-action poppins-medium-black-16px" style="color: black">
        <p class="poppins-bold-black-24px">Action</p>
    </div>
    <div class="rectangle-amount1" style="color: black">
        <p class="poppins-bold-black-24px">Amount</p>
    </div> 

    <div class = "table-container">
        <table class="table">
            <thead>
                <tr>
                    <th>10 Feb 2023</th>
                    <th>Top-Up</th>
                    <th>$5.00</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>08 Feb 2023</td>
                    <td>Refund</td>
                    <td>$15.00</td>
                </tr>
                <!-- <tr>
                    <td>07 Feb 2023</td>
                    <td>Booking Transaction</td>
                    <td>$15.00</td>
                </tr> -->
            </tbody>
        </table>
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

export default {
    name: "WalletDetails",

    data() {
        return {
            walletBalance: 0,
        }
    },

    async created() {
  const db = getFirestore(firebaseApp);
  const currentUser = await this.getCurrentUser(getAuth(firebaseApp));
  const userDocRef = doc(db, 'User', currentUser.uid);
  try {
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      // Set the wallet balance in your component data
      this.walletBalance = docSnap.data().walletBalance;
      console.log(this.walletBalance);
    } else {
      console.log('No such document');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
},

methods:
{
    async getCurrentUser(auth) {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
},
}
}

</script>




<style>
    textarea, input {
        border-radius: 10px;
        height: 35px;
    }
    .wallet-balance {
        align-items: top;
        box-shadow: 0px 4px 35px #00000014;
        background-color: var(--white);
        border-radius: 40px;
        margin-top: 0px;
        display: flex;
        height: 130px;
        margin-top: 20px;
        width: 1000px;
    }

    .teoheng-wallet{
        margin-left: 270px;
        font-size: 30px;
        font-weight:bold;
        color: black;
    }

    .value{
        margin-left: -250px;
        margin-top: 40px;
        font-size: 20px;
        color: black;
    }

    .Top-Up-options {
        margin-top: 75px;
        margin-left: -385px;
        width: 300px;
        background-color: var(--flamingo);
        border: none;
        border-radius: 10px;
        height:50px;
        font-size: 200px ;
        color: white;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        box-shadow: 0px 4px 19px #7793414c;
    }

    .back-options {
        margin-top: 75px;
        margin-left: 100px;
        width: 300px;
        height:50px;
        background-color: #f5997b;
        border: none;
        border-radius: 10px;
        font-size: 200px ;
        color: white;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        box-shadow: 0px 4px 19px #7793414c;
    }

    .wallet-history{
        margin-top: 20px;
        margin-left: 0px;
        font-size: 40px;
        color:solid black;
    }

    .table-container {
        width: 100%;
        overflow-x: auto;
    }

    .table {
        width: 55.5%;
        margin-left:320px;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 20px;
        font-weight: bold;
    }

    .table th,
    .table td {
        padding: 20px;
        text-align: center;
        vertical-align: middle;
        border: 3px solid black;
    }

    .rectangle{
        background-color: #EEEEEE;
    
        color: light black;
        padding: 10px 20px;
        height: 60px;
        width: 800px;
    }

    .rectangle-date {
        background-color: #EEEEEE;
        color: light black;
        padding: 10px 20px;
        height: 50px;
        width: 200px;
        margin-top:-105px;
        margin-left: -370px;
        font-size: 30px
        
    }

    .rectangle-action {
        background-color: #EEEEEE;
    
        color: light black;
        padding: 10px 20px;
        height: 50px;
        width: 100px;
        margin-left:70px;
        margin-top:-95px;
        font-size:30px;
        
    }

    .rectangle-amount1 {
        background-color: #EEEEEE;
        color: light black;
        padding: 10px 0px;
        height: 50px;
        width: 0px;
        margin-right:-490px;
        margin-top:-95px;
        font-size:30px;
        
    }

    




</style>