<template>
    <div class="desktop-header">
        <div class="nav-bar">
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
            <header class="header">
                <img class="nav-bar-logo" src="../assets/family-ktv-studio-png@2x.png" alt="Family-KTV-Studio.png" />
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
                        <button @click="$router.push('LogIn')">Book Now</button>
                    </div>
                    <div class="nav-bar-container-3">
                        <button class="contactUs poppins-normal-white-13px">Contact Us</button>
                    </div>
                </div>
            </header>
        </div>
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
        display: flex;
        height: 41px;
        min-width: 132px;
        /* left: 340px; */
        position: relative;
        padding: 10.1px 27.4px;
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