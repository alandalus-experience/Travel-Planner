// React modules
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

// Other Imports
import { formValidators } from '../../utils/formValidators';
import { onError, authErrors } from '../../utils/formErrors';

// Other Imports
import { SignInWithGoogle } from '../../utils/firebase';

// Styles
import styles from "../../styles/Login.module.scss";

// Redux Imports
import { useDispatch } from 'react-redux';
import { emailSignup, emailLogin, googleLogin } from '../../redux/actions/userActions';

const UersForm = (props) => {

  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    if(router.pathname === "/register") {
      console.log("register");
      dispatch(emailSignup(data.Email, data.Password));
    } else {
      console.log("login");
      dispatch(emailLogin(data.Email, data.Password));
    }
  }

  return (
    <div className={styles['login-container']}>
      <div className={styles['login']}>
        <div className={styles['login-header']}>{router.pathname === "/register" ? "Register" : "Welcome Back"}</div>
        <p className={styles['form-helper-text']}>EASY SIGNIN</p>
        <div className={styles['third-party-signin']}>
          <button onClick={() => dispatch(googleLogin())}>GOOGLE</button>
          <button onClick={() => console.log("facebook login not enabled yet")}>FACEBOOK</button>
        </div>
        <p className={styles['form-helper-text']}>- OR USING EMAIL -</p>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <input type="text" placeholder="Email" name="Email" ref={register(formValidators.input.email)} />
            {errors.Email ? <p className={styles["user-error"]}>{errors.Email.message}</p> : null}
          </div>
          <div>
            <input type="password" placeholder="Password" name="Password" ref={register(formValidators.input.password)} />
            {errors.Password ? <p className={styles["user-error"]}>{errors.Password.message}</p> : null}
          </div>
            { router.pathname === "/register" ? <input type="password" placeholder="Confirm Password" name="Password2" ref={register({validate: (value) => formValidators.input.passwordConfirm(value, watch)})} /> : null }
            {errors.Password2 ? <p className={styles["user-error"]}>{errors.Password2.message}</p> : null}
          <div>
            <input type="submit" value={ router.pathname === "/register" ? "Register" : "Login"} />
          </div>
        </form>
        <p className={styles['footer-text']}>
        {router.pathname === "/register" ? "Already have an account?" : "Don't have an account?"}
          <a href={router.pathname === "/register" ? "/login" : "/register"}><span className={styles['login-link']}> {router.pathname === "/register" ? "Login" : "Register"}</span></a>
        </p>
      </div>
    </div>
  )
}
  
export default UersForm