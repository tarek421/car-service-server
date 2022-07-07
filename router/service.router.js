const express = require('express');
const { findAllServices, uploadService, findOneService, updateService, deleteService } = require('../controller/service.controller');
const serviceRouter = express.Router();

serviceRouter.get('/', findAllServices);
serviceRouter.get('/:id', findOneService);
serviceRouter.post('/', uploadService);
serviceRouter.patch('/:id', updateService);
serviceRouter.delete('/:id', deleteService);


module.exports = serviceRouter;