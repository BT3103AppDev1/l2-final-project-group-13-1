<template>
    <div class="container-center-horizontal">
        <div class="topupwallet-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <work-in-prog/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
import WorkInProg from '../components/workInProg.vue';

    export default {
        name: "TopUpWalletPage",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            WorkInProg,
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

    .topupwallet-page {
        align-items: center;
        background-color: var(--white);
        border: 1px none;
        display: flex;
        flex-direction: column;
        height: 1276px;
        overflow: hidden;
        position: relative;
        width: 1440px;
        justify-content: space-between;
    }

</style>