const express = require('express');
const router = express.Router();

const adminRouter = require('./admin.route');
router.use(adminRouter);
const managerRouter = require('./manager.route');
router.use(managerRouter);

module.exports = router;