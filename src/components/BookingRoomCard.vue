<template>
    <div class="small-room-container">
        <div class="room-container-text">
            <div class="room-type">
                <span class="poppins-bold-black-20px">{{ roomType }}</span>
                <span class="poppins-normal-black-20px">Best for {{ numPax }} pax</span>
            </div>
            <span> 
                <span class="poppins-bold-black-17px">Date: </span>
                <span class="poppins-normal-black-17px">{{ date }}</span>
            </span>
            <span>
                <span class="poppins-bold-black-17px">Time: </span>
                <span class="poppins-normal-black-17px">{{ time }}</span>
            </span>

            <span>
                <span class="poppins-bold-black-17px">Hourly Rate: </span>
                <span class="poppins-normal-black-17px">{{ rate }}</span>

            </span>
        </div>
        <div class="select-button-container">
            <!-- Add Function -->
            <button class="select-button poppins-medium-white-16px" @click="choose">Choose</button>
        </div>
        </div>
</template>

<script>
    export default {
        name: "BookingRoomCard",
        props: {
            roomType: {
                type: String,
                required: true,
            },
            numPax: {
                type: Number,
                required: true,
            },
            date: {
                type: String,
                required: true,
            },
            time: {
                type: String,
                required: true,
            },
            rate: {
                type: String,
                required: true,
            },
        },
        data() {
            return { 
                selectedLocation: '',
                selectedDuration: '',
                selectedDateTime: null,
                datetimeConfig: {
                    enableTime: true,
                    dateFormat: 'Y-m-d H:i',
                },
            };
        },
        mounted() {
            //Retrieve Session Storage Items
            const selectedLocation = sessionStorage.getItem('location');
            // const selectedNumPax = sessionStorage.getItem('noOfPax');
            const selectedDuration = sessionStorage.getItem('duration');
            const selectedDateTime = sessionStorage.getItem('date');

            //Update Component Data with Retrieved Items
            this.selectedLocation = selectedLocation;
            // this.selectedNumPax = selectedNumPax;
            this.selectedDuration = selectedDuration;
            this.selectedDateTime = selectedDateTime;
            
            }, 
            methods: {

                //Computes Price based on Time and Room Type
                getPrice(type) {

                    const dateTime = new Date(this.selectedDateTime);
                    const hour = dateTime.getHours();

                    if (type === 'Small') {
                    if (hour >= 12 && hour < 19) {
                        return "13.00";
                    } else if (hour >= 19) {
                        return "19.00"
                    }
                    } else if (type === 'Medium') {
                        if (hour >= 12 && hour < 19) {
                        return "15.00";
                    } else if (hour >= 19) {
                        return "22.00"
                    }
                    } else if (type === 'Large') {
                        if (hour >= 12 && hour < 19) {
                        return "17.00";
                    } else if (hour >= 19) {
                        return "25.00"
                    }
                    }

                    return '';
                },
                navigateToConfirmationPage() {
                    this.$router.push({
                        name: "CustomerConfirmationPage",
                    })
                },
                choose() {
                    
                    //Save Selected Field Values in Session Storage
                    sessionStorage.setItem('date', this.selectedDateTime);
                    sessionStorage.setItem('startTime', this.getStartTime);
                    sessionStorage.setItem('endTime', this.getEndTime);
                    sessionStorage.setItem('selectedRoomType', this.roomType);
                    sessionStorage.setItem('noOfPax', this.numPax);
                    sessionStorage.setItem('price', this.getPrice(this.roomType));
                    sessionStorage.setItem('duration', this.selectedDuration);
                    sessionStorage.setItem('location', this.selectedLocation);
                    //I think the function cant choose roomID yet
                    // sessionStorage.setItem('roomID', roomID);

                    //Moves to Next Page
                    this.navigateToConfirmationPage();
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

                //Compute Start Time in format HH:mm
                getStartTime() {
                    if (this.selectedDateTime && this.selectedDuration) {
                        const startDateTime = new Date(this.selectedDateTime);
                        
                        const options = {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                        };
                        
                        const startTime = startDateTime.toLocaleString("en-UK", options);
                        
                        const formatTime = (timeString) => {
                        let [hour, minute] = timeString.split(':');
                        hour = parseInt(hour, 10);
                        const ampm = hour >= 12 ? 'PM' : 'AM';
                        hour = hour || 12; // the hour '0' should be '12'
                        return `${hour}:${minute}`;
                        };

                        const formattedStartTime = formatTime(startTime);
                        return `${formattedStartTime}`;
                    }
                },
                
                //Compute End Time in format HH:mm
                getEndTime() {
                    if (this.selectedDateTime && this.selectedDuration) {
                        const endDateTime = new Date(this.selectedDateTime);
                        endDateTime.setHours(endDateTime.getHours() + parseInt(this.selectedDuration));
                        
                        const options = {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                        };
                        
                        const endTime = endDateTime.toLocaleString("en-UK", options);
                        
                        const formatTime = (timeString) => {
                        let [hour, minute] = timeString.split(':');
                        hour = parseInt(hour, 10);
                        const ampm = hour >= 12 ? 'PM' : 'AM';
                        hour = hour || 12; // the hour '0' should be '12'
                        return `${hour}:${minute}`;
                        };

                        const formattedEndTime = formatTime(endTime);
                        return `${formattedEndTime}`;
                    }
                },
            },
        }


</script>

<style>


    .small-room-container {
        /* align-content: center; */
        background-color: var(--white);
        border-radius: 40px;
        box-shadow: 0px 4px 35px #00000014;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 333px;
        width: 406px;
        align-items: center;
        position: relative;
    }

    .room-container-text {
        display: flex;
        flex-direction: column;
        letter-spacing: 0;
        line-height: normal;
        min-height: 32px;
        text-align: center;
        width: 340px;
        position: relative;

        /* position: relative; */
    }

    .room-type {
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        position: relative;

        /* margin-bottom: ; */
    }
    .select-button-container {
        align-items: flex-start;
        background-color: var(--flamingo);
        border-radius: 10px;
        box-shadow: 0px 4px 19px #7793414c;
        display: flex;
        height: 40px;
        margin-top: 54px;
        min-width: 340px;
        position: relative;

        padding: 7px 126px;
    }

    .select-button {
        letter-spacing: 0;
        line-height: normal;
        min-height: 13px;
        text-align: center;
        width: 87px;
        position: relative;

    }

</style>