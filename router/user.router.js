const express = require('express');
const router = express.Router();
const { GetAllUser, CreateUser, GetOneUser, DeleteUser, UpdateUser, setAdminUser } = require('../controller/user.controller');


router.get('/', GetAllUser);
router.get('/:id', GetOneUser);
router.post('/', CreateUser);
router.put('/', UpdateUser);
router.put('/admin', setAdminUser);
router.delete('/:id', DeleteUser);

module.exports = router;