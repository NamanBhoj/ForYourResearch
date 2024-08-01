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
  apiKey: 'AIzaSyDcPovW5TSWIWuTIpIZJ0rVt9MJ85hUxYM',
  authDomain: 'for-your-research-b57ed.firebaseapp.com',
  projectId: 'for-your-research-b57ed',
  storageBucket: 'for-your-research-b57ed.appspot.com',
  messagingSenderId: '493110771688',
  appId: '1:493110771688:web:e7d47ef4b45b8a5ce56e5d',
  measurementId: 'G-MBVTY8XC9R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Error setting persistence:', error);
});

export { app, auth };
