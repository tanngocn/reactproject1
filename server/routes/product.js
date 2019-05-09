const mongoose = require('mongoose');
const express = require('express');
const {KindProduct} = require('./../models/KindProduct');
const {Material} =require('./../models/Material');
const {Product, validate} = require('./../models/Product');

//
    const router= express.Router();
//Get
    router.get('/',async(req,res)=>{
        const products=await Product.find({}).sort('dateCreate').select(['priceProduct','qualityProduct','imgProduct','nameProduct']);
        res.send(products);
    })
//Post
    router.post('/',async (req, res)=>{
        //Check loi
        const {error} = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        //Check kindProduct
        const kindProduct= await KindProduct.findById(req.body.kindProductId);
        if(!kindProduct) return res.status(400).send('KindProduct is not exist');
        // check material
        const material =await Material.findById(req.body.materialId);
        if(!material) return res.status(400).send('Material of Product is not exist');
        // Upload
        let {imgProduct}=req.body
        if(req.files===null){
            return res.status(400).json({msg:'No file upload'});
        }
        imgProduct= req.files.imgProduct;   
        console.log(imgProduct.name);
        let product= new Product({
            nameProduct:req.body.nameProduct,
            priceProduct:req.body.priceProduct,
            qualityProduct:req.body.qualityProduct,
            description:req.body.description,
            kindProduct:{
                _id:kindProduct._id,
                name:kindProduct.name
            },
            material:{
                _id:material._id,
                name:material.name
            },
            imgProduct:imgProduct.name
        })
        await product.save();
        res.send(product);

    })

// Put
    router.put('/:id',async (req, res)=>{
        const {error}= validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const kindProduct= await KindProduct.findById(req.body.kindProductId);
        if(!kindProduct) return res.status(400).send('KindProduct is not exist');
        // check material
        const material =await Material.findById(req.body.materialId);
        if(!material) return res.status(400).send('Material of Product is not exist');

        const product= await Product.findByIdAndUpdate(req.params.id,{
            nameProduct:req.body.nameProduct,
            priceProduct:req.body.priceProduct,
            qualityProduct:req.body.qualityProduct,
            description:req.body.description,
            kindProduct:{
                _id:kindProduct._id,
                name:kindProduct.name
            },
            material:{
                _id:material._id,
                name:material.name
            },
            imgProduct:req.body.imgProduct
        },{new:true});
        if(!product) return res.status(404).send('The product with ID not found');
        res.send(product);

    })

// Delete
router.delete('/:id',async(req, res)=>{
    const product= await Product.findByIdAndRemove(req.params.id);
    if(!product) return res.status(404).send('The product with ID not found');
    return res.send(product);
})
// find by id  xem chi tiet
    router.get('/:id',async(req, res)=>{
        const product=await Product.findById(req.params.id);
        if(!product) return res.status(400).send('Can\'t not found product ');
        res.send(product);
    })


module.exports= router;