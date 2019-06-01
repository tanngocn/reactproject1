const mongoose = require('mongoose');
const express = require('express');
const {KindProduct} = require('./../models/KindProduct');
const {Material} =require('./../models/Material');
const {Product, validate} = require('./../models/Product');

//
    const router= express.Router();
//Get
    router.get('/',async(req,res)=>{
        const products=await Product.find({}).select(['priceProduct','qualityProduct','imgProduct','nameProduct', 'kindProduct', 'material']);
        res.send(products);
    })
// get new product
router.get('/new',async(req,res)=>{
    const products=await Product.find({}).sort("-dateCreate").limit(5).select(['priceProduct','qualityProduct','imgProduct','nameProduct', 'kindProduct','material']);
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
        let {file}=req.body
        if(req.files===null){
            return res.status(400).json({msg:'No file upload'});
        }
         file= req.files.file.name;   
        console.log(file.name);
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
            imgProduct:file
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
        //Xu ly file
        //    Nếu có file
        if(req.files !==null ){
            let {file}=req.body;
                req.body.imgProduct=req.files.file.name;
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
                    imgProduct:  req.body.imgProduct
                },{new:true});
                if(!product) return res.status(404).send('The product with ID not found');
                res.send(product);
        }
        // Nếu không có file
        else{
            let {imgProduct}=req.body;
            imgProduct=req.body.imgProduct ;
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
            imgProduct: imgProduct
        },{new:true});
        if(!product) return res.status(404).send('The product with ID not found');
        res.send(product);
    }
    })

// Delete
router.delete('/:_id',async(req, res)=>{
    const product= await Product.findByIdAndRemove(req.params._id);
    if(!product) return res.status(404).send('The product with ID not found');
    return res.send(product);
})
// find by id  xem chi tiet
    router.get('/:id', async(req, res)=>{
        const product=await Product.findById(req.params.id);
        if(!product) return res.status(400).send('Can\'t not found product ');
        res.send(product);
    })

//Cart 
router.get('/cart/:id', async(req, res)=>{
    const product=await Product.findById(req.params.id).select(['_id', 'nameProduct', 'qualityProduct','imgProduct', 'priceProduct']);
    if(!product) return res.status(400).send('Can\'t not found product ');
    res.send(product);
})
module.exports= router;