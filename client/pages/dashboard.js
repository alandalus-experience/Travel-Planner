// NextJS modules
import Head from 'next/head';

import React from 'react';

import Router from 'next/router';

import MainNav from '../components/Navigation/MainNav';

/* React Icons */
import { FaPlane, FaCompass } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

import styles from '../styles/dashboard.module.scss';

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Travel Planner - Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <MainNav />
            <div 
                className={styles['dashboard-container']}
                style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2016/02/19/10/41/travel-1209355_1280.jpg')`}}
            >
                {/* Three Icons Container */}
                <div className={styles['icons-items']}>
                    {/* New Trip */}
                    <div className={styles['icons-item']}>
                        <div className={styles['icon-container']}><FaPlane /></div>
                        <span className={styles['icon-title']}>New Trip</span>
                    </div>
                    {/* My Trips */}
                    <div className={styles['icons-item']}>
                        <div 
                            className={styles['icon-container']}
                            onClick={() => Router.push("/trips/overview")}
                        >
                            <FaCompass />
                        </div>
                        <span className={styles['icon-title']}>My Trips</span>
                    </div>
                    {/* Settings */}
                    <div className={styles['icons-item']}>
                        <div className={styles['icon-container']}><FiSettings /></div>
                        <span className={styles['icon-title']}>Settings</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;