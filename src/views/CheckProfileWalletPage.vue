<template>
    <div class="container-center-horizontal">
        <div class="edit-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <check-profile-and-wallet/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
import CheckProfileAndWallet from '../components/CustomerCheckProfileWallet.vue';
    export default {
        name: "CheckProfileAndWalletPage",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            CheckProfileAndWallet,
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

    .edit-page {
        align-items: center;
        background-color: var(--white);
        border: 1px none;
        display: flex;
        flex-direction: column;
        height: 1276px;
        overflow: hidden;
        position: relative;
        width: 1440px;
    }

</style>