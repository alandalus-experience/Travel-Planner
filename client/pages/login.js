// NextJS modules
import Head from 'next/head'

// React modules
import React from 'react';
import { useForm } from 'react-hook-form';

// Components
import MainNav from '../components/Navigation/MainNav';
import UserForm from '../components/User/UserForm';

// Redux Imports
import { useDispatch } from 'react-redux';
import { googleLogin } from '../redux/actions/userActions';

// Styles
import styles from "../styles/Login.module.scss";


function LoginUser() {
  const dispatch = useDispatch();
  return (
    <>
    <Head>
      <title>Travel Planner - Login</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainNav />
    {/* TODO: Form has to become a component and depending on the number input fields should render login or register pages accordingly*/}
    <div className={styles['login-container']}>
      <div className={styles['login']}>
          <div className={styles['login-header']}>Welcome Back</div>
          <p className={styles['form-helper-text']}>EASY SIGNIN</p>
          <div className={styles['third-party-signin']}>
              <button onClick={() => dispatch(googleLogin())}>GOOGLE</button>
              <button onClick={() => console.log("facebook login not enabled yet")}>FACEBOOK</button>
          </div>
          <p className={styles['form-helper-text']}>- OR USING EMAIL -</p>
          <div className={styles['email-sign-in']}>
          <UserForm />
          </div>
          <p className={styles['footer-text']}>
              Don't have an account?
              <a href='/register'><span className={styles['login-link']}> Register!</span></a>
          </p>
      </div>
  </div>
    </>
  );
}

export default LoginUser;