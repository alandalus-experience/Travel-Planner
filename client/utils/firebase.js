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
  .then(res => console.log(res.user))
  .catch(function(error) {
    //TODO: Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

export const loginUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => console.log(res.user))
    .catch(err => {
      console.log(err);
    });
};

export const logoutUser = () => {
  // to-do
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters( {'prompt': 'select_account'} );

export const SignInWithGoogle = () => firebase.auth().signInWithPopup(googleProvider);