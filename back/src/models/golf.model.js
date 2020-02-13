const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const golfSchema = new Schema({
	title:{
        type: String,
        required: true	
	},
	latitude:{
        type: Number,
        required: true		
	},
	longitude:{
        type: Number,
        required: true		
	},
    description: {
        type: String,
        required: true
    },
    manager_id: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Golf', golfSchema);