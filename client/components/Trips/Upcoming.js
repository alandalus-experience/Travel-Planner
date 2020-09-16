import React, { Fragment } from 'react';

import Card from './Card';

const UpcomingTrips = ({ trips }) => (
    <Fragment>
        {
            trips.map((trip, idx) => (
                <Card key={idx} trip={trip}/>
            ))
        }
    </Fragment>
)


export default UpcomingTrips;