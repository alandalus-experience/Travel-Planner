import React, { Fragment } from 'react';

import Card from './Card';

const PastTrips = ({ trips }) => (
    <Fragment>
        {
            trips.map((trip, idx) => (
                <Card key={idx} trip={trip}/>
            ))
        }
    </Fragment>
)



export default PastTrips;