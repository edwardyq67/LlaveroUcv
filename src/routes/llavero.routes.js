const { getAll, create, getOne, remove, update,setImgColorLlavero } = require('../controllers/Llavero.controllers');
const express = require('express');

const routerLlavero = express.Router();

routerLlavero.route('/')
    .get(getAll)
    .post(create);

routerLlavero.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
routerLlavero.route('/:id/imgColor')
    .post(setImgColorLlavero)

module.exports = routerLlavero;