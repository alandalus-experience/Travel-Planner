// NextJS modules
import Head from 'next/head'

// React modules
import React from 'react';
import { useForm } from 'react-hook-form';

// Components
import MainNav from '../components/Navigation/MainNav';

// Other Imports
import { loginUser } from '../utils/firebase';
import { formValidators } from '../utils/formValidators';
import { onError } from '../utils/formErrors';

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
    <form onSubmit={handleSubmit(onSubmit, onError)}>

      <input type="text" placeholder="Email" name="Email" ref={register(formValidators.input.email)} />
      {errors.Email ? <span>{errors.Email.message}</span> : null}

      <input type="password" placeholder="Password" name="Password" ref={register(formValidators.input.password)} />
      {errors.Password ? <span>{errors.Password.message}</span> : null}

      <input type="submit" value="Register" />
    </form>
    </>
  );
}

export default LoginUser;