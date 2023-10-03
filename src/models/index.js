const Carrito = require("./Carrito");
const Categoria = require("./Categoria");
const ImgColor = require("./ImgColor");
const Llavero = require("./Llavero");
const Purchase = require("./Purchase");
const Usuario = require("./Usuario");

ImgColor.belongsToMany(Llavero,{through:'imgColorLlavero'})
Llavero.belongsToMany(ImgColor,{through:'imgColorLlavero'})

Categoria.hasMany(Llavero)
Llavero.belongsTo(Categoria);

//carrito
Carrito.belongsTo(Usuario)
Usuario.hasMany(Carrito)

Carrito.belongsTo(Llavero)
Llavero.hasMany(Carrito)
//compra
Purchase.belongsTo(Llavero)
Llavero.hasMany(Purchase)

Purchase.belongsTo(Usuario)
Usuario.hasMany(Purchase)