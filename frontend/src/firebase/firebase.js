// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCHtczMnedN90zS6zi3wcLWxyflN2U_kxY',
  authDomain: 'for-your-research-68124.firebaseapp.com',
  projectId: 'for-your-research-68124',
  storageBucket: 'for-your-research-68124.appspot.com',
  messagingSenderId: '852292029921',
  appId: '1:852292029921:web:81d05434a422d79a0556a0',
  measurementId: 'G-JYWX89ZNXM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Error setting persistence:', error);
});

export { app, auth };
