// Axios
import API from "./api";
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

//////////////////////////////
// Email/Password functions //
//////////////////////////////

export const registerUser = (email, password, verifyEmail = true) => {
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(res => {
    console.log(res);
    API.post(`/users/register`, {res})
  })
  .then(() => {
    if(verifyEmail) {
      sendEmailVerificationLink()
    }
  })
  .catch((error) => {
    if (error.response) {
        console.log(error.response.data);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
  });
}

export const loginUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => console.log(res.user))
    .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error code: ', errorCode);
        console.log('Error message: ', errorMessage);
    });
};

export const logoutUser = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log("signed out"))
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error code: ', errorCode);
      console.log('Error message: ', errorMessage);
    });
};


/////////////////////////////
// Email sending Functions //
/////////////////////////////

export const sendPasswordResetLink = (email) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => console.log("email sent"))
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error code: ', errorCode);
      console.log('Error message: ', errorMessage);
    })
};

export const sendEmailVerificationLink = () => {
  firebase
    .auth()
    .currentUser
    .sendEmailVerification()
    .then(() => console.log("verification mail sent"))
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error code: ', errorCode);
      console.log('Error message: ', errorMessage);
    });
};

////////////////////////////////////
// Third Party provider functions //
////////////////////////////////////

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters( {'prompt': 'select_account'} );

export const SignInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res => API.post(`/users/register`, {res}))
    .catch((error) => {
      if (error.response) {
          console.log(error.response.data);
      } else if (error.request) {
          console.log(error.request);
      } else {
          console.log('Error', error.message);
      }
    });
}