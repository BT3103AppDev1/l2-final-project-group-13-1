
<template>
    <div class = "booking-system-search-form">
         <form class="search-form" @submit.prevent="search">
            <div class ="search-form-container-location">
                    <div class="search-form-container-location-box valign-text-middle">
                        <label>
                            <span class="roboto-medium-mine-shaft-14px">Location</span>
                            <span class="roboto-medium-flamingo-14px">*</span>
                        </label>
                    </div>
                    <div class="search-form-container-location-input">
                        <img class="image-location" src="../assets/location.svg" alt="image-location" />
                        <select v-model="selectedLocation" class="selectedLocation valign-text-middle roboto-normal-mine-shaft-14px" required>
                            <option v-for = "(location, index) in locations" :key="index">{{ location }}</option>
                        </select>
                    </div>
            </div>
            <div class ="search-form-container-numpax">
                    <div class="search-form-container-numpax-box valign-text-middle roboto-medium-white-14px">
                        <label>
                            <span class ="roboto-medium-mine-shaft-14px">Number of Pax</span>
                            <span class="roboto-medium-flamingo-14px">*</span>
                        </label>
                    </div>
                    <div class="search-form-container-numpax-input">
                        <select v-model="selectedNumPax" class="selectedNumPax valign-text-middle roboto-normal-mine-shaft-14px" required>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="10">10</option>
                        </select>
                    </div>
            </div>
            <div class="search-form-container-datetime">
                <div class="search-form-container-datetime-box valign-text-middle roboto-medium-white-14px">
                    <label>
                    <span class="roboto-medium-mine-shaft-14px">Date and Time</span>
                     <span class="roboto-medium-flamingo-14px">*</span>
                    </label>
                </div>
                <div class ="search-form-container-datetime-input">
                    <div class="data">
                        <img class="icon-calendar" src="../assets/calendar.svg" alt="icon-calendar" />
                        <img class="line" src="../assets/line-3.svg" alt="Line" />
                        <img class="image-time" src="../assets/time.svg" alt="image-time" />

                        <vue-flatpickr v-model="datetime" :config="datetimeConfig" class="dateTimePicker valign-text-middle roboto-normal-mine-shaft-14px"></vue-flatpickr>
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
                    <select v-model="selectedDuration" class="selectedDuration valign-text-middle roboto-normal-mine-shaft-14px" required>
                        <!-- We cap at 4 hours first -->
                                <option value="1">1 Hour</option>
                                <option value="2">2 Hours</option>
                                <option value="3">3 Hours</option>
                                <option value="4">4 Hours</option>
                    </select>
                </div>
            </div>
            <div class="search-button-container">
                <button class="search-button valign-text-middle roboto-bold-concrete-16px" @click="navigateToResultsPage">Search</button>
            </div>
         </form>
        </div>   
</template>

<script>
import VueFlatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import firebaseApp from "@/firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy} from "firebase/firestore";
// import VueFlatpickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';
const db = getFirestore(firebaseApp);

export default {
  name: "BookingSystemSearchForm",
  components: {
    VueFlatpickr,
  },
  props: ['locations'],
  data() {
    return { locations: ['White Sands','The Centrepoint','Kallang Wave Mall','Suntec City','Jcube','Causeway Point','The Star Vista'],
             selectedLocation: '',
             selectedNumPax: '',
             selectedDateTime: '',
             selectedDuration: '',
             roomType: [],
             uniqueRoomTypes: [],
             datetime: null,
                datetimeConfig: {
                enableTime: true,
                dateFormat: 'Y-m-d H:i',
             },
             menu: false
           };
  },
  mounted() {
        async function display() {
        const roomRef = collection(db, "Room");
        const sortedQuery = query(roomRef, orderBy("roomType", "desc"));
        let allDocuments = await getDocs(sortedQuery);
        const fetchedTypes = [];
        allDocuments.forEach((doc) => {
            let documentData = doc.data();
            fetchedTypes.push({
            id: doc.id,
            ...documentData,
            });
        });
        this.roomType = fetchedTypes;

        const roomTypesSet = new Set();
        this.roomType.forEach((eachRoom) => {
            roomTypesSet.add(eachRoom.roomType);
        });
        this.uniqueRoomTypes = Array.from(roomTypesSet);
        }
        display.call(this);
        }, 
        methods: {
            getPrice(type) {

                const dateTime = new Date(this.datetime);
                const hour = dateTime.getHours();

                if (type === 'Small') {
                if (hour >= 12 && hour < 19) {
                    return "Happy Hour $13.00 w/GST";
                } else if (hour >= 19) {
                    return "Peak Hours $19.00 w/GST"
                }
                } else if (type === 'Medium') {
                    if (hour >= 12 && hour < 19) {
                    return "Happy Hour $15.00 w/GST";
                } else if (hour >= 19) {
                    return "Peak Hours $22.00 w/GST"
                }
                } else if (type === 'Large') {
                    if (hour >= 12 && hour < 19) {
                    return "Happy Hour $17.00 w/GST";
                } else if (hour >= 19) {
                    return "Peak Hours $25.00 w/GST"
                }
                }

                return '';
            },
            navigateToResultsPage() {
            this.$router.push({
                name: "BookingSystemSearchResultsPage",
                query: {
                    uniqueRoomTypes: this.uniqueRoomTypes,
                },
            })
        },
        },
        computed: {
            dateFormatted() {
                if (this.datetime) {
                const dateTime = new Date(this.datetime);
                const options = {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                    
                };
                return dateTime.toLocaleString("en-UK", options);
                }
                return "No date selected";
            },

            timeRange() {
            if (this.datetime && this.selectedDuration) {
                const startDateTime = new Date(this.datetime);
                const endDateTime = new Date(startDateTime);
                endDateTime.setHours(endDateTime.getHours() + parseInt(this.selectedDuration));
                
                const options = {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                };
                
                const startTime = startDateTime.toLocaleString("en-UK", options);
                const endTime = endDateTime.toLocaleString("en-UK", options);
                
                return `${startTime} - ${endTime}`;
            }
            return "No time selected";
            },
        },
    }


</script>

<style scoped>

    /* For Page Body */
    .booking-system-search-form {
        min-width: 70%;
        justify-content: center;
        align-content: center;
        margin: auto;
    }

    form {
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        min-width: 70%;
        padding: 10px 20px 20px 20px;
        justify-content: center;
        background-color: var(--concrete);
        box-shadow: 20px 20px 120px 15px #0000000d;
        border-radius: 10px;
        gap: 5px;
    }


    /* End of Page Body */

    /* For Location Input */

    .search-form-container-location {
        height: 88px;
        position: relative;
        min-width: 30%;
        display: flex;
        flex-direction: column;

    }

    .search-form-container-location-box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
    }

    .search-form-container-location-input {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        gap: 8px;
        justify-content: center;
        padding: 7px 18px;
        position: relative;
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
        position: relative;
        width: 360px;
    }
    /* End of Location Input */

    /* For NumPax Input */

    .search-form-container-numpax {
        display: flex;
        flex-direction: column;
        height: 88px;
        position: relative;
        min-width: 15%;
        width: 163px;
    }

    .search-form-container-numpax-box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
    }

    .search-form-container-numpax-input {
        align-items: center;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        height: 51px;
        min-width: 161px;
        justify-content: center;
    }

    .selectedNumPax  {
        display: flex;
        align-content: flex-end;
        background-color: transparent;
        border: none;
        position: relative;
        width: 130px;
    }

    /* End of NumPax Input */

    /* For DateTime Input */

    .search-form-container-datetime {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        min-height: 88px;
        width: 299px;
        min-width: 25%;
    }

    .search-form-container-datetime-box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
    }

    .search-form-container-datetime-input {
        align-items: flex-start;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        height: 51px;
        justify-content: center;
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


    .image-time {
        height: 14.41px;
        min-width: 14.13px;
        position: relative;
    }

    .dateTimePicker {
        background: transparent;
        border: 0px;
    }

    /* End of DateTime Input */

    /* For Duration Input */

    .search-form-container-duration {
        display: flex;
        flex-direction: column;
        height: 88px;
        position: relative;
        /* width: 163px; */
        min-width: 15%;

    }

    .search-form-container-duration-box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
        height: 37px;
        letter-spacing: 0;
        line-height: normal;
    }


    .search-form-container-duration-input {
        align-items: flex-start;
        background-color: var(--bon-jour);
        border-radius: 5px;
        display: flex;
        height: 51px;
        /* min-width: 161px; */
        padding: 18.4px 5px;
        align-items: center;
        margin: 0;
    }

    .selectedDuration {
        background-color: transparent;
        border: none;
        position: relative;
        display: flex;
        width: 130px;
    }

    /* For Search Button */
    .search-button-container {
        align-items: center;
        align-self: flex-end;
        background-color: var(--mine-shaft);
        border-radius: 5px;
        display:flex;
        justify-content: center;
        padding: 16px 40px;
        position: relative;
        width: 153px;
        min-width: 15%;
    }

    .search-button {
        letter-spacing: 0;
        line-height: normal;
        position: relative;
        text-align: center;
        width: fit-content;
    }

    /* End of Search Button */

</style>