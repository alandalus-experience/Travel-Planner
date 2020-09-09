// React modules
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

// Other Imports
import { formValidators } from '../../utils/formValidators';
import { onError } from '../../utils/formErrors';

// Redux Imports
import { useDispatch } from 'react-redux';
import { emailSignup, emailLogin } from '../../redux/actions/userActions';

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