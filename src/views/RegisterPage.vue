<template>
    <div class="container-center-horizontal">
        <div class="landing-page">
            <register/>
        </div>
    </div>
</template>

<script>
import Register from '../components/Register.vue';
    export default {
        name: "RegisterPage",
        components: {
            Register,
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
    }

</style>