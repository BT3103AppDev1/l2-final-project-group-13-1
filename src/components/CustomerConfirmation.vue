<template>
    <div class = "confirmation-details">
        <div class = "your-details">
            <div class = "rectangle-your-details">
                <label>
                <span class="poppins-bold-black-20px">Your Details<br></span>
                </label>
                <div class = "enter-name">
                    <span class="poppins-normal-black-20px">Name:<br></span>
                </div>
                <div class = "name-textbox">
                    <input type = "text" size = 20 placeholder="  amy">
                </div>
                 
                <div class = "enter-phone-number">
                    <span class="poppins-normal-black-20px">Phone Number:<br></span>
                    <div class = "phone-number-textbox">
                        <input type = "text" size = 20  placeholder="  98237486">
                    </div>
                </div>

                <div class = "enter-email-address">
                    <span class="poppins-normal-black-20px">Email Address:<br></span>
                    <div class = "email-address-textbox">
                        <input type = "text" size = 20  placeholder="  xxx@gmail.com">
                    </div>
                </div>

            </div>

        </div>

        <div class = "booking-details">
            <div class = 'rectangle-your-booking-details'>
                <span class="poppins-bold-black-17px">Here Are Your Booking Details:<br></span>
                <div class = "date-details">
                    <span class="poppins-bold-black-20px">Date:<br></span>
                    <div class = "the-date">
                        <span class="poppins-normal-black-20px">05 December 2023<br></span>
                    </div>
                </div>

                <div class = "time-details">
                    <span class="poppins-bold-black-20px">Time:<br></span>
                    <div class = "the-time">
                        <span class="poppins-normal-black-20px">10:00 - 11:00<br></span>
                    </div>
                </div>

                <div class = "room-type-details">
                    <span class="poppins-bold-black-20px">Room Type:<br></span>
                    <div class = "the-room-type">
                        <span class="poppins-normal-black-20px">Small Room<br></span>
                    </div>
                </div>

                <div class = "pax-details">
                    <span class="poppins-bold-black-20px">No. Of Pax<br></span>
                    <div class = "the-pax">
                        <span class="poppins-normal-black-20px">1<br></span>
                    </div>
                </div>

                <div class = "price-details">
                    <span class="poppins-bold-black-20px">Price Breakdown:<br></span>
                    <div class = "the-price">
                        <span class="poppins-normal-black-20px">Happy Hour Deal $13.00 w/GST<br></span>
                    </div>
                    <div class = "the-quantity">
                        <span class="poppins-normal-black-20px">x1<br></span>
                    </div>
                </div>

                <div class = "amount-to-pay">
                    <span class="poppins-bold-black-20px">Total Amount To Pay:<br></span>
                    <div class = "amount">
                        <span class="poppins-bold-black-20px">SGD$13.00<br></span>
                    </div>
                </div>
                
                <div class = "remarks">
                    <span class="poppins-bold-black-20px">Remarks:<br></span>
                    <div class = "remarks-textbox">
                        <input type = "text" style = "width:500px; height: 70px;"  placeholder="  Input Remarks If Any">
                    </div>
                </div>
            </div>
        </div>
        <div class="proceed-options">
            <button @click="redirectToPayment()" style="font-size:17px; color:white"> Proceed to Payment Method</button>
        </div>

        <div class= "back-options">
            <button style="font-size:17px;color:white;">Back</button>
        </div>
    </div>
</template>

<script>

import router from "@/router/router"

export default {
    data() {
        
    },

    methods : {
    redirectToPayment(){
    router.push({ path: '/customer-payment-page'})
    }
}
}

</script>


<style>

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

    .enter-name {
        margin-left: -800px;
        margin-top: 5px;
        height:0px;
    }

    .name-textbox {
        margin-left: -790px;
        margin-top: 40px;
        
    }
    
    .enter-phone-number {
        margin-left: 00px;
        margin-top: -75px;
        height:0px;
    }

    .phone-number-textbox {
        margin-left: 0px;
        margin-top: 8px;
    }

    .enter-email-address {
        margin-left: 790px;
        margin-top: 0px;
        height:0px;
    }

    .email-address-textbox {
        margin-left: 0px;
        margin-top: 8px;
    }

    .rectangle-your-booking-details {
        background-color: #F5F5F5;
        color:  black;
        font-family: Arial;
        border-radius:25px;
        padding: 10px 20px;
        height: 445px;
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
        margin-top: 20px;
        margin-left: -400px
    }

    .the-price {
        margin-top: -5px;
        margin-left: 125px
    }

    .the-quantity {
        margin-top: -35px;
        margin-left: 700px;
    }

    .amount-to-pay {
        margin-top: 10px;
        margin-left: -365px;
    }

    .amount {
        margin-top: -35px;
        margin-left: 700px
    }

    .remarks {
        margin-top: 15px;
        margin-left: -480px;
    }

    .remarks-textbox {
        margin-top: 5px;
        margin-left:  400px;
        vertical-align: top;
    }

    .proceed-options {
        margin-top: -70px;
        margin-bottom: 700px;
        margin-left: 150px;
        font-family:'Arial';
        color:white;
        width: 300px;
        background-color: orangered;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 17px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

    .back-options {
        margin-top: -747px;
        margin-bottom: -200px;
        margin-left: 650px;
        font-family:'Arial';
        color:white;
        width: 300px;
        background-color: orange;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 17px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
    }

</style>