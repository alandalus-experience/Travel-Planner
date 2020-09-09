// NextJS modules
import Head from 'next/head'

// React modules
import React from 'react';

// Components
import MainNav from '../components/Navigation/MainNav';
import UserForm from '../components/User/UserForm';

function LoginUser() {

  return (
    <>
      <Head>
        <title>Travel Planner - Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNav />
      <UserForm />
    </>
  );
}

export default LoginUser;