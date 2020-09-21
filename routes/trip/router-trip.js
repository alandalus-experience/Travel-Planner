const express = require('express');

const { createTrip, addUserToTrip } = require('../../api/controllers/controller-trip');

const router = express.Router();

router.route('/create').post(createTrip);
router.route('/adduser').post(addUserToTrip);

module.exports = router;