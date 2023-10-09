const catchError = require('../utils/catchError');
const Purchase = require('../models/Purchase');
const Carrito = require('../models/Carrito');
const Llavero = require('../models/Llavero');
const Usuario = require('../models/Usuario');
const ImgColor = require('../models/ImgColor');
const Categoria = require('../models/Categoria');

const getAll = catchError(async(req, res) => {
    const results = await Purchase.findAll({
        where:{usuarioId:req.usuario.id},
        include: [
            {
                model: Llavero,
                include:[ImgColor]   
            },
            {
                model: Usuario
            }
        ]
    });
    return res.json(results);
});
const create=catchError(async(req,res)=>{
    const produt=await Carrito.findAll({
        where:{usuarioId:req.usuario.id},
        raw:true
    })
   
    const compra=await Purchase.bulkCreate(produt)
    await Carrito.destroy({where:{usuarioId:req.usuario.id}})
    return res.status(201).json(compra)
})

module.exports = {
    getAll,
    create
}