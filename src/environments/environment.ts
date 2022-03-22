// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'hollister-6d2fe',
    appId: '1:376143807520:web:fe4d8529de88d0ce1da845',
    databaseURL: 'https://hollister-6d2fe-default-rtdb.firebaseio.com',
    storageBucket: 'hollister-6d2fe.appspot.com',
    apiKey: 'AIzaSyCAM3r9YqRp5WfmKM1jYQlmM44fNq_37SA',
    authDomain: 'hollister-6d2fe.firebaseapp.com',
    messagingSenderId: '376143807520',
    measurementId: 'G-EJ2N3GNPJC',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAM3r9YqRp5WfmKM1jYQlmM44fNq_37SA",
  authDomain: "hollister-6d2fe.firebaseapp.com",
  databaseURL: "https://hollister-6d2fe-default-rtdb.firebaseio.com",
  projectId: "hollister-6d2fe",
  storageBucket: "hollister-6d2fe.appspot.com",
  messagingSenderId: "376143807520",
  appId: "1:376143807520:web:fe4d8529de88d0ce1da845",
  measurementId: "G-EJ2N3GNPJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);