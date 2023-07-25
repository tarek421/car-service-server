const express = require('express');
const { setAdminUser, GetAdmin } = require('../controller/admin.controller');
const adminRouter = express.Router();

adminRouter.get('/:email', GetAdmin);
adminRouter.put('/', setAdminUser);

module.exports = adminRouter;