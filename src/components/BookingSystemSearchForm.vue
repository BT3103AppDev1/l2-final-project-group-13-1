<template>
    <div class = "booking-system-search-form">
     <form class="search-form" @submit.prevent="search">
        <div class ="search-form-container">
            <div class ="search-form-container-location">
                <div class="location"> 
                    <div class="search-form-container-location-box valign-text-middle">
                        <label>
                            <span class="roboto-medium-mine-shaft-14px">Location</span>
                            <span class="roboto-medium-flamingo-14px">*</span>
                        </label>
                        <div class="search-form-container-location-input">
                            <img class="image-location" src="../assets/location.svg" alt="image-location" />
                            <select v-model="selectedLocation" class="so-paulo-so-paulo-brasil valign-text-middle roboto-normal-mine-shaft-14px">
                                <option v-for = "(location, index) in locations" :key="index" >{{ location }}</option>
                            </select>
                            </div>
                    </div>
                </div> 
            </div>
            <div class ="overlap-group1-1">
                <div class="residence-1">
                    <div class="number-of-pax valign-text-middle roboto-medium-white-14px">
                        <label>
                            <span class ="span-2 roboto-medium-mine-shaft-14px">Number of Pax</span>
                            <span class="span-2 roboto-medium-flamingo-14px">*</span>
                        </label>
                    </div>
                    <div class="country">
                        <div class="country-1">
                            <div class="overlap-group-1">
                                <input type="number" id="quantity" v-model.number="selectedQuantity" :min="4" :max="10" :step="2" class="brasil valign-text-middle roboto-normal-gray-14px">
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <!-- Change to datetime form -->
            <div class="pick-up">
                <div class="date-and-time valign-text-middle roboto-medium-white-14px">
                    <label>
                    <span class="roboto-medium-mine-shaft-14px">Date and Time</span>
                     <span class="roboto-medium-flamingo-14px">*</span>
                    </label>
                </div>
                <div class ="box-retirada">
                    <div class="data">
                        <div class="date">
                            <img class="icon-calendar" src="../assets/calendar.svg" alt="icon-calendar" />
                            <span class="mon-0512 valign-text-middle roboto-normal-mine-shaft-14px">Mon 05/12</span>
                        </div>
                        <img class="line" src="../assets/line-3.svg" alt="Line" />
                        <div class="hour">
                            <img class="vector-3" src="../assets/time.svg" alt="Vector" />
                            <div class="text-2 valign-text-middle roboto-normal-mine-shaft-14px">10:00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlap-group2">
                <div class="residence-1">
                    <div class="number-of-pax valign-text-middle roboto-medium-white-14px">
                        <span>
                            <span class ="span-2 roboto-medium-mine-shaft-14px">Duration</span>
                            <span class="span-2 roboto-medium-flamingo-14px">*</span>
                        </span>
                    </div>
                    <div class="country">
                        <div class="country-1">
                            <div class="overlap-group-1">
                                <span class="brasil valign-text-middle roboto-normal-gray-14px">1 Hour</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="call-to-action">
                <span class="pesquisar valign-text-middle roboto-bold-concrete-16px">Search</span>
                </div>
            </div>   
        </form>
    </div> 
</template>

<script>
    
export default ({
  name: "DatePicker",
}
);
</script>

<style>
    .booking-system-search-form {
        align-items: flex-start;
        display: flex;
        height: 140px;
        margin-top: -50px;
        min-width: 1280px;
    }

    form {
        align-items: flex-start;
        display: flex;
        height: 140px;
        margin-top: 77px;
        min-width: 1280px;
    }

    .search-form-container {
        align-items: flex-start;
        background-color: var(--concrete);
        border-radius: 10px;
        box-shadow: 20px 20px 120px 15px #0000000d;
        display: flex;
        height: 125px;
        min-width: 1280px;
        padding: 6px 23px;
        position: relative;
    }

    .search-form-container-location {
        height: 88px;
        margin-top: 1px;
        position: relative;
        width: 417px;

    }

    .location {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        left: 0;
        min-height: 88px;
        position: absolute;
        top: 0;
        width: 417px;
    }

    .search-form-container-location-box {
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
        width: 194px;
        margin-top: 25px;
    }

    .vector {
        height: 8px;
        left: 383px;
        position: absolute;
        top: 59px;
        width: 14px;
    }

    .overlap-group1-1 {
        height: 88px;
        margin-left: 5px;
        margin-top: 1px;
        position: relative;
        width: 163px;
    }

    .vector-1 {
        height: 8px;
        left: 134px;
        position: absolute;
        top: 70px;
        width: 14px;
    }

    .vector-2 {
        height: 8px;
        left: 134px;
        position: absolute;
        top: 44px;
        width: 14px;
    }

    .pick-up {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        margin-top: -3.0px;
        min-height: 88px;
        width: 299px;
    }

    .date-and-time {
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
        margin-right: 7.04px;
        width: 282px;
    }

    .box-retirada {
        align-items: flex-start;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 51px;
        justify-content: center;
        margin-right: 2px;
        padding: 15px 24px;
        position: relative;
        width: 297px;
    }
    
    .data {
        align-items: center;
        display: flex;
        gap: 17px;
        justify-content: center;
        position: relative;
        width: 238px;
    }

    .date {
        align-items: center;
        display: flex;
        gap: 8px;
        justify-content: center;
        position: relative;
        width: fit-content;
    }

    .icon-calendar {
        height: 11.97px;
        min-width: 11.74px;
        position: relative;
    }

    .mon-0512 {
        height: 15px;
        letter-spacing: 0;
        line-height: normal;
        margin-top: -1px;
        position: relative;
        width: 69px;
    }

    .line {
        height: 20.4px;
        min-width: 1px;
        position: relative;
    }

    .hour {
        align-items: center;
        display: flex;
        gap: 8px;
        position: relative;
        width: fit-content;
    }

    .vector-3 {
        height: 14.41px;
        min-width: 14.13px;
        position: relative;
    }

    .text-2 {
        height: 13px;
        letter-spacing: 0;
        line-height: normal;
        margin-top: -0.3px;
        position: relative;
        width: 35px;
    }

    .overlap-group2 {
        height: 88px;
        margin-left: 5px;
        position: relative;
        width: 163px;
    }

    .vector-4 {
        height: 8px;
        left: 132px;
        position: absolute;
        top: 59px;
        width: 14px;
    }


    .search-form-container-location-input {
        align-items: center;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        gap: 8px;
        justify-content: center;
        padding: 7px 18px;
        position: relative;
        width: 415px;
        margin-top: 8px;
    }

    .image-location {
        height: 14.23px;
        min-width: 11px;
        position: relative;
    }

    .so-paulo-so-paulo-brasil {
        background-color: transparent;
        border: 0;
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
        margin-top: 0;
        position: relative;
        width: 360px;
    }

    .residence-1 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    left: 0;
    min-height: 88px;
    position: absolute;
    top: 0;
    width: 163px;
    }

    .number-of-pax {
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
        width: 104px;
        margin-top: -4.5px;
    }

    .residence-1.residence .number-of-pax {
        width: 75px;
    }


    .overlap-group-1 {
        align-items: flex-start;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        height: 51px;
        min-width: 161px;
        padding: 18.4px 14.5px;
    }

    .call-to-action {
        align-items: center;
        align-self: center;
        background-color: var(--mine-shaft);
        border-radius: 5px;
        display:flex;
        gap: 10px;
        justify-content: center;
        margin-left: 23px;
        margin-top: 2px;
        overflow: hidden;
        padding: 16px 40px;
        position: relative;
        width: 153px;
    }

    .pesquisar {
        letter-spacing: 0;
        line-height: normal;
        margin-top: -1px;
        position: relative;
        text-align: center;
        width: fit-content;
    }
</style>