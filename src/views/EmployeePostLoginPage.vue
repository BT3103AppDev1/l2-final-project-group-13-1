<template>
    <div class="container-center-horizontal">
        <div class="postlogin-page">
            <desktop-header/>
            <desktop-header-welcome/>
            <employee-post-login/>
            <desktop-footer/>
        </div>
    </div>
</template>

<script>
import DesktopHeader from '../components/DesktopHeader.vue';
import DesktopHeaderWelcome from '../components/DesktopHeaderWelcome.vue';
import DesktopFooter from '../components/DesktopFooter.vue';
import EmployeePostLogin from '../components/EmployeePostLogin.vue';
    export default {
        name: "EmployeePostLoginPage",
        components: {
            DesktopHeader,
            DesktopHeaderWelcome,
            EmployeePostLogin,
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

    .postlogin-page {
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