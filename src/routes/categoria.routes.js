const { getAll, create, getOne, remove, update } = require('../controllers/categoria.controllers');
const express = require('express');

const routerCategoria = express.Router();

routerCategoria.route('/')
    .get(getAll)
    .post(create);

routerCategoria.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerCategoria;