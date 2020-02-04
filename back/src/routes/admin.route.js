const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin.controller');

//Create a new user
router.post('/admin/register', admin.create);

//router.post('/auth/login', auth.login);
router.post('/admin/login', admin.login2);

module.exports = router;