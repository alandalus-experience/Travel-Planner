// NextJS modules
import Head from 'next/head'

// React modules
import React from 'react';

// Components
import MainNav from '../../components/Navigation/MainNav';
import ForgotPassword from '../../components/User/ForgotPassword';



function Forgot_Password() {
  return (
    <>
      <Head>
        <title>Travel Planner - Forgot Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNav />
      <ForgotPassword />
    </>
  );
}

export default Forgot_Password;