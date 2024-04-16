const slugify = require('slugify')
const asyncHandler = require('express-async-handler')
const ApiError = require('../utils/apiError')
const CatigoryModel = require ('../Models/CategoryModel')

//get all data

exports.getCatigories = asyncHandler(  async (req,res)=>{
     const catigory = await CatigoryModel.find({});
    res.status(200).json({result:catigory.length,data:catigory})
    })

//get one item

exports.getCatigory = asyncHandler(  async (req,res,next)=>{

    const {id} = req.params

    const catigory = await CatigoryModel.findById(id);
    if(!catigory){
        return next(new ApiError('No Category for this id',404))
    }
    res.status(200).json({result:catigory.length,data:catigory})
    })

// update  data

exports.getCatigoryUpdate = asyncHandler(  async (req,res,next)=>{

    const {id} = req.params
    const {name} = req.body

    const catigory = await CatigoryModel.findOneAndUpdate(
        {_id:id},
        {name,slug:slugify(name)},
        {new:true}
    );
    if(!catigory){
        return next(new ApiError('No Category for this id to update',404))
    }
    res.status(200).json({msg : 'Updated Successfully'})
    })

//delete data

exports.getCatigoryDelete = asyncHandler(  async (req,res,next)=>{

    const {id} = req.params

    const catigory = await CatigoryModel.findByIdAndDelete(id);

    if(!catigory){
        return next(new ApiError('No Category for this id to delete',404))
    }
    res.status(200).json({msg : 'Deleted Successfully'})
})

// create data

exports.CreateCatig = asyncHandler( async (req,res)=>{
   const name = req.body.name;
   const catigory = await CatigoryModel.create({name,slug:slugify(name)})
     res.status(201).json({data:catigory})
})