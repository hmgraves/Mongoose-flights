const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const ticket = require('./ticket');
const Schema = mongoose.Schema;

const todayDatePlusOne = new Date(new Date().setFullYear(new Date().getFullYear() + 1)) 

const destinationSchema = new Schema({
	airport: {
		type: String,
		enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
	},
	arrival: {
		type: Date,
	}
})

const flightSchema = new Schema({
	airline: {
		type: String,
		enum: ['Southwest', 'American', 'United']
	},
	airport: {
		type: String,
		enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
	},
	flightNo: {
		type: Number,
		min: 10,
		max: 9999
	},
	departs: {
		type: Date,
		default: () => {
			const oneYear = new Date();
			return oneYear.setFullYear(oneYear.getFullYear + 1).toISOString();
		}
	},
	destinations: [destinationSchema]
	
});

module.exports = mongoose.model('Flight', flightSchema);