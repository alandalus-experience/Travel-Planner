const express = require('express');

const { createTrip, getTrips, addUserToTrip, removeUserFromTrip, deleteTrip } = require('../../api/controllers/controller-trip');

const router = express.Router();

router.route('/gettrips').post(getTrips);
router.route('/create').post(createTrip);
router.route('/delete').delete(deleteTrip);
router.route('/adduser').patch(addUserToTrip);
router.route('/removeuser').patch(removeUserFromTrip);

module.exports = router;
