// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9435E-4iQgmmkddhUtgTn3Kr-LD5GGuI",
  authDomain: "karan-4649d.firebaseapp.com",
  projectId: "karan-4649d",
  storageBucket: "karan-4649d.appspot.com",
  messagingSenderId: "411550901126",
  appId: "1:411550901126:web:77cefbd3a0c2681c0a4207",
    measurementId: "G-HV9Q8HP0N2"

};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig)

var db = firebase.firestore()
var storageRef = firebase.storage()
var provider = new firebase.auth.GoogleAuthProvider();
var auth = firebase.auth()


export { db, storageRef, provider, auth }






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB9435E-4iQgmmkddhUtgTn3Kr-LD5GGuI",
//   authDomain: "karan-4649d.firebaseapp.com",
//   projectId: "karan-4649d",
//   storageBucket: "karan-4649d.appspot.com",
//   messagingSenderId: "411550901126",
//   appId: "1:411550901126:web:77cefbd3a0c2681c0a4207",
//   measurementId: "G-HV9Q8HP0N2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// firebase.initializeApp(firebaseConfig)

// var db = firebase.firestore()
// var storageRef = firebase.storage()
// var provider = new firebase.auth.GoogleAuthProvider();
// var auth = firebase.auth()


// export { db, storageRef, provider, auth }