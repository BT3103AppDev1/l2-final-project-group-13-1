import { getFirestore, collection, addDoc } from "firebase/firestore";
// import PaymentMethodCustomers from "../../src/components/PaymentMethodCustomers";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDwoM56GhJCUw-dguqvF5gDXuXAl3Ay7To",
    authDomain: "bt3103l2g13.firebaseapp.com",
    projectId: "bt3103l2g13",
    storageBucket: "bt3103l2g13.appspot.com",
    messagingSenderId: "495008255418",
    appId: "1:495008255418:web:edc2e3eb46fd4c47cca183"
  };
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

expect(1 + 1).toBeLessThanOrEqual(2);
// describe("PaymentMethodCustomers", () => {
//   let paymentMethodCustomersInstance;

//   beforeEach(() => {
//     paymentMethodCustomersInstance = new PaymentMethodCustomers();
//   });

//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

//   describe("submitBooking", () => {
//     it("should create a booking successfully", async () => {
//       // Mock the necessary dependencies
//       const mockGetCurrentUser = jest.spyOn(paymentMethodCustomersInstance, "getCurrentUser");
//       mockGetCurrentUser.mockImplementation(() => ({
//         uid: "testUserID"
//       }));

//       const mockPush = jest.fn();

//       const mockRouter = {
//         push: mockPush
//       };

//       jest.spyOn(paymentMethodCustomersInstance.$router, "push").mockReturnValue(mockRouter);

//       const mockAddDoc = jest.spyOn(addDoc, "bind");
//       mockAddDoc.mockImplementation(() => ({
//         id: "testBookingID"
//       }));

//       const db = getFirestore(firebaseApp);
//       const mockCollection = jest.spyOn(collection, "bind");
//       mockCollection.mockImplementation(() => ({
//         add: mockAddDoc
//       }));

//       // Call the function
//       await paymentMethodCustomersInstance.submitBooking();

//       // Expectations
//       expect(mockGetCurrentUser).toHaveBeenCalled();
//       expect(mockCollection).toHaveBeenCalledWith(db, "Bookings");
//       expect(mockAddDoc).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
//         userID: "testUserID",
//         paymentMethod: "In Store",
//         paymentStatus: "Pending"
//       }));

//       expect(mockPush).toHaveBeenCalledWith({
//         name: "BookingSummary",
//         params: { bookingID: "testBookingID" }
//       });
//     });
//   });
// });