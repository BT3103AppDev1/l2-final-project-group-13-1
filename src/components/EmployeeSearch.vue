<script>
//   export default {
//     data() {
//       return {
//         email: 'example@teoheng.com', // Replace with actual user's email
//         locations: {
//           'causewaypoint@teoheng.com': 'Causeway Point',
//           'otheremail@teoheng.com': 'Other Location',
//           'anotheremail@teoheng.com': 'Another Location',
//           'suntec@teoheng.com': 'Suntec'
//         },
//         bookings: [
//           {
//             id: '123',
//             location: 'Causeway Point',
//             phone: '12345678',
//             date: '2023-04-10',
//             time: '13:00',
//             duration: 2
//           },
//           {
//             id: '456',
//             location: 'Suntec',
//             phone: '98765432',
//             date: '2023-04-11',
//             time: '10:00',
//             duration: 4
//           },
//           // add more bookings here
//         ],
//         filteredBookings: [],
//         searchQuery: {
//           location: '',
//           bookingId: '',
//           phone: '',
//           date: '',
//           time: '',
//           duration: ''
//         }
//       }
//     },
//     computed: {
//       location() {
//         return this.locations[this.email] || 'Suntec';
//       }
//     },
//     methods: {
//         filterBookings() {
//         const { location, bookingId, phone, date, time, duration } = this.searchQuery;
//         this.filteredBookings = this.bookings.filter(booking => {
//             const locationMatch = !location || booking.location.toLowerCase().includes(location.toLowerCase());
//             const bookingIdMatch = !bookingId || booking.id.toLowerCase().includes(bookingId.toLowerCase().replace('booking id', '').trim());
//             const phoneMatch = !phone || booking.phone.toLowerCase().includes(phone.toLowerCase());
//             const dateMatch = !date || booking.date === date;
//             const timeMatch = !time || booking.time === time;
//             const durationMatch = !duration || booking.duration === Number(duration);
//             return locationMatch && bookingIdMatch && phoneMatch && dateMatch && timeMatch && durationMatch;
//         });
//         }
//     }
//   }

</script>


<template>
    <div class="employee-check-existing-booking screen">
        <div class="check-date-picker">
            <div class="check-overlap-group4">
                <div class="check-location">
                    <div class="check-location-1 valign-text-middle roboto-medium-mine-shaft-14px">Location</div>
                    <div class="check-location-2">
                        <img class="vector" src="../assets/location.svg" alt="location"/>
                        <div class="check-so-paulo-so-paulo-brasil valign-text-middle roboto-normal-mine-shaft-14px">{{location}}</div>
                    </div>
                </div>
                <div class="check-overlap-group1-1">
                    <div class="check-residence">
                        <div class="check-number-of-pax valign-text-middle roboto-medium-mine-shaft-14px">Booking ID</div>
                        <div class="check-country">
                            <div class="check-country-1">
                                <div class="check-overlap-group">
                                    <input class="brasil valign-text-middle roboto-medium-mine-shaft-14px" type="text" style="border-color: transparent;background-color: transparent; outline:none;" placeholder="Booking ID" name="bookingId"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="check-residence-1">
                    <div class="check-phone-number valign-text-middle roboto-medium-mine-shaft-14px">Phone Number</div>
                    <div class="check-country-2">
                        <div class="check-country-3">
                            <div class="check-overlap-group-2">
                                <input class="brasil-1 valign-text-middle roboto-medium-mine-shaft-14px" name="phone" type="number" style="border-color: transparent;background-color: transparent; outline:none;" placeholder="Phone Number"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="check-pick-up">
                    <p class="check-date-time valign-text-middle">
                        <span>
                            <span class="roboto-medium-mine-shaft-14px"> Date</span>
                            <span class="roboto-medium-mine-shaft-14px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;Time</span>
                        </span>
                    </p>
                    <div class="check-box-retirada">
                        <div class="check-data">
                            <div class="check-date">
                                <input name="date" type="date" class="icon-calendar" src="../assets/calendar.svg" alt="icon-calendar" style="background-color: transparent; outline: none; border-color: transparent; height: 20px"/>
                            </div>
                            <div class="check-hour">
                                <input name="time" type="time" class="image-time" src="../assets/time.svg" alt="image-time" style="background-color: transparent; outline: none; border-color: transparent;height:20px;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="check-overlap-group2">
                    <div class="check-residence">
                        <div class="check-duration valign-text-middle roboto-medium-mine-shaft-14px">Duration</div>
                        <div class="check-country">
                            <div class="check-country-1">
                                <div class="check-overlap-group">
                                    <select name="duration" class="brasil valign-text-middle roboto-medium-mine-shaft-14px" style="background-color: transparent; outline: none; border-color: transparent;height:20px; width: 150px;">
                                        <option value="" disabled selected hidden>Please Choose...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="check-call-to-action">
                    <button class="pesquisar valign-text-middle" @click="filterBookings">Search</button> 
                </div>
            </div>
        </div>
        <div>
    <table>
      <thead>
        <tr>
          <th class="check-navbar-link-booking-id inter-semi-bold-black-20px">Booking ID</th>
          <th class="check-navbar-link-place navbar-link-1 inter-semi-bold-black-20px">Name</th>
          <th class="check-navbar-link-place navbar-link-1 inter-semi-bold-black-20px">Phone Number</th>
          <th class="check-navbar-link-location navbar-link-1 inter-semi-bold-black-20px">Location</th>
          <th class="check-navbar-link-place navbar-link-1 inter-semi-bold-black-20px">Date</th>
          <th class="check-navbar-link-time navbar-link-1 inter-semi-bold-black-20px">Time</th>
          <th class="check-navbar-link-room-type navbar-link-1 inter-semi-bold-black-20px">Room Type</th>
          <th class="check-navbar-link-no-of-pax navbar-link-1 inter-semi-bold-black-20px">No. of Pax</th>
        </tr>
      </thead>
      <tbody>
        <tr class="check-nav-bar-1" v-for="booking in filteredBookings" :key="booking.id">
          <td class="navbar-link-sc12345 navbar-link-1 inter-semi-bold-black-24px">{{ booking.id }}</td>
          <td class="navbar-link-name navbar-link-1 inter-semi-bold-black-24px">{{ booking.name }}</td>
          <td class="navbar-link inter-semi-bold-black-24px">{{ booking.phoneNumber }}</td>
          <td class="navbar-link-suntec-city inter-semi-bold-black-24px">{{ booking.location }}</td>
          <td class="navbar-link inter-semi-bold-black-24px">{{ booking.date }}</td>
          <td class="navbar-link-text-3 inter-semi-bold-black-24px">{{ booking.time }}</td>
          <td class="navbar-link-surname navbar-link-1 inter-semi-bold-black-24px">{{ booking.roomType }}</td>
          <td class="navbar-link-number navbar-link-1 inter-semi-bold-black-24px">{{ booking.pax }}</td>
          <td class="check-search-button"><div class="check-details">Details</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<style scoped>
.employee-check-existing-booking {
    align-items : center;
    background-color: var(--white);
    border: 1px none; 
    display: flex; 
    flex-direction: column;
    height: 1276px;
    overflow: hidden;
    width: 1537px;
}

.hidden,
.hidden * {
    pointer-events: none;
    visibility: hidden;
}

.check-navbar-link-p {
    line-height: 30px;
    width: fit-content;
}

.check-date-picker {
    align-items : flex-start;
    display: flex;
    height: 140px;
    margin-left: 1px;
    margin-top: 44px;
    min-width: 1280px;
}

.check-overlap-group4 {
    align-items: flex-start;
    background-color: var(--concrete);
    border-radius: 10px;
    box-shadow: 20px 20px 120px 15px #0000000d;
    display: flex;
    height: 125px;
    min-width: 1280px;
    padding: 6px 23px;
}

.check-residence-1 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-left: 13px;
    min-height: 90px;
    width: 164px;
}

.check-phone-number {
    height: 37px;
    letter-spacing: 0;
    line-height: normal;
    width: 149px;
}

.valign-text-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.check-country-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    position: relative;
    width: 162px;
}

.check-country-3{
    height: 51px;
    margin-right: -1px;
    min-width: 163px;
    position: relative;
}

.check-overlap-group-2 {
    align-items: flex-end;
    background-color: var(--bon-jour);
    border-radius: 5px;
    display: flex;
    height: 51px;
    min-width: 161px;
    padding: 16.6px 14.5px;
}

.brasil-1 {
    height: 17px;
    letter-spacing: 0;
    line-height: normal;
    min-width: 63px;
    width: 50px;
}

.data {
    align-items: center;
    display: flex;
    gap: 17px;
    justify-content: center;
    margin-bottom: -0.2px;
    margin-top: -0.2px;
    position: relative;
    width: 238px;
}

.check-line {
    height: 20.4px;
    min-width: 1px;
    position: relative;
}

.employee-check-existing-booking .text {
    letter-spacing: 0;
    line-height: normal;
}

.check-call-to-action {
    align-items: center;
    align-self: center;
    background-color: var(--mine-shaft);
    border-radius: 5px;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-left: 23px;
    margin-top: 14px;
    overflow: hidden;
    padding: 16px 40px;
    position: relative;
    width: 153px;
}

.pesquisar {
    color: var(--concrete);
    font-family: var(--font-family-roboto);
    font-size : var(--font-size-m);
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: fit-content;
}

.check-overlap-group2 {
    height: 88px;
    margin-left: 9px;
    position: relative;
    width : 163px
}

.check-residence {
    align-items: flex-start;
    display: flex; 
    flex-direction: column;
    left: 0;
    min-height: 88px;
    position: absolute;
    top: 0;
    width: 163px;
}

.check-country {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    position: relative;
    width: fit-content;
}

.check-country-1 {
    height: 51px;
    margin-right: -2px;
    min-width: 163px;
    position: relative;
}

.check-overlap-group {
    align-items: flex-start;
    background-color: var(--bon-jour);
    border-radius: 5px;
    display: flex;
    height: 51px;
    min-width: 161px;
    padding: 18.4px 14.5px;
}

.brasil {
    height: 14px; 
    letter-spacing: 0;
    line-height: normal;
    width: 61px;
}

.check-duration {
    height: 37px;
    letter-spacing: 0;
    line-height: normal;
    width: 75px;
}

.check-location {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: 1px;
    min-height: 88px;
    width: 209px;
}

.check-location-1 {
    height: 37px;
    letter-spacing: 0;
    line-height: normal;
    width: 194px;
}

.check-so-paulo-so-paulo-brasil {
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
}

.vector {
    height: 14.23px;
    min-width: 11px;
    position: relative;   
}

.check-overlap-group1-1 {
    height: 88px;
    margin-left: 12px;
    margin-top: 2px;
    position: relative;
    width: 163px;
}

.check-number-of-pax {
    height: 37px;
    letter-spacing: 0;
    line-height: normal;
    width: 104px;
}

.check-navbar-link-booking-id {
    letter-spacing: 0;
    line-height: 30px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: 125px;
}    
.navbar-link-text-3 {
    letter-spacing: 0;
    line-height: 36px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: 95px;
}    

.check-navbar-link-no-of-pax {
    letter-spacing: 0;
    line-height: 30px;
    margin-right: -255px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: 132px;
}    

.employee-check-existing-booking .navbar-link-1 {
    letter-spacing: 0;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
}

table {
  width: 100%;
  table-layout: fixed;
  max-width: 1200px;

}

th, td {
  padding: 10px;
  text-align: left;
  vertical-align: top;
}

th {
  background-color: #F1F1F1;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #F9F9F9;
}

.check-navbar-link-time {
    line-height: 30px;
    width: 62px;
}    
.check-navbar-link-location {
    line-height: 30px;
    width: 107px;
}    

.check-navbar-link-place {
    line-height: 30px;
    width: 82px;
}    

.check-navbar-link-room-type {
    letter-spacing: 0;
    line-height: 30px;
    margin-right: -54px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: 132px;
}    

.check-flex-row {
    align-items: center;
    align-self: flex-end;
    display: flex;
    gap: 20px;
    margin-right: 16px;
    margin-top: 25px;
    min-width: 1452px;
}

.check-search-button {
    align-items: center;
    border: 5px solid;
    border-color: var(--flamingo);
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000026;
    display: flex;
    height: 40px;
    justify-content: center;
    margin-top : 5px;
    overflow: hidden;
    position: relative;
    width: 80px;
    margin-right: 50px;
}

.check-details {
    color: var(--flamingo);
    font-family: var(--font-family-inter);
    font-size: var(--font-size-xl2);
    font-weight: 600;
    height: 27px;
    letter-spacing: 0;
    line-height: 24.8px;
    margin-right: 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: 115px;
}

.check-navbar-1 {
    align-items: flex-start;
    background-color: var(--white);
    border: 1px solid;
    border-color: var(--black);
    display: flex;
    gap: 51px;
    height: 95px;
    position: relative;
    width: 1310px;
    padding: 25px 50px;
}

.navbar-link-number {
    line-height: 36px;
    margin-right: -33px;
    width: 51px;
}

.navbar-link-sc12345 {
    line-height: 36px;
    width: 143px;
}

.navbar-link {
    letter-spacing: 0;
    line-height: 36px; 
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;   
}

.navbar-link-suntec-city {
    letter-spacing: 0;
    line-height: 36px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: 146px
}

.navbar-link-name {
    line-height: 36px;
    width: 76px;
}

.navbar-link-surname {
    line-height: 36px;
    width: 145px;
}


.check-residence {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    left: 0;
    min-height: 88px;
    position: absolute;
    top: 0;
    width: 163px;
}

.check-pick-up {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 1px;
    min-height: 87px;
    width: 314px;
}

.check-date-time {
    color: transparent;
    font-family: var(--font-family-roboto);
    font-size: var(--font-size-s);
    font-weight: 500;
    height: 37px;
    letter-spacing: 0;
    line-height: normal;
    width: 301px;
}

.icon-calendar {
        height: 11.97px;
        min-width: 11.74px;
        position: relative;
}

.image-time {
        height: 14.41px;
        min-width: 14.13px;
        position: relative;
}

input[type="text"]
{
    width:100px;
    height: 30px;
    padding-bottom:15px;
}

input[type="number"]
{
    width:100px;
    height: 30px;
    padding-top: 15px;
}



.check-navbar {
    align-items: flex-start;
    background-color: #dedddd;
    display: flex;
    gap: 69px;
    height: 30px;
    margin-right: 76px;
    padding: 0px 235px 0px 50px;
    position: relative;
    width: 1343px;
}

.check-span1-1 {
    color: var(--flamingo);
}

.check-box-retirada {
    align-items: flex-start;
    background-color: var(--bon-jour);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 50px;
    justify-content: center;
    padding: 15px 24px 15px 0px;
    position: relative; 
    width: 312px;
}

.check-data {
    align-items: center;
    display: flex;
    gap: 17px;
    justify-content: center;
    margin-bottom: -0.2px;
    margin-top: -0.2px;
    position: relative;
    width: 238px;
}

.check-date {
    align-items: center; 
    display: flex;
    gap: 8px;
    justify-content: center;
    position: relative;
    width: fit-content;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


.check-hour {
    align-items: center; 
    display: flex;
    gap: 8px;
    position: relative;
    width: fit-content;
}


.mon-0512 {
    height: 15px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: 69px;
}

.check-text-2 {
    height: 13px;
    margin-top: -0.3px;
    position: relative;
    width: 35px;
}

.check-location-2 {
    align-items: center;
    background-color: var(--bon-jour);
    border-radius: 5px;
    display: flex;
    gap: 8px;
    height: 51px;
    justify-content: center;
    padding: 7px 18px;
    position: relative;
    width: 207px;
}
</style>