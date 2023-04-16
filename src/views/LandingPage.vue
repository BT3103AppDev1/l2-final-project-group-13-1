<template>
    <div class="container-center-horizontal">
        <div class="landing-page">
            <landing-header/>
            <!-- <desktop-header-welcome/> -->
            <landing/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import LandingHeader from '../components/LandingHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
import Landing from '../components/Landing.vue';
    export default {
        name: "LandingPage",
        components: {
            LandingHeader,
            DesktopHeaderWelcome,
            Landing,
            DesktopFooter,
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
        max-width: 100vw;

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
        gap: 50px;
    }

</style>