const Golf = require('../models/golf.model');
const Manager = require('../models/manager.model');

// CREER UN GOLF
exports.create = (req,res) => {

	if("manager_id" in req.body){
	    Manager.findById(req.body.manager_id)
	    .then(manager =>{
	    	if(manager.golf_id==null){
				const golf = new Golf({
						title: req.body.title,
						latitude: req.body.latitude,
						longitude: req.body.longitude,
						description: req.body.description,
						manager_id: req.body.manager_id
					})
					golf.save().then(data=>{

						Manager.findByIdAndUpdate( {_id:req.body.manager_id}, {golf_id:data._id})
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

	console.log(req.body);

	if("manager_id" in req.body){
		if((req.body.manager_id == "") || (req.body.manager_id==null)){
			res.status(500).send("Golf can't without Manager");			
		}else{
			Golf.findById( req.params.id )
				.then(golf =>{
					if (req.body.manager_id==golf.manager_id){
						Golf.findByIdAndUpdate( {_id:req.params.id}, req.body)
						.then(golf =>{
											Golf.findById(req.params.id)
										            .then(newUser => {
										                res.send({
										                    new_golf: newUser,
										                    old_golf: golf
										                });
								  					})
						})
						.catch(err =>{
							res.status(500).send({
								message:err.message || "Some error occured when finding golf."
							})
						})				
					}
					else{
						Manager.findById(req.body.manager_id)
						.then(manager =>{
								if(manager.golf_id==null){
									Golf.findByIdAndUpdate( {_id:req.params.id}, req.body)
									.then(golf =>{
										Manager.findByIdAndUpdate( {_id:req.body.manager_id}, {golf_id:golf._id})
											.then(manager =>{
												Golf.findById(req.params.id)
										            .then(newUser => {
										                res.send({
										                    new_golf: newUser,
										                    old_golf: golf
										                });
								  					})
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
						.catch(err =>{
							res.status(500).send({
								message:err.message || "Some error occured when finding golf."
							})
						})
					}
				})
			.catch(err =>{
				res.status(500).send({
					message:err.message || "Some error occured when finding golf."
				})
			})
		}
	}else{
		Golf.findByIdAndUpdate( {_id:req.params.id}, req.body)
			.then(golf =>{
											Golf.findById(req.params.id)
										            .then(newUser => {
										                res.send({
										                    new_golf: newUser,
										                    old_golf: golf
										                });
								  					})
			})
			.catch(err =>{
				res.status(500).send({
					message:err.message || "Some error occured when finding golf."
				})
		})
	}
}


// SUPPRIMER UN GOLF
exports.findOneAndRemove = (req, res) => {
	Golf.findOneAndRemove({_id:req.params.id})
	.then(golf =>{
		if(golf.manager_id!=null){
			Manager.findByIdAndUpdate( {_id:golf.manager_id}, {golf_id:null})
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


