<template>
    <div class = "wallet-balance">
        <div class = "teoheng-wallet">
            <span class="poppins-bold-black-24px" style="font-weight:700;">Your TEOHENG Wallet Balance :<br></span>
        </div>
        <div class = "value">
            <span class="poppins-bold-black-24px">${{ walletBalance }}<br></span>
        </div>
        <div class = "Top-Up-options">
            <router-link to="/top-up-wallet">
                <button class="poppins-medium-white-16px" style="color:white; background-color:transparent;">Top-Up</button>
            </router-link>
        </div>

        <div class = "back-options">
            <router-link to="/check-details" class='poppins-medium-black-16px' style="color:black;background-color:transparent;">Back</router-link> 
        </div>  
    </div>

    <div class = "wallet-history" style="text-align: center;">
        <label>
            <span class="poppins-bold-black-24px">Wallet History<br></span>
            <span class="poppins-normal-black-24px" >This feature will be available soon!<br></span>
        </label>
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
        justify-content:center;
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
        margin-left: 160px;
        font-size: 30px;
        justify-content: center;
        font-weight:700;
        color: black;
        display:flex;
        font-family: var(--font-family-poppins);
    }

    .value{
        margin-left: -250px;
        margin-top: 40px;
        font-size: 20px;
        color: black;
    }

    .Top-Up-options {
        margin-top: 75px;
        margin-left: -375px;
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
        margin-left: 120px;
        width: 300px;
        height:50px;
        background-color: lightgray;
        border: none;
        border-radius: 10px;
        color: black;
        cursor: pointer;
        padding: 15px 20px;
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
        margin-top:-100px;
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
        margin-top:-90px;
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