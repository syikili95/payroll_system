// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyD7n2YbrAqLH-AqgremKkxfDehh5djOcto",
//     authDomain: "payrollsystem-79b24.firebaseapp.com",
//     projectId: "payrollsystem-79b24",
//     storageBucket: "payrollsystem-79b24.appspot.com",
//     messagingSenderId: "892272290048",
//     appId: "1:892272290048:web:dcc78fbc21b8debbda2be5",
//     measurementId: "G-NJPC5BQWKT"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_API_KEY,
    storageBucket: process.env.REACT_APP_FIREBASE_API_KEY,
    messagingSenderId: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_API_KEY,
    measurementId: process.env.REACT_APP_FIREBASE_API_KEY
})

export default firebaseConfig;