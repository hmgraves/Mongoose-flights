var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

router.get('/new', flightsCtrl.new);
router.get('/index', flightsCtrl.index);
router.post('/', flightsCtrl.create);

module.exports = router;
