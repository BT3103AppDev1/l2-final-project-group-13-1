<template>
    <div class="small-room-container">
        <div class="room-container-text">
            <div class="room-type">
                <span class="poppins-bold-black-20px">{{ roomType }}</span>
                <span class="poppins-normal-black-20px">Best for {{ numPax }} pax</span>
            </div>
            <span> 
                <span class="poppins-bold-black-17px">Date: </span>
                <span class="poppins-normal-black-17px">{{ date }}</span>
            </span>
            <span>
                <span class="poppins-bold-black-17px">Time: </span>
                <span class="poppins-normal-black-17px">{{ time }}</span>
            </span>

            <span>
                <span class="poppins-bold-black-17px">Hourly Rate: </span>
                <span class="poppins-normal-black-17px">Happy Hour {{ rate }} w/GST</span>
            </span>
        </div>
        <div class="select-button-container">
            <!-- Add Function -->
            <button class="select-button poppins-medium-white-16px">Choose</button>
        </div>
        </div>
</template>

<script>
    export default {
        name: "BookingRoomCard",
        props: {
            roomType: {
                type: String,
                required: true,
            },
            numPax: {
                type: Number,
                required: true,
            },
            date: {
                type: String,
                required: true,
            },
            time: {
                type: String,
                required: true,
            },
            rate: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style>


    .small-room-container {
        /* align-content: center; */
        background-color: var(--white);
        border-radius: 40px;
        box-shadow: 0px 4px 35px #00000014;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 333px;
        width: 406px;
        align-items: center;
        position: relative;
    }

    .room-container-text {
        display: flex;
        flex-direction: column;
        letter-spacing: 0;
        line-height: normal;
        min-height: 32px;
        text-align: center;
        width: 340px;
        position: relative;

        /* position: relative; */
    }

    .room-type {
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        position: relative;

        /* margin-bottom: ; */
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
        position: relative;

        padding: 7px 126px;
    }

    .select-button {
        letter-spacing: 0;
        line-height: normal;
        min-height: 13px;
        text-align: center;
        width: 87px;
        position: relative;

    }

</style>