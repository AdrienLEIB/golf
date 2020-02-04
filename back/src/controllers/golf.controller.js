const Golf = require('../models/golf.model');
const Manager = require('../models/manager.model');

// CREER UN GOLF
exports.create = (req,res) => {

    Manager.findById(req.body.manager_id)
    .then(manager =>{
        if(!manager){
            return res.status.send({
                message: "Manager not found with id".req.body.manager_id
            });
        }
        res.send(golf);
    })
    .catch(err=> {
        return res.status(500).send({
            message:err.message
        })
    })

	const golf = new Golf({
		title: req.body.title,
		latitude: req.body.latitude,
		longitude: req.body.longitude,
		description: req.body.description,
		manager_id: req.body.manager_id
	})
	golf.save().then(data=>{
		res.send(data);
	}).catch(err =>{
		res.status(500).send({
			message: err.message
		})
	})
}

// METTRE A JOUR UN GOLF
exports.findOneAndUpdate = (req,res) => {
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

// SUPPRIMER UN GOLF
exports.findOneAndRemove = (req, res) => {
	Golf.findOneAndRemove({_id:req.params.id})
	.then(golf =>{
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


