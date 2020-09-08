// NextJS modules
import Head from 'next/head'

// React modules
import React from 'react';
import { useForm } from 'react-hook-form';

// Components
import MainNav from '../components/Navigation/MainNav';

// Other Imports
import { loginUser, SignInWithGoogle } from '../utils/firebase';
import { formValidators } from '../utils/formValidators';
import { onError } from '../utils/formErrors';

// Styles
import styles from "../styles/Login.module.scss";

function LoginUser() {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    loginUser(data.Email, data.Password)
  }

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
          <div className={styles['third-party-signin']}>
              <p className={styles['form-helper-text']}>EASY SIGNIN</p>
              <button onClick={SignInWithGoogle}>GOOGLE</button>
              <button onClick={() => console.log("facebook login not enabled yet")}>FACEBOOK</button>
          </div>
          <p className={styles['form-helper-text']}>- OR USING EMAIL -</p>
          <div className={styles['email-sign-in']}>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div>
                <input type="text" placeholder="Email" name="Email" ref={register(formValidators.input.email)} />
                {errors.Email ? <span>{errors.Email.message}</span> : null}
              </div>
              <div>
                <input type="password" placeholder="Password" name="Password" ref={register(formValidators.input.password)} />
                {errors.Password ? <span>{errors.Password.message}</span> : null}
              </div>
              <div>
                <input type="submit" value="Sign In" />
              </div>
            </form>
          </div>
          <p className={styles['footer-text']}>
              Dont have an account? <a href='/register'><span className={styles['login-link']}>Register!</span></a>
          </p>
      </div>
  </div>

    </>
  );
}

export default LoginUser;