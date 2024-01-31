// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwqEkyp8lxclGqNoA1Bz3qxncl4_6OzzQ',
  authDomain: 'perfume-store-2f8c0.firebaseapp.com',
  projectId: 'perfume-store-2f8c0',
  storageBucket: 'perfume-store-2f8c0.appspot.com',
  messagingSenderId: '547862218411',
  appId: '1:547862218411:web:c7728e75e997a0650799ee',
  measurementId: 'G-495MELZ82V',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
