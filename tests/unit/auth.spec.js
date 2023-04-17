import { initializeApp } from "firebase/app";
import { getAuth,signOut,  signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "firebase/auth";


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

  describe('Firebase authentication', () => {
    it('should create a new user with email and password', async () => {
      
      const email = 'testuser@example.com';
      const password = 'testpassword';
  
      await createUserWithEmailAndPassword(auth, email, password);
  
      const currentUser = auth.currentUser;
      const userEmail = currentUser.email;
  
      expect(currentUser).not.toBeNull();
      expect(userEmail).toBe(email);

      await currentUser.delete();

    });


  it('should sign in an existing user with email and password', async () => {
    const email = 'testuser1@example.com';
    const password = 'testpassword';

    await createUserWithEmailAndPassword(auth, email, password);
  

    await signInWithEmailAndPassword(auth, email, password);

    const currentUser = auth.currentUser;
    expect(currentUser).not.toBeNull();
    expect(currentUser.email).toBe(email);

    await currentUser.delete();
  });

  it('should sign out the current user', async () => {
    const email = 'testuser3@example.com';
    const password = 'testpassword';

    await createUserWithEmailAndPassword(auth, email, password);
  

    await signInWithEmailAndPassword(auth, email, password);
    const deleteUser = auth.currentUser;
    await auth.signOut();

    const currentUser = auth.currentUser;
    expect(currentUser).toBeNull();

    //Delete user for future testings
    await deleteUser.delete();
  });
});