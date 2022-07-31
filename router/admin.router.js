const express = require('express');
const { setAdminUser } = require('../controller/admin.controller');
const adminRouter = express.Router();


adminRouter.get('/', GetAllAdmin);
adminRouter.get('/:id', GetSingleAdmin);
adminRouter.put('/admin', setAdminUser);

module.exports = adminRouter;