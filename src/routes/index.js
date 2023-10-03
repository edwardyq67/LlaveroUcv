const express = require('express');
const routerCategoria = require('./categoria.routes');
const routerLlavero = require('./llavero.routes');
const routerUsuario = require('./usuario.routes');
const routerImg = require('./img.routes');
const routerImgColor = require('./imgColor.routes');
const routerPurchase = require('./purchase.routes');
const routerCarrito = require('./carrito.routes');
const router = express.Router();

// colocar las rutas aquí
router.use('/llavero',routerLlavero)
router.use('/categoria',routerCategoria);
router.use('/usuario',routerUsuario)
router.use('/img',routerImg)
router.use('/imgColor',routerImgColor)
router.use('/compra',routerPurchase)
router.use('/carrito',routerCarrito)

module.exports = router;