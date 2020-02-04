const jwt = require('jsonwebtoken');
const config = require('../configs/jwt.config');

function verifyToken(req, res, next){
	//1 ème étape : récuperer le token
	let token = req.headers['x-access-token'];
	if(!token){
		return res.status(400).send({
			auth: false,
			message: "missing token"
		})
	}
	jwt.verify(token, config.secret, function(err,decoded){
		if(err){
			console.log(err);
			return res.status(401).send({
				auth:false,
				message: "no authorized"
			})
		}
		next();
	})
}
module.exports = verifyToken;