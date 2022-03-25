const res = require('express/lib/response');
const mongoose = require('mongoose');
const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

const newTicket = (req, res) => {
	res.render('tickets/new', {flight: req.params.id})
};

const create = (req, res) => {
	console.log('this works')
};

module.exports = {
	new: newTicket,
	create
};