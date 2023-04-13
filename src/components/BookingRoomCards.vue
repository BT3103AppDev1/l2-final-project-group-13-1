<template>
    <div class="cards">
        <booking-room-card v-for="(card, index) in uniqueRoomTypes" :key="index" 
        :room-type="card"
        :numPax="numOfPax(card)"
        :date="dateFormatted"
        :time="timeRange"
        :rate="getPrice(card)"
        
        />
    </div>
</template>

<script>
    import { getAuth, onAuthStateChanged } from 'firebase/auth'
    import { getFirestore, getDoc } from "firebase/firestore";
    import { collection, addDoc, updateDoc, getDocs, doc} from "firebase/firestore";
    import firebaseApp from "@/firebase.js";
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
        data() {
            return {
                selectedLocation: '',
                selectedNumPax: '',
                selectedDuration: '',
                selectedDateTime: null,
            }
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
        //Retrieve Session Storage Items
        const selectedLocation = sessionStorage.getItem('location');
        const selectedNumPax = sessionStorage.getItem('noOfPax');
        const selectedDuration = sessionStorage.getItem('duration');
        const selectedDateTime = sessionStorage.getItem('date');

        //Update Component Data with Retrieved Items
        this.selectedLocation = selectedLocation;
        this.selectedNumPax = selectedNumPax;
        this.selectedDuration = selectedDuration;
        this.selectedDateTime = selectedDateTime;

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
            //List Price based on Time selected and Room Type
            getPrice(type) {

                const dateTime = new Date(this.selectedDateTime);
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
            //Returns Number Pax for Each Room Type
            numOfPax(type) {
                if (type === 'Small') {
                    return 4;
                } else if (type === 'Medium') {
                    return 6;
                } else if (type === 'Large') {
                    return 10;
                }
            },
        },
        computed: {

            //Computes the Date
            dateFormatted() {
                if (this.selectedDateTime) {
                const dateTime = new Date(this.selectedDateTime);
                const options = {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                    
                };
                return dateTime.toLocaleString("en-UK", options);
                }
                return "No date selected";
            },

            //Computes the Time Range of Booking
            timeRange() {
                if (this.selectedDateTime && this.selectedDuration) {
                    const startDateTime = new Date(this.selectedDateTime);
                    const endDateTime = new Date(startDateTime);
                    endDateTime.setHours(endDateTime.getHours() + parseInt(this.selectedDuration));
                    
                    const options = {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                        };
                    
                    const startTime = startDateTime.toLocaleString("en-UK", options);
                    const endTime = endDateTime.toLocaleString("en-UK", options);

                    const formatTime = (timeString) => {
                        let [hour, minute] = timeString.split(':');
                        hour = parseInt(hour, 10);
                        const ampm = hour >= 12 ? 'PM' : 'AM';
                        hour = hour % 12;
                        hour = hour || 12; // the hour '0' should be '12'
                        return `${hour}:${minute} ${ampm}`;
                    };

                    const formattedStartTime = formatTime(startTime);
                    const formattedEndTime = formatTime(endTime);

                    return `${formattedStartTime} - ${formattedEndTime}`;
                    }
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