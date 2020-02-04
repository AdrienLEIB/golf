const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/jwt.config');

exports.create = (req,res) => {
	let hashedPassword = bcrypt.hashSync(req.body.password, 8);
	const auth = new Auth({
		email: req.body.email,
		password: hashedPassword,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		admin: req.body.admin
	})
	auth.save().then(data=>{
		let authToken = jwt.sign(
			{
			id: auth.email, 
			admin: auth.admin
			},
			config.secret,
			{
				expiresIn: 86400
			}
		)
		res.send({
			auth: true,
			token: authToken,
			body: {
				email: data.email,
				firstname: data.firstname,
				password: data.password
			}
		});
	}).catch(err =>{
		res.status(500).send({
			message: err.message
		})
	})
}

// Connecter un auth
exports.login = (req,res) => {

	// requete -> findOne
	// bcrypt.compareSync(motdepasse envoyé, mot de passe en base de donnée);

	//etape1: rechercher en base le user avec le mail
	//etape2: vérifier si mot pas de passe reçu = mot de passe en base
	//etape3 : générer un nouveau token et on l'envoie dans la reponse
	Auth.findOne( {email: req.body.email}, (err, auth) =>{
		if(err){
			console.log(err)
		}
		else{
			if(bcrypt.compareSync(req.body.password, auth.password)){
				let authToken = jwt.sign(
								{
								id: auth.email, 
								admin: auth.admin
								},
								config.secret,
								{
									expiresIn: 86400
								}
							)
							res.send({
								auth: true,
								token: authToken
							}
						);	
			}
			else{
				res.status(401).send("Password Invalid");
			}
		}
	})
}

exports.login2 = (req,res) => {
	Auth.findOne({email: req.body.email},
		function(err, auth){
			// si aucun user
			if(!auth) return res.status(404).send("No auth found");
			//comparaisons des mdp
			let passwordIsValid = bcrypt.compareSync(req.body.password, auth.password);
			//check si la comparaison est True
			if(!passwordIsValid) return res.status(401).send({
				auth: false,
				token: null
			});
			//On genere le token grace à la méthode sign
			let token = jwt.sign({
				id: auth._id,
				admin: auth.admin,
				data: auth
			},
			config.secret, {
				expiresIn: 86400
			}
			);
			res.status(200).send({
				auth: true,
				token: token
			})
		}
	)
}