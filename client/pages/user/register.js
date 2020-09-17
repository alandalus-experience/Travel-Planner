// NextJS modules
import Head from 'next/head';
import Router from 'next/router';

// React modules
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Components
import MainNav from '../../components/Navigation/MainNav';
import UserForm from '../../components/User/UserForm';

const RegisterUser = () => {
  const user = useSelector((state) => state.user?.user);
  useEffect(() => {
    if (user) {
      Router.push('/dashboard');
    }
  });
  return (
    <>
      <Head>
        <title>Travel Planner - Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNav />
      <UserForm />
    </>
  );
};

export default RegisterUser;
