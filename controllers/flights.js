const res = require('express/lib/response');
mongoose = require('mongoose');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

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
    Flight.findById(req.params.id, (err, flight) => {
        Ticket.find({flight: flight._id}, (err, tickets) => {
            console.log(tickets);
            res.render('flights/show', {flight, tickets})
          });
    })
}

const create = (req, res) => {
	const flight = new Flight(req.body);
	flight.save((err) => {
		if (err) return res.render('flights/new');
		console.log(flight);
		res.redirect('flights/index')
	})
}

module.exports = {
	new: newFlight,
	show,
	index,
	create,
};
