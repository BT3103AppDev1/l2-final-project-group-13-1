<template>
    <!-- <div class="container-center-horizontal"> -->
        <!-- <div class="landing-page"> -->
            <!-- <desktop-header/> -->
            <!-- <desktop-header-welcome/> -->
            <log-in/>
            <!-- <desktop-footer/> -->
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
import LogIn from '../components/LogIn.vue';
    export default {
        name: "LandingPage",
        components: {
            //DesktopHeader,
            //DesktopHeaderWelcome,
            LogIn,
            //DesktopFooter,
        },
    }
</script>



<style>

    body {
        margin: 0;
        padding: 0;
        /* left: -35px; */
        /* position: absolute; */
    }

    .landing-page {
        align-items: center;
        background-color: var(--white);
        border: 1px none;
        display: flex;
        flex-direction: column;
        height: 1276px;
        overflow: hidden;
        position: relative;
        width: 1440px;
                
        /* max-width: 100vw;
        align-items: center;
        background-color: var(--white);
        border: 1px none;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        justify-content: space-between;
        position: relative;
        width: 100vw;
        height: 100vh;
        gap: 50px; */
    }

</style>