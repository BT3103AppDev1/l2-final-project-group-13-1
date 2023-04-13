<template>
    <div class="sorry">
        <h1 class="poppins-bold-black-20px" style="font-size:xx-large">Oops... We are still working on this page!</h1>
        <h3 class="poppins-normal-black-16px" style="font-size:x-large">Sorry for any inconvenience caused! </h3>
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
    name: "WorkInProg",

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
    }
}
</script>

<style>
.sorry {
    text-align: center;
}
</style>
