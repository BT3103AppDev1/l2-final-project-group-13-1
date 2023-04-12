<template>
    <div class = "wallet-balance">
        <div class = "teoheng-wallet">
            <span class="poppins-bold-black-20px">Your TEOHENG Wallet Balance<br></span>
        </div>
        <div class = "value">
            <span class="poppins-bold-black-10px">$20.00<br></span>
        </div>
    </div>

    <div class = "Top-Up">
        <div class = "Top-Up-Details">
            <label>
            <span class="poppins-bold-black-20px">Top-Up Details<br></span>
            </label>
        </div>
        <div class = "Amount-Top-Up">
            <label>
            <span class="poppins-bold-black-10px">Amount To Top Up<br></span>
            <input type = "text" size = 112 placeholder="  100">
            </label>
        </div>
        <div class = "Payment">
            <label>
            <span class="poppins-bold-black-10px">Payment Method<br></span>
            </label>
            <div class="rectangle">
                <p>Only Paylah or Paynow</p>
            </div>
        </div>
    
        <div class = "Top-Up-options">
            <button v-on:click="">Top-Up</button> 
        </div>

        <div class = "back-options">
            <button v-on:click="">Back</button> 
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

export default {
    name: "TopUp",

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
}
</script>



<style>
    textarea, input {
        border-radius: 10px;
        height: 35px;
    }
    .wallet-balance {
        align-items: top;
        background-color: #F5F5F5;
        margin-top: 0px;
        display: flex;
        height: 100px;
        margin-top: 20px;
        width: 1000px;
    }

    .teoheng-wallet{
        margin-left:365px;
    }

    .value{
        margin-left: -180px;
        margin-top: 50px;
    }

    .Top-Up {
        align-items: top;
        background-color: #EEEEEE;
        margin-top: 10px;
        display: flex;
        height: 450px;
        margin-top: 20px;
        width: 1000px;
    }

    .Top-Up-Details{
        margin-top: 30px;
        margin-left: 450px;
        width: 160px;
    }

    .Amount-Top-Up{
        margin-top: 150px;
        margin-left:-500px;

    }

    .Payment{
        margin-top: 240px;
        margin-left:-780px;
        
    }

    .payment-methods {
        align-items: center;
        background-color: white;
        border-radius: 10px;
        display: flex;
        gap: 8px;
        justify-content: left;
        padding: 7px 18px;
        position: relative;
        width: 1000px;
        margin-top: 270px;
        margin-left:860px;
        height: 40px;
    }

    .rectangle {
        background-color: white;
        border-radius: 10px;
        color: light black;
        padding: 10px 20px;
        height: 35px;
        width: 780px;
        border: 2px solid black;
    }

    .rectangle p {
        margin: 0;
    }

    .Top-Up-options {
        margin-top: 400px;
        margin-left: -700px;
        font-family: 'Arial';
        width: 200px;
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

    .back-options {
        margin-top: 400px;
        margin-left: 150px;
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
