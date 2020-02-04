const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/jwt.config');

exports.create = (req,res) => {
	let hashedPassword = bcrypt.hashSync(req.body.password, 8);
	const admin = new Admin({
		name: req.body.name,
		surname: req.body.surname,
		role: req.body.role,
		password: hashedPassword,
		email: req.body.email,
		admin: req.body.admin
	})
	admin.save().then(data=>{
		let adminToken = jwt.sign(
			{
				id: admin.email, 
				admin: admin.admin
			},
			config.secret,
			{
				expiresIn: 86400
			}
		)
		res.send({
			admin: true,
			token: adminToken,
			body: {
				email: data.email,
				name: data.name,
				password: data.password
			}
		});
	}).catch(err =>{
		res.status(500).send({
			message: err.message
		})
	})
}

// Connecter un admin 
exports.login = (req,res) => {

	// requete -> findOne
	// bcrypt.compareSync(motdepasse envoyé, mot de passe en base de donnée);

	//etape1: rechercher en base le user avec le mail
	//etape2: vérifier si mot pas de passe reçu = mot de passe en base
	//etape3 : générer un nouveau token et on l'envoie dans la reponse
	Admin.findOne( {email: req.body.email}, (err, admin) =>{
		if(err){
			console.log(err)
		}
		else{
			if(bcrypt.compareSync(req.body.password, admin.password)){
				let adminToken = jwt.sign(
								{
								id: admin.email, 
								admin: admin.admin
								},
								config.secret,
								{
									expiresIn: 86400
								}
							)
							res.send({
								admin: true,
								token: adminToken
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
	Admin.findOne({email: req.body.email},
		function(err, admin){
			// si aucun user
			if(!admin) return res.status(404).send("No admin found");
			//comparaisons des mdp
			let passwordIsValid = bcrypt.compareSync(req.body.password, admin.password);
			//check si la comparaison est True
			if(!passwordIsValid) return res.status(401).send({
				admin: false,
				token: null
			});
			//On genere le token grace à la méthode sign
			let token = jwt.sign({
				id: admin._id,
				admin: admin.admin,
				data: admin
			},
			config.secret, {
				expiresIn: 86400
			}
			);
			res.status(200).send({
				admin: true,
				token: token
			})
		}
	)
}