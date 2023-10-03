const { getAll,create,remove} = require('../controllers/img.controllers');
const express = require('express');
const upload = require('../utils/multer');
const verifyJWT = require('../utils/verifyJWT');

const routerImg = express.Router();

routerImg.route('/')
    .get(getAll)
    .post(upload.single('image'), create)

    routerImg.route('/:id')
    .delete(verifyJWT,remove)

module.exports = routerImg;