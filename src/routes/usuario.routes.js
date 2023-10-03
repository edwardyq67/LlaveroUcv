const { getAll, create, getOne, remove, update,login } = require('../controllers/usuario.controllers');
const express = require('express');
const verifyJWT=require('../utils/verifyJWT')
const routerUsuario = express.Router();

routerUsuario.route('/')
    .get(verifyJWT,getAll)
    .post(create);
routerUsuario.route('/login')
    .post(login)
routerUsuario.route('/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = routerUsuario;