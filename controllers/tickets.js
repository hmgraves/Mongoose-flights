const res = require('express/lib/response');
const mongoose = require('mongoose');
const Ticket = require('../models/ticket');

const newTicket = (req, res) => {
	res.render('tickets/new', {flight: req.params.id})
};

const create = (req, res) => {
	console.log('ticket create called')
	console.log(req.body)
	console.log(req.params)
	const seat = req.body.seat;
	const price = req.body.price;
	const flight = req.params.id;
	const ticket = new Ticket({seat, price, flight});
	ticket.save((err) => {
		if (err) {
			console.log('error')
			return res.render('tickets/new', {flight: req.params.id});
		}
		console.log(`tickets are ${ticket}`);
		res.redirect(`/flights/${req.params.id}`)
	})
}

module.exports = {
	new: newTicket,
	create
};