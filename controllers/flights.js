const res = require('express/lib/response');
const Flight = require('../models/flight')

const newFlight = (req, res) => {
	res.render('flights/new');
};

const index = (req, res) => {
	Flight.find({}, (err, flights) => {
		res.render('flights/index', {
			flights
		});
	});
};

const create = (req, res) => {
	const flight = new Flight(req.body);
	flight.save(function(err) {
		if (err) return res.render('flights/new');
		console.log(flight);
		res.redirect('flights/index')
	})
}

module.exports = {
	new: newFlight,
	index,
	create
};
