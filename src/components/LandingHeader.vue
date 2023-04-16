<template>
    <div class="desktop-header">
        <div class="nav-bar">
            <div class="notification-bar">
                <p class="notification-bar-left valign-text-middle poppins-bold-white-22px">
                    <span>
                        <a href="https://ktvteoheng.com.sg/centrepoint/" target="_blank"  class="poppins-bold-flamingo-22px">NOW OPEN @ </a>
                        <a href="https://ktvteoheng.com.sg/centrepoint/" target="_blank" class="poppins-normal-white-22px">CENTREPOINT</a>
                    </span>
                </p>
                <div class="notification-bar-right">
                    <div class="notification-bar-right-instagram">
                        <img class="icon-instagram" src="../assets/instagram-grey-svg.svg" alt="icon-instagram" />
                        <a href="https://www.instagram.com/teohengofficial/?hl=en" target="_blank" class="instagram valign-text-middle poppins-normal-blaze-orange-22px">INSTAGRAM</a>
                    </div>
                    <div class="notification-bar-right-facebook">
                        <img class="facebook-greysvg" src="../assets/facebook-grey-svg.svg" alt="facebook-grey.svg" />
                        <a href="https://www.facebook.com/teohengofficial/" target="_blank" class="facebook valign-text-middle poppins-normal-blaze-orange-22px">FACEBOOK</a>
                    </div>
                </div>
            </div>
            <header class="header">
                <img class="nav-bar-logo" src="../assets/family-ktv-studio-png@2x.png" alt="Family-KTV-Studio.png" style="cursor:pointer;" @click="navigateToHomeByUser"/>
                <div class="nav-bar-container">
                    <div class="nav-bar-container-1">
                        <!-- Add Button -->
                        <button class="home poppins-normal-stratos-16px" @click="navigateToHome">Home</button>
                        <!-- Add Button -->
                        <a href="https://ktvteoheng.com.sg/" target="_blank" class="aboutUs poppins-normal-black-16px" style="background-color: transparent;">About Us</a>
                        <!-- Add Button -->
                        <a href="https://ktvteoheng.com.sg/booking/" target="_blank" class="pricing poppins-normal-black-16px" style="background-color: transparent;">Pricing</a>
                        <!-- Add Button -->
                        <a href="https://ktvteoheng.com.sg/ktv-booking/" target="_blank" class="faq poppins-normal-black-16px" style="background-color: transparent;">FAQ</a>
                        <!-- Add Button -->
                        <a href="https://ktvteoheng.com.sg/ktv-outlets/" target="_blank" class="poppins-normal-black-16px" style="color:black;background-color: transparent;">Contact Us</a>
                    </div>
                    <div class="nav-bar-container-2">
                        <button class="poppins-normal-white-13px" @click="navigateToHomeByUser">Book Now</button>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import firebaseApp from "@/firebase.js";
import { collection,  query, where, getFirestore, getDocs} from "firebase/firestore";

    export default {
        name: "LandingHeader",
        data() {
            return { user: false, useremail: '' }
        },
        mounted() {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
                this.useremail = user.email
            }
        })
        },
        methods: {
            navigateToHome() {
                this.$router.push("/");
            },
            navigateToHomeByUser() {    
                const db = getFirestore(firebaseApp);
                const employeeRef = collection(db, "Employees");
                // const customerRef = collection(db, "User");

                const email = this.useremail;

                const queryEmployee = query(employeeRef, where('email', '==', email))
                //Might change based on collection name changes
                // const queryCustomer = query(customerRef, where('email', '==', email))

                if (this.useremail == "") {
                    this.$router.push("/");
                }

               getDocs(queryEmployee)
                .then((QuerySnapshot) => {
                    if (QuerySnapshot.docs.length === 1) {
                        this.$router.push("/employee-home");
                    } else {
                        // getDocs(queryEmployee)
                            // .then((QuerySnapshot) => {
                                // if (QuerySnapshot.docs.length === 1) {
                        this.$router.push("/customer-home");
                    }
                })
            },
        }
    }
</script>

<style> 

    button {
        background-color: transparent;
        background-repeat: no-repeat;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        font-size: inherit;
        font-family: inherit;
    }

    .nav-bar {
        /* height: 120px; */
        /* margin-top: -26px; */
        position: relative;
        width:100%;
        height: 10%;
        display: flex;
        flex-direction: column;
        /* align-items: flex-start; */
    }
    

    .header {
        align-items: center;
        background-color: var(--white);
        display: flex;
        flex-direction: row;
        gap: 0px;
        /* height: 70px; */
        /* height: 5%; */
        left: 0;
        /* min-width: 1440px; */
        
        padding: 12.7px 26.2px;
        /* position: absolute; */
        position: relative;
        /* top: 50px; */
        /* width: auto; */
        width:100%;
    }

    .nav-bar-container {
        /* height: 41px; */
        position: relative;
        /* width: 618px; */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin-left: auto;
        gap: 2%;
        width:100%;

    }

    .nav-bar-container-1 {
        align-items: center;
        display: flex;
        height: 25px;
        /* left: -50px; */
        min-width: 400px;
        position: relative;
        /* top: 7px; */
        letter-spacing: 0;
        line-height: normal;
        min-height: 24px;
        text-align: center;
        /* width: 130px; */
        gap: 50px;
        color:black;
    }

    .nav-bar-container-2 {
        justify-content: center;
        align-items: center;
        background-color: var(--flamingo);
        border-radius: 6px;
        display: flex;
        height: 41px;
        /* left: 486px; */
        min-width: 132px;
        padding: 10px 17px;
        position: relative;
        /* top: 0; */
        letter-spacing: 0;
        line-height: normal;
        min-height: 24px;
        text-align: center;
        width: 130px;
        
    }

    .nav-bar-container-3 {
        align-items: flex-start;
        background-color: var(--flamingo);
        border-radius: 6px;
        /* display: flex; */
        height: 41px;
        min-width: 132px;
        /* left: 340px; */
        position: relative;
        padding: 8px 27.4px;
        letter-spacing: 0;
        line-height: normal;
        min-height: 24px;
        text-align: center;
        /* width: 130px; */
        
    }

    .notification-bar {
        /* align-items: flex-start; */
        background-color: var(--black);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 249px;
        height: 53px;
        /* left: 0; */
        width: 100vw;
        min-width: 1440px;
        padding: 10px 135px;
        /* position:absolute; */
        position: relative;
        top: 0;
        width:100%;
    }

    .notification-bar-left {
        margin-right: auto;
        align-content: center;
        justify-content: flex-start;
        display: flex;
        flex-direction: row;
        height: 31px;
        letter-spacing: 0;
        line-height: 33px;
        white-space: nowrap;
        /* width: 351px; */
        position: relative;
        width:100%;
    }

    .notification-bar-right {
        margin-left: auto;
        align-items: center;
        justify-content: flex-end;
        flex-direction: row;
        display: flex;
        height: 31px;
        /* margin-top: 7px; */
        /* min-width: 570px; */
        position: relative;
        width:100%;

    }

    .notification-bar-right-instagram {
        align-items: center;
        display: flex;
        gap: 9px;
        height: 16px;
        /* margin-bottom: -15px; */
        min-width: 150px
    }

    .icon-instagram, 
    .facebook-greysvg {
        align-self: center;
        height: 15px;
        width: 15px;
    }

    .instagram {
        height: 14px;
        letter-spacing: 0;
        line-height: 14px;
        /* margin-top: -1px; */
        min-width: 125px;
        text-align: right;
        white-space: nowrap;
        min-height: 16px;
    }

    .notification-bar-right-facebook {
        align-items: center;
        display: flex;
        gap: 9px;
        height: 16px;
        justify-content: flex-end;
        /* margin-bottom: -15px; */
        min-width: 160px;
        padding: 0 0.4px;
    }

    .facebook {
        height: 14px;
        letter-spacing: 0;
        line-height: 14px;
        /* margin-top: -1px; */
        min-width: 116px;
        text-align: right;
        white-space: nowrap;
        min-height: 16px;
    }

    .nav-bar-logo {
        height: 54px;
        left: 5%;
        
        /* left: 86px; */
        position: relative;
        /* top: 59px; */
        width: 180px;
    }

</style>