const mongoose = require('mongoose');
const config = require('../configs/db.config');

exports.connect = () =>{
	let url = config.url;
	mongoose.connect(url,{
		useNewUrlParser : true,
		useUnifiedTopology: true
	}).then(
		() => {
			console.log('Succesfuly connect to database');
		}
	).catch(
		err => {
			console.log('could not connect to database', err);
			process.exit(-1);
		}
	)
}

