const Manager = require('../models/manager.model');
const Golf = require('../models/golf.model');

//CREER UN MANAGER
exports.create = (req,res) => {

	if(req.body.golf_id){
		Golf.findById(req.body.golf_id)
			.then(golf =>{
				if(golf.manager==false){
					const manager = new Manager({
						name: req.body.name,
						surname: req.body.surname,
						email: req.body.email,
						telephone: req.body.telephone,
				        golf: true,
				        golf_id: req.body.golf_id
			        })					
				}
				else{
					res.send("Golf has already a manager")
				}
			})
		.catch(err =>{
			res.status(500).send({
				message:err.message || "Some error occured when finding golf."
			})
		})
	}
	else{
		const manager = new Manager({
			name: req.body.name,
			surname: req.body.surname,
			email: req.body.email,
			telephone: req.body.telephone,
	        golf: false
	        
		})
		manager.save().then(data=>{
			res.send(data);
		}).catch(err =>{
			res.status(500).send({
				message: err.message
			})
		})		
	}
}

// SUPPRIMER UN MANAGER
exports.findOneAndRemove = (req, res) => {
	Manager.findOneAndRemove({_id:req.params.id})
	.then(manager =>{
		res.send("Remove Sucess")
	})
	.catch(err=>{
		res.status(500).send({
			message:err.message || "Error"
		})
	})
}

// METTRE A JOUR UN MANAGER
exports.findOneAndUpdate = (req,res) => {
	Manager.findOneAndUpdate( {_id:req.params.id}, req.body)
	.then(manager =>{
		res.send("Update Succes");
	})
	.catch(err =>{
		res.status(500).send({
			message:err.message || "Some error occured when finding manager."
		})
	})
}

// LIRE UN MANAGER
exports.findById = (req,res) => {
	Manager.findById( req.params.id )
	.then(manager =>{
		res.send(manager);
	})
	.catch(err =>{
		res.status(500).send({
			message:err.message || "Some error occured when finding manager."
		})
	})
}

// LIRE TOUS LES MANAGERS
exports.findAll = (req, res) => {
	Manager.find()
	.then(managers =>{
		res.send(managers);
	})
	.catch(err => {
		res.status(500).send({
			message:err.message || "Some error occured when finding managers."
		})
	})
}