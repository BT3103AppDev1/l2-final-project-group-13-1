<template>
    <div class="post-login">
        <div class="rectangle-previous-booking">
            <span class="poppins-bold-black-10px"><br></span>
            <p>Made a booking previously?</p>
            <span class="poppins-bold-black-20px"><br></span>
            <p>Click below to check or edit your existing booking</p>
            <div class= "check-existing-bookings">
                <button @click="navigateToNewBookingPage" style="font-size:17px;color:white;">Check Existing Booking</button> 
            </div>
            
        </div>
        
        

        <div class="rectangle-new-booking">
            <span class="poppins-bold-black-10px"><br></span>
            <p>Want to make a new booking?</p>
            <span class="poppins-bold-black-20px"><br></span>
            <p>Click below to make a new booking today</p>
            <div class = "make-new-booking"> 
                <button @click="navigateToNewBookingPage" style="font-size:17px;color:white;">Make New Booking</button> 
            </div>
        </div>
        <div class="rectangle-profile-wallet">
            <span class="poppins-bold-black-10px"><br></span>
            <p>Want to check your profile and TEOHENG wallet balance?</p>
            <span class="poppins-bold-black-10px"><br></span>
            <p>Click below to view!</p>
            <div class = "view-profile">
                <button @click="navigateToProfilePage" height:100px style="font-size:17px;color:white;">View Profile</button> 
            </div>
        </div>
    </div>
</template>

<script> 

export default {
    name: "CustomerPostLogin",
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
        background-color: #F5F5F5;
        color:  black;
        font-family: Arial;
        border-radius:50px;
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
        background-color: #F5F5F5;
        font-family: Arial;
        color: black;
        padding: 10px 20px;
        height: 300px;
        width: 350px;
        margin-left: 50px;
        margin-top: 25px;
        font-size:17px;
        border-radius:50px;
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
        background-color: #F5F5F5;
        font-family:Arial;
        color: black;
        text-align:center;
        padding: 10px 20px;
        height: 300px;
        width: 350px;
        margin-left:50px;
        margin-top:25px;
        font-size:17px;
        border-radius:50px;
        
    }

    .view-profile {
        margin-top: 60px;
        margin-bottom:700px;
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