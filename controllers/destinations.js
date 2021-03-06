const res = require('express/lib/response');
const Flight = require('../models/flight');

const create = (req, res) => {
	console.log('destinations called')
	Flight.findById(req.params.id, (err, flight) => {
		flight.destinations.push(req.body);
		flight.save((err) => {
			res.redirect(`/flights/${flight._id}`);
		});
	});
};

module.exports = {
	create
};