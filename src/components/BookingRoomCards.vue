<template>
    <div class="cards">
        <booking-room-card v-for="(card, index) in uniqueRoomTypes" :key="index" 
        :room-type="card"
        />
    </div>
</template>

<script>
    import BookingRoomCard from './BookingRoomCard.vue';
    export default {
        name: "BookingRoomCards",
        components: {
            BookingRoomCard,
        },
        props: {
            uniqueRoomTypes: {
                type: Array,
                required: true,
            }
        },
    }
</script>

<style>
    .cards {
        display: flex;
        flex-direction: row;
        position: relative;
        gap: 50px;
    }
</style>