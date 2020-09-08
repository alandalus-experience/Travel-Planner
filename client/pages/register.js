// NextJS modules
import Head from 'next/head'

// React modules
import React from 'react';
import { useForm } from 'react-hook-form';

// Components
import MainNav from '../components/Navigation/MainNav';

// Other Imports
import { registerUser } from '../utils/firebase';
import { formValidators } from '../utils/formValidators';
import { onError } from '../utils/formErrors';



function RegisterUser() {

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    registerUser(data.Email, data.Password)
  }

  // const onError = (errors) => {

  //   if (errors.Email) {
  //     if(errors.Email?.type === "required") {
  //       errors.Email.message = 'Email field cannot be empty';
  //     } else if(errors.Email?.type === "pattern") {
  //       errors.Email.message = 'Email should look like this: myemail@example.com'
  //     }
  //   }
    
  //   if (errors.Password) {
  //     if (errors.Password?.type === "required") {
  //       errors.Password.message = "Password can\'t be empty"
  //     } else if (errors.Password?.type === "minLength") {
  //       errors.Password.message = "Password must be more than 8 characters"
  //     }  else if (errors.Password?.type === "maxLength") {
  //       errors.Password.message = "Password must be less than 256 characters"
  //     }
  //   }
    
  //   if (errors.Password2?.type === "validate") {
  //     console.log(errors.password2);
  //     errors.Password2.message = "Passwords don't match"
  //   }
    
  //   return errors
  // }

  return (
    <>
    <Head>
      <title>Travel Planner - Register</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainNav />
    {/* TODO: Form has to become a component and depending on the number input fields should render login or register pages accordingly*/}
    <form onSubmit={handleSubmit(onSubmit, onError)}>

      <input type="text" placeholder="Email" name="Email" ref={register(formValidators.input.email)} />
      {errors.Email ? <span>{errors.Email.message}</span> : null}

      <input type="password" placeholder="Password" name="Password" ref={register(formValidators.input.password)} />
      {errors.Password ? <span>{errors.Password.message}</span> : null}

      <input type="password" placeholder="Confirm Password" name="Password2" ref={register({validate: (value) => formValidators.input.passwordConfirm(value, watch)})} />
      {errors.Password2 ? <span>{errors.Password2.message}</span> : null}
      <input type="submit" value="Register" />
    </form>
    </>
  );
}

export default RegisterUser;