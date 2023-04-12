<template>
    <div class="desktop-footer">
        <div class="footer-container">
            <div class="footer-container-columns">
                <div class="footer-container-columns-1">
                    <span class="footer-container-columns-title-1 poppins-bold-white-25px">TEOHENG KTV</span>
                    <a href="https://search.google.com/local/writereview?placeid=ChIJ07sR5K4Z2jERlYHI061H4Bc" target="_blank" class="vc_single_image-wrapper 
                    vc_box_border_grey"><img width="372" height="116" src="https://ktvteoheng.com.sg/wp-content/uploads/2022/04/google-review.png" class="vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy" 
                    title="google-review" srcset="https://ktvteoheng.com.sg/wp-content/uploads/2022/04/google-review.png 372w, https://ktvteoheng.com.sg/wp-content/uploads/2022/04/google-review-300x94.png 300w" 
                    sizes="(max-width: 372px) 100vw, 372px"></a>
                    <!-- <img width="372" height="116" src="https://ktvteoheng.com.sg/wp-content/uploads/2022/04/google-review.png" class="vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy" title="google-review" srcset="https://ktvteoheng.com.sg/wp-content/uploads/2022/04/google-review.png 372w, https://ktvteoheng.com.sg/wp-content/uploads/2022/04/google-review-300x94.png 300w" sizes="(max-width: 372px) 100vw, 372px"> -->
                    <a href="https://ktvteoheng.com.sg/" target="_blank" class="poppins-normal-white-16px">ktvteoheng.com</a>
                </div>
                <div class="footer-container-columns-2">
                    <a href="https://ktvteoheng.com.sg/" target="_blank" class="footer-container-columns-title-2 poppins-medium-white-17px">About us</a>
                    <a href="https://ktvteoheng.com.sg/" target="_blank" class="poppins-normal-white-16px" >Company</a>
                    <a href="https://ktvteoheng.com.sg/" target="_blank" class="poppins-normal-white-16px" >Portfolio</a>
                    <a href="https://ktvteoheng.com.sg/" target="_blank" class="poppins-normal-white-16px" >Careers</a>
                    <a href="https://ktvteoheng.com.sg/ktv-outlets/" target="_blank" class="poppins-normal-white-16px" >Contact us</a>
                </div>
                <div class="footer-container-columns-3">
                    <span class="footer-container-columns-title-3 poppins-medium-white-17px">Contact us</span>
                    <span class="poppins-normal-white-16px">Come visit our new branch at The CentrePoint!</span>
                    <a href="tel:+6563342883" class="poppins-normal-white-16px">6334 2883</a>
                </div>
                <div class="footer-container-logos">
                    <a href="https://www.facebook.com/teohengofficial/" target="_blank" class="footer-logo">
                        <img class="icon" src="../assets/facebook-1.svg" alt="icon-facebook" />
                    </a>
                    <a href="https://www.instagram.com/teohengofficial/?hl=en" target="_blank" class="footer-logo">
                        <img class="icon" src="../assets/instagram-1.svg" alt="icon-instagram" />
                    </a>

                    <!-- They dont have twitter -->
                    <a href="" class="footer-logo">
                        <img class="icon" src="../assets/twitter-1.svg" alt="icon-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/company/teo-heng-ktv-studio/about/" target="_blank" class="footer-logo">
                        <img class="icon" src="../assets/linkedin-1.svg" alt="icon-linkedin" />
                    </a>
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

    /* bottom: 0; */
    /* top: 0; */
    position: relative;
    margin: 0;
    padding: 0;
    /* display: flex; */
    /* flex-direction: column; */
    width:100%;
    /* max-width:1440px; */
    /* left: 0; */
    margin-left: auto;
    min-width:500px;
}

.footer-container {
    min-height: 20%;
    position: relative;
    background-color: var(--eerie-black);
    display: flex;
    flex-direction: column;
    width:100%;
    /* left: 0; */


}

.footer-container-columns-title-1 {
    padding-bottom: 0%;
}

.footer-container-columns-title-2 {
    padding-bottom: 8%;
    padding-right:8%;
}

.footer-container-columns-title-3 {
    padding-bottom: 0%;
}

.footer-container-columns {
    /* justify-content: center; */
    left: 0;
    display:flex;
    flex-direction: row;
    min-height: 20%;
    position: relative;
    width: 100%;
    padding: 3%;
    /* min-width: 1440px; */
    justify-content: flex-start;

}

.footer-container-columns-1 {
    align-items: flex-start;
    display: flex;
    min-height: 20%;
    justify-content: flex-start;
    flex-direction: column;
    width: 30%;
    text-align: start;
    word-wrap: break-word;
    padding-left: 5%;
    padding-right: 5%;
    gap: 10px;
    /* min-width:400px; */
}

.footer-container-columns-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    word-wrap: break-word;
    min-height: 20%;
    width: 30%;
    text-align: start;
    gap: 10px;
    margin-left:100px;
    /* min-width:144px; */
}

.footer-container-columns-3 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    word-wrap: break-word;
    min-height: 20%;
    width:40%;
    text-align: start;
    gap: 20px;
    padding-left: 2%;
    padding-right: 2%;
    /* min-width: 200px;  */
}

.footer-container-logos {
    align-items: flex-end;
    justify-content: center;
    display: flex;
    gap: 16px;
    min-width: 25%;
    position: relative;
    min-width: 360px;
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
@media screen and (max-width: 767px) and (max-height:1280px) {

.desktop-footer {
  position: static;
  margin: 0 auto;
  min-width: 0;
}

.footer-container-columns {
  flex-direction: column;
  padding: 3% 5%;
}

.footer-container-columns-1,
.footer-container-columns-2,
.footer-container-columns-3 {
  width: 100%;
  text-align: center;
  padding: 5% 0;
  gap: 5%;
}

.footer-container-logos {
  justify-content: space-around;
  min-width: 100%;
  gap: 8%;
  margin-bottom: 5%;
}

}




</style>

