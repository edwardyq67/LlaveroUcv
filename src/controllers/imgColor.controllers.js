const catchError = require('../utils/catchError');
const ImgColor = require('../models/ImgColor');
const {Op}=require('sequelize')
const getAll = catchError(async(req, res) => {
    const{url,color}=req.query
    const where={}
    if(color)where.color={[Op.iLike]:`%${color}%`}
    const results = await ImgColor.findAll(
        {where}
    );
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await ImgColor.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ImgColor.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await ImgColor.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ImgColor.update(
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