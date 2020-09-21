const express = require('express');

const { createTrip } = require('../../api/controllers/controller-trip');

const router = express.Router();

router.route('/create').post(createTrip);

module.exports = router;