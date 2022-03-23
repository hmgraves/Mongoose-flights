const res = require('express/lib/response');
const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


const newTicket = (req, res) => {
	Ticket.findById(req.params.id, (err, ticket) => {
		res.render('tickets/new');
	});
};

module.exports = {
	new: newTicket
};