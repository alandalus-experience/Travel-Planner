// React modules
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

// Other Imports
import { registerUser, loginUser } from '../../utils/firebase';
import { formValidators } from '../../utils/formValidators';
import { onError } from '../../utils/formErrors';

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
  )
}
  
export default UersForm