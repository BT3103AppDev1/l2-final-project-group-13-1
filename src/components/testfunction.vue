<template>
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

                        <!-- NEED TO FIX THE TIMING TO CHOOSE BETWEEN 12PM to 12AM MAXIMUM. -->
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
                        <!-- We might need a function where our duration need to check if it overshoots the closing time of the shop. If it does then that value shldnt appear.-->
                                <option value="1">1 Hour</option>
                                <option value="2">2 Hours</option>
                                <option value="3">3 Hours</option>
                                <option value="4">4 Hours</option>
                    </select>
                </div>
            </div>
    <div>
      <div
      v-for="(type, index) in uniqueRoomTypes"
      :key="index"
      class="rectangle"
      >
      <p class = "roomtype">{{ type }}</p>
      <p class="best-for-pax" v-if="type === 'Small'">
        Best for 4 Pax <br><br>
        Date: {{ dateFormatted }}<br><br>
        Time: {{ timeRange }}<br><br>
        Hourly Rate: {{ getPrice(type) }}
    </p>
      <p class="best-for-pax" v-else-if="type === 'Medium'">
        Best for 6 Pax<br><br>
        Date: {{ dateFormatted }}<br><br>
        Time: {{ timeRange }}<br><br>
        Hourly Rate: {{ getPrice(type) }}
    </p>
      <p class="best-for-pax" v-else-if="type === 'Large'">
        Best for 10 Pax<br><br>
        Date: {{ dateFormatted }}<br><br>
        Time: {{ timeRange }}<br><br>
        Hourly Rate: {{ getPrice(type) }}
    </p>
    </div>
    </div>
    <br><br>
    

  </template>
  
  <script>
  import firebaseApp from "@/firebase.js";
  import { getFirestore } from "firebase/firestore";
  import { collection, getDocs, query, orderBy} from "firebase/firestore";
  import VueFlatpickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  
  const db = getFirestore(firebaseApp); 
  const customerRef = collection(db, "User"); 
  const auth = getAuth(firebaseApp)  
  
  export default {

  data() {
    return {
      roomType: [],
      uniqueRoomTypes: [],
      datetime: null,
        datetimeConfig: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        },
        selectedDuration: 1,
    };
  },

  mounted() {
            const auth = getAuth(firebaseApp)
            onAuthStateChanged(auth, (user) => {
                if (!user) {
            // Redirect to login page or any other page
                this.$router.push('/logIn'); // Replace '/login' with the desired route
                return;
            }
            else if (user) {
                console.log(user)
                this.user = user
                this.useremail = user.email
            }

        })
    },

  components: {
    VueFlatpickr,
  },

  //this mounted() function is to display the DISTINCT types of room types from the Room table. (e.g. right now the Room table has: Small, Small, Medium, Large. But we only want to show distinct ones - Small, Medium, Large).
  //What refinements this function needs: It should display DISTINCT room types that are AVAILABLE for booking. (e.g. Small Room 1 and Small Room 2 is both available but when I display the rooms available to my user,
  // I am only showing Small, Medium, Large). Once my user clicks on "Choose" button, it should allocate e.g. Small Room 1 to this user, instead of allocating both Small Room 1 and Small Room 2. 
  // Need to save the roomID so that it can be appended to BOOKINGS table to show that roomID:1 is booked. Could think of other ways to go about this (counting number of available Small rooms?)
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

  //getPrice method is to display the $$ for each room type and timing. 
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

};
  </script>
  
  
  <style scoped>
  .rectangle {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    display: inline-block;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    color: black;
  }
  
  .roomtype {
    margin: 0;
    margin-bottom: 5px;
  }
  
  .best-for-pax {
    margin: 0;
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

    .dateTimePicker {
        background: transparent;
        border: 0px;
    }
  </style>