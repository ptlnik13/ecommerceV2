// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI7rTPx1jog7xRWeW-FQqfRn0bYZjRQ9k",
    authDomain: "ecom-dcfa1.firebaseapp.com",
    projectId: "ecom-dcfa1",
    storageBucket: "ecom-dcfa1.appspot.com",
    messagingSenderId: "854492775180",
    appId: "1:854492775180:web:b909b25782d4652d5f7f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {displayName, email, createdAt});
        } catch (e) {
            console.log('error while creating user', e.message);
        }
    }
    return userDocRef;
}
