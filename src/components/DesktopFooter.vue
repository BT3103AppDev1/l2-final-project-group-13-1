<template>
    <div class="desktop-footer">
        <div class="footer-container">
            <div class="footer-container-columns">
                <div class="footer-container-columns-1">
                    <span class="footer-container-columns-title-1 poppins-bold-white-25px">LOGO</span>
                    <span class="poppins-normal-white-16px"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>            
                    <span class="poppins-normal-white-16px">ktvteoheng.com</span>
                </div>
                <div class="footer-container-columns-2">
                    <span class="footer-container-columns-title-2 poppins-medium-white-17px">About us</span>
                    <span class="poppins-normal-white-16px" >Company</span>
                    <span class="poppins-normal-white-16px" >Portfolio</span>
                    <span class="poppins-normal-white-16px" >Careers</span>
                    <span class="poppins-normal-white-16px" >Contact us</span>
                </div>
                <div class="footer-container-columns-3">
                    <span class="footer-container-columns-title-3 poppins-medium-white-17px">Contact us</span>
                    <span class="poppins-normal-white-16px">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    <span class="poppins-normal-white-16px">6884 6266</span>
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
            <img src="../assets/line-1.svg" alt="Line 1" />
            <span class ="footer-container-copyright poppins-normal-white-13px">Copyright © 2021 Company All rights reserved</span>
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
    width: 100vw;
    bottom: 0;
    position: absolute;
    margin: 0;
    padding: 0;
}

.footer-container {
    min-height: 20%;
    position: relative;
    width: 100vw;
    background-color: var(--eerie-black);
    display: flex;
    flex-direction: column;
}

.footer-container-columns-title-1 {
    padding-bottom: 0%;
}

.footer-container-columns-title-2 {
    padding-bottom: 8%;
}

.footer-container-columns-title-3 {
    padding-bottom: 0%;
}

.footer-container-columns {
    justify-content: center;
    display:flex;
    flex-direction: row;
    min-height: 20%;
    position: relative;
    width: 100vw;
    padding: 3%;
}

.footer-container-columns-1 {
    align-items: flex-start;
    display: flex;
    min-height: 20%;
    justify-content: flex-start;
    flex-direction: column;
    width: 40%;
    text-align: start;
    word-wrap: break-word;
    padding-left: 5%;
    padding-right: 5%;
    gap: 10px;
}

.footer-container-columns-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    word-wrap: break-word;
    min-height: 20%;
    width: 10%;
    text-align: start;
    gap: 10px;
}

.footer-container-columns-3 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    word-wrap: break-word;
    min-height: 20%;
    width: 25%;
    text-align: start;
    gap: 20px;
    padding-left: 2%;
    padding-right: 2%;
}

.footer-container-logos {
    align-items: flex-end;
    justify-content: center;
    display: flex;
    gap: 16px;
    min-width: 25%;
    position: relative;
}

.icon {
    height: 13px;
    width: 13px;
}


.footer-container-copyright {
    align-content: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0;
    line-height: 24.8px;
    white-space: nowrap;
    padding: 1%;
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
