<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, addDoc, orderBy, query,onSnapshot, deleteDoc } from "firebase/firestore";
import { initializeApp } from "@firebase/app";
import { useRouter } from 'vue-router';
import router from '../router/router.js';
import firebaseApp from "@/firebase.js";
const db = getFirestore(firebaseApp); 
const auth = getAuth(firebaseApp);


export default {
  name: "Register",
  setup() {
    const name = ref("");
    const phoneNumber = ref("");
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const errMsg = ref("");

    const registerAndAddUser = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          console.log("Successfully registered!");
          setDoc(doc(db, 'User', data.user.uid), {
            email: email.value,
            name: name.value,
            phoneNumber: phoneNumber.value,
            username: username.value,
            walletBalance: 0
          });
          router.push('/customer-home');
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              errMsg.value = "Invalid email";
              break;
            case "auth/email-already-in-use":
              errMsg.value = "Email already in use";
              break;
            case "auth/weak-password":
              errMsg.value = "Weak password";
              break;
            default:
              errMsg.value = "Failed to register";
              break;
          }
        });
    };
    const signUpWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then(() => {
          console.log("Successfully signed in with Google!");
          router.push("/edit-profile");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };

    const signUpWithFacebook = () => {
      const provider = new FacebookAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then(() => {
          console.log("Successfully signed in with Facebook!");
          router.push("/edit-profile");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };


    return {
      email,
      password,
      name,
      phoneNumber,
      username,
      errMsg,
      signUpWithGoogle,
      signUpWithFacebook,
      registerAndAddUser
    };
  }
};
</script>

<template>
    <div class="register screen">
        <div class="register-overlap-group6">
            <div class="register-rectangle-76"></div>
            <img class="register-line-1" src="../assets/line-1.svg" alt="line 1" />
            <div class="register-saly-2 register-saly"></div>
            <form class="register-group-63 register-group" id="registerForm">
                <div class="register-flex-row">
                    <h1 class="register-title">Sign Up</h1>
                    <p class="register-have-an-account-sign-in">
                        <span class="register-span0">Have an Account?<br/></span><router-link to="/login" class="register-span1" style="background-color: transparent; border-color: transparent; cursor:pointer;">Sign in</router-link>

                    </p>
                </div>
                <div class="register-continue-with-google-center-fixed">
                    <div class="register-frame-6">
                        <img class="register-x-logo" src="../assets/google-logo.svg" alt="google logo" />
                        <button class="register-continue-with-google register-continue-with" style="background-color: transparent; border-color: transparent; cursor:pointer;" @click="signUpWithGoogle">Sign Up with Google</button>
                    </div>
                </div>
                <div class="register-continue-with-facebook-centre-fixed">
                    <div class="register-frame-6-1">
                        <img class="register-x-logo" src="../assets/facebook-logo.svg" alt="facebook logo" />
                        <button class="register-continue-with-facebook register-continue-with" style="background-color: transparent; border-color: transparent; cursor:pointer;" @click="signUpWithFacebook" >Sign Up with Facebook</button>
                    </div>
                </div>
                <div class="register-or">
                    <img class="register-line-1-1" src="../assets/line-1-1.svg" alt="line 1" />
                    <div class="register-or-1">OR</div>
                    <img class="register-line-2 register-line" src="../assets/line-2.svg" alt="line 2" />
                </div>  
            </form>
            <div class="register-saly-24 register-saly"></div>
            <div class="register-welcome-to-teoheng-ktv">Welcome to TEOHENG KTV</div>
            <img class="register-family-ktv-studiopng" src="../assets/family-ktv-studio-png@2x.png" alt="Family-ktv-studio"/>
            <div class="register-overlap-group-2 register-overlap-group-3">
                <button class="register-sign-up" style="background-color: transparent; border-color: transparent; cursor:pointer;" @click="registerAndAddUser">Sign up</button>
            </div>
            <div class="register-group-56 register-group">
                <div class="register-enter-your poppins-normal-black-16px">Enter Your Password</div>
                <input type="password" class="register-overlap-group" id="registerPassword" placeholder="Password" required v-model="password"/>
            </div>
            <div class="register-group-55 register-group">
                <p class="register-enter-your poppins-normal-black-16px">Enter Your 8-digit phone number(+65 numbers only)</p>
                <input type="tel" class="register-overlap-group" id="registerNumber" placeholder="Phone Number" pattern="[0-9]{8}" required v-model="phoneNumber"/>
            </div>
            <div class="register-group-58 register-group">
                <div class="register-enter-your poppins-normal-black-16px">Enter Your email address</div>
                <input type="email" class="register-overlap-group" id="registerEmail" placeholder="Email Address" required v-model="email"/>
            </div>
            <div class="register-group-54 register-group">
                <div class="register-enter-your poppins-normal-black-16px">Enter Your Username</div>
                <input type="text" class="register-overlap-group" id="registerUsername" placeholder="Username" required v-model="username"/>
            </div>
            <div class="register-group-57 register-group">
                <div class="register-enter-your poppins-normal-black-16px">Enter your Name</div>
                <input type="text" class="register-overlap-group" id="registerName" placeholder="Name" required v-model="name"/>
            </div>
        </div>
    </div>
</template>

<style>

.register {
    align-items: flex-start;
    background-color: #fffdf8;
    border: 1px none;
    display: flex;
    width: 1440px;
}

.hidden, 
.hidden * {
    pointer-events: none;
    visibility: hidden;
}

.register-overlap-group6 {
    height: 1371px;
    position: relative;
    width: 1389px;
}

.register-saly-2 {
    background-image: url("../assets/saly-2@2x.png");
    height: 450px;
    left: 939px;
    top:405px;
    width:450px;
}

.register .register-saly {
    background-position: 50% 50%;
    background-size:cover;
    position: absolute;
}

.register-group-55 {
    align-items: flex-start;
    gap: 16px;
    left: 495px;
    min-height: 97px;
    top: 808px;
    width: 444px;
}

.register .register-group {
    position: absolute;
    display: flex;
    flex-direction: column;
}

.register-overlap-group {
    align-items: flex-start;
    background-color: var(--white);
    border: 1px solid;
    border-color: var(--silver-chalice);
    border-radius: 9px;
    display: flex;
    min-width: 444px;
    padding: 18.1px 23.6px;
    height: 60px;
}

.register .register-password-2 {
    letter-spacing: 0;
    line-height: normal;
    min-height: 20px;
    width: 298px;
}

.register-enter-your {
    letter-spacing: 0;
    line-height: normal;
    margin-top: -3px;
    min-height: 24px;
}

.register-rectangle-76 {
    background-color: var(--flamingo);
    height: 1371px;
    left: 0;
    position: absolute;
    top: 0;
    width: 731px;
}

.register-group-63 {
    align-items: center;
    background-color: var(--white);
    border-radius: 40px;
    box-shadow: 0px 4px 35px #00000014;
    left: 450px;
    min-height: 1113px;
    padding: 67.3px 13px;
    top: 37px;
    width: 531px;
}

.register-continue-with-google-center-fixed {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0px 2px 3px #0000002b, 0px 0px 3px #00000015;
    display: flex;
    height: 54px;
    margin-left: 2px;
    min-width: 445px;
    padding: 0 97.5px;
    margin-top: 27px;
}

.register-frame-6 {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 10px;
    display: flex;
    gap: 15px;
    padding: 15px;
    position: relative;
    width: fit-content;
}

.register-continue-with-google {
    color: #0000008a;
    font-family: var(--font-family-poppings);
    font-weight: 500;
}

.register .register-continue-with {
    font-size: var(--font-size-xl2);
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
}

.register-x-logo {
    height: 24px;
    min-width: 24px;
    position: relative;
}

.register-or {
    align-items: flex-end;
    display: flex;
    height: 12px; 
    margin-left: 2.7px;
    margin-top: 18px;
    min-width: 448px;
}

.register-or-1 {
    align-self: flex-start;
    color: #2e2e2e;
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-m);
    font-weight: 400;
    letter-spacing: 0;
    line-height: 21.7px;
    margin-left: 23px;
    min-height: 12px;
    white-space: nowrap;
    width: 28px;
}

.register-line-1-1 {
    height: 1px;
    object-fit: cover;
    width: 193px;
}

.register-line-2 {
    margin-left: 11px;
    width: 191px;
}

.register .register-line {
    height: 1px;
    object-fit: cover;
}

.register-continue-with-facebook-centre-fixed {
    align-items: flex-start;
    background-color: var(--blue);
    border-radius: 10px;
    display: flex;
    height: 54px;
    justify-content: flex-end;
    margin-left: 2px;
    margin-top: 28px;
    min-width: 445px;
    padding: 0 77px;
}

.register-frame-6-1 {
    align-items: flex-start;
    background-color: var(--blue);
    border-radius: 10px;
    display: flex;
    width: fit-content;
    padding: 15px;
    gap: 15px;
    position: relative;
    height: 20px;
}

.register-continue-with-facebook { 
    color: var(--white);
    font-family: var(--font-family-poppins);
    font-weight: 700;
}

.register-flex-row {
    align-items: flex-start;
    align-self: flex-end;
    display: flex;
    gap: 75px;
    height: 120px;
    min-width: 475px;
}

.register-have-an-account-sign-in {
    color: transparent;
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-s2);
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    min-height: 41px;
    width: 145px;
    overflow: hidden;
    white-space: nowrap;
}

.register-span1 {
    color: var(--flamingo);
}

.register-span0 {
    color: #8d8d8d;
}

.register-title {
    align-self: flex-end;
    color: var(--black);
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-xl);
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    min-height: 88px;
    min-width: 255px;
    overflow: hidden;
    white-space: nowrap;
}

.register-line-1 {
    left: 123px;
    position: absolute;
    top: 684px;
    width: 740px;
}

.register-group-57 {
    align-items: flex-start;
    gap: 16px;
    left: 495px;
    min-height: 97px;
    top: 448px;
    width: 444px;
}

.register .register-overlap-group-3 {
    display: flex;
    min-width: 444px;
}

.register-overlap-group-1 {
    align-items: flex-start;
    background-color: var(--white);
    border: 1px solid; 
    border-color: var(--silver-chalice);
    border-radius: 9px;
    height: 60px;
    padding: 18.1px 23.6px;
}

.register .register-username-or-email-address-3 {
    letter-spacing: 0;
    line-height: normal;
    width: 298px;
    min-height: 20px;
}

.register-group-58 {
    align-items: flex-start;
    gap: 16px;
    left: 495px;
    min-height: 97px;
    top: 689px;
    width: 444px;
}

.register-username-or-email-address {
    letter-spacing: 0;
    line-height: normal;
    width: 298px;
    min-height: 20px;
}

.register-family-ktv-studiopng {
    height: 54px;
    left: 42px;
    position: absolute;
    top: 18px;
    width: 180px;
}

.register-group-54 {
    align-items: flex-start;
    gap: 16px;
    left: 494px;
    min-height: 97px;
    top: 571px;
    width: 444px;
}

.register-group-56 {
    align-items: flex-start;
    gap: 16px;
    left: 495px;
    min-height: 97px;
    top: 922px;
    width: 444px;
}

.register-welcome-to-teoheng-ktv {
    color: var(--black);
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-xl2);
    font-weight: 400;
    left: 494px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 102px;
    width: 273px;
}

.register-saly-24 {
    background-image: url("../assets/saly-24@2x.png");
    height: 323px;
    left: 153px;
    top: 360px;
    width: 323px;
}

.register-overlap-group-2 {
    align-items: flex-end;
    background-color: var(--flamingo);
    border-radius: 10px;
    box-shadow: 0px 4px 19px #7793414c;
    height: 57px;
    justify-content: flex-end;
    left: 494px;
    margin-top: 32px;
    padding: 15.9px 176.3px;
    position: absolute;
    top: 1030px;
}

.register-sign-up {
    color: var(--white);
    font-family: var(--font-family-poppings);
    font-size: var(--font-size-m);
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    min-height: 24px;
    width: 74px;
}
</style>
