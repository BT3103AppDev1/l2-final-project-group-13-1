<template>

    <div class = "customer-edit-details">
        <div class = "edit-details">
            <span class="poppins-bold-black-20px">Edit your details<br></span>
        </div>

        <div class = "name-details">
            <div class = "name-entry">
                <span class="poppins-bold-black-17px">Enter your name<br></span>
            </div>
            <div class = "name-textbox">
                <input type = "text" v-model="name" size = 112 placeholder="Amy" >
                
            </div>
        </div>
        
        <!-- <div class = "email-details">
            <div class = "email-entry">
                <span class="poppins-bold-black-17px">Enter your email address<br></span>
            </div>
            <div class = "email-textbox">
                <input type = "email" v-validate="'required|email'" v-model = 'email' size = 112 placeholder="amy380@gmail.com">
                <span v-if="!isEmailValid">Please enter a valid email.</span> 
            </div>
        </div> -->

        <div class = "number-details">
            <div class = "number-entry">
                <span class="poppins-bold-black-17px">Enter your 8-digit phone number (+65 numbers only)<br></span>
            </div>
            <div class = "number-textbox">
                <input type = "text" v-model = "phoneNumber"  placeholder="98473825" maxlength="8" pattern="^[0-9]+$" >
            </div>
        </div>

        <div class = "change-password-details">
            <div class = "password-entry">
                <span class="poppins-bold-black-17px">Want to change password?<br></span>
            </div>
        </div>
        <div class = "change-password-options">
            <button v-on:click="changePassword">Change Password</button> 

        </div>

        <div class = "submit-options">
            <button v-on:click="submitForm">Submit</button> 

        </div>

        <div class = "back-options">
            <button v-on:click="">Back</button> 

        </div>

    </div>

</template>

<script>

//import { defineRule } from 'vee-validate';
import firebaseApp from "@/firebase.js";
import {
  sendPasswordResetEmail,

} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getFirestore, getDoc } from "firebase/firestore";
import { collection, addDoc, updateDoc, getDocs, doc} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp); 
const customerRef = collection(db, "User"); 
const auth = getAuth(firebaseApp)           
  
export default {
    name: "EditProfile",
    data() {
        return {
            name:'', email:'', phoneNumber:'', 
        };
    },

    

//    firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     const uid = user.uid;
//     console.log("User ID:", uid);
//   } else {
//     // No user is signed in.
//     console.log("No user is signed in.");
//   }
// });


methods: {   

    validateEmail() {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(this.email);
    },

    computed: {
    isEmailValid() {
      return this.validateEmail();
    },
  },

    changePassword() { 
        sendPasswordResetEmail(auth, this.email)
    .then(() => {
      alert(
        "Password reset link has been sent to your email. Please check your email (especially your spam folder!) for further instructions."
      );
    })
    .catch((error) => {
      alert(
        "User not found in our database. Please sign up for an account instead."
      );
    });
    },

    async submitForm() {
    //     if (this.currentPassword === '') {
    //         alert('Please enter your current password');
    //         return;
    //     }

  const documentID = "xP3rCXxtjg3aRWiTNtNx"; // replace with actual customer ID
  const customerDocRef = doc(customerRef, documentID);
  const userDoc = await getDoc(customerDocRef); // Add 'await' here
  const userData = userDoc.data();

    const updateData = {};
    if (this.name !== '') {
      updateData.name = this.name;
    } else {
        updateData.name = userData.name;
    }
  
    if (this.email !== '') {
      updateData.email = this.email;
    } else {
        updateData.email = userData.email;
    }
  
    if (this.phoneNumber !== '') {
      updateData.phoneNumber = this.phoneNumber;
    } else {
        updateData.phoneNumber = userData.phoneNumber;
    }
    
  
    updateDoc(customerDocRef, updateData)
      .then(() => {
        console.log("Customer information updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating customer information: ", error);
      });
  },
}

}


</script>


<style>
    /* For Page Body */
    .customer-edit-details {
        align-items: center;
        background-color: var(--concrete);;
        margin-top: 0px;
        display: flex;
        height: 600px;
        margin-top: 20px;
        width: 900px;
    }

    .edit-details {
        display: flex;
        margin-top: -450px;
        margin-left: 320px;
        height: 20px;
        min-width: 300px;
        padding: 6px 23px;
        position: center;
    }

    .name-details {
        margin-top: 230px;
    }

    .name-entry {
        margin-top: -280px;
        margin-left: -570px;
        height: 30px
    }

    .name-textbox {
        text-align: left;
        margin-left: -570px;
    }


    textarea, input {
        border-radius: 10px;
        height: 35px;
    }

    /* .email-details {
        margin-top: 600px;
        margin-left: -800px;
    }

    .email-entry {
        margin-top: -400px;
        margin-left: 20px;
        height: 30px;
    }

    .email-textbox {
        height: 100px;
        text-align: left;
        margin-left: 20px;
    } */

    .number-details {
        margin-top: 680px;
        margin-left: -800px;
    }

    .number-entry {
        margin-top: -390px;
        margin-left: 20px;
        height: 30px;
    }

    .number-textbox {
        height: 100px;
        text-align: left;
        margin-left: 20px;
    }

    .change-password-details {
        margin-top: 150px;
        margin-left: -465px;
    }

    .change-password-options {
        margin-top: 250px;
        margin-left: -240px;
        height:50px;
        font-family: 'Arial';
        width: 250px;
        background-color: grey;
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


    .submit-options {
        margin-top: 490px;
        margin-left: -100px;
        font-family: 'Arial';
        width: 250px;
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
        margin-top: 490px;
        margin-left: 50px;
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