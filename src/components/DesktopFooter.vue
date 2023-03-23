<template>
    <div class="desktop-footer">
        <div class="footer-container">
            <div class="footer-container-black-background"></div>
            <div class="footer-container-columns">
                <div class="footer-container-columns-1">
                    <div class="flex-col poppins-normal-white-16px">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <span class="footer-container-website">ktvteoheng.com</span>
                    </div>
                    <div class="footer-container-columns-2">
                        <span class="poppins-medium-white-17px">About us</span>
                        <span class="poppins-normal-white-16px" >Company<br>Portfolio<br>Careers<br>Contact us</span>
                    </div>
                <div class="footer-container-columns-3">
                    <span class="poppins-medium-white-17px">Contact us</span>
                    <p class="dummy-text poppins-normal-white-16px">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span class="footer-container-contact-number poppins-normal-white-16px">6884 6266</span>
                </div>
                <div class="footer-container-logos">
                    <div class="footer-logo">
                        <img class="icon" src="../assets/facebook-1.svg" alt="icon-facebook" />
                    </div>
                    <div class="footer-logo">
                        <img class="icon" src="../assets/instagram-1.svg" alt="icon-instagram" />
                    </div>
                    <div class="footer-logo">
                        <img class="icon" src="../assets/twitter-1.svg" alt="icon-twitter" />
                    </div>
                    <div class="footer-logo">
                        <img class="icon" src="../assets/linkedin-1.svg" alt="icon-linkedin" />
                    </div>
                </div>
            </div>
            <img class="footer-container-line" src="../assets/line-1.svg" alt="Line 1" />
            <p class="footer-container-copyright poppins-normal-white-13px">Copyright © 2021 Company All rights reserved</p>
        </div>
        <span class="logo poppins-bold-white-25px">LOGO</span>
    </div>
</div>

</template>

<script>

export default {
    name: "DesktopFooter",
};
</script>

<style>
.desktop-footer {
    align-items: flex-start;
    display:flex;
    margin-left: 0;
    /* margin-top: 438px; */
    min-width: 1440px;
    bottom: 0;
    position: absolute;
}

.footer-container {
    height: 376px;
    position: relative;
    width: 1442px;
}

.footer-container-black-background {
    background-color: var(--eerie-black);
    height: 376px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1440px;
}

.footer-container-columns {
    align-items: center;
    display:flex;
    flex-direction: column;
    left: 0;
    min-height: 268px;
    position: absolute;
    top: 79px;
    width: 1442px;
}

.footer-container-columns-1 {
    align-items: flex-end;
    display: flex;
    height: 161px;
    margin-right: 21px;
    min-width: 1219px;
}

.flex-col {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 9px;
    min-height: 106px;
    width: 372px;
}


.footer-container-website {
    letter-spacing: 0;
    line-height: normal;
    min-height: 23px;
    width: 196px;
}

.footer-container-columns-2 {
    align-items: flex-start;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 78px;
    min-height: 158px;
    width: 94px;
}

.footer-container-columns-3 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-left: 126px;
    min-height: 161px;
    width: 288px;
}

.dummy-text {
    letter-spacing: 0;
    line-height: normal;
    margin-top: 20px;
    min-height: 76px;
    width: 282px;
}

.footer-container-contact-number {
    letter-spacing: 0;
    line-height: normal;
    margin-top: 11px;
    min-height: 28px;
    width: 141px;
}

.footer-container-logos {
    align-items: flex-start;
    display: flex;
    gap: 16px;
    margin-bottom: 10px;
    margin-left: 77px;
    min-width: 184px;
    position: relative;
}

.icon {
    height: 13px;
    width: 13px;
}


.footer-container-line {
    height: 1px;
    margin-right: 2px;
    margin-top: 52px;
    width: 1440px;
}

.footer-container-copyright {
    letter-spacing: 0;
    line-height: 24.8px;
    margin-right: 3px;
    margin-top: 29px;
    min-height: 25px;
    min-width: 289px;
    white-space: nowrap;
}

.logo {
    left: 101px;
    letter-spacing: 0;
    line-height: 38.8px;
    position: absolute;
    top: 66px;
    white-space: nowrap;
}

.footer-logo {
    align-items: center;
    background-color: var(--white);
    border-radius: 17px;
    box-shadow: 0px 4px 14px #00000026;
    display: flex;
    height: 34px;
    min-width: 34px;
    padding: 0 11px;
}

</style>
