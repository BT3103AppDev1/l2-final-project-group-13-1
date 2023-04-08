
<template>
    <div class="login-v1 screen">
        <div class="login-overlap-group3">
            <div class="login-rectangle-76"></div>
            <img class="login-line-1" src="../assets/line-1.svg" alt="line 1" />
            <div class="login-overlap-group2">
                <div class="login-group-61">
                    <div class="login-group-49">
                        <div class="login-welcome-to-teoheng">Welcome to TEOHENG KTV</div>
                        <div class="login-no-account-sign-up">
                            <span class="login-span0">No account?<br/></span><button class="login-span1" style="background-color: transparent; border-color: transparent; cursor:pointer;">Sign up</button>
                        </div>
                    </div>
                    <div class="login-with-google login-with">
                        <button class="login-with-google-1 poppins-normal-thunder-16px" style="background-color: transparent; border-color: transparent; cursor:pointer;" @click="signInWithGoogle">Login with Google</button> 
                    </div>
                    <div class="login-with-facebook login-with">
                        <img class="login-vector" src="../assets/Vector.png" alt="facebook logo" />
                        <button class="login-with-facebook-1 poppins-normal-thunder-16px" style="background-color: transparent; border-color: transparent; cursor:pointer;">Login with Facebook</button> 
                    </div>
                    <div class="login-or">
                        <img class="login-line-1-1" src="../assets/line-1-1.svg" alt="line 1" />
                        <div class="login-or-1 poppins-normal-thunder-16px">OR</div>
                        <img class="login-line-2 register-line" src="../assets/line-2.svg" alt="line 2" />
                    </div>  
                    <div class="login-group-54">
                        <div class="login-enter-your poppins-normal-black-16px">Enter your email address</div>      
                        <input type="text" class="login-overlap-group" id="loginEmail" placeholder="Email address" v-model="email"/>
                    </div>
                    <div class="login-group-215">
                        <div class="login-group-55">
                            <div class="login-enter-your poppins-normal-black-16px">Enter your password</div>
                                <input type="password" class="login-overlap-group-1" id="loginPassword" placeholder="Password" v-model="password"/>
                        </div>
                        <button class="login-forgot-password" style="background-color: transparent; border-color: transparent; cursor:pointer;">Forgot Password</button>
                    </div>
                    <div class="login-overlap-group1">
                        <button class="login-sign-in" style="background-color: transparent; border-color: transparent; cursor:pointer; white-space: nowrap;" @click="register"> Sign in</button>
                    </div>
                </div>
                <img class="login-eye-1" src="../assets/eye-1.svg" alt="icon-eye"/> 
            </div>
            <h1 class="login-title">Sign in</h1>
            <div class="login-saly-2 saly"></div> 
            <img class="login-family-ktv-studiopng" src="../assets/family-ktv-studio-png@2x.png" alt="Family-ktv-studio"/>
            <img class="login-family-ktv-studiopng" src="../assets/family-ktv-studio-png@2x.png" alt="Family-ktv-studio"/>
            <div class="login-saly-24 saly"></div>
            <img class="login-google-logo" src="../assets/google-logo.svg" alt="google logo" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router';


const email = ref("");
const password = ref("");

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully logged in!");
            // router.push('/') redirect to page after sign up
        })
        .catch((error) => {
            console.log(error.code);
            switch(error.message) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password is incorrect";
                    break;
            }
        });
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            // router.push('/') push to home page
        })
        .catch((error) => {
            //handle error 
        })
};
</script>

<script>
export default {
    name: "LogIn"
}
</script>


<style>
.login-v1 {
align-items: flex-start;
background-color: #fffdf8;
border:1px none;
display: flex;
width: 1440px;
}

.hidden,
.hidden *{
pointer-events: none;
visibility: hidden;
}

.login-overlap-group3{
height:900px;
position: relative;
width: 1379px;
}

.login-v1 .login-with {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 0px 4px 15px #0000001c;
    display: flex;
    height: 42px;
    justify-content: flex-end;
    min-width: 451px;
}

.login-with-facebook-1 {
    letter-spacing: 0;
    line-height: 21.7px;
    margin-top: 0.97px;
    min-height: 12px;
    white-space: nowrap;
}

.vector {
    align-self: flex-end;
    height: 17px;
    width: 11px;
}

.login-v1 .login-line {
    height: 1px;
    object-fit: cover;
}

.login-line-2 {
    margin-left: 11px;
    width: 191px;
}

.login-v1 .saly{
background-position: 50% 50%;
background-size: cover;
position: absolute;
}

.login-saly-24 {
background-image: url("../assets/saly-24@2x.png");
height: 323px;
left: 139px;
top: 126px;
width: 323px;
}

.login-family-ktv-studiopng {
height: 54px;
left: 40px;
position: absolute;
top: 25px;
width: 180px;
}

.login-saly-2 {
background-image: url("../assets/saly-2@2x.png");
height: 450px;
left: 929px;
top:144px;
width:450px;
}

.login-overlap-group2 {
border-radius: 40px;
height: 752px;
left: 450px;
position: absolute;
top: 79px;
width: 539px;
}

.login-group-61 {
align-items: center;
background-color: var(--white);
border-radius: 40px;
box-shadow: 0px 4px 35px #00000014;
display: flex;
flex-direction: column;
left: 0;
min-height: 752px;
padding: 38px 32px;
position: absolute;
top: 0;
width: 539px;
}

.login-group-215 {
align-items: flex-end;
display: flex;
flex-direction: column;
gap: 15px;
margin-left: 2px;
margin-top: 38px;
min-height: 127px;
width: 453px;
}

.login-forgot-password {
color: #ad3113;
font-family: var(--font-family-poppins);
font-size: var(--font-size-s);
font-weight: 400;
letter-spacing: 0;
line-height: normal;
margin-right: 2px;
min-height: 20px;
min-width: 108px;
}

.login-or {
    align-items: flex-end;
    display: flex;
    height: 12px;
    margin-right: 3.3px;
    margin-top: 30px;
    min-width: 448px;
}

.login-line-1-1 {
    height: 1px;
    object-fit: cover;
    width: 193px;
}

.login-or-1 {
    align-self: flex-start;
    letter-spacing: 0;
    line-height: 21.7px;
    margin-left: 23px;
    min-height: 12px;
    white-space: nowrap;
    width: 28px;
}

.login-group-54 {
align-items: flex-start; 
display:flex; 
flex-direction: column;
gap: 14px;
margin-top: 44px;
min-height: 92px;
width: 451px;
}

.login-group-55 {
align-items: flex-start; 
display:flex; 
flex-direction: column;
gap: 14px;
margin-right: 2px;
min-height: 92px;
width: 451px;
}

.login-password {
    letter-spacing: 0;
    line-height: normal;
    width: 302px;
    min-height: 19px;
}

.login-overlap-group-1 {
align-items: flex-start;
background-color: var(--white);
border: 1px solid;
border-color: #adadad;
border-radius: 9px;
display: flex;
height: 57px;
min-width: 451px;
padding: 17px 24px;
}

.login-with-facebook {
    gap: 13px;
    margin-top: 14px;
    padding: 10.4px 118px;
}

.login-enter-your {
    letter-spacing: 0;
    line-height: normal;
    margin-top: -3px;
    min-height: 24px;
}

.login-overlap-group {
align-items: flex-start;
background-color: var(--white);
border: 1px solid;
border-color: #adadad;
border-radius: 9px;
display: flex;
height: 57px;
min-width: 451px;
padding: 17px 24px;
}

.login-username-or-email-address {
letter-spacing: 0;
line-height: normal;
min-height: 19px;
width: 302px;
}

.login-group-49 {
align-items: center;
align-self: flex-end;
display: flex;
gap: 77px;
height: 48px;
min-width: 463px;
margin-top: 14px;
}

.login-no-account-sign-up {
color: transparent;
font-family: var(--font-family-poppins);
font-size: var(--font-size-m);
font-weight: 400;
letter-spacing: 0;
line-height: normal;
min-height: 48px;
width: 124px;
}

.login-span1 {
color: var(--flamingo);
}

.login-span0 {
color: #8d8d8d;
}

.login-welcome-to-teoheng {
color: var(--black);
font-family: var(--font-family-poppins);
font-size: var(--font-size-xl2);
font-weight: 400;
letter-spacing: 0;
line-height: normal;
margin-top: 4px;
min-height:30px;
min-width: 258px;
}

.login-overlap-group1 {
align-items: center;
background-color: var(--flamingo);
border-radius: 10px;
box-shadow: 0px 4px 19px #7793414c;
display: flex;
height: 54px;
justify-content: flex-end;
margin-top: 32px;
min-width: 451px;
padding: 0 197px;
}

.login-sign-in {
color: var(--white);
font-family: var(--font-family-poppins);
font-size: var(--font-size-m);
font-weight: 500;
letter-spacing: 0;
line-height: normal;
min-height: 24px;
width: 56px;
}

.login-with-google {
    margin-right: 6px;
    margin-top: 86px;
    padding: 10px 117px;
}

.login-with-google-1 {
    letter-spacing: 0;
    line-height: 21.7px;
    min-height: 12px;
    white-space: nowrap;
}

.login-eye-1 {
height:19px;
left: 455px;
position: absolute;
top: 555px;
width: 22px;
}

.login-title {
color: var(--black);
font-family: var(--font-family-poppins);
font-size: var(--font-size-xl);
font-weight: 500;
left: 494px;
letter-spacing: 0;
line-height: normal;
position: absolute;
top: 163px;
}

.login-rectangle-76 {
background-color: var(--flamingo);
height: 900px;
left: 0;
position: absolute;
top: 0;
width: 731px;
}

.login-line-1 {
left: 165px;
position: absolute;
top: 449px;
width: 740px;
}

.login-google-logo {
    height: 24px;
    left: 634px;
    position: absolute;
    top: 275px;
    width: 24px;
}

</style>
