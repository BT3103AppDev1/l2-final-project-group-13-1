<template>
    <div class="booking-system-available-room-types-container">
        <div class="booking-system-available-room-types-box">
        </div>
        
    </div>
    <span class="available-room-types">Available Room Types</span>


    <div class="small-room-container">
        <p class="room-container-text poppins-bold-black-20px">
            <span class="poppins-bold-black-20px">SMALL ROOM<br></span>
            <span class="poppins-normal-black-20px">Best for 4 Pax</span>
        </p>
        <p class="room-container-text-box poppins-bold-black-17px">
            <span class="poppins-bold-black-17px">Date: </span>
            <!-- Insert SelectedDate -->
            <span class="poppins-normal-black-17px">05 December 2023<br></span>
            <span class="poppins-bold-black-17px">Time: </span>
            <!-- Insert SelectedTime -->
            <span class="poppins-normal-black-17px">10:00 - 11.00<br></span>
            <span class="poppins-bold-black-17px">Hourly Rate: </span>
            <span class="poppins-normal-black-17px">Happy Hour $13.00 w/GST</span>
        </p>
        <div class="select-button-container">
            <!-- Change to Button -->
            <div class="select-button poppins-medium-white-16px">Choose</div>
        </div>
    </div>
    <div class="medium-room-container">
        <p class="room-container-text poppins-bold-black-20px">
            <span class="poppins-bold-black-20px">MEDIUM ROOM<br></span>
            <span class="poppins-normal-black-20px">Best for 6 pax</span>
        </p>
        <p class="room-container-text-box poppins-bold-black-17px">
            <span class="poppins-bold-black-17px">Date: </span>
            <!-- Insert SelectedDate -->
            <span class="poppins-normal-black-17px">05 December 2023<br></span>
            <span class="poppins-bold-black-17px">Time: </span>
            <!-- Insert SelectedTime -->
            <span class="poppins-normal-black-17px">10:00 - 11:00<br></span>
            <span class="poppins-bold-black-17px">Hourly Rate: </span>
            <span class="poppins-normal-black-17px">Happy Hour $15.00 w/GST</span>
        </p>
        <div class="select-button-container">
            <div class="select-button poppins-medium-white-16px">Choose</div>
        </div>
    </div>
    <div class="large-room-container">
        <p class="room-container-text poppins-bold-black-20px">
            <span class="poppins-bold-black-20px">LARGE ROOM<br></span>
            <span class="poppins-normal-black-20px">Best for 10 pax<br></span>
        </p>
        <p class="room-container-text-box poppins-bold-black-17px">
            <span class="poppins-bold-black-17px">Date: </span>
            <!-- Insert SelectedDate -->
            <span class="poppins-normal-black-17px">05 December 2023<br></span>
            <span class="poppins-bold-black-17px">Time: </span>
            <!-- Insert SelectedTime -->
            <span class="poppins-normal-black-17px">10:00 - 11:00<br></span>
            <span class="poppins-bold-black-17px">Hourly Rate: </span>
            <span class="poppins-normal-black-17px">Happy Hour $25.00 w/GST</span>
        </p>
        <div class="select-button-container">
            <div class="select-button poppins-medium-white-16px">Choose</div>
        </div>
    </div> 
</template>

<script>
    export default {
        name: "BookingSystemSearchResults",
    }
</script>

<style>
    .booking-system-available-room-types-container {
        height: 714px;
        margin-top: 34px;
        position: relative;
        width: 1440px;
    }

    .booking-system-available-room-types-box {
        background-color: var(--white);
        border-radius: 40px;
        box-shadow: 0px 4px 35px #00000014;
        height: 52px;
        left: 83px;
        position: absolute;
        top: 75px;
        width: 1267px;
    }

    .available-room-types {
        color: #34a853;
        font-family: var(--font-family-poppins);
        font-size: var(--font-size-xxl);
        font-weight: 700;
        left: 478px;
        letter-spacing: 0;
        line-height: 37.2px;
        position: absolute;
        text-align: center;
        top: 440px;
        white-space: nowrap;
        width: 484px;
    }

    .small-room-container {
        align-items: center;
        background-color: var(--white);
        border-radius: 40px;
        box-shadow: 0px 4px 35px #00000014;
        display: flex;
        flex-direction: column;
        left: 89px;
        min-height: 333px;
        padding: 33px 0;
        position: absolute;
        top: 510px;
        width: 406px;
    }

    .room-container-text {
        letter-spacing: 0;
        line-height: normal;
        min-height: 32px;
        text-align: center;
        width: 340px;
    }

    .room-container-text-box {
        letter-spacing: 0;
        line-height: normal;
        margin-top: 63px;
        min-height: 78px;
        text-align: center;
        width: 340px;
    }

    .select-button-container {
        align-items: flex-start;
        background-color: var(--flamingo);
        border-radius: 10px;
        box-shadow: 0px 4px 19px #7793414c;
        display: flex;
        height: 40px;
        margin-top: 54px;
        min-width: 340px;
        padding: 7px 126px;
    }

    .select-button {
        letter-spacing: 0;
        line-height: normal;
        min-height: 13px;
        text-align: center;
        width: 87px;
    }

    .medium-room-container {
        align-items: center;
        background-color: var(--white);
        border-radius: 40px;
        box-shadow: 0px 4px 35px #00000014;
        display: flex;
        flex-direction: column;
        left: 517px;
        min-height: 333px;
        padding: 33px 0;
        position: absolute;
        top: 510px;
        width: 406px;
    }

    .x-room-best-for {
        letter-spacing: 0;
        line-height: normal;
        margin-top: 12px;
        min-height: 32px;
        text-align: center;
        width: 340px;
    }

    .large-room-container {
        align-items: center;
        background-color: var(--white);
        border-radius: 40px;
        box-shadow: 0px 4px 35px #00000014;
        display: flex;
        flex-direction: column;
        left: 945px;
        min-height: 333px;
        padding: 33px 0;
        position: absolute;
        top: 510px;
        width: 406px;
    }

    .rectangle-5 {
        background-color: var(--white);
        height: 742px;
        margin-top: 3087px;
        width: 1440px;
    }

</style>
