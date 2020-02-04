const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
	name:{
        type: String,
        required: true	
	},
	surname:{
        type: String,
        required: true		
	},
	role:{
        type: String,
        required: true		
	},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 128
    },
    admin:{
    	type:Boolean
    }  	
});
module.exports = mongoose.model('Admin', adminSchema);