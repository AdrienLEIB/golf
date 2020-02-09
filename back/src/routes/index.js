const express = require('express');
const router = express.Router();

const adminRouter = require('./admin.route');
router.use(adminRouter);
const managerRouter = require('./manager.route');
router.use(managerRouter);
const golfRouter = require('./golf.route');
router.use(golfRouter);

module.exports = router;