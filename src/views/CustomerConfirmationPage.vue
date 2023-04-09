<template>
    <div class="container-center-horizontal">
        <div class="customer-confirmation-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <customer-confirmation/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
import CustomerConfirmation from '../components/CustomerConfirmation.vue';
    export default {
        name: "CustomerConfirmationPage",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            CustomerConfirmation,
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

    .customer-confirmation-page {
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