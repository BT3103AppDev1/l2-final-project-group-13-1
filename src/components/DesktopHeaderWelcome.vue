<template>
    <div class="welcome-message">
        <h1 class="welcome-message-1 poppins-bold-flamingo-36px">Welcome to TEOHENG KTV Online Booking System</h1>
        <p class="welcome-message-2 poppins-bold-black-24px">Book Your Room & Sing With Us Today!</p>
    </div>
</template>

<script>

    export default {
        name: "DesktopHeaderWelcome",
    }
</script>

<style>

    .welcome-message {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* margin-left: 4px; */
        /* margin-top: 25px; */
        /* min-height: 93px; */
        width: 100vw;
    }

    .welcome-message-1 {
        letter-spacing: 0;
        line-height: 55.9px;
        /* margin-right: 4px; */
        min-height: 56px;
        text-align: center;
        white-space: nowrap;
        width: 100vw;
    }

    .welcome-message-2 {
        letter-spacing: 0;
        line-height: 37.2px;
        /* margin-right: 4px; */
        text-align: center;
        white-space: nowrap;
        width: 100vw;
    }
    
</style>