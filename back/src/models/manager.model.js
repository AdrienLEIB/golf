const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({
	name:{
        type: String,
        required: true	
	},
	surname:{
        type: Float,
        required: true		
	},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    telephone: {
        type: String,
        required: true
    },
    golf:{
        type:Boolean
    },
    golf_id: {
        type: String
    }
);
module.exports = mongoose.model('Manager', managerSchema);