<template>
    <div class = "wallet-balance">
        <div class = "teoheng-wallet">
            <span class="poppins-bold-black-10px"><strong>Your TEOHENG Wallet Balance</strong><br></span>
        </div>
        <div class = "value">
            <span class="poppins-bold-black-10px">$20.00<br></span>
        </div>
        <div class = "Top-Up-options">
            <button style="color:white" v-on:click="">Top-Up</button> 
        </div>

        <div class = "back-options">
            <button style="color:white" v-on:click="">Back</button> 
        </div>  
    </div>

    <div class = "wallet-history">
        <label>
            <span class="poppins-bold-black-10px">Wallet History<br></span>
        </label>
    </div>

    <div class="rectangle">
    </div>
    <div class="rectangle-date">
        <p>Date</p>
    </div>
    <div class="rectangle-action">
        <p>Action</p>
    </div>
    <div class="rectangle-amount1">
        <p>Amount</p>
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

    }

    .value{
        margin-left: -250px;
        margin-top: 40px;
        font-size: 20px;
    }

    .Top-Up-options {
        margin-top: 75px;
        margin-left: -385px;
        font-family: 'Arial';
        width: 300px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        height:50px;
        font-size: 200px ;
        color: white;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    .back-options {
        margin-top: 75px;
        margin-left: 100px;
        font-family: 'Arial';
        width: 300px;
        height:50px;
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