<template>
    <div class = "confirmation-details">
        <div class = "your-details">
            <div class = "rectangle-your-details">
                <label>
                <span class="poppins-bold-black-24px">Your Details<br></span>
                </label>
                <div class = "name-phonenumber-email-fields">
                    <div class ="name" style="margin-left: 200px;">
                        <span class="poppins-normal-black-20px">Name:<br></span>
                        <input type = "text" v-model="name" placeholder="  Name">
                    </div>
                    <div class ="phonenumber" style="margin-left: 100px;">
                        <span class="poppins-normal-black-20px">Phone Number:<br></span>
                        <input type = "text"  v-model="phoneNumber" placeholder="  Phone Number">
                    </div>
                    <div class ="email" style="margin-left: 100px;">
                        <span class="poppins-normal-black-20px">Email Address:<br></span>
                        <input type = "text" v-model="email" placeholder="  xxx@gmail.com">
                    </div>
                </div>
            </div>
        </div>

        <div class = "booking-details">
            <div class = 'rectangle-your-booking-details'>
                <span class="poppins-bold-black-24px">Here Are Your Booking Details:<br></span>
                <div class = "date-details">
                    <span class="poppins-bold-black-20px">Date:<br></span>
                    <div class = "the-date">
                        <span style="color: black;" class="poppins-normal-black-20px">{{ formattedDate }}<br></span>
                    </div>
                </div>

                <div class = "time-details">
                    <span class="poppins-bold-black-20px">Time:<br></span>
                    <div class = "the-time">
                        <span class="poppins-normal-black-20px">{{ timeRange }}<br></span>
                    </div>
                </div>

                <div class = "room-type-details">
                    <span class="poppins-bold-black-20px">Room Type:<br></span>
                    <div class = "the-room-type">
                        <span class="poppins-normal-black-20px">{{ selectedRoomType }}<br></span>
                    </div>
                </div>

                <div class = "pax-details">
                    <span class="poppins-bold-black-20px">No. Of Pax<br></span>
                    <div class = "the-pax">
                        <span class="poppins-normal-black-20px">{{ noOfPax }}<br></span>
                    </div>
                </div>

                <div class = "price-details">
                    <span class="poppins-bold-black-20px">Price Breakdown:<br></span>
                    <div class = "the-price">
                        <span class="poppins-normal-black-20px">{{ formattedPrice }}<br></span>
                    </div>
                    <div class = "the-quantity">
                        <span class="poppins-normal-black-20px">x{{ duration }}<br></span>
                    </div>
                </div>

                <div class = "amount-to-pay">
                    <span class="poppins-bold-black-20px">Total Amount To Pay:<br></span>
                    <div class = "amount">
                        <span class="poppins-bold-black-20px">SGD${{ totalPrice.toFixed(2) }}<br></span>
                    </div>
                </div>
                
                <div class = "remarks">
                    <span class="poppins-bold-black-20px">Remarks:<br></span>
                    <div class = "remarks-textbox">
                        <input type = "text" style = "width:500px; height: 70px;"  v-model="remarks" placeholder="  Input Remarks If Any">
                    </div>
                </div>
                <div class="flex-container">
            </div>
            <div class="proceed-options">
                    <button class="poppins-medium-white-16px" @click="redirectToPayment()" style="color:white"> Proceed to Payment Method</button>
                </div>

                <div class= "back-options ">
                    <button class="poppins-medium-black-16px" @click="goBack" style="background-color: lightgray; color: black">Back</button>
                </div>
            </div>
    
        </div>        
    </div>
    
</template>


<script>

import router from "@/router/router"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc } from "firebase/firestore";
import { collection, addDoc, updateDoc, getDocs, doc} from "firebase/firestore";
import firebaseApp from "@/firebase.js";

export default {
    data() {
        return {
            name: '',
            phoneNumber: '',
            email: '',
            remarks:''
        }
        
    },
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
    
        
    async created() {
    const db = getFirestore(firebaseApp);
    const selectedDuration = sessionStorage.getItem('duration');
    const selectedDateTime = sessionStorage.getItem('dateTime');
    const userData = {};
    this.selectedDuration = selectedDuration;
    this.selectedDateTime = selectedDateTime;
    this.date = sessionStorage.getItem('date') || '';
    this.price = sessionStorage.getItem('price') || 0;
    this.duration = parseFloat(sessionStorage.getItem('duration')) || 0;
    this.startTime = sessionStorage.getItem('startTime') || '';
    this.endTime = sessionStorage.getItem('endTime') || '';
    this.selectedRoomType = sessionStorage.getItem('selectedRoomType') || '';
    this.noOfPax = parseFloat(sessionStorage.getItem('noOfPax')) || 0;
    this.location = parseFloat(sessionStorage.getItem('location')) || 0;
    this.location = sessionStorage.getItem('location') || '';

    
    const currentUser = await this.getCurrentUser(getAuth(firebaseApp));
    const userDocRef = doc(db, 'User', currentUser.uid);
    try {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
        // Set the wallet balance in your component data
        this.userData = docSnap.data();
        console.log(this.userData);
        } else {
        console.log('No such document');
        }
    } catch (error) {
        console.error('Error getting document:', error);
    }
    
    this.name = sessionStorage.getItem('name') || this.userData.name ;
    this.phoneNumber = sessionStorage.getItem('phoneNumber') || this.userData.phoneNumber;
    this.email = sessionStorage.getItem('email') || this.userData.email
  },
  
  watch: {
    name(newValue) {
      sessionStorage.setItem('name', newValue);
    },
    phoneNumber(newValue) {
      sessionStorage.setItem('phoneNumber', newValue);
    },
    email(newValue){
        sessionStorage.setItem('email', newValue);
    },
    remarks(newValue){
        sessionStorage.setItem('remarks', newValue);
    },
},

    methods : {
        async getCurrentUser(auth) {
            return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                resolve(user);
            }, reject);
            });
        },
    redirectToPayment(){
    router.push({ path: '/customer-payment-page'})
    },
    
    goBack() {
        this.$router.go(-1);
    }
    },
    
    computed: {
    totalPrice() {
        const totalPrice = this.price * this.duration
        sessionStorage.setItem('totalPrice', Number(totalPrice))
        return totalPrice;
    },

    formattedDate() {
    const date = this.date;
    return new Date(date).toLocaleDateString("en-SG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    },

    formattedPrice() {
        if (this.price == 13 || this.price == 15 || this.price == 17) {
            return `Happy Hour $${parseFloat(this.price).toFixed(2)} w/GST`;
        } else if (this.price == 19 || this.price == 22 || this.price == 25) {
            return `Peak Hour $${parseFloat(this.price).toFixed(2)} w/GST`;
        }
    },

    timeRange() {
        if (this.selectedDateTime && this.selectedDuration) {
            const startDateTime = new Date(this.selectedDateTime);
            const endDateTime = new Date(startDateTime);
            endDateTime.setHours(endDateTime.getHours() + parseInt(this.selectedDuration));
            
            const options = {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                };
            
            const startTime = startDateTime.toLocaleString("en-UK", options);
            const endTime = endDateTime.toLocaleString("en-UK", options);

            const formatTime = (timeString) => {
                let [hour, minute] = timeString.split(':');
                hour = parseInt(hour, 10);
                const ampm = hour >= 12 ? 'PM' : 'AM';
                hour = hour % 12;
                hour = hour || 12; // the hour '0' should be '12'
                return `${hour}:${minute} ${ampm}`;
            };

            const formattedStartTime = formatTime(startTime);
            const formattedEndTime = formatTime(endTime);

            return `${formattedStartTime} - ${formattedEndTime}`;
            }
        },
    },
}

</script>


<style scoped>

    .your-details{
        margin-top:20px;
    }

    .rectangle-your-details {
        background-color: #F5F5F5;
        color:  black;
        font-family: Arial;
        border-radius:25px;
        padding: 10px 20px;
        height: 150px;
        width: 1100px;
        margin-top: 20px;
        margin-left: 0px;
        font-size: 17px;
        text-align:center;
        
    }

    textarea, input {
        border-radius: 10px;
        height: 35px;
    }

    .name-phonenumber-email-fields {
        display: flex;
    }

    .rectangle-your-booking-details {
        background-color: #F5F5F5;
        color:  black;
        font-family: Arial;
        border-radius:25px;
        padding: 10px 20px;
        height: 500px;
        width: 1100px;
        margin-top: 15px;
        margin-left: 0px;
        font-size: 17px;
        text-align:center;
        
    }

    .date-details {
        margin-top:20px;
        margin-left:-750px;
    }

    .time-details {
        margin-top: -65px;
        margin-left: -225px;
    }

    .room-type-details {
        margin-top : -65px;
        margin-left : 300px
    }

    .pax-details {
        margin-top:-65px;
        margin-left: 800px;
    }

    .price-details {
        margin-top: 30px;
        margin-left: -400px
    }

    .the-price {
        margin-top: -5px;
        margin-left: 73px
    }

    .the-quantity {
        margin-top: -35px;
        margin-left: 700px;
    }

    .amount-to-pay {
        margin-top: 20px;
        margin-left: -365px;
    }

    .amount {
        margin-top: -30px;
        margin-left: 700px
    }

    .remarks {
        margin-top: 25px;
        margin-left: -480px;
    }

    .remarks-textbox {
        margin-top: 5px;
        margin-left:  400px;
        vertical-align: top;
    }

    .flex-container {
        display: flex;
        margin-left: 150px;
        gap: 150px;
        margin-top: -50px;
    }

    .proceed-options {
        color:white;
        width: 300px;
        background-color: var(--flamingo);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 17px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        margin: 70px 0px 0px 0px;
        justify-content: center;
        display: flex;
        margin-left:130px;
    }

    .back-options {
        /* color:white; */
        width: 300px;
        /* background-color: #f5997b; */
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: var(--font-size-m);
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        margin: 70px 0px 0px 0px;
        display: flex;
        justify-content: center;
        margin-top:-40px;
        margin-left: 550px;
        height:40px;
        background-color: lightgray;
        color: black;
        font-family: var(--font-family-poppins);
    }

</style>