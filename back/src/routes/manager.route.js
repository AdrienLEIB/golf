const express = require('express');
const router = express.Router();
const manager = require('../controllers/manager.controller');
const verifyToken = require('../helpers/verifyToken');

router.post('/manager', manager.create);
router.delete("/manager/:id", verifyToken, manager.findOneAndRemove);
router.post("/manager/:id", verifyToken, manager.findOneAndUpdate);
router.get("/manager/:id", verifyToken, manager.findById);

module.exports = router;