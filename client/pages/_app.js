// React Modules
import React, { useEffect } from 'react';

// Redux modules
import { wrapper } from '../redux/store';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/userActions';

// Other Imports
import firebase from '../utils/firebase';

// Global styles
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      user
        ? dispatch(
            loginSuccess({
              uid: user.uid,
              email: user.email,
              emailVerified: user.emailVerified,
              name: user.displayName
            })
          )
        : dispatch(loginSuccess(null));
    });
    return () => {
      unsub();
    };
  });
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
