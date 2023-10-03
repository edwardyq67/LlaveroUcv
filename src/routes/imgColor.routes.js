const { getAll, create, getOne, remove, update } = require('../controllers/imgColor.controllers');
const express = require('express');

const routerImgColor = express.Router();

routerImgColor.route('/')
    .get(getAll)
    .post(create);

routerImgColor.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerImgColor;