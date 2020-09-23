const express = require('express');

const { createTrip, addUserToTrip, deleteTrip } = require('../../api/controllers/controller-trip');

const router = express.Router();

router.route('/create').post(createTrip);
router.route('/delete').delete(deleteTrip);
router.route('/adduser').patch(addUserToTrip);

module.exports = router;
