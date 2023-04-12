<template>
    <div class="wallet-profile">
        <div class="rectangle-check-wallet-balance">
            <span class="poppins-bold-black-10px"><br></span>
            <span class="poppins-bold-black-10px"><br></span>
            <span class="poppins-bold-black-20px"><br></span>
            <p>Check TEOHENG wallet balance</p>
        </div>
        <div class = "check-wallet-balance">
            <button @click= "navigateToWalletPage" style="font-size:17px; color:white;">Check TEOHENG wallet balance</button> 
        </div>

        <div class="rectangle-edit-profile">
            <span class="poppins-bold-black-10px"><br></span>
            <span class="poppins-bold-black-20px"><br></span>
            <span class="poppins-bold-black-20px"><br></span>
            <p>Edit your profile</p>
        </div>
        <div class = "edit-profile"> 
            <button @click= "navigateToEditProfilePage" style="font-size:17px;color:white;">Edit profile</button> 
        </div>
    </div>
</template>

<script> 

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc } from "firebase/firestore";
import { collection, addDoc, updateDoc, getDocs, doc} from "firebase/firestore";
import firebaseApp from "@/firebase.js";

export default {
    name: "CheckProfileAndWallet",

    mounted() {
            const auth = getAuth(firebaseApp)
            onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user)
                this.user = user
                this.useremail = user.email
            }
        })
        },

    methods: {
    navigateToWalletPage() {
        setTimeout(() => {
            this.$router.push("/wallet") 
        }, 1000)
    },



    navigateToEditProfilePage() {
        setTimeout(() => {
            this.$router.push("/edit-profile") 
        }, 1000)
    },
  },
}
</script>

<style>

    .wallet-profile {
        align-items: top;
        background-color:white;
        margin-top: 0px;
        display: flex;
        height: 700px;
        margin-top: 100px;
        width: 1000px;
    }
    .rectangle-check-wallet-balance {
        background-color: #F5F5F5;
        color:  black;
        font-family: Arial;
        border-radius:50px;
        padding: 10px 20px;
        height: 300px;
        width: 600px;
        margin-top: 25px;
        margin-left: -60px;
        font-size: 19px;
        text-align:center;
        
    }

    .check-wallet-balance {
        margin-top: 225px;
        margin-bottom:700px;
        margin-left: -430px;
        font-family:'Arial';
        color:white;
        width: 400px;
        height:50px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    .rectangle-edit-profile {
        background-color: #F5F5F5;
        font-family: Arial;
        color: black;
        padding: 10px 20px;
        height: 300px;
        width: 600px;
        margin-left: 180px;
        margin-top: 25px;
        font-size:19px;
        border-radius:50px;
        text-align:center;
        
    }

    .edit-profile {
        margin-top: 225px;
        margin-bottom: 700px;
        margin-left: -425px;
        height:50px;
        font-family:'Arial';
        color:white;
        width: 400px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 17px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }


</style>