<template>
    <div class="desktop-header">
        <div class="nav-bar">
            <header class="header">
                <div class="nav-bar-container">
                    <div class="nav-bar-container-1">
                        <!-- Add Button -->
                        <button class="home poppins-normal-stratos-16px">Home</button>
                        <!-- Add Button -->
                        <button class="aboutUs poppins-normal-black-16px">About Us</button>
                        <!-- Add Button -->
                        <button class="pricing poppins-normal-black-16px">Pricing</button>
                        <!-- Add Button -->
                        <button class="faq poppins-normal-black-16px">FAQ</button>
                    </div>
                    <div class="nav-bar-container-2">
                        <!-- Add Button -->
                        <button class="online-booking poppins-normal-white-13px">Online Booking</button>
                    </div>
                    <div class="nav-bar-container-3">
                        <button class="contactUs poppins-normal-white-13px">Contact Us</button>
                    </div>
                </div>
            </header>
            <div class="notification-bar">
                <p class="notification-bar-left valign-text-middle poppins-bold-white-22px">
                    <span>
                        <span class="poppins-bold-flamingo-22px">Opening Soon @ </span>
                        <span class="poppins-normal-white-22px">CENTREPOINT</span>
                    </span>
                </p>
                <div class="notification-bar-right">
                    <div class="notification-bar-right-instagram">
                        <img class="icon-instagram" src="../assets/instagram-grey-svg.svg" alt="icon-instagram" />
                        <!-- Add button -->
                        <button class="instagram valign-text-middle poppins-normal-blaze-orange-22px">INSTAGRAM</button>
                    </div>
                    <div class="notification-bar-right-facebook">
                        <img class="facebook-greysvg" src="../assets/facebook-grey-svg.svg" alt="facebook-grey.svg" />
                        <button class="facebook valign-text-middle poppins-normal-blaze-orange-22px">FACEBOOK</button>
                    </div>
                </div>
            </div>
            <img class="nav-bar-logo" src="../assets/family-ktv-studio-png@2x.png" alt="Family-KTV-Studio.png" />
        </div>
    </div>

    <div class="welcome-message">
        <h1 class="welcome-message-1 poppins-bold-flamingo-36px">Welcome to TEOHENG KTV Online Booking System</h1>
        <p class="welcome-message-2 poppins-bold-black-24px">Book Your Room & Sing With Us Today!</p>
    </div>
</template>

<script>

    export default {
        name: "DesktopHeader",
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

    .desktop-header {
        align-items: flex-start;
        display:flex;
        height: 94px;
        margin-top: 24px;
        min-width: 1440px;
    }

    .nav-bar {
        height: 120px;
        margin-top: -26px;
        position: relative;
        width: 1440px;
    
    }

    .header {
        align-items: flex-end;
        background-color: var(--white);
        display: flex;
        flex-direction: row;
        gap: 20px;
        height: 70px;
        justify-content: flex-end;
        left: 0;
        min-width: 1440px;
        padding: 12.7px 26.2px;
        position: absolute;
        top: 50px;
        width: auto;
    }

    .nav-bar-container {
        height: 41px;
        position: relative;
        width: 618px;
    }

    .nav-bar-container-1 {
        align-items: flex-start;
        display: flex;
        height: 25px;
        left: -50px;
        min-width: 495px;
        position: absolute;
        top: 7px;
        letter-spacing: 0;
        line-height: normal;
        min-height: 24px;
        text-align: center;
        /* width: 130px; */
        gap: 50px;
    }

    .nav-bar-container-2 {
        align-items: flex-start;
        background-color: var(--flamingo);
        border-radius: 6px;
        display: flex;
        height: 41px;
        left: 486px;
        min-width: 132px;
        padding: 10px 17px;
        position: absolute;
        top: 0;
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
        display: flex;
        height: 41px;
        min-width: 132px;
        left: 340px;
        padding: 10.1px 27.4px;
        letter-spacing: 0;
        line-height: normal;
        min-height: 24px;
        text-align: center;
        width: 130px;
    }

    .notification-bar {
        align-items: flex-start;
        background-color: var(--black);
        display: flex;
        gap: 249px;
        height: 53px;
        left: 0;
        min-width: 1440px;
        padding: 10px 135px;
        position: absolute;
        top: 0;
    }

    .notification-bar-left {
        height: 31px;
        letter-spacing: 0;
        line-height: 33px;
        white-space: nowrap;
        width: 351px;
    }

    .notification-bar-right {
        align-items: flex-end;
        display: flex;
        height: 5px;
        justify-content: flex-end;
        margin-top: 7px;
        min-width: 570px;
    }

    .notification-bar-right-instagram {
        align-items: flex-start;
        display: flex;
        gap: 9px;
        height: 16px;
        margin-bottom: -15px;
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
        margin-top: -1px;
        min-width: 125px;
        text-align: right;
        white-space: nowrap;
    }

    .notification-bar-right-facebook {
        align-items: flex-start;
        display: flex;
        gap: 9px;
        height: 16px;
        justify-content: flex-end;
        margin-bottom: -15px;
        min-width: 160px;
        padding: 0 0.4px;
    }

    .facebook {
        height: 14px;
        letter-spacing: 0;
        line-height: 14px;
        margin-top: -1px;
        min-width: 116px;
        text-align: right;
        white-space: nowrap;
    }

    .nav-bar-logo {
        height: 54px;
        left: 86px;
        position: absolute;
        top: 59px;
        width: 180px;
    }

    .welcome-message {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-left: 4px;
        margin-top: 25px;
        min-height: 93px;
        width: 1128px;
    }

    .welcome-message-1 {
        letter-spacing: 0;
        line-height: 55.9px;
        margin-right: 4px;
        min-height: 56px;
        text-align: center;
        white-space: nowrap;
        width: 1124px;
    }

    .welcome-message-2 {
        letter-spacing: 0;
        line-height: 37.2px;
        margin-right: 4px;
        text-align: center;
        white-space: nowrap;
        width: 484px;
    }
    
</style>