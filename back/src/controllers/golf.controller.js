const Golf = require('../models/golf.model');
const Manager = require('../models/manager.model');

// CREER UN GOLF
exports.create = (req,res) => {

	if(req.body.manager_id){
	    Manager.findById(req.body.manager_id)
	    .then(manager =>{
	    	if(!manager.golf){
				const golf = new Golf({
						title: req.body.title,
						latitude: req.body.latitude,
						longitude: req.body.longitude,
						description: req.body.description,
						manager_id: req.body.manager_id,
						manager: true
					})
					golf.save().then(data=>{

						Manager.findOneAndUpdate( {_id:req.body.manager_id}, {golf_id:data._id , golf:true})
							.then(manager =>{
								res.send(data);
							})
							.catch(err =>{
								res.status(500).send({
									message:err.message || "Some error occured when finding manager."
							})
						})
					}).catch(err =>{
						res.status(500).send({
							message: err.message
					})
					res.send(data);
				})
			}else{
				res.status(500).send(" Manager was used")
			}   
	    })
	    .catch(err=> {
	        return res.status(500).send({
	            message:err.message
	        })
	    })    	
	}
	else{
		res.status(400).send("Forgot Manager !")
	}
}


// METTRE A JOUR UN GOLF
exports.findOneAndUpdate = (req,res) => {

	if(!req.body.manager){
		if(req.body.manager_id){
			Manager.findById(req.body.manager_id)
			.then(manager =>{
					if(!manager.golf){
						Golf.findOneAndUpdate( {_id:req.params.id}, req.body)
						.then(golf =>{
							Manager.findOneAndUpdate( {_id:req.body.manager_id}, {golf_id:golf._id , golf:true})
								.then(manager =>{
									res.send(golf);
								})
								.catch(err =>{
									res.status(500).send({
										message:err.message || "Some error occured when finding manager."
								})
							})				
						})
						.catch(err =>{
							res.status(500).send({
								message:err.message || "Some error occured when finding golf."
							})
						})						
					}
					else{
						res.status(500).send("Sorry Manager was used")
					}
			})
		}
		else{
			Golf.findOneAndUpdate( {_id:req.params.id}, req.body)
			.then(golf =>{
				res.send("Update Succes");
			})
			.catch(err =>{
				res.status(500).send({
					message:err.message || "Some error occured when finding golf."
				})
			})
		}
	}
}

// SUPPRIMER UN GOLF
exports.findOneAndRemove = (req, res) => {
	Golf.findOneAndRemove({_id:req.params.id})
	.then(golf =>{
		if(golf.manager_id){
			Manager.findOneAndUpdate( {_id:golf.manager_id}, {golf_id:null, golf:false})
				.then(manager =>{
					
				})
				.catch(err =>{
					res.status(500).send({
						message:err.message || "Some error occured when finding manager."
				})
			})		
		}
		res.send("Remove Sucess")
	})
	.catch(err=>{
		res.status(500).send({
			message:err.message || "Error"
		})
	})
}

// LIRE UN GOLF
exports.findById = (req,res) => {

	Golf.findById( req.params.id )
	.then(golf =>{
		res.send(golf);
	})
	.catch(err =>{
		res.status(500).send({
			message:err.message || "Some error occured when finding golf."
		})
	})
}

// LIRE TOUS LES GOLFS

exports.findAll = (req, res) => {
	Golf.find()
	.then(golfs =>{
		res.send(golfs);
	})
	.catch(err => {
		res.status(500).send({
			message:err.message || "Some error occured when finding golfs."
		})
	})
}


