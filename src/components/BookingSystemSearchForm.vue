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
                            <select v-model="selectedLocation" class="selectedLocation valign-text-middle roboto-normal-mine-shaft-14px">
                                <option v-for = "(location, index) in locations" :key="index">{{ location }}</option>
                            </select>
                            </div>
                    </div>
                </div> 
            </div>
            <div class ="search-form-container-numpax">
                <div class="numpax">
                    <div class="search-form-container-numpax-box valign-text-middle roboto-medium-white-14px">
                        <label>
                            <span class ="roboto-medium-mine-shaft-14px">Number of Pax</span>
                            <span class="roboto-medium-flamingo-14px">*</span>
                        </label>
                    </div>
                        <div class="search-form-container-numpax-input">
                            <input type="number" id="quantity" v-model.number="selectedNumPax" :min="4" :max="10" :step="2" class="valign-text-middle roboto-normal-gray-14px">
                        </div>
                </div> 
            </div>
            <!-- Change to datetime form -->
            <div class="search-form-container-datetime">
                <div class="search-form-container-datetime-box valign-text-middle roboto-medium-white-14px">
                    <label>
                    <span class="roboto-medium-mine-shaft-14px">Date and Time</span>
                     <span class="roboto-medium-flamingo-14px">*</span>
                    </label>
                </div>
                <div class ="search-form-container-datetime-input">
                    <div class="data">
                        <div class="search-form-container-datetime-input-date">
                            <img class="icon-calendar" src="../assets/calendar.svg" alt="icon-calendar" />
                            <span class="valign-text-middle roboto-normal-mine-shaft-14px">Mon 05/12</span>
                        </div>
                        <img class="line" src="../assets/line-3.svg" alt="Line" />
                        <div class="search-form-container-datetime-input-hour">
                            <img class="image-time" src="../assets/time.svg" alt="image-time" />
                            <div class="valign-text-middle roboto-normal-mine-shaft-14px">10:00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-form-container-duration">
                <div class="search-form-container-duration-box valign-text-middle roboto-medium-white-14px">
                    <span>
                        <span class ="roboto-medium-mine-shaft-14px">Duration</span>
                        <span class="roboto-medium-flamingo-14px">*</span>
                    </span>
                </div>
                <div class="search-form-container-duration-input">
                    <span class=" valign-text-middle roboto-normal-gray-14px">1 Hour</span>
                </div>
            </div>
            <div class="search-button-container">
                <button class="search-button valign-text-middle roboto-bold-concrete-16px">Search</button>
            </div>
            </div>   
        </form>
    </div> 
</template>

<script>
    
export default ({
  name: "DatePicker",
  props: ['locations'],
  data() {
    return { locations: ['White Sands','The Centrepoint','Kallang Wave Mall','Suntec City','Jcube','Causeway Point','The Star Vista'],
             selectedLocation: '',
             selectedNumPax: '',
             selectedDateTime: '',
             selectedDuration: '',
           };
  }
}
);
</script>

<style>

    /* For Page Body */
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

    /* End of Page Body */

    /* For Location Input */

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

    .selectedLocation {
        background-color: transparent;
        border: 0;
        height: 37px;
        letter-spacing: 0;
        display: flex;
        align-items: center;
        line-height: 37px;
        padding: 9px;
        /* margin: auto; */
        position: relative;
        width: 360px;
    }
    /* End of Location Input */

    /* For NumPax Input */

    .search-form-container-numpax {
        height: 88px;
        margin-left: 5px;
        margin-top: 1px;
        position: relative;
        width: 163px;
    }

    .numpax {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    left: 0;
    min-height: 88px;
    position: absolute;
    top: 0;
    width: 163px;
    }

    .search-form-container-numpax-box {
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
        width: 104px;
        margin-top: -4.5px;
    }

    .search-form-container-numpax-input {
        align-items: flex-start;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        height: 51px;
        min-width: 161px;
        padding: 18.4px 14.5px;
    }


    /* End of NumPax Input */

    /* For DateTime Input */

    .search-form-container-datetime {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        margin-top: -3.0px;
        min-height: 88px;
        width: 299px;
    }

    .search-form-container-datetime-box {
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
        margin-right: 7.04px;
        width: 282px;
    }

    .search-form-container-datetime-input {
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

    .search-form-container-datetime-input-date {
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

    .line {
        height: 20.4px;
        min-width: 1px;
        position: relative;
    }

    .search-form-container-datetime-input-hour {
        align-items: center;
        display: flex;
        gap: 8px;
        position: relative;
        width: fit-content;
    }

    .image-time {
        height: 14.41px;
        min-width: 14.13px;
        position: relative;
    }

    /* End of DateTime Input */

    /* For Duration Input */

    .search-form-container-duration {
        height: 88px;
        margin-left: 5px;
        position: relative;
        width: 163px;
    }

    .search-form-container-duration-box {
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
        width: 104px;
        margin-top: -3px;
    }


    .search-form-container-duration-input {
        align-items: flex-start;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        height: 51px;
        min-width: 161px;
        padding: 18.4px 14.5px;
        align-items: center;
    }

    /* For Search Button */
    .search-button-container {
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

    .search-button {
        letter-spacing: 0;
        line-height: normal;
        margin-top: -1px;
        position: relative;
        text-align: center;
        width: fit-content;
    }

    /* End of Search Button */

</style>