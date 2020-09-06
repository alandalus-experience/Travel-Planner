import Head from 'next/head'
import React from 'react'

import MainNav from '../components/Navigation/MainNav'

// Left it here for future use
// import styles from '../styles/Home.module.scss'

//Back-end routing
// import API from './api/api';

function Home() {
  return (
    <>
      <Head>
          <title>Travel Planner - Home</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNav />
      <h1>Welcome to the home page!!!</h1>
    </>
  )
}

export default Home

