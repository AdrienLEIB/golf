const express = require('express');
const router = express.Router();
const auth = require('../controllers/admin.controller');

//Create a new user
router.post('/auth/register', auth.create);

router.post('/auth/login', auth.login);
router.post('/auth/login2', auth.login2);

module.exports = router;