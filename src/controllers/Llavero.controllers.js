const catchError = require('../utils/catchError');
const Llavero = require('../models/Llavero');
const ImgColor = require('../models/ImgColor');
const Categoria = require('../models/Categoria');

const getAll = catchError(async(req, res) => {
    const results = await Llavero.findAll({include:[ImgColor,Categoria]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Llavero.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Llavero.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Llavero.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Llavero.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const  setImgColorLlavero=catchError(async(req,res)=>{
    const {id}=req.params
    const llavero=await Llavero.findByPk(id)
    if(!llavero)return res.json({message:"no existe"}).status(404)
    await llavero.setImgColors(req.body)
    const imgColor=await llavero.getImgColors()
    return res.json(imgColor)
})
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setImgColorLlavero
}