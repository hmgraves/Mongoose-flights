const res = require('express/lib/response');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

const create = (req, res) => {
	Flight.findById(req.params.id, (err, flight) => {
		flight.destinations.push(req.body);
		flight.save((err) => {
			res.redirect(`/flights/${flight._id}`);
		});
	});
};

// const show = (req, res) => {
// 	Ticket.findById(req.params.id, (err, ticket) => {
// 		res.render(`/flights/${flight._id}/show`);
// 	});
// }

module.exports = {
	create,
	// show
};