<template>
    <!-- <DesktopHeader/> -->
    <div class="landing">
        <div class="landing-overlap-group4">
            <img
                class ="vector-1"
                src="../assets/vector-1.svg"
                alt="Vector 1"
            /><img class="vector-3" src="../assets/vector-3.svg" alt ="vector 3"/><img
                class ="vector-4"
                src="../assets/vector-4.svg"
                alt="Vector 4"
            /><img class="polygon-1 polygon" src="../assets/polygon-1.svg" alt ="polygon 1"/><img
                class ="vector-3"
                src="../assets/vector-3.svg"
                alt="Vector 3"
            />
            <div class ="ellipse-1 ellipse"></div>
            <div class ="ellipse-2 ellipse"></div>
            <div class="landing-overlap-group1">
                <div class="landing-group-8">
                    <div class="landing-group-6">
                        <div class="landing-group-5">
                            <p class="welcome-to-TH">Welcome to TEOHENG KTV Online Booking System</p>
                            <h1 class="title">Book Your Room &amp; Sing With Us Today!</h1>
                        </div>
                        <p class="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt illum voluptas odio labore omnis quaerat inventore soluta vel aperiam deleniti.
                        </p>
                    </div>
                    <div class="landing-overlap-group">
                        <div class="book-now">Book Now</div>
                    </div>
                </div>
                <img class="jevi-web" src="../assets/jevi-web-studio-ar-vr-1.png" alt ="jevi"/>
            </div>
        </div>
    </div>
    <!-- <desktop-footer/> -->
</template>

<script>

    export default {
        name: "Landing",
    }
</script>


<style>
.landing {
    align-items: center;
    background-color: var(--white);
    border: 1px none;
    /* display: flex; */
    flex-direction: column;
    /* height: 1276px; */
    height:100vh;
    gap: 3130px;
    overflow: hidden;
    position: relative;
    width: 1440px;
    justify-content: space-evenly;
}

.landing-group-5{
    align-items: flex-start;
    display: flex;
    flex-direction: column; 
    gap: 17px;
    min-height: 282px;
    width: 531px;
}

.hidden {
    pointer-events: none;
    visibility: none;
}

.desc {
    color: var(--black);
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-m);
    font-weight: 500;
    letter-spacing: 0;
    line-height: 32px;
    min-height: 101px;
    width : 527px;

}

.booking-overlap-group4{
    height: 1252px;
    margin-top: 24px;
    position: relative;
    width: 1440px;
}

.vector-3 {
    height: 266px;
    left: 392px;
    position: absolute;
    top: 78px;
    width: 1048px;
    margin-top: 0%;
}

.booking .polygon {
    height: 13px;
    position: absolute;
    width: 13px;
}

.polygon-3{
    left: 1165px;
    top: 743px;
}

.booking .ellipse {
    border-radius: 4.5px;
    height: 9px;
    position: absolute;
    width: 9px;
}

.ellipse-1{
    background-color: #ffd5d5;
    left: 581px;
    top: 256px;
}

.polygon-1 {
    left:92px;
    top: 530px;
}

.landing-overlap-group1{
    height: 590px;
    left: 135px;
    position: absolute;
    top: 150px;
    width: 1190px;
}

.landing-group-8{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 50px;
    left: 0;
    min-height: 512px;
    position: absolute;
    top: 26px;
    width: 527px;
}

.landing-group-6 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 26px;
    min-height: 409px;
    width:529px;
}

.landing-group-5 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 17px;
    min-height: 282px;
    width:531px;
}

.welcome-to-TH{
    color: var(--flamingo);
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-m);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 31px;
    white-space: nowrap;
}

.title {
    color: var(--black);
    font-family: var(--font-family-poppins);
    font-size:xxx-large;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 77.6px;
    min-height: 234px;
    width : 480px;
}

.landing-overlap-group {
    align-items: flex-end;
    background-color: var(--flamingo);
    border-radius: 40px;
    display: flex;
    height: 53px;
    min-width: 195px;
    padding: 14px 58px;
}

.book-now {
    color: var(--white);
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-m);
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    min-height: 24px;
    min-width : 79px;
}

.jevi-web {
    height: 590px;
    left: 515px;
    object-fit: cover;
    position:absolute;
    top:0;
    width: 675px;
}

.vector-1 {
    height: 546px;
    left:2px;
    position:absolute;
    top:330px;
    width: 1439px;
}

.polygon-2 {
    left:882px;
    top:300px;
}

.vector-2{
    height: 470px;
    left:398px;
    position:absolute;
    top:406px;
    width: 1042px;
}

.vector-4 {
    height: 257px;
    left:0;
    position:absolute;
    top:620px;
    width: 567px;
}

.vector-3 {
    height: 266px;
    left:392px;
    position:absolute;
    top:78px;
    width: 1048px;
}

</style>