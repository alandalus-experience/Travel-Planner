// Axios
import API from "./api";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
import {firebaseConfig} from "../config/firebaseConfig";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// import Router from 'next/router'
 
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//////////////////////////////
// Email/Password functions //
//////////////////////////////

export const registerUser = async (email, password, verifyEmail = true) => {
  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
    // console.log(user.user)
    const response = await API.post(`/users/register`, user.user)
    if(verifyEmail) {
      if(response.status === 201) sendEmailVerificationLink();
    }
  } catch (error) {
    handleError(error)
  }
}

export const loginUser = async (email, password) => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    const response = await API.post(`/users/login`, user.user)
    console.log(response.data.message);
  } catch (error) {
    handleError(error)
  }
};

export const logoutUser = async () => {
  try {
    await firebase.auth().signOut()
    console.log("signed out")
  } catch (error) {
    handleError(error)
  }
};

/////////////////////////////
// Email sending Functions //
/////////////////////////////

export const sendPasswordResetLink = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    console.log("email sent")
  } catch (error) {
    handleError(error)
  }
};

export const sendEmailVerificationLink = async () => {
  try {
    await firebase.auth().currentUser.sendEmailVerification()
    console.log("verification mail sent")
  } catch (error) {
    handleError(error)
  }
};

////////////////////////////////////
// Third Party provider functions //
////////////////////////////////////

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters( {'prompt': 'select_account'} );


const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({'display': 'popup'});

export const SignInWithFacebook = async () => {
  try {
    const user = await firebase.auth().signInWithPopup(facebookProvider)
    await API.post(`/users/register`, user.user)
  } catch (error) {
    handleError(error)
  }
export const SignInWithGoogle = async () => {
  try {
    const user = await firebase.auth().signInWithPopup(googleProvider)
    await API.post(`/users/register`, user.user)
  } catch (error) {
    handleError(error)
  }
}

///////////////////
// Error Handler //
///////////////////

const handleError = (error) => {
  console.log(error);
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log('Error code: ', errorCode);
  console.log('Error message: ', errorMessage);
}