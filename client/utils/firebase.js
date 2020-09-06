// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
import {firebaseConfig} from "../config/firebaseConfig";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
 
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const registerUser = (email, password) => {
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

