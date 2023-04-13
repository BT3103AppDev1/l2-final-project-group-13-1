<template>
    <div class="post-login">
        <div class="rectangle-previous-booking">
            <span class="poppins-bold-black-10px"><br></span>
            <span class="poppins-bold-black-10px"><br></span>
            <p class="poppins-medium-black-16px">Made a booking previously? <br />Click below to check or edit your existing booking</p>
            <div class= "check-existing-bookings">
                <router-link to="/allexistingbookingspage" class="poppins-medium-black-16px" style="font-size:17px;color:white;background-color:transparent;">Check Existing Booking</router-link> 
            </div>
            
        </div>
        
        

        <div class="rectangle-new-booking">
            <span class="poppins-bold-black-10px"><br></span>
            <span class="poppins-bold-black-10px"><br></span>
            <p class="poppins-medium-black-16px">Want to make a new booking? <br />Click below to make a new booking today</p>
            <div class = "make-new-booking"> 
                <router-link to="/customer-booking-system-page" class="poppins-medium-black-16px" style="font-size:17px;color:white;background-color:transparent;">Make New Booking</router-link> 
            </div>
        </div>
        <div class="rectangle-profile-wallet">
            <span class="poppins-bold-black-10px"><br></span>
            <span class="poppins-bold-black-10px"><br></span>
            <p class="poppins-medium-black-16px">Want to check your profile and TEOHENG wallet balance? <br />Click below to view!</p>
            <div class = "view-profile">
                <router-link to="/check-details" class="poppins-medium-black-16px" height:100px style="font-size:17px;color:white;background-color:transparent;">View Profile</router-link> 
            </div>
        </div>
    </div>
</template>

<script> 
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc } from "firebase/firestore";
import { collection, addDoc, updateDoc, getDocs, doc} from "firebase/firestore";
import firebaseApp from "@/firebase.js";

export default {
    
    name: "CustomerPostLogin",
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
    methods: {
    navigateToProfilePage() {
        setTimeout(() => {
            this.$router.push("/check-details") 
        }, 4000)
    },
  },
}
</script>

<style>

    .post-login {
        align-items: top;
        background-color:white;
        margin-top: 0px;
        display: flex;
        height:700px;
        margin-top: 100px;
        width: 1000px;
    }
    .rectangle-previous-booking {
        box-shadow: 0px 4px 35px #00000014;
        background-color: var(--white);
        border-radius: 40px;
        font-family:Arial;
        color:  black;
        font-family: Arial;
        padding: 10px 20px;
        height: 300px;
        width: 350px;
        margin-top: 25px;
        margin-left: -100px;
        font-size: 17px;
        text-align:center;
        
    }

    .check-existing-bookings {
        margin-top: 50px;
        margin-left: 5px;
        font-family:'Arial';
        color:white;
        width: 300px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    .rectangle-new-booking {
        box-shadow: 0px 4px 35px #00000014;
        background-color: var(--white);
        border-radius: 40px;
        font-family:Arial;
        font-family: Arial;
        color: black;
        padding: 10px 20px;
        height: 300px;
        width: 350px;
        margin-left: 50px;
        margin-top: 25px;
        font-size:17px;
        text-align:center;
        
    }

    .make-new-booking {
        margin-top:50px;
        margin-left: 7px;
        font-family:'Arial';
        color:white;
        width: 300px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    .rectangle-profile-wallet {
        box-shadow: 0px 4px 35px #00000014;
        background-color: var(--white);
        border-radius: 40px;
        font-family:Arial;
        color: black;
        text-align:center;
        padding: 10px 20px;
        height: 300px;
        width: 350px;
        margin-left:50px;
        margin-top:25px;
        font-size:17px;
        
    }

    .view-profile {
        margin-top: 50px;
        margin-bottom:720px;
        margin-left: 7px;
        font-family:'Arial';
        color:white;
        width: 300px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    

</style>