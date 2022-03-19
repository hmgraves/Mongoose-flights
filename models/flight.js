const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

		}
	
});

module.exports = mongoose.model('Flight', flightSchema);