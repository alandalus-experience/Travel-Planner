// NextJS modules
import Head from 'next/head'

// React modules
import React from 'react';

// Components
import MainNav from '../components/Navigation/MainNav';
import UserForm from '../components/User/UserForm';

// Other Imports
import { SignInWithGoogle } from '../utils/firebase';

// Styles
import styles from "../styles/Login.module.scss";


function RegisterUser() {

  return (
    <>
    <Head>
      <title>Travel Planner - Register</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainNav />
    {/* TODO: Form has to become a component and depending on the number input fields should render login or register pages accordingly*/}
    <div className={styles['login-container']}>
      <div className={styles['login']}>
        <div className={styles['login-header']}>Register</div>
        <p className={styles['form-helper-text']}>EASY SIGNIN</p>
        <div className={styles['third-party-signin']}>
          <button onClick={SignInWithGoogle}>GOOGLE</button>
          <button onClick={() => console.log("facebook login not enabled yet")}>FACEBOOK</button>
        </div>
        <p className={styles['form-helper-text']}>- OR USING EMAIL -</p>
        <UserForm />
        <p className={styles['footer-text']}>
          Already have an account? 
          <a href='/login'><span className={styles['login-link']}> Login!</span></a>
        </p>
      </div>
    </div>
    </>
  );
}

export default RegisterUser;