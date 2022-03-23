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

const show = (req, res) => {
	Flight.findById(req.params.id, (err, flight) => {
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

// const todayDatePlusOne = new Date(new Date().setFullYear(new Date().getFullYear() + 1)) 

module.exports = {
	new: newFlight,
	show,
	index,
	create,
};


{/* <input value={todayDatePlusOne}></input> */}
