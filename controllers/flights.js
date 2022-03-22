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

function show(req, res) {
	Flight.findById(req.params.id, function (err, flight) {
		res.render('flights/show', { title: 'Flight Detail', flight });
	});
}

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
	show,
	index,
	create
};
