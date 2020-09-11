// React modules
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

// Form Imports
import { formValidators } from '../../utils/formValidators';
import { onError, authErrors } from '../../utils/formErrors';

// Styles
import styles from "../../styles/Login.module.scss";

// Redux Imports
import { useDispatch } from 'react-redux';
import { emailSignup, emailLogin, googleLogin } from '../../redux/actions/userActions';

const UserForm = (props) => {

  const router = useRouter();
  const dispatch = useDispatch();

  // React-hook-form functions
  const { register, handleSubmit, errors, watch } = useForm();

  // Handles form submission
  const onSubmit = async (data) => {
    if(router.pathname === "/user/register") {
      console.log("register");
      //Remove the third argument or change it to true if we want to send the verification email
      // I added a default true as the third argument
      dispatch(emailSignup(data.Email, data.Password, false));
    } else {
      console.log("login");
      dispatch(emailLogin(data.Email, data.Password));
    }
  }

  return (
    <div className={styles['login-container']}>
      <div className={styles['login']}>
        <div className={styles['login-header']}>{router.pathname === "/user/register" ? "Register" : "Welcome Back"}</div>
        <p className={styles['form-helper-text']}>EASY SIGNIN</p>
        <div className={styles['third-party-signin']}>
          <button onClick={() => dispatch(googleLogin())}>GOOGLE</button>
          <button onClick={() => console.log("facebook login not enabled yet")}>FACEBOOK</button>
        </div>
        <p className={styles['form-helper-text']}>- OR USING EMAIL -</p>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <input type="text" placeholder="Email" name="Email" ref={register(formValidators.input.email)} />
            {errors?.Email?.message && <p className={styles["user-error"]}>{errors.Email.message}</p>}
          </div>
          <div>
            <input type="password" placeholder="Password" name="Password" ref={register(formValidators.input.password)} />
            {errors?.Password?.message && <p className={styles["user-error"]}>{errors.Password.message}</p>}
          </div>
            { router.pathname === "/user/register" ? <input type="password" placeholder="Confirm Password" name="Password2" ref={register({validate: (value) => formValidators.input.passwordConfirm(value, watch)})} /> : null }
            {errors?.Password2?.message && <p className={styles["user-error"]}>{errors.Password2.message}</p>}
          <div>
            <input type="submit" value={ router.pathname === "/user/register" ? "Register" : "Login"} />
          </div>
        </form>
        <p className={styles['footer-text']}>
        {router.pathname === "/user/register" ? "Already have an account?" : "Don't have an account?"}
          <a href={router.pathname === "/user/register" ? "/user/login" : "/user/register"}><span className={styles['login-link']}> {router.pathname === "/user/register" ? "Login" : "Register"}</span></a>
        </p>
        <p className={styles['footer-text-forgot']}>
          <a href={router.pathname === "/user/register" ? null : "/user/forgot"}><span className={styles['login-link']}> {router.pathname === "/user/register" ? null : "Forgot your password?"}</span></a>
        </p>
      </div>
    </div>
  )
}
  
export default UserForm