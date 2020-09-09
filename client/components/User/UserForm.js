// React modules
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

// Other Imports
import { registerUser, loginUser } from '../../utils/firebase';
import { formValidators } from '../../utils/formValidators';
import { onError } from '../../utils/formErrors';

// Other Imports
import { SignInWithGoogle } from '../../utils/firebase';

// Styles
import styles from "../../styles/Login.module.scss";

const UersForm = (props) => {

  const router = useRouter()

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    if(router.pathname === "/register") {
      console.log("register");
      registerUser(data.Email, data.Password)
    } else {
      console.log("login");
      loginUser(data.Email, data.Password)
    }
  }

  return (
    <div className={styles['login-container']}>
      <div className={styles['login']}>
        <div className={styles['login-header']}>{router.pathname === "/register" ? "Register" : "Welcome Back"}</div>
        <p className={styles['form-helper-text']}>EASY SIGNIN</p>
        <div className={styles['third-party-signin']}>
          <button onClick={SignInWithGoogle}>GOOGLE</button>
          <button onClick={() => console.log("facebook login not enabled yet")}>FACEBOOK</button>
        </div>
        <p className={styles['form-helper-text']}>- OR USING EMAIL -</p>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <input type="text" placeholder="Email" name="Email" ref={register(formValidators.input.email)} />
            {errors.Email ? <span>{errors.Email.message}</span> : null}
          </div>
          <div>
            <input type="password" placeholder="Password" name="Password" ref={register(formValidators.input.password)} />
            {errors.Password ? <span>{errors.Password.message}</span> : null}
          </div>
            { router.pathname === "/register" ? <input type="password" placeholder="Confirm Password" name="Password2" ref={register({validate: (value) => formValidators.input.passwordConfirm(value, watch)})} /> : null }
            {errors.Password2 ? <span>{errors.Password2.message}</span> : null}
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