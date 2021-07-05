import firebase from "firebase/app";
import "firebase/auth";
// import app from "firebase/app";

console.log(process.env);

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBEsyCbw-PzsDRd4vrIaYNRewv3Li4bIDw",
  authDomain: "mmdb-auth.firebaseapp.com",
  projectId: "mmdb-auth",
  storageBucket: "mmdb-auth.appspot.com",
  messagingSenderId: "832474621606",
  appId: "1:832474621606:web:8bbb636211c7f7be913667",
  measurementId: "G-6PEDD4K62S",
});

// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// } else {
//   firebase.app();
// }

// class Firebase {
//   constructor() {
//     app.initializeApp(config);

//     this.auth = app.auth();
//   }
// }

export const auth = firebaseConfig.auth();
export default firebaseConfig;
