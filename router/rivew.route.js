const express = require('express');
const { createRivew, findAllRivews, findOneRivew } = require('../controller/rivew.controller');
const rivewRouter = express.Router();

rivewRouter.get('/', findAllRivews);
rivewRouter.get('/:id', findOneRivew);
rivewRouter.post('/', createRivew);


module.exports = rivewRouter;