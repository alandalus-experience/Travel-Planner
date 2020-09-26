import { useState, Fragment } from 'react';

import MainMenu from '../../components/Navigation/MainNav';
import SwitchBar from '../../components/Trips/SwitchBar';

import UpcomingTrips from '../../components/Trips/Upcoming';
import PastTrips from '../../components/Trips/Past';
import EmptyMessage from '../../components/Trips/EmptyMessage';

/* Sample Data */
import TRIPS from '../../../data';

import styles from '../../styles/overview.module.scss';
import API from '../../utils/api';

const TripsOverview = () => {

	const [ content, showContent ] = useState('upcoming');

		// This it where you have to make the API call to get the actual data from the database
		// Everything is already set on the back-end so we only have to place the data where it has to be.
		// API.post('/trip/gettrips', user);

    /* Filtering TRIPS data */

    // Get all the trips which are dated later than now
    let upcomingTrips = TRIPS.filter(trip => ( (new Date(trip.firstDay).getTime()) > (new Date().getTime()) ));

    // Get all the trips which are dated earlier than now
    let pastTrips = TRIPS.filter(trip => ( (new Date(trip.lastDay).getTime()) < (new Date().getTime()) ));

    return (
        <Fragment>
            <MainMenu />
            <div className={styles['overview-container']}>

                {/* Switch Nav Bar */}
                {/* Change content by passing current page */}
                <SwitchBar
                    showContent={page => showContent(page)}
                />

                {/* Overview Content */}
                <article className={styles['overview-block']}>
                    {/* If there are no trips yet show empty message and suggest the user to visit New Trip page */}
                    { !TRIPS.length ? 
                        <EmptyMessage /> : 
                        (
                            content !== 'past' 
                            ? 
                            <UpcomingTrips trips={upcomingTrips} />
                            : 
                            <PastTrips trips={pastTrips} />
                        )
                    }
                </article>
            </div>
        </Fragment>
    )
};

export default TripsOverview;