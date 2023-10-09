const catchError = require('../utils/catchError');
const Carrito = require('../models/Carrito');
const Llavero = require('../models/Llavero');
const ImgColor = require('../models/ImgColor');
const Categoria = require('../models/Categoria');
const Usuario = require('../models/Usuario');

const getAll = catchError(async(req, res) => {
    const results = await Carrito.findAll({
       include:[{model:Llavero,include:[ImgColor,Categoria]},
    {model:Usuario}
    ] 
       ,where:{usuarioId:req.usuario.id}});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    
    const {modelNameId,cantidad,color}=req.body
    const result = await Carrito.create({
        color,
        modelNameId,
        cantidad,
        usuarioId:req.usuario.id
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Carrito.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Carrito.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Carrito.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}