var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations')

router.post('/flights/:id/details', destinationsCtrl.create);

module.exports = router;
