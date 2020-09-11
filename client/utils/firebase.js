// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
import {firebaseConfig} from "../config/firebaseConfig";
import Router from 'next/router'

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
 
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const registerUser = (email, password, verifyEmail = true) => {
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((res) => {})
  .then(() => {
    if(verifyEmail) {
      sendEmailVerificationLink()
    }
  })
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
    .then(firebase.auth().currentUser.getIdToken(true)
    .then(function(idToken) {
      //TODO: Send idToken to the back-end
      console.log(idToken);
    }))
    .catch(function(error) {
      console.log(error);
    });
};

export const logoutUser = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log("signed out"))
    .catch(err => console.log(err));
};

export const sendPasswordResetLink = (email) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => console.log("email sent"))
    .catch(err => {
      console.log(err);
    })
};

export const sendEmailVerificationLink = () => {
  firebase
    .auth()
    .currentUser
    .sendEmailVerification()
    .then(() => console.log("verification mail sent"))
    .catch(err => console.log(err));
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters( {'prompt': 'select_account'} );

export const SignInWithGoogle = () => firebase.auth().signInWithPopup(googleProvider);