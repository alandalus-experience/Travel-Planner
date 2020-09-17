import Head from 'next/head';
import React from 'react';

import MainNav from '../components/Navigation/MainNav';

// Left it here for future use
// import styles from '../styles/Home.module.scss'

//Back-end routing
// import API from './api/api';

const Home = () => {
  return (
    <>
      <Head>
        <title>Travel Planner - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNav />
      <h1 style={{ textAlign: 'center' }}>App Overview</h1>
      <div
        className="text-container"
        style={{ margin: '0 10%', textAlign: 'justify', textJustify: 'inter-word' }}>
        <p>
          Users can create trips where they are able to add itineraries, make before you go todo
          lists, add reservation details, tickets, or any important information about the trip,
          track budgets of each spending. This will be the feature list for the MVP version, but
          more functionality will be added as we progress.
        </p>
      </div>
    </>
  );
};

export default Home;
