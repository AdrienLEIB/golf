const express = require('express');
const router = express.Router();
const golf = require('../controllers/golf.controller');
const verifyToken = require('../helpers/verifyToken');

router.post('/golf', golf.create);
router.post("/golf/:id", verifyToken, golf.UpdateOne);
router.delete("/golf/:id", verifyToken, golf.DeleteOne);
router.get("/golf/:id", verifyToken, golf.findById);

module.exports = router;